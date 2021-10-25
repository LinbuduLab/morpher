[@ts-morpher/types](../README.md) / [types](../modules/types.md) / IBaseMethodParamStruct

# Interface: IBaseMethodParamStruct

[types](../modules/types.md).IBaseMethodParamStruct

Class method param declaration structure

## Table of contents

### Properties

- [decorators](types.IBaseMethodParamStruct.md#decorators)
- [hasOverrideKeyword](types.IBaseMethodParamStruct.md#hasoverridekeyword)
- [hasQuestionToken](types.IBaseMethodParamStruct.md#hasquestiontoken)
- [initializer](types.IBaseMethodParamStruct.md#initializer)
- [isReadonly](types.IBaseMethodParamStruct.md#isreadonly)
- [isRestParameter](types.IBaseMethodParamStruct.md#isrestparameter)
- [name](types.IBaseMethodParamStruct.md#name)
- [scope](types.IBaseMethodParamStruct.md#scope)
- [type](types.IBaseMethodParamStruct.md#type)

## Properties

### decorators

• `Optional` **decorators**: [`IBaseDecoratorStruct`](types.IBaseDecoratorStruct.md)[]

[IBaseDecoratorStruct](types.IBaseDecoratorStruct.md)

#### Defined in

[types.ts:102](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L102)

___

### hasOverrideKeyword

• `Optional` **hasOverrideKeyword**: `boolean`

#### Defined in

[types.ts:92](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L92)

___

### hasQuestionToken

• `Optional` **hasQuestionToken**: `boolean`

#### Defined in

[types.ts:91](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L91)

___

### initializer

• `Optional` **initializer**: `string` \| `WriterFunction`

e.g. foo in `method(arg1 = 'foo'){}`

#### Defined in

[types.ts:96](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L96)

___

### isReadonly

• `Optional` **isReadonly**: `boolean`

#### Defined in

[types.ts:90](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L90)

___

### isRestParameter

• `Optional` **isRestParameter**: `boolean`

#### Defined in

[types.ts:97](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L97)

___

### name

• **name**: `string`

#### Defined in

[types.ts:85](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L85)

___

### scope

• `Optional` **scope**: `Scope`

#### Defined in

[types.ts:98](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L98)

___

### type

• `Optional` **type**: `string` \| `WriterFunction`

string in `method(arg1: string){}`

#### Defined in

[types.ts:89](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L89)
