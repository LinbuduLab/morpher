[@ts-morpher/modifier](../README.md) / import

# Module: import

## Table of contents

### Functions

- [addNamedImportMembers](import.md#addnamedimportmembers)
- [removeNamedImportMembers](import.md#removenamedimportmembers)
- [updateDefaultImportClause](import.md#updatedefaultimportclause)
- [updateImportSpecifier](import.md#updateimportspecifier)
- [updateNamespaceImportClause](import.md#updatenamespaceimportclause)

## Functions

### addNamedImportMembers

▸ **addNamedImportMembers**(`source`, `importSpec`, `members`, `createOnInexist?`, `apply?`): `void`

Add new members to the namespace import.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `importSpec` | `string` | `undefined` | namespace import specifier |
| `members` | `string`[] | `undefined` | import clause members to add |
| `createOnInexist` | `boolean` | `false` | create a namespace import declaration when target import not found |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/import.ts:56](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/modifier/src/import.ts#L56)

___

### removeNamedImportMembers

▸ **removeNamedImportMembers**(`source`, `importSpec`, `members`, `apply?`): `void`

Remove members in the namespace import.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `importSpec` | `string` | `undefined` | namespace import specifier |
| `members` | `string`[] | `undefined` | import clause members to remove |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/import.ts:103](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/modifier/src/import.ts#L103)

___

### updateDefaultImportClause

▸ **updateDefaultImportClause**(`source`, `specifier`, `updatedClause`, `apply?`): `void`

Set import clause of default import directly.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `specifier` | `string` | `undefined` | import specifier |
| `updatedClause` | `string` | `undefined` | import clause to set |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/import.ts:172](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/modifier/src/import.ts#L172)

___

### updateImportSpecifier

▸ **updateImportSpecifier**(`source`, `moduleSpecifier`, `updatedModuleSpecifier`, `apply?`): `void`

Update import module specifier.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `moduleSpecifier` | `string` | `undefined` | import specifier |
| `updatedModuleSpecifier` | `string` | `undefined` | updated import specifier |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/import.ts:147](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/modifier/src/import.ts#L147)

___

### updateNamespaceImportClause

▸ **updateNamespaceImportClause**(`source`, `specifier`, `updatedNamespace`, `apply?`): `void`

Set import clause of namespace import directly.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `specifier` | `string` | `undefined` | import specifier |
| `updatedNamespace` | `string` | `undefined` | import clause to set |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[modifier/src/import.ts:197](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/modifier/src/import.ts#L197)
