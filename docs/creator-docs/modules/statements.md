[@ts-morpher/creator](../README.md) / statements

# Module: statements

## Table of contents

### Functions

- [appendStatementAfterImportDeclarations](statements.md#appendstatementafterimportdeclarations)

## Functions

### appendStatementAfterImportDeclarations

▸ **appendStatementAfterImportDeclarations**(`source`, `appendStatement`, `apply?`): `void`

Append statements after import declarations with new line,
will append in top of file if no import declaration found.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `appendStatement` | `MaybeArray`<`string`\> | `undefined` | plain statements to insert |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[statements.ts:11](https://github.com/linbudu599/morpher/blob/98d4a1f/packages/creator/src/statements.ts#L11)
