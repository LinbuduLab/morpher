[@ts-morpher/helper](../README.md) / export

# Module: export

## Table of contents

### Functions

- [getExportVariableIdentifiers](export.md#getexportvariableidentifiers)
- [getExportVariableStatements](export.md#getexportvariablestatements)
- [getInterfaceExportDeclaration](export.md#getinterfaceexportdeclaration)
- [getInterfaceExportIdentifiers](export.md#getinterfaceexportidentifiers)
- [getTypeExportDeclaration](export.md#gettypeexportdeclaration)
- [getTypeExportIdentifiers](export.md#gettypeexportidentifiers)

## Functions

### getExportVariableIdentifiers

▸ **getExportVariableIdentifiers**(`source`): `string`[]

Return all export var statementss identifiers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`string`[]

#### Defined in

[export.ts:18](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L18)

___

### getExportVariableStatements

▸ **getExportVariableStatements**(`source`): `VariableStatement`[]

Return all export statements, specify `varIdentifier` to return only matched

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`VariableStatement`[]

#### Defined in

[export.ts:30](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L30)

▸ **getExportVariableStatements**(`source`, `varIdentifier`): `VariableStatement`

Return all export statements, specify `varIdentifier` to return only matched

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `varIdentifier` | `string` |

#### Returns

`VariableStatement`

#### Defined in

[export.ts:40](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L40)

▸ **getExportVariableStatements**(`source`, `varIdentifier`): `VariableStatement`[]

Return all export statements, specify `varIdentifier` to return only matched

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `varIdentifier` | `string`[] |

#### Returns

`VariableStatement`[]

#### Defined in

[export.ts:51](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L51)

___

### getInterfaceExportDeclaration

▸ **getInterfaceExportDeclaration**(`source`): `InterfaceDeclaration`[]

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`InterfaceDeclaration`[]

#### Defined in

[export.ts:151](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L151)

▸ **getInterfaceExportDeclaration**(`source`, `identifier`): `InterfaceDeclaration`

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `identifier` | `string` | 'Foo' in export interface Foo {}; |

#### Returns

`InterfaceDeclaration`

#### Defined in

[export.ts:160](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L160)

▸ **getInterfaceExportDeclaration**(`source`, `identifiers`): `InterfaceDeclaration`[]

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `identifiers` | `string`[] |

#### Returns

`InterfaceDeclaration`[]

#### Defined in

[export.ts:170](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L170)

___

### getInterfaceExportIdentifiers

▸ **getInterfaceExportIdentifiers**(`source`): `string`[]

Return all identifier of interface exported

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`string`[]

#### Defined in

[export.ts:206](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L206)

___

### getTypeExportDeclaration

▸ **getTypeExportDeclaration**(`source`): `TypeAliasDeclaration`[]

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`TypeAliasDeclaration`[]

#### Defined in

[export.ts:86](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L86)

▸ **getTypeExportDeclaration**(`source`, `identifier`): `TypeAliasDeclaration`

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `identifier` | `string` | 'Foo' in export type Foo = string; |

#### Returns

`TypeAliasDeclaration`

#### Defined in

[export.ts:95](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L95)

▸ **getTypeExportDeclaration**(`source`, `identifiers`): `TypeAliasDeclaration`[]

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `identifiers` | `string`[] |

#### Returns

`TypeAliasDeclaration`[]

#### Defined in

[export.ts:105](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L105)

___

### getTypeExportIdentifiers

▸ **getTypeExportIdentifiers**(`source`): `string`[]

Return all identifier of type alias exported

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`string`[]

#### Defined in

[export.ts:141](https://github.com/linbudu599/morpher/blob/4a52d4d/packages/helper/src/export.ts#L141)
