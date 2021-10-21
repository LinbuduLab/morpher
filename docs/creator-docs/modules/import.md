[@ts-morpher/creator](../README.md) / import

# Module: import

## Table of contents

### Functions

- [createImportDeclaration](import.md#createimportdeclaration)

## Functions

### createImportDeclaration

▸ **createImportDeclaration**(`source`, `namespace`, `moduleSpecifier`, `importType`, `apply?`): `void`

Add a namespace import declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `namespace` | `string` | import namespace |
| `moduleSpecifier` | `string` | import specifier |
| `importType` | `NAMESPACE_IMPORT` | ImportType.NAMESPACE_IMPORT |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

void

#### Defined in

[import.ts:16](https://github.com/linbudu599/morpher/blob/fad7f99/packages/creator/src/import.ts#L16)

▸ **createImportDeclaration**(`source`, `namedImports`, `moduleSpecifier`, `importType`, `isTypeOnly?`, `apply?`): `void`

Add a named import declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `namedImports` | `MaybeArray`<`string`\> | named imports member |
| `moduleSpecifier` | `string` | import specifier |
| `importType` | `NAMED_IMPORT` | ImportType.NAMED_IMPORT |
| `isTypeOnly?` | `boolean` | create type only import |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

void

#### Defined in

[import.ts:34](https://github.com/linbudu599/morpher/blob/fad7f99/packages/creator/src/import.ts#L34)

▸ **createImportDeclaration**(`source`, `defaultImport`, `moduleSpecifier`, `importType`, `apply?`): `void`

Add a default import declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `defaultImport` | `string` | - |
| `moduleSpecifier` | `string` | import specifier |
| `importType` | `DEFAULT_IMPORT` | ImportType.DEFAULT_IMPORT |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

void

#### Defined in

[import.ts:53](https://github.com/linbudu599/morpher/blob/fad7f99/packages/creator/src/import.ts#L53)

▸ **createImportDeclaration**(`source`, `namedImports`, `moduleSpecifier`, `importType`, `apply?`): `void`

Add a default with named import declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `namedImports` | `MaybeArray`<`string`\> | - |
| `moduleSpecifier` | `string` | import specifier |
| `importType` | `DEFAULT_WITH_NAMED_IMPORT` | ImportType.DEFAULT_WITH_NAMED_IMPORT |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

void

#### Defined in

[import.ts:70](https://github.com/linbudu599/morpher/blob/fad7f99/packages/creator/src/import.ts#L70)
