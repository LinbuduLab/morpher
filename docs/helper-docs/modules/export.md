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

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[export.ts:18](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L18)

___

### getExportVariableStatements

▸ **getExportVariableStatements**(`source`): `VariableStatement`[]

Return all export statements, specify `varIdentifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`VariableStatement`[]

VariableStatement {@link VariableStatement}

#### Defined in

[export.ts:29](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L29)

▸ **getExportVariableStatements**(`source`, `varIdentifier`): `VariableStatement` \| `undefined`

Return all export statements, specify `varIdentifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `varIdentifier` | `string` |  |

#### Returns

`VariableStatement` \| `undefined`

VariableStatement {@link VariableStatement}

#### Defined in

[export.ts:39](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L39)

▸ **getExportVariableStatements**(`source`, `varIdentifier`): `VariableStatement`[]

Return all export statements, specify `varIdentifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `varIdentifier` | `string`[] |  |

#### Returns

`VariableStatement`[]

VariableStatement {@link VariableStatement}

#### Defined in

[export.ts:50](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L50)

___

### getInterfaceExportDeclaration

▸ **getInterfaceExportDeclaration**(`source`): `InterfaceDeclaration`[]

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`InterfaceDeclaration`[]

#### Defined in

[export.ts:154](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L154)

▸ **getInterfaceExportDeclaration**(`source`, `identifier`): `InterfaceDeclaration`

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | 'Foo' in `export interface Foo {};` |

#### Returns

`InterfaceDeclaration`

#### Defined in

[export.ts:163](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L163)

▸ **getInterfaceExportDeclaration**(`source`, `identifiers`): `InterfaceDeclaration`[]

Get exported InterfaceDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifiers` | `string`[] | - |

#### Returns

`InterfaceDeclaration`[]

#### Defined in

[export.ts:173](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L173)

___

### getInterfaceExportIdentifiers

▸ **getInterfaceExportIdentifiers**(`source`): `string`[]

Return all identifier of interface exported.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[export.ts:209](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L209)

___

### getTypeExportDeclaration

▸ **getTypeExportDeclaration**(`source`): `TypeAliasDeclaration`[]

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`TypeAliasDeclaration`[]

TypeAliasDeclaration {@link TypeAliasDeclaration}

#### Defined in

[export.ts:86](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L86)

▸ **getTypeExportDeclaration**(`source`, `identifier`): `TypeAliasDeclaration`

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | 'Foo' in export type Foo = string; |

#### Returns

`TypeAliasDeclaration`

TypeAliasDeclaration {@link TypeAliasDeclaration}

#### Defined in

[export.ts:96](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L96)

▸ **getTypeExportDeclaration**(`source`, `identifiers`): `TypeAliasDeclaration`[]

Get exported TypeAliasDeclaration, specify identifier to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifiers` | `string`[] | - |

#### Returns

`TypeAliasDeclaration`[]

TypeAliasDeclaration {@link TypeAliasDeclaration}

#### Defined in

[export.ts:107](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L107)

___

### getTypeExportIdentifiers

▸ **getTypeExportIdentifiers**(`source`): `string`[]

Return all identifier of type alias exported.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[export.ts:144](https://github.com/linbudu599/morpher/blob/43a898f/packages/helper/src/export.ts#L144)
