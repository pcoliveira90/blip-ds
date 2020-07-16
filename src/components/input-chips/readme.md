# bds-input-chips



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                       | Type                | Default  |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| `chips`        | --              |                                                                                                                   | `string[]`          | `[]`     |
| `danger`       | `danger`        | Add state danger on input, use for use feedback.                                                                  | `boolean`           | `false`  |
| `delimiter`    | `delimiter`     | The delimiter is used to add multiple chips in the same string.                                                   | `string`            | `','`    |
| `errorMessage` | `error-message` | Indicated to pass an feeback to user.                                                                             | `string`            | `''`     |
| `label`        | `label`         | label in input, with he the input size increases.                                                                 | `string`            | `''`     |
| `type`         | `type`          | Defining the type is important so that it is possible to carry out validations. Can be one of: 'text' and 'email; | `"email" \| "text"` | `'text'` |
| `value`        | `value`         | The value of the input.                                                                                           | `string`            | `''`     |


## Events

| Event       | Description                      | Type               |
| ----------- | -------------------------------- | ------------------ |
| `bdsBlur`   | Emitted when the chip has added. | `CustomEvent<any>` |
| `bdsChange` | Emitted when the chip has added. | `CustomEvent<any>` |


## Methods

### `clear() => Promise<void>`

Clear all chips

#### Returns

Type: `Promise<void>`



### `get() => Promise<string[]>`

Return the chips

#### Returns

Type: `Promise<string[]>`



### `isValid() => Promise<boolean>`

Return the validity of the input chips.

#### Returns

Type: `Promise<boolean>`




## Dependencies

### Depends on

- [bds-chip](../chip)
- [bds-input](../input)

### Graph
```mermaid
graph TD;
  bds-input-chips --> bds-chip
  bds-input-chips --> bds-input
  bds-chip --> bds-icon
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  style bds-input-chips fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*