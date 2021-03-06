[@ts-morpher/modifier](../README.md) / [export](../modules/export.md) / IBaseInterfaceStructure

# Interface: IBaseInterfaceStructure

[export](../modules/export.md).IBaseInterfaceStructure

Basic interface structure.

## Hierarchy

- `ISharedTypeStructure`

  ↳ **`IBaseInterfaceStructure`**

## Table of contents

### Properties

- [extends](export.IBaseInterfaceStructure.md#extends)
- [hasDeclareKeyword](export.IBaseInterfaceStructure.md#hasdeclarekeyword)
- [isExported](export.IBaseInterfaceStructure.md#isexported)
- [name](export.IBaseInterfaceStructure.md#name)
- [typeParameters](export.IBaseInterfaceStructure.md#typeparameters)

## Properties

### extends

• `Optional` **extends**: `WriterFunction` \| (`string` \| `WriterFunction`)[]

#### Defined in

[modifier/src/export.ts:150](https://github.com/linbudu599/morpher/blob/2a43a9a/packages/modifier/src/export.ts#L150)

___

### hasDeclareKeyword

• `Optional` **hasDeclareKeyword**: `boolean`

#### Inherited from

ISharedTypeStructure.hasDeclareKeyword

#### Defined in

types/dist/types.d.ts:55

___

### isExported

• `Optional` **isExported**: `boolean`

#### Inherited from

ISharedTypeStructure.isExported

#### Defined in

types/dist/types.d.ts:54

___

### name

• **name**: `string`

#### Inherited from

ISharedTypeStructure.name

#### Defined in

types/dist/types.d.ts:49

___

### typeParameters

• `Optional` **typeParameters**: `IGenericTypeParam`[]

{@link IGenericTypeParam}

#### Inherited from

ISharedTypeStructure.typeParameters

#### Defined in

types/dist/types.d.ts:53
