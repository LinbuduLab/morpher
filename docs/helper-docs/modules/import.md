[@ts-morpher/helper](../README.md) / import

# Module: import

## Table of contents

### Functions

- [getDefaultImportDeclarations](import.md#getdefaultimportdeclarations)
- [getDefaultImportModuleSpecifiers](import.md#getdefaultimportmodulespecifiers)
- [getImportDeclarations](import.md#getimportdeclarations)
- [getImportModuleSpecifiers](import.md#getimportmodulespecifiers)
- [getNamedImportDeclarations](import.md#getnamedimportdeclarations)
- [getNamedImportModuleSpecifiers](import.md#getnamedimportmodulespecifiers)
- [getNamespaceImportDeclarations](import.md#getnamespaceimportdeclarations)
- [getNamespaceImportModuleSpecifiers](import.md#getnamespaceimportmodulespecifiers)
- [getNodeInternalImportDeclarations](import.md#getnodeinternalimportdeclarations)
- [getNodeInternalImportModuleSpecifiers](import.md#getnodeinternalimportmodulespecifiers)
- [getNodeModuleImportDeclarations](import.md#getnodemoduleimportdeclarations)
- [getNodeModuleImportModuleSpecifiers](import.md#getnodemoduleimportmodulespecifiers)
- [getTypeOnlyImportDeclarations](import.md#gettypeonlyimportdeclarations)
- [getTypeOnlyImportModuleSpecifiers](import.md#gettypeonlyimportmodulespecifiers)

## Functions

### getDefaultImportDeclarations

▸ **getDefaultImportDeclarations**(`source`): `ImportDeclaration`[]

Return all default import declarations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:210](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L210)

___

### getDefaultImportModuleSpecifiers

▸ **getDefaultImportModuleSpecifiers**(`source`): `string`[]

Return all default import declarations module specifier

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`string`[]

#### Defined in

[import.ts:225](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L225)

___

### getImportDeclarations

▸ **getImportDeclarations**(`source`): `ImportDeclaration`[]

Return all import declarations, specify `moduleSpecifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:11](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L11)

▸ **getImportDeclarations**(`source`, `moduleSpecifier`): `ImportDeclaration` \| `undefined`

Return all import declarations, specify `moduleSpecifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `moduleSpecifier` | `string` |  |

#### Returns

`ImportDeclaration` \| `undefined`

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:19](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L19)

▸ **getImportDeclarations**(`source`, `moduleSpecifier`): `ImportDeclaration`[]

Return all import declarations, specify `moduleSpecifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `moduleSpecifier` | `string`[] |  |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:30](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L30)

___

### getImportModuleSpecifiers

▸ **getImportModuleSpecifiers**(`source`): `string`[]

Return all import module specifiers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

string[]

#### Defined in

[import.ts:73](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L73)

___

### getNamedImportDeclarations

▸ **getNamedImportDeclarations**(`source`): `ImportDeclaration`[]

Return all named import declarations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:154](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L154)

___

### getNamedImportModuleSpecifiers

▸ **getNamedImportModuleSpecifiers**(`source`): `string`[]

Return all named import declarations module specifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[import.ts:169](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L169)

___

### getNamespaceImportDeclarations

▸ **getNamespaceImportDeclarations**(`source`): `ImportDeclaration`[]

Return all namespace import declarations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:180](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L180)

___

### getNamespaceImportModuleSpecifiers

▸ **getNamespaceImportModuleSpecifiers**(`source`): `string`[]

Return all namespace import declarations module specifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:195](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L195)

___

### getNodeInternalImportDeclarations

▸ **getNodeInternalImportDeclarations**(`source`): `ImportDeclaration`[]

Return all built-in module import declarations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

#### Defined in

[import.ts:236](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L236)

___

### getNodeInternalImportModuleSpecifiers

▸ **getNodeInternalImportModuleSpecifiers**(`source`): `string`[]

Return all built-in module import module specifiers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[import.ts:247](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L247)

___

### getNodeModuleImportDeclarations

▸ **getNodeModuleImportDeclarations**(`source`): `ImportDeclaration`[]

Return all non-built-in module import declarations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:262](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L262)

___

### getNodeModuleImportModuleSpecifiers

▸ **getNodeModuleImportModuleSpecifiers**(`source`): `string`[]

Return all non-built-in module import module specifiers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[import.ts:274](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L274)

___

### getTypeOnlyImportDeclarations

▸ **getTypeOnlyImportDeclarations**(`source`): `ImportDeclaration`[]

Return all type-only import declarations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:84](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L84)

▸ **getTypeOnlyImportDeclarations**(`source`, `moduleSpecifier`): `ImportDeclaration` \| `undefined`

Return type-only import declarations, specify `identifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `moduleSpecifier` | `string` |  |

#### Returns

`ImportDeclaration` \| `undefined`

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:94](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L94)

▸ **getTypeOnlyImportDeclarations**(`source`, `moduleSpecifiers`): `ImportDeclaration`[]

Return type-only import declarations, specify `identifier` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `moduleSpecifiers` | `string`[] | - |

#### Returns

`ImportDeclaration`[]

ImportDeclaration {@link ImportDeclaration}

#### Defined in

[import.ts:105](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L105)

___

### getTypeOnlyImportModuleSpecifiers

▸ **getTypeOnlyImportModuleSpecifiers**(`source`): `string`[]

Return all type-only import module specifiers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[import.ts:139](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/import.ts#L139)
