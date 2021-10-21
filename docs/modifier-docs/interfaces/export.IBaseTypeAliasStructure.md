[@ts-morpher/modifier](../README.md) / [export](../modules/export.md) / IBaseTypeAliasStructure

# Interface: IBaseTypeAliasStructure

[export](../modules/export.md).IBaseTypeAliasStructure

Basic type alias structure

## Hierarchy

- `ISharedTypeStructure`

  ↳ **`IBaseTypeAliasStructure`**

## Table of contents

### Properties

- [hasDeclareKeyword](export.IBaseTypeAliasStructure.md#hasdeclarekeyword)
- [isExported](export.IBaseTypeAliasStructure.md#isexported)
- [name](export.IBaseTypeAliasStructure.md#name)
- [type](export.IBaseTypeAliasStructure.md#type)
- [typeParameters](export.IBaseTypeAliasStructure.md#typeparameters)

## Properties

### hasDeclareKeyword

• `Optional` **hasDeclareKeyword**: `boolean`

#### Inherited from

ISharedTypeStructure.hasDeclareKeyword

#### Defined in

types/dist/types.d.ts:37

___

### isExported

• `Optional` **isExported**: `boolean`

#### Inherited from

ISharedTypeStructure.isExported

#### Defined in

types/dist/types.d.ts:36

___

### name

• **name**: `string`

#### Inherited from

ISharedTypeStructure.name

#### Defined in

types/dist/types.d.ts:31

___

### type

• `Optional` **type**: `string` \| `WriterFunction`

#### Defined in

[modifier/src/export.ts:118](https://github.com/linbudu599/morpher/blob/9f915c5/packages/modifier/src/export.ts#L118)

___

### typeParameters

• `Optional` **typeParameters**: `IGenericTypeParam`[]

{@link IGenericTypeParam}

#### Inherited from

ISharedTypeStructure.typeParameters

#### Defined in

types/dist/types.d.ts:35
