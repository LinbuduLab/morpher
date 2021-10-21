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

Remove class declaration by identifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `classIdentifier` | `string` | `undefined` |  |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:23](https://github.com/linbudu599/morpher/blob/6e7db56/packages/cleaner/src/class.ts#L23)

___

### removeClassDecorator

▸ **removeClassDecorator**(`source`, `classIdentifier`, `decoratorIdentifier`, `apply?`): `void`

Remove class decorator declaration by identifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `classIdentifier` | `string` | `undefined` |  |
| `decoratorIdentifier` | `string` | `undefined` |  |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:101](https://github.com/linbudu599/morpher/blob/6e7db56/packages/cleaner/src/class.ts#L101)

___

### removeClassMethod

▸ **removeClassMethod**(`source`, `classIdentifier`, `methodIdentifier`, `apply?`): `void`

Remove class method declaration by identifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `classIdentifier` | `string` | `undefined` |  |
| `methodIdentifier` | `string` | `undefined` |  |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:45](https://github.com/linbudu599/morpher/blob/6e7db56/packages/cleaner/src/class.ts#L45)

___

### removeClassProp

▸ **removeClassProp**(`source`, `classIdentifier`, `propIdentifier`, `apply?`): `void`

Remove class property declaration by identifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `classIdentifier` | `string` | `undefined` |  |
| `propIdentifier` | `string` | `undefined` |  |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:75](https://github.com/linbudu599/morpher/blob/6e7db56/packages/cleaner/src/class.ts#L75)
