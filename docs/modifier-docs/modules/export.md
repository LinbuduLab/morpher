[@ts-morpher/modifier](../README.md) / export

# Module: export

## Table of contents

### Interfaces

- [IBaseDeclarationStructure](../interfaces/export.IBaseDeclarationStructure.md)
- [IBaseInterfaceStructure](../interfaces/export.IBaseInterfaceStructure.md)
- [IBaseTypeAliasStructure](../interfaces/export.IBaseTypeAliasStructure.md)
- [IBaseVariableExportStructure](../interfaces/export.IBaseVariableExportStructure.md)

### Functions

- [updateInterfaceExportStructure](export.md#updateinterfaceexportstructure)
- [updateTypeExportStructure](export.md#updatetypeexportstructure)
- [updateVariableExportIdentifier](export.md#updatevariableexportidentifier)
- [updateVariableExportKind](export.md#updatevariableexportkind)
- [updateVariableExportStructure](export.md#updatevariableexportstructure)

## Functions

### updateInterfaceExportStructure

▸ **updateInterfaceExportStructure**(`source`, `identifier`, `structure`, `apply?`): `void`

update base structure of interface export.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | interface identifier |
| `structure` | [`IBaseInterfaceStructure`](../interfaces/export.IBaseInterfaceStructure.md) | `undefined` | [](../interfaces/export.IBaseInterfaceStructure.md) updated structure |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

void

#### Defined in

[modifier/src/export.ts:161](https://github.com/linbudu599/morpher/blob/fad7f99/packages/modifier/src/export.ts#L161)

___

### updateTypeExportStructure

▸ **updateTypeExportStructure**(`source`, `identifier`, `structure`, `apply?`): `void`

update base structure of type alias export.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | type alias identifier |
| `structure` | [`IBaseTypeAliasStructure`](../interfaces/export.IBaseTypeAliasStructure.md) | `undefined` | [IBaseTypeAliasStructure](../interfaces/export.IBaseTypeAliasStructure.md) updated structure |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/export.ts:129](https://github.com/linbudu599/morpher/blob/fad7f99/packages/modifier/src/export.ts#L129)

___

### updateVariableExportIdentifier

▸ **updateVariableExportIdentifier**(`source`, `identifier`, `updatedIdentifier`, `apply?`): `void`

update variable export identifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | previous identifier |
| `updatedIdentifier` | `string` | `undefined` | updated identifier |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/export.ts:20](https://github.com/linbudu599/morpher/blob/fad7f99/packages/modifier/src/export.ts#L20)

___

### updateVariableExportKind

▸ **updateVariableExportKind**(`source`, `identifier`, `declarationKind`, `apply?`): `void`

update variable export declaration kind.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | previous identifier |
| `declarationKind` | `VariableDeclarationKind` | `undefined` | updated declaration kind |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/export.ts:48](https://github.com/linbudu599/morpher/blob/fad7f99/packages/modifier/src/export.ts#L48)

___

### updateVariableExportStructure

▸ **updateVariableExportStructure**(`source`, `identifier`, `structure`, `apply?`): `void`

update base structure of variable export.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | variable identifier |
| `structure` | [`IBaseVariableExportStructure`](../interfaces/export.IBaseVariableExportStructure.md) | `undefined` | [IBaseVariableExportStructure](../interfaces/export.IBaseVariableExportStructure.md) updated structure |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

void

#### Defined in

[modifier/src/export.ts:97](https://github.com/linbudu599/morpher/blob/fad7f99/packages/modifier/src/export.ts#L97)
