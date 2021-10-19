[@ts-morpher/modifier](../README.md) / class

# Module: class

## Table of contents

### Functions

- [updateBaseClassDecoratorStructure](class.md#updatebaseclassdecoratorstructure)
- [updateBaseClassMethodStructure](class.md#updatebaseclassmethodstructure)
- [updateBaseClassPropStructure](class.md#updatebaseclasspropstructure)
- [updateBaseClassStructure](class.md#updatebaseclassstructure)
- [updateClassDecoratorIdentifier](class.md#updateclassdecoratoridentifier)
- [updateClassIdentifier](class.md#updateclassidentifier)

## Functions

### updateBaseClassDecoratorStructure

▸ **updateBaseClassDecoratorStructure**(`source`, `classIdentifier`, `decoratorIdentifier`, `baseDecoratorStruct`, `apply?`): `void`

Update base class decorator declaration structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `classIdentifier` | `string` | `undefined` |  |
| `decoratorIdentifier` | `string` | `undefined` |  |
| `baseDecoratorStruct` | `IBaseDecoratorStruct` | `undefined` | {@link IBaseDecoratorStruct} |
| `apply` | `boolean` | `true` |  |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:174](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L174)

___

### updateBaseClassMethodStructure

▸ **updateBaseClassMethodStructure**(`source`, `classIdentifier`, `methodIdentifier`, `baseMethodStruct`, `apply?`): `void`

Update base class method declaration structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `classIdentifier` | `string` | `undefined` |  |
| `methodIdentifier` | `string` | `undefined` |  |
| `baseMethodStruct` | `IBaseMethodStruct` | `undefined` | {@link IBaseMethodStruct} |
| `apply` | `boolean` | `true` |  |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:108](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L108)

___

### updateBaseClassPropStructure

▸ **updateBaseClassPropStructure**(`source`, `classIdentifier`, `propIdentifier`, `basePropStruct`, `apply?`): `void`

Update base class prop declaration structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `classIdentifier` | `string` | `undefined` |  |
| `propIdentifier` | `string` | `undefined` |  |
| `basePropStruct` | `IBasePropStruct` | `undefined` | {@link IBasePropStruct} |
| `apply` | `boolean` | `true` |  |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:141](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L141)

___

### updateBaseClassStructure

▸ **updateBaseClassStructure**(`source`, `classIdentifier`, `baseClassStruct`, `apply?`): `void`

Update base class structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `classIdentifier` | `string` | `undefined` |  |
| `baseClassStruct` | `IBaseClassStructure` | `undefined` | {@link IBaseClassStructure} |
| `apply` | `boolean` | `true` |  |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:84](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L84)

___

### updateClassDecoratorIdentifier

▸ **updateClassDecoratorIdentifier**(`source`, `classIdentifier`, `decoratorIdentifier`, `updatedIdentifier`, `apply?`): `void`

Update class decorator identifier

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `decoratorIdentifier` | `string` | `undefined` |
| `updatedIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:50](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L50)

___

### updateClassIdentifier

▸ **updateClassIdentifier**(`source`, `classIdentifier`, `updatedIdentifier`, `apply?`): `void`

Update class identifier

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |
| `classIdentifier` | `string` | `undefined` |
| `updatedIdentifier` | `string` | `undefined` |
| `apply` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[modifier/src/class.ts:24](https://github.com/linbudu599/morpher/blob/0f9496e/packages/modifier/src/class.ts#L24)
