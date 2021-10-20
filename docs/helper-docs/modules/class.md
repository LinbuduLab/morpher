[@ts-morpher/helper](../README.md) / class

# Module: class

## Table of contents

### Functions

- [getClassDeclarations](class.md#getclassdeclarations)
- [getClassDecoratorIdentifiers](class.md#getclassdecoratoridentifiers)
- [getClassDecorators](class.md#getclassdecorators)
- [getClassIdentifiers](class.md#getclassidentifiers)
- [getClassMethodDeclarations](class.md#getclassmethoddeclarations)
- [getClassMethodDecorators](class.md#getclassmethoddecorators)
- [getClassMethodIdentifiers](class.md#getclassmethodidentifiers)
- [getClassMethodModifiers](class.md#getclassmethodmodifiers)
- [getClassPropDeclarations](class.md#getclasspropdeclarations)
- [getClassPropDecorators](class.md#getclasspropdecorators)
- [getClassPropIdentifiers](class.md#getclasspropidentifiers)
- [getClassPropModifiers](class.md#getclasspropmodifiers)

## Functions

### getClassDeclarations

▸ **getClassDeclarations**(`source`): `ClassDeclaration`[]

Return all class declarations in source file, specify `className` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`ClassDeclaration`[]

ClassDeclaration {@link ClassDeclaration}

#### Defined in

[class.ts:17](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L17)

▸ **getClassDeclarations**(`source`, `className`): `ClassDeclaration` \| `undefined`

Return all class declarations in source file, specify `className` to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` | - |

#### Returns

`ClassDeclaration` \| `undefined`

ClassDeclaration {@link ClassDeclaration}

#### Defined in

[class.ts:24](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L24)

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

[class.ts:364](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L364)

___

### getClassDecorators

▸ **getClassDecorators**(`source`, `className`): `Decorator`[]

Return all decorator declarations of target class
specify `decoratorName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`Decorator`[]

Decorator {@link Decorator}

#### Defined in

[class.ts:311](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L311)

▸ **getClassDecorators**(`source`, `className`, `decoratorName`): `Decorator` \| `undefined`

Return all decorator declarations of target class
specify `decoratorName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `decoratorName` | `string` |  |

#### Returns

`Decorator` \| `undefined`

Decorator {@link Decorator}

#### Defined in

[class.ts:324](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L324)

___

### getClassIdentifiers

▸ **getClassIdentifiers**(`source`): `string`[]

Return all class identifiers in source file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`string`[]

#### Defined in

[class.ts:52](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L52)

___

### getClassMethodDeclarations

▸ **getClassMethodDeclarations**(`source`, `className`): `MethodDeclaration`[]

Return all method declarations of target class.

specify `methodName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`MethodDeclaration`[]

MethodDeclaration {@link MethodDeclaration}

#### Defined in

[class.ts:65](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L65)

▸ **getClassMethodDeclarations**(`source`, `className`, `methodName`): `MethodDeclaration` \| `undefined`

Return all method declarations of target class
specify `methodName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `methodName` | `string` |  |

#### Returns

`MethodDeclaration` \| `undefined`

MethodDeclaration {@link MethodDeclaration}

#### Defined in

[class.ts:78](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L78)

___

### getClassMethodDecorators

▸ **getClassMethodDecorators**(`source`, `className`, `methodName`): `Decorator`[]

Return class method decorators, specify decorator name to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `methodName` | `string` |  |

#### Returns

`Decorator`[]

Decorator {@link Decorator}

#### Defined in

[class.ts:130](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L130)

▸ **getClassMethodDecorators**(`source`, `className`, `methodName`, `decoratorName`): `Decorator` \| `undefined`

Return class method decorators, specify decorator name to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `methodName` | `string` |  |
| `decoratorName` | `string` |  |

#### Returns

`Decorator` \| `undefined`

Decorator {@link Decorator}

#### Defined in

[class.ts:144](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L144)

___

### getClassMethodIdentifiers

▸ **getClassMethodIdentifiers**(`source`, `className`): `string`[]

Return all method identifiers of target class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`string`[]

#### Defined in

[class.ts:116](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L116)

___

### getClassMethodModifiers

▸ **getClassMethodModifiers**(`source`, `className`, `methodName`): `string`[]

Return method modifiers flags like public / static / readonly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `methodName` | `string` |

#### Returns

`string`[]

#### Defined in

[class.ts:378](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L378)

___

### getClassPropDeclarations

▸ **getClassPropDeclarations**(`source`, `className`): `PropertyDeclaration`[]

Return all prop declarations of target class.
specify `propName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`PropertyDeclaration`[]

PropertyDeclaration {@link PropertyDeclaration}

#### Defined in

[class.ts:190](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L190)

▸ **getClassPropDeclarations**(`source`, `className`, `propName`): `PropertyDeclaration` \| `undefined`

Return all prop declarations of target class.
specify `propName` to return only matched one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `propName` | `string` |  |

#### Returns

`PropertyDeclaration` \| `undefined`

PropertyDeclaration {@link PropertyDeclaration}

#### Defined in

[class.ts:203](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L203)

___

### getClassPropDecorators

▸ **getClassPropDecorators**(`source`, `className`, `propName`): `Decorator`[]

Return class prop decorators, specify decorator name to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `propName` | `string` |  |

#### Returns

`Decorator`[]

Decorator {@link Decorator}

#### Defined in

[class.ts:255](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L255)

▸ **getClassPropDecorators**(`source`, `className`, `propName`, `decoratorName`): `Decorator` \| `undefined`

Return class prop decorators, specify decorator name to return only matched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `propName` | `string` |  |
| `decoratorName` | `string` |  |

#### Returns

`Decorator` \| `undefined`

Decorator {@link Decorator}

#### Defined in

[class.ts:269](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L269)

___

### getClassPropIdentifiers

▸ **getClassPropIdentifiers**(`source`, `className`): `string`[] \| `undefined`

Return all prop identifiers of target class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`string`[] \| `undefined`

string[]

#### Defined in

[class.ts:241](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L241)

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

[class.ts:400](https://github.com/linbudu599/morpher/blob/25ef250/packages/helper/src/class.ts#L400)
