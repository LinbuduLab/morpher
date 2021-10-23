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
- [statements](types.IBaseMethodStruct.md#statements)
- [typeParameters](types.IBaseMethodStruct.md#typeparameters)

## Properties

### decorators

• `Optional` **decorators**: [`IBaseDecoratorStruct`](types.IBaseDecoratorStruct.md)[]

[IBaseDecoratorStruct](types.IBaseDecoratorStruct.md)

#### Defined in

[types.ts:129](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L129)

___

### hasOverrideKeyword

• `Optional` **hasOverrideKeyword**: `boolean`

#### Defined in

[types.ts:114](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L114)

___

### hasQuestionToken

• `Optional` **hasQuestionToken**: `boolean`

#### Defined in

[types.ts:113](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L113)

___

### isAbstract

• `Optional` **isAbstract**: `boolean`

#### Defined in

[types.ts:109](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L109)

___

### isAsync

• `Optional` **isAsync**: `boolean`

#### Defined in

[types.ts:110](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L110)

___

### isGenerator

• `Optional` **isGenerator**: `boolean`

#### Defined in

[types.ts:111](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L111)

___

### isStatic

• `Optional` **isStatic**: `boolean`

#### Defined in

[types.ts:112](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L112)

___

### name

• **name**: `string`

#### Defined in

[types.ts:108](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L108)

___

### parameters

• `Optional` **parameters**: [`IBaseMethodParamStruct`](types.IBaseMethodParamStruct.md)[]

[IBaseMethodParamStruct](types.IBaseMethodParamStruct.md)

#### Defined in

[types.ts:118](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L118)

___

### returnType

• `Optional` **returnType**: `string` \| `WriterFunction`

#### Defined in

[types.ts:124](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L124)

___

### scope

• `Optional` **scope**: `Scope`

#### Defined in

[types.ts:125](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L125)

___

### statements

• `Optional` **statements**: `string` \| `WriterFunction` \| (`string` \| `WriterFunction`)[]

#### Defined in

[types.ts:123](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L123)

___

### typeParameters

• `Optional` **typeParameters**: (`string` \| [`IGenericTypeParam`](types.IGenericTypeParam.md))[]

[IGenericTypeParam](types.IGenericTypeParam.md)

#### Defined in

[types.ts:122](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/types.ts#L122)
