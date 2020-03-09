import { EventEmitter } from "@stencil/core";
export declare class Radio {
    private nativeInput?;
    radioId?: string;
    refer: string;
    label: string;
    value: string;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * If `true`, the checkbox is selected.
     */
    checked: boolean;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    disabled: boolean;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter;
    /**
     * Emitted when the input has changed.
     */
    bdsInput: EventEmitter<KeyboardEvent>;
    protected checkedChanged(isChecked: boolean): void;
    getInputElement(): Promise<HTMLInputElement>;
    getValue(): Promise<boolean>;
    private onClick;
    private refNativeInput;
    connectedCallback(): void;
    render(): HTMLElement;
}
