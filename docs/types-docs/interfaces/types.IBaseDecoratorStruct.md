[@ts-morpher/types](../README.md) / [types](../modules/types.md) / IBaseDecoratorStruct

# Interface: IBaseDecoratorStruct

[types](../modules/types.md).IBaseDecoratorStruct

Decorator structure

## Table of contents

### Properties

- [arguments](types.IBaseDecoratorStruct.md#arguments)
- [name](types.IBaseDecoratorStruct.md#name)
- [typeArguments](types.IBaseDecoratorStruct.md#typearguments)

## Properties

### arguments

• `Optional` **arguments**: `WriterFunction` \| (`string` \| `WriterFunction`)[]

Arguments for a decorator factory.

**`remarks`** Provide an empty array to make the structure a decorator factory.

#### Defined in

[types.ts:78](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L78)

___

### name

• **name**: `string`

#### Defined in

[types.ts:73](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L73)

___

### typeArguments

• `Optional` **typeArguments**: `string`[]

#### Defined in

[types.ts:79](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L79)
