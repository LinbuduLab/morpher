[@ts-morpher/types](../README.md) / [types](../modules/types.md) / IGenericTypeParam

# Interface: IGenericTypeParam

[types](../modules/types.md).IGenericTypeParam

Shared type parameter structure

## Table of contents

### Properties

- [constraint](types.IGenericTypeParam.md#constraint)
- [default](types.IGenericTypeParam.md#default)
- [name](types.IGenericTypeParam.md#name)

## Properties

### constraint

• `Optional` **constraint**: `string` \| `WriterFunction`

Default in `T extends Condition = Default`

#### Defined in

[types.ts:17](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L17)

___

### default

• `Optional` **default**: `string` \| `WriterFunction`

Condition in `T extends Condition = Default`

#### Defined in

[types.ts:13](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L13)

___

### name

• **name**: `string`

T in `T extends Condition = Default`

#### Defined in

[types.ts:9](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/types/src/types.ts#L9)
