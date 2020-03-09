import { InputAutocapitalize, InputAutoComplete } from '../input/input-interface';
export declare class InputPassword {
    openEyes?: boolean;
    /**
     * The value of the input.
     */
    value?: string | null;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     * Input Name
     */
    inputName?: string;
    /**
     * The maximum value, which must not be less than its minimum (min attribute) value.
     */
    max?: string;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength?: number;
    /**
     * The minimum value, which must not be greater than its maximum (max attribute) value.
     */
    min?: string;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength?: number;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly: boolean;
    /**
     * Indicated to pass a help the user in complex filling.
     */
    helperMessage?: string;
    /**
     * Indicated to pass an feeback to user.
     */
    errorMessage?: string;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     * Capitalizes every word's second character.
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Hint for form autofill feature
     */
    autoComplete?: InputAutoComplete;
    private toggleEyePassword;
    private getAutoComplete;
    render(): HTMLElement;
}
