import { EventEmitter } from "@stencil/core";
export declare class SelectOption {
    value: any;
    label: any;
    /**
     * The text value of the option.
    */
    selected?: boolean;
    /**
     * If `true`, the user cannot interact with the select option.
     */
    disabled?: boolean;
    /**
     *  Quantity Description on option value, this item is locate to rigth in component.
     */
    bulkOption?: string;
    optionSelected: EventEmitter;
    private onClickSelectOption;
    private attachOptionKeyboardListeners;
    render(): HTMLElement;
}
