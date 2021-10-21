[@ts-morpher/checker](../README.md) / import

# Module: import

## Table of contents

### Functions

- [checkImportExistByModuleSpecifier](import.md#checkimportexistbymodulespecifier)
- [checkImportType](import.md#checkimporttype)
- [checkImportTypeByModuleSpecifier](import.md#checkimporttypebymodulespecifier)
- [checkIsDefaultImportByModuleSpecifier](import.md#checkisdefaultimportbymodulespecifier)
- [checkIsDefaultImportDeclaration](import.md#checkisdefaultimportdeclaration)
- [checkIsDefaultWithNamedImportByModuleSpecifier](import.md#checkisdefaultwithnamedimportbymodulespecifier)
- [checkIsDefaultWithNamedImportDeclaration](import.md#checkisdefaultwithnamedimportdeclaration)
- [checkIsNamedImportByModuleSpecifier](import.md#checkisnamedimportbymodulespecifier)
- [checkIsNamedImportDeclaration](import.md#checkisnamedimportdeclaration)
- [checkIsNamespaceImportByModuleSpecifier](import.md#checkisnamespaceimportbymodulespecifier)
- [checkIsNamespaceImportDeclaration](import.md#checkisnamespaceimportdeclaration)
- [checkIsTypeOnlyImportByModuleSpecifier](import.md#checkistypeonlyimportbymodulespecifier)
- [checkSourceFileHasImports](import.md#checksourcefilehasimports)

## Functions

### checkImportExistByModuleSpecifier

▸ **checkImportExistByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean`

Check does `Import Declaration` exist - by Module Specifier.

**`example`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `moduleSpecifier` | `string` | 'ts-morph' in import { SourceFile } from 'ts-morph' |

#### Returns

`boolean`

#### Defined in

[import.ts:14](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L14)

___

### checkImportType

▸ **checkImportType**(`declaration`): `ImportType`

Get `Import Type`  - by `Import Declaration`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `declaration` | `ImportDeclaration` |

#### Returns

`ImportType`

ImportType {@link ImportType}

#### Defined in

[import.ts:176](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L176)

___

### checkImportTypeByModuleSpecifier

▸ **checkImportTypeByModuleSpecifier**(`source`, `moduleSpecifier`): `ImportType`

Check Import Type  - by `Module Specifier`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `moduleSpecifier` | `string` |

#### Returns

`ImportType`

ImportType {@link ImportType}

#### Defined in

[import.ts:142](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L142)

___

### checkIsDefaultImportByModuleSpecifier

▸ **checkIsDefaultImportByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean`

Check is `Import Declaration` default import - by `Module Specifier`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `moduleSpecifier` | `string` | 'ts-morph' in import { SourceFile } from 'ts-morph' |

#### Returns

`boolean`

#### Defined in

[import.ts:35](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L35)

___

### checkIsDefaultImportDeclaration

▸ **checkIsDefaultImportDeclaration**(`importSpec`): `boolean`

Check is `Import Declaration` default import - by `Import Declaration`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `importSpec` | `ImportDeclaration` |

#### Returns

`boolean`

#### Defined in

[import.ts:91](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L91)

___

### checkIsDefaultWithNamedImportByModuleSpecifier

▸ **checkIsDefaultWithNamedImportByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean`

Check is `Import Declaration` default with named import - by `Module Specifier`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `moduleSpecifier` | `string` | 'ts-morph' in import { SourceFile } from 'ts-morph' |

#### Returns

`boolean`

#### Defined in

[import.ts:77](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L77)

___

### checkIsDefaultWithNamedImportDeclaration

▸ **checkIsDefaultWithNamedImportDeclaration**(`importSpec`): `boolean`

Check is `Import Declaration` default with named import - by `Import Declaration`.

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `importSpec` | `ImportDeclaration` |

#### Returns

`boolean`

#### Defined in

[import.ts:127](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L127)

___

### checkIsNamedImportByModuleSpecifier

▸ **checkIsNamedImportByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean`

Check is `Import Declaration` named import - by `Module Specifier`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `moduleSpecifier` | `string` | 'ts-morph' in import { SourceFile } from 'ts-morph' |

#### Returns

`boolean`

#### Defined in

[import.ts:63](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L63)

___

### checkIsNamedImportDeclaration

▸ **checkIsNamedImportDeclaration**(`importSpec`): `boolean`

Check is `Import Declaration` named import - by `Import Declaration`.

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `importSpec` | `ImportDeclaration` |

#### Returns

`boolean`

#### Defined in

[import.ts:115](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L115)

___

### checkIsNamespaceImportByModuleSpecifier

▸ **checkIsNamespaceImportByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean`

Check is `Import Declaration` namespace import - by `Module Specifier`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` |  |
| `moduleSpecifier` | `string` | 'ts-morph' in import { SourceFile } from 'ts-morph' |

#### Returns

`boolean`

#### Defined in

[import.ts:49](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L49)

___

### checkIsNamespaceImportDeclaration

▸ **checkIsNamespaceImportDeclaration**(`importSpec`): `boolean`

Check is `Import Declaration` namespace import - by `Import Declaration`.

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `importSpec` | `ImportDeclaration` |

#### Returns

`boolean`

#### Defined in

[import.ts:103](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L103)

___

### checkIsTypeOnlyImportByModuleSpecifier

▸ **checkIsTypeOnlyImportByModuleSpecifier**(`source`, `moduleSpecifier`): `boolean` \| `undefined`

Check is `Import Declaration` type only - by `Module Specifier`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `moduleSpecifier` | `string` |

#### Returns

`boolean` \| `undefined`

#### Defined in

[import.ts:202](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L202)

___

### checkSourceFileHasImports

▸ **checkSourceFileHasImports**(`source`): `boolean`

Check dose Source File has `Import Declaration` defined.

**`example`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`boolean`

#### Defined in

[import.ts:26](https://github.com/linbudu599/morpher/blob/9f915c5/packages/checker/src/import.ts#L26)
