[@ts-morpher/types](../README.md) / [types](../modules/types.md) / IBaseMethodStruct

# Interface: IBaseMethodStruct

[types](../modules/types.md).IBaseMethodStruct

Class method declaration structure

## Table of contents

### Properties

- [decorators](types.IBaseMethodStruct.md#decorators)
- [hasOverrideKeyword](types.IBaseMethodStruct.md#hasoverridekeyword)
- [hasQuestionToken](types.IBaseMethodStruct.md#hasquestiontoken)
- [isAbstract](types.IBaseMethodStruct.md#isabstract)
- [isAsync](types.IBaseMethodStruct.md#isasync)
- [isGenerator](types.IBaseMethodStruct.md#isgenerator)
- [isStatic](types.IBaseMethodStruct.md#isstatic)
- [name](types.IBaseMethodStruct.md#name)
- [parameters](types.IBaseMethodStruct.md#parameters)
- [returnType](types.IBaseMethodStruct.md#returntype)
- [scope](types.IBaseMethodStruct.md#scope)
- [typeParameters](types.IBaseMethodStruct.md#typeparameters)

## Properties

### decorators

• `Optional` **decorators**: [`IBaseDecoratorStruct`](types.IBaseDecoratorStruct.md)[]

[IBaseDecoratorStruct](types.IBaseDecoratorStruct.md)

#### Defined in

[types.ts:105](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L105)

___

### hasOverrideKeyword

• `Optional` **hasOverrideKeyword**: `boolean`

#### Defined in

[types.ts:91](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L91)

___

### hasQuestionToken

• `Optional` **hasQuestionToken**: `boolean`

#### Defined in

[types.ts:90](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L90)

___

### isAbstract

• `Optional` **isAbstract**: `boolean`

#### Defined in

[types.ts:86](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L86)

___

### isAsync

• `Optional` **isAsync**: `boolean`

#### Defined in

[types.ts:87](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L87)

___

### isGenerator

• `Optional` **isGenerator**: `boolean`

#### Defined in

[types.ts:88](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L88)

___

### isStatic

• `Optional` **isStatic**: `boolean`

#### Defined in

[types.ts:89](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L89)

___

### name

• **name**: `string`

#### Defined in

[types.ts:85](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L85)

___

### parameters

• `Optional` **parameters**: [`IBaseMethodParamStruct`](types.IBaseMethodParamStruct.md)[]

[IBaseMethodParamStruct](types.IBaseMethodParamStruct.md)

#### Defined in

[types.ts:95](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L95)

___

### returnType

• `Optional` **returnType**: `string` \| `WriterFunction`

#### Defined in

[types.ts:100](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L100)

___

### scope

• `Optional` **scope**: `Scope`

#### Defined in

[types.ts:101](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L101)

___

### typeParameters

• `Optional` **typeParameters**: (`string` \| [`IGenericTypeParam`](types.IGenericTypeParam.md))[]

[IGenericTypeParam](types.IGenericTypeParam.md)

#### Defined in

[types.ts:99](https://github.com/linbudu599/morpher/blob/fad7f99/packages/types/src/types.ts#L99)
