import { EventEmitter } from '@stencil/core';
import { Option, SelectChangeEventDetail } from './select-interface';
export declare class Select {
    private nativeInput?;
    isOpen?: boolean;
    options?: Array<Option>;
    /**
     * the value of the select.
     */
    value?: any | null;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter<SelectChangeEventDetail>;
    /**
     * Emitted when the selection is cancelled.
     */
    bdsCancel: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    bdsFocus: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    bdsBlur: EventEmitter<void>;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    valueChanged(): void;
    private refNativeInput;
    private onFocus;
    private onBlur;
    private toggle;
    private getText;
    private handler;
    private getSelectOptions;
    private setFocusWrapper;
    private removeFocusWrapper;
    private keyPressWrapper;
    render(): HTMLElement;
}
