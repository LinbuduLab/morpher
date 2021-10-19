[@ts-morpher/helper](../README.md) / class

# Module: class

## Table of contents

### Functions

- [getClassDeclarations](class.md#getclassdeclarations)
- [getClassDecoratorIdentifiers](class.md#getclassdecoratoridentifiers)
- [getClassDecorators](class.md#getclassdecorators)
- [getClassIdentifiers](class.md#getclassidentifiers)
- [getClassMethodDeclarations](class.md#getclassmethoddeclarations)
- [getClassMethodIdentifiers](class.md#getclassmethodidentifiers)
- [getClassMethodModifiers](class.md#getclassmethodmodifiers)
- [getClassPropDeclarations](class.md#getclasspropdeclarations)
- [getClassPropIdentifiers](class.md#getclasspropidentifiers)
- [getClassPropModifiers](class.md#getclasspropmodifiers)

## Functions

### getClassDeclarations

▸ **getClassDeclarations**(`source`): `ClassDeclaration`[]

Return all class declarations in source file, specify `className` to return only matched

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`ClassDeclaration`[]

#### Defined in

[class.ts:17](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L17)

▸ **getClassDeclarations**(`source`, `className`): `ClassDeclaration` \| `undefined`

Return all class declarations in source file, specify `className` to return only matched

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`ClassDeclaration` \| `undefined`

#### Defined in

[class.ts:24](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L24)

___

### getClassDecoratorIdentifiers

▸ **getClassDecoratorIdentifiers**(`source`, `className`): `string`[] \| `undefined`

Return all decorator identifiers of target class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`string`[] \| `undefined`

string[]

#### Defined in

[class.ts:249](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L249)

___

### getClassDecorators

▸ **getClassDecorators**(`source`, `className`): `Decorator`[]

Return all decorator declarations of target class
specify `decoratorName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`Decorator`[]

Decorator | Decorator[] | undefined

#### Defined in

[class.ts:196](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L196)

▸ **getClassDecorators**(`source`, `className`, `decoratorName`): `Decorator` \| `undefined`

Return all decorator declarations of target class
specify `decoratorName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `decoratorName` | `string` |

#### Returns

`Decorator` \| `undefined`

Decorator | Decorator[] | undefined

#### Defined in

[class.ts:209](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L209)

___

### getClassIdentifiers

▸ **getClassIdentifiers**(`source`): `string`[]

Return all class identifiers in source file

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`string`[]

#### Defined in

[class.ts:52](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L52)

___

### getClassMethodDeclarations

▸ **getClassMethodDeclarations**(`source`, `className`): `MethodDeclaration`[]

Return all method declarations of target class
specify `methodName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`MethodDeclaration`[]

MethodDeclaration | MethodDeclaration[] | undefined

#### Defined in

[class.ts:64](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L64)

▸ **getClassMethodDeclarations**(`source`, `className`, `methodName`): `MethodDeclaration` \| `undefined`

Return all method declarations of target class
specify `methodName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `methodName` | `string` |

#### Returns

`MethodDeclaration` \| `undefined`

MethodDeclaration | MethodDeclaration[] | undefined

#### Defined in

[class.ts:77](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L77)

___

### getClassMethodIdentifiers

▸ **getClassMethodIdentifiers**(`source`, `className`): `string`[]

Return all method identifiers of target class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`string`[]

string[]

#### Defined in

[class.ts:115](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L115)

___

### getClassMethodModifiers

▸ **getClassMethodModifiers**(`source`, `className`, `methodName`): `string`[]

Return method modifiers flags like public / static / readonly

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `methodName` | `string` |

#### Returns

`string`[]

#### Defined in

[class.ts:263](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L263)

___

### getClassPropDeclarations

▸ **getClassPropDeclarations**(`source`, `className`): `PropertyDeclaration`[]

Return all prop declarations of target class
specify `propName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`PropertyDeclaration`[]

PropertyDeclaration | PropertyDeclaration[] | undefined

#### Defined in

[class.ts:130](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L130)

▸ **getClassPropDeclarations**(`source`, `className`, `propName`): `PropertyDeclaration` \| `undefined`

Return all prop declarations of target class
specify `propName` to return only matched one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `propName` | `string` |

#### Returns

`PropertyDeclaration` \| `undefined`

PropertyDeclaration | PropertyDeclaration[] | undefined

#### Defined in

[class.ts:143](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L143)

___

### getClassPropIdentifiers

▸ **getClassPropIdentifiers**(`source`, `className`): `string`[] \| `undefined`

Return all prop identifiers of target class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`string`[] \| `undefined`

string[]

#### Defined in

[class.ts:181](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L181)

___

### getClassPropModifiers

▸ **getClassPropModifiers**(`source`, `className`, `propName`): `string`[]

Return prop modifiers flags like public / static / readonly

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `propName` | `string` |

#### Returns

`string`[]

#### Defined in

[class.ts:285](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/helper/src/class.ts#L285)
