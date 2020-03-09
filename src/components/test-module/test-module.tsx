/* eslint-disable @typescript-eslint/no-var-requires */
import { Component, h } from '@stencil/core';
import IconService from '../../services/icon-service';

@Component({
  tag: 'bds-test-module',
  styleUrl: 'test-module.scss',
})
export class TestModule {

  connectedCallback(): void {
    console.log(IconService);
  }

  render(): HTMLElement {
    return (
      <h1> Test</h1 >
    )
  }
}