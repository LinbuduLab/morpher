[@ts-morpher/creator](../README.md) / export

# Module: export

## Table of contents

### Functions

- [createBaseInterfaceExport](export.md#createbaseinterfaceexport)
- [createBaseTypeExport](export.md#createbasetypeexport)
- [createBaseVariableExport](export.md#createbasevariableexport)

## Functions

### createBaseInterfaceExport

▸ **createBaseInterfaceExport**(`source`, `identifier`, `interfaceExtends?`, `indexSignatures?`, `properties?`, `genericTypeParams?`, `apply?`): `void`

Create base interface export

**`example`**
```typescript
 createBaseInterfaceExport(
source,
"Foo",
["Bar", "Baz"],
[
{
keyName: "Foo",
keyType: "string",
returnType: "unknown",
isReadonly: false,
},
],
[
{
name: "name",
type: "string",
},
{
name: "age",
type: "number",
hasQuestionToken: true,
},
{
name: "other",
type: "T",
},
],
[
{
name: "T",
default: "'default_string_literal'",
constraint: "string",
},
]
);

// create following statement:
export interface Foo<T extends string = 'default_string_literal'> extends Bar, Baz {
[Foo: string]: unknown;
name: string;
age?: number;
other: T;
}
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` |  |
| `identifier` | `string` | `undefined` |  |
| `interfaceExtends` | `string`[] | `[]` | extra interfaces to extend |
| `indexSignatures` | `IInterfaceIndexSignature`[] | `[]` | {@link IInterfaceIndexSignature} specify index-signatures like [key:string]: any |
| `properties` | `IInterfaceProperty`[] | `[]` | {@link IInterfaceProperty} interface properties structure |
| `genericTypeParams` | (`string` \| `IGenericTypeParam`)[] | `[]` | {@link IGenericTypeParam} generic type params to use in interface |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:136](https://github.com/linbudu599/morpher/blob/43a898f/packages/creator/src/export.ts#L136)

___

### createBaseTypeExport

▸ **createBaseTypeExport**(`source`, `identifier`, `typeInitializer`, `genericTypeParams?`, `apply?`): `void`

Create type alias export from base structure.

**`example`**
```typescript
createBaseTypeExport(source, "Foo", "Record<T, unknown>", [
{
name: "T",
default: "'default_string_literal'",
constraint: "string",
},
]);

// create following statement:
export type Foo<T extends string = "default_string_literal"> = Record<
T,
unknown
>;
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | 'Foo' in `export type Foo = string` |
| `typeInitializer` | `string` \| `WriterFunction` | `undefined` | 'string' in `export type Foo = string` |
| `genericTypeParams?` | (`string` \| `IGenericTypeParam`)[] | `undefined` | {@link IGenericTypeParam} |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:62](https://github.com/linbudu599/morpher/blob/43a898f/packages/creator/src/export.ts#L62)

___

### createBaseVariableExport

▸ **createBaseVariableExport**(`source`, `identifier`, `initializer`, `kind`, `apply?`): `void`

Create export variable statement from base structure.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `SourceFile` | `undefined` | SourceFile |
| `identifier` | `string` | `undefined` | variable identifier, 'foo' in `export const foo = 'bar'` |
| `initializer` | `string` \| `WriterFunction` | `undefined` | initializer, 'bar' in `export const foo = 'bar'` |
| `kind` | `VariableDeclarationKind` | `undefined` | declaration kind {@link VariableDeclarationKind} |
| `apply` | `boolean` | `true` | save source file |

#### Returns

`void`

#### Defined in

[export.ts:17](https://github.com/linbudu599/morpher/blob/43a898f/packages/creator/src/export.ts#L17)
