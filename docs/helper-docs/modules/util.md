[@ts-morpher/helper](../README.md) / util

# Module: util

## Table of contents

### Type aliases

- [MaybeArray](util.md#maybearray)

### Functions

- [ensureArray](util.md#ensurearray)
- [getDeclarationIdentifierByKind](util.md#getdeclarationidentifierbykind)
- [getTypeOrInterfaceIdentifier](util.md#gettypeorinterfaceidentifier)
- [getVariableIdentifier](util.md#getvariableidentifier)
- [uniqArray](util.md#uniqarray)

## Type aliases

### MaybeArray

Ƭ `Private` **MaybeArray**<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[util.ts:16](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L16)

## Functions

### ensureArray

▸ `Private` **ensureArray**<`T`\>(`maybeArray`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeArray` | [`MaybeArray`](util.md#maybearray)<`T`\> |

#### Returns

`T`[]

#### Defined in

[util.ts:28](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L28)

___

### getDeclarationIdentifierByKind

▸ `Private` **getDeclarationIdentifierByKind**(`dec`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dec` | `ClassDeclaration` \| `MethodDeclaration` \| `Decorator` \| `PropertyDeclaration` \| `ImportDeclaration` |

#### Returns

`string`

#### Defined in

[util.ts:35](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L35)

___

### getTypeOrInterfaceIdentifier

▸ `Private` **getTypeOrInterfaceIdentifier**(`declaration`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `declaration` | `TypeAliasDeclaration` \| `InterfaceDeclaration` |

#### Returns

`string`

#### Defined in

[util.ts:70](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L70)

___

### getVariableIdentifier

▸ `Private` **getVariableIdentifier**(`statement`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statement` | `VariableStatement` |

#### Returns

`string`

#### Defined in

[util.ts:58](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L58)

___

### uniqArray

▸ `Private` **uniqArray**<`T`\>(`array`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`T`[]

#### Defined in

[util.ts:21](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/helper/src/util.ts#L21)
