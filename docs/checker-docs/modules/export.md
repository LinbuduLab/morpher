[@ts-morpher/checker](../README.md) / export

# Module: export

## Table of contents

### Functions

- [checkExportDeclarationKindByIdentifier](export.md#checkexportdeclarationkindbyidentifier)
- [checkExportDeclarationKindByStatement](export.md#checkexportdeclarationkindbystatement)
- [checkExportExistByIdentifier](export.md#checkexportexistbyidentifier)
- [checkInterfaceExportExistByIdentifier](export.md#checkinterfaceexportexistbyidentifier)
- [checkSourceFileHasExports](export.md#checksourcefilehasexports)
- [checkSourceFileHasTypeExports](export.md#checksourcefilehastypeexports)
- [checkTypeExportExistByIdentifier](export.md#checktypeexportexistbyidentifier)

## Functions

### checkExportDeclarationKindByIdentifier

▸ **checkExportDeclarationKindByIdentifier**(`source`, `identifier`): `VariableDeclarationKind` \| `undefined`

Check export type by identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `identifier` | `string` | variable identifier |

#### Returns

`VariableDeclarationKind` \| `undefined`

#### Defined in

[export.ts:55](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L55)

___

### checkExportDeclarationKindByStatement

▸ **checkExportDeclarationKindByStatement**(`statement`): `VariableDeclarationKind` \| `undefined`

Check export type by statement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statement` | `VariableStatement` | variable statement |

#### Returns

`VariableDeclarationKind` \| `undefined`

#### Defined in

[export.ts:74](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L74)

___

### checkExportExistByIdentifier

▸ **checkExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check export statements exist by export identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `identifier` | `string` | `foo` in `export const foo = 123`; |

#### Returns

`boolean`

#### Defined in

[export.ts:42](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L42)

___

### checkInterfaceExportExistByIdentifier

▸ **checkInterfaceExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check interface export exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `identifier` | `string` |

#### Returns

`boolean`

#### Defined in

[export.ts:103](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L103)

___

### checkSourceFileHasExports

▸ **checkSourceFileHasExports**(`source`): `boolean`

Check dose Source File has `Export Variable Statement`

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`boolean`

#### Defined in

[export.ts:20](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L20)

___

### checkSourceFileHasTypeExports

▸ **checkSourceFileHasTypeExports**(`source`): `boolean`

Check dose Source File has `Export Variable Statement`

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`boolean`

#### Defined in

[export.ts:29](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L29)

___

### checkTypeExportExistByIdentifier

▸ **checkTypeExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check type alias export exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `identifier` | `string` |

#### Returns

`boolean`

#### Defined in

[export.ts:90](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/export.ts#L90)
