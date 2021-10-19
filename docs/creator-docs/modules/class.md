[@ts-morpher/creator](../README.md) / class

# Module: class

## Table of contents

### Functions

- [createBaseClass](class.md#createbaseclass)
- [createBaseClassDecorator](class.md#createbaseclassdecorator)
- [createBaseClassMethod](class.md#createbaseclassmethod)
- [createBaseClassProp](class.md#createbaseclassprop)

## Functions

### createBaseClass

▸ **createBaseClass**(`source`, `baseClassStruct`, `apply?`): `void`

Create base class structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `baseClassStruct` | `IBaseClassStructure` | `undefined` | {@link IBaseClassStructure} |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:24](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/creator/src/class.ts#L24)

___

### createBaseClassDecorator

▸ **createBaseClassDecorator**(`source`, `className`, `baseDecoratorStruct`, `apply?`): `void`

Create decorator declaration target class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `className` | `string` | `undefined` |  |
| `baseDecoratorStruct` | `IBaseDecoratorStruct` | `undefined` | {@link IBaseDecoratorStruct} |
| `apply` | `boolean` | `true` |  |

#### Returns

`void`

#### Defined in

[class.ts:109](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/creator/src/class.ts#L109)

___

### createBaseClassMethod

▸ **createBaseClassMethod**(`source`, `className`, `baseMethodStruct`, `apply?`): `void`

Create method declaration for target class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `className` | `string` | `undefined` |  |
| `baseMethodStruct` | `IBaseMethodStruct` | `undefined` | {@link IBaseMethodStruct} |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:51](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/creator/src/class.ts#L51)

___

### createBaseClassProp

▸ **createBaseClassProp**(`source`, `className`, `basePropStruct`, `apply?`): `void`

Create prop declaration for target class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `className` | `string` | `undefined` |  |
| `basePropStruct` | `IBasePropStruct` | `undefined` | {@link IBasePropStruct} |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[class.ts:80](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/creator/src/class.ts#L80)
