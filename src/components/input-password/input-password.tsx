import { Component, Prop, h, Host, Event, EventEmitter, Watch } from '@stencil/core';
import { InputAutocapitalize, InputAutoComplete } from '../input/input-interface';

@Component({
  tag: 'bds-input-password',
  styleUrl: 'input-password.scss',
  shadow: true,
})
export class InputPassword {
  @Prop() openEyes? = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label?: string = '';

  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Disabled input.
   */
  @Prop() disabled? = false;

  /**
   * Capitalizes every word's second character.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Hint for form autofill feature
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  @Watch('value')
  protected valueChanged(): void {
    this.bdsChange.emit({ value: this.value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Event input onblur.
   */
  @Event() bdsOnBlur: EventEmitter;

  /**
   * Event input focus.
   */
  @Event() bdsFocus: EventEmitter;

  /**
   * Event input enter.
   */
  @Event() bdsSubmit: EventEmitter;

  /**
   * Event input key down backspace.
   */
  @Event() bdsKeyDownBackspace: EventEmitter;

  private handleChange(event: CustomEvent): void {
    this.bdsChange.emit(event.detail);
  }

  private handleInput(event: CustomEvent<KeyboardEvent>): void {
    this.bdsInput.emit(event.detail);
  }

  private handleOnBlur(event: CustomEvent): void {
    this.bdsOnBlur.emit(event.detail);
  }

  private handleFocus(event: CustomEvent): void {
    this.bdsFocus.emit(event.detail);
  }

  private handleSubmit(event: CustomEvent): void {
    this.bdsSubmit.emit(event.detail);
  }

  private handleKeyDownBackspace(event: CustomEvent): void {
    this.bdsKeyDownBackspace.emit(event.detail);
  }

  private toggleEyePassword = (): void => {
    if (!this.disabled) {
      this.openEyes = !this.openEyes;
    }
  };

  private getAutoComplete(): string {
    if (!this.openEyes) return 'current-password';
    return this.autoComplete;
  }

  render(): HTMLElement {
    const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
    const type = this.openEyes ? 'text' : 'password';
    const autocomplete = this.getAutoComplete();

    return (
      <Host>
        <bds-input
          type={type}
          input-name={this.inputName}
          value={this.value}
          label={this.label}
          min={this.min}
          max={this.max}
          minlength={this.minlength}
          maxlength={this.maxlength}
          helper-message={this.helperMessage}
          error-message={this.errorMessage}
          danger={this.danger}
          icon={this.icon}
          disabled={this.disabled}
          readonly={this.readonly}
          auto-complete={autocomplete}
          auto-capitalize={this.autoCapitalize}
          placeholder={this.placeholder}
          onBdsChange={(event) => this.handleChange(event)}
          onBdsInput={(event) => this.handleInput(event)}
          onBdsOnBlur={(event) => this.handleOnBlur(event)}
          onBdsFocus={(event) => this.handleFocus(event)}
          onBdsSubmit={(event) => this.handleSubmit(event)}
          onBdsKeyDownBackspace={(event) => this.handleKeyDownBackspace(event)}
        >
          <div slot="input-right" class="input__password--icon" onClick={this.toggleEyePassword}>
            <bds-icon size="small" name={iconPassword} color="inherit"></bds-icon>
          </div>
        </bds-input>
      </Host>
    );
  }
}
