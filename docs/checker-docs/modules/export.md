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

Check export declare kind(var, let, const) by identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | `foo` in `export const foo = 123`; |

#### Returns

`VariableDeclarationKind` \| `undefined`

#### Defined in

[export.ts:54](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L54)

___

### checkExportDeclarationKindByStatement

▸ **checkExportDeclarationKindByStatement**(`statement`): `VariableDeclarationKind`

Check export declare kind(var, let, const) by statement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statement` | `VariableStatement` | variable statement, use {@link getExportVariableStatements} to get statement definition |

#### Returns

`VariableDeclarationKind`

#### Defined in

[export.ts:75](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L75)

___

### checkExportExistByIdentifier

▸ **checkExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check does export statements exist by export identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | `foo` in `export const foo = 123`; |

#### Returns

`boolean`

#### Defined in

[export.ts:41](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L41)

___

### checkInterfaceExportExistByIdentifier

▸ **checkInterfaceExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check does interface export exist by identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | 'Foo' in `export interface Foo {};` |

#### Returns

`boolean`

#### Defined in

[export.ts:104](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L104)

___

### checkSourceFileHasExports

▸ **checkSourceFileHasExports**(`source`): `boolean`

Check dose source file has `Export Variable Statement`(`export const foo = 'foo';`) defined.

**`example`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`boolean`

#### Defined in

[export.ts:19](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L19)

___

### checkSourceFileHasTypeExports

▸ **checkSourceFileHasTypeExports**(`source`): `boolean`

Check dose Source File has `Type Alias Export`(`export type A = string;`) or `Interface Export`(`export interface IFoo {}`) defined.

**`example`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`boolean`

#### Defined in

[export.ts:28](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L28)

___

### checkTypeExportExistByIdentifier

▸ **checkTypeExportExistByIdentifier**(`source`, `identifier`): `boolean`

Check does type alias export exist by identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | 'Foo' in `export type Foo = string;` |

#### Returns

`boolean`

#### Defined in

[export.ts:91](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/export.ts#L91)
