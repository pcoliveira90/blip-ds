import { newSpecPage } from '@stencil/core/testing';
import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips icon="" value="">
        <bds-input chips="" error-message="" icon="" label="" value="">
          <span slot="inside-input-left"></span>
          <div slot="input-right"></div>
        </bds-input>
      </bds-input-chips>
    `);
  });

  it('renders with chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips chips='[\"chip1\", \"chip2\"]' icon="" value="">
        <bds-input chips="" error-message="" icon="" label="" value="">
          <span slot="inside-input-left">
            <bds-chip class="input-chips__chip" deletable="" id="0" variant="primary">
              chip1
            </bds-chip>
            <bds-chip class="input-chips__chip" deletable="" id="1" variant="primary">
              chip2
            </bds-chip>
          </span>
          <div slot="input-right"></div>
        </bds-input>
      </bds-input-chips>
    `);
  });

  it('empty get', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips></bds-input-chips>`,
    });
    const input = page.doc.querySelector('bds-input-chips');
    expect(await input.get()).toStrictEqual([]);
  });

  it('get', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
    });
    const input = page.doc.querySelector('bds-input-chips');
    expect(await input.get()).toStrictEqual(['chip1', 'chip2']);
  });

  it('clear', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
    });
    const input = page.doc.querySelector('bds-input-chips');
    await input.clear();
    expect(await input.get()).toStrictEqual([]);
  });

  it('add', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
    });
    const input = page.doc.querySelector('bds-input-chips');
    await input.add('chip3');
    const chips = await input.get();
    expect(chips).toStrictEqual(['chip1', 'chip2', 'chip3']);
  });
});
