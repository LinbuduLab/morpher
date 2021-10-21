[@ts-morpher/cleaner](../README.md) / export

# Module: export

## Table of contents

### Functions

- [removeExportStatementsByExportType](export.md#removeexportstatementsbyexporttype)
- [removeExportStatementsByIdentifier](export.md#removeexportstatementsbyidentifier)
- [removeInterfaceExportByIdentifier](export.md#removeinterfaceexportbyidentifier)
- [removeTypeExportByIdentifier](export.md#removetypeexportbyidentifier)

## Functions

### removeExportStatementsByExportType

▸ **removeExportStatementsByExportType**(`source`, `removeTypes?`, `apply?`): `void`

Remove export by `Export Type`(var, let, const).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `removeTypes?` | `Partial`<`Record`<``"var"`` \| ``"let"`` \| ``"const"``, `boolean`\>\> | `undefined` | types of exports to remove: "const" \| "let" \| "var" |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:48](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L48)

___

### removeExportStatementsByIdentifier

▸ **removeExportStatementsByIdentifier**(`source`, `identifier?`, `apply?`): `void`

Remove export statements from source file, specifier identifier to remove specified one.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier?` | `string` | `undefined` | 'foo' in export const foo = 1; |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:21](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L21)

___

### removeInterfaceExportByIdentifier

▸ **removeInterfaceExportByIdentifier**(`source`, `identifier`, `apply?`): `void`

Remove all interface export statements, specify identifier to remove only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | ``null`` | interface identifier |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:135](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L135)

▸ **removeInterfaceExportByIdentifier**(`source`, `identifier`, `apply?`): `void`

Remove all interface export statements, specify identifier to remove only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string` | interface identifier |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:147](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L147)

▸ **removeInterfaceExportByIdentifier**(`source`, `identifier`, `apply?`): `void`

Remove all interface export statements, specify identifier to remove only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `string`[] | interface identifier |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:159](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L159)

___

### removeTypeExportByIdentifier

▸ **removeTypeExportByIdentifier**(`source`, `identifier`, `apply?`): `void`

Remove all type alias export statements, specify identifier to remove only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | ``null`` | type alias |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:84](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L84)

▸ **removeTypeExportByIdentifier**(`source`, `identifier`, `apply?`): `void`

Remove all type alias export statements, specify identifier to remove only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `identifier` | `MaybeArray`<`string`\> | type alias |
| `apply?` | `boolean` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:96](https://github.com/linbudu599/morpher/blob/9f915c5/packages/cleaner/src/export.ts#L96)
