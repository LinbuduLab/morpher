[@ts-morpher/cleaner](../README.md) / import

# Module: import

## Table of contents

### Functions

- [removeAllImports](import.md#removeallimports)
- [removeAllTypeOnlyImports](import.md#removealltypeonlyimports)
- [removeImportDeclarationByModuleSpecifier](import.md#removeimportdeclarationbymodulespecifier)
- [removeImportDeclarationByType](import.md#removeimportdeclarationbytype)

## Functions

### removeAllImports

▸ **removeAllImports**(`source`, `apply?`): `void`

Remove all imports in source file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[import.ts:18](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/cleaner/src/import.ts#L18)

___

### removeAllTypeOnlyImports

▸ **removeAllTypeOnlyImports**(`source`, `apply?`): `void`

Remove all type-only imports in source file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[import.ts:28](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/cleaner/src/import.ts#L28)

___

### removeImportDeclarationByModuleSpecifier

▸ **removeImportDeclarationByModuleSpecifier**(`source`, `specifiers`, `apply?`): `void`

Remove imports by `Module Specifier`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `specifiers` | `string`[] | `undefined` | specifiers of imports to remove |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[import.ts:39](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/cleaner/src/import.ts#L39)

___

### removeImportDeclarationByType

▸ **removeImportDeclarationByType**(`source`, `removeTypes?`, `apply?`): `void`

Remove imports by `Import Type`{@link ImportType}.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `removeTypes?` | `Partial`<`Record`<``"namespace"`` \| ``"default"`` \| ``"named"``, `boolean`\>\> | `undefined` | types of imports to remove: "namespace" \| "default" \| "named" |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[import.ts:63](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/cleaner/src/import.ts#L63)
