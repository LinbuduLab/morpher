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
- [statements](types.IBaseMethodParamStruct.md#statements)
- [type](types.IBaseMethodParamStruct.md#type)

## Properties

### decorators

• `Optional` **decorators**: [`IBaseDecoratorStruct`](types.IBaseDecoratorStruct.md)[]

[IBaseDecoratorStruct](types.IBaseDecoratorStruct.md)

#### Defined in

[types.ts:79](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L79)

___

### hasOverrideKeyword

• `Optional` **hasOverrideKeyword**: `boolean`

#### Defined in

[types.ts:71](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L71)

___

### hasQuestionToken

• `Optional` **hasQuestionToken**: `boolean`

#### Defined in

[types.ts:70](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L70)

___

### initializer

• `Optional` **initializer**: `string` \| `WriterFunction`

#### Defined in

[types.ts:72](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L72)

___

### isReadonly

• `Optional` **isReadonly**: `boolean`

#### Defined in

[types.ts:69](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L69)

___

### isRestParameter

• `Optional` **isRestParameter**: `boolean`

#### Defined in

[types.ts:73](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L73)

___

### name

• **name**: `string`

#### Defined in

[types.ts:67](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L67)

___

### scope

• `Optional` **scope**: `Scope`

#### Defined in

[types.ts:75](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L75)

___

### statements

• `Optional` **statements**: `string` \| `WriterFunction` \| (`string` \| `WriterFunction`)[]

#### Defined in

[types.ts:74](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L74)

___

### type

• `Optional` **type**: `string` \| `WriterFunction`

#### Defined in

[types.ts:68](https://github.com/linbudu599/morpher/blob/387f7fa/packages/types/src/types.ts#L68)
