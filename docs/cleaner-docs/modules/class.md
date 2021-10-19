[@ts-morpher/cleaner](../README.md) / class

# Module: class

## Table of contents

### Functions

- [removeClass](class.md#removeclass)
- [removeClassDecorator](class.md#removeclassdecorator)
- [removeClassMethod](class.md#removeclassmethod)
- [removeClassProp](class.md#removeclassprop)

## Functions

### removeClass

▸ **removeClass**(`source`, `classIdentifier`, `apply?`): `void`

remove class declaration

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[class.ts:23](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/cleaner/src/class.ts#L23)

___

### removeClassDecorator

▸ **removeClassDecorator**(`source`, `classIdentifier`, `decoratorIdentifier`, `apply?`): `void`

Remove class decorator declarations

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `decoratorIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[class.ts:101](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/cleaner/src/class.ts#L101)

___

### removeClassMethod

▸ **removeClassMethod**(`source`, `classIdentifier`, `methodIdentifier`, `apply?`): `void`

remove class method declaration

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `methodIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[class.ts:45](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/cleaner/src/class.ts#L45)

___

### removeClassProp

▸ **removeClassProp**(`source`, `classIdentifier`, `propIdentifier`, `apply?`): `void`

Remove class property declaration

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `propIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[class.ts:75](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/cleaner/src/class.ts#L75)
