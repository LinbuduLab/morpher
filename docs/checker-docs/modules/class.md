[@ts-morpher/checker](../README.md) / class

# Module: class

## Table of contents

### Functions

- [checkClassExistInSourceFile](class.md#checkclassexistinsourcefile)
- [checkClassHasDecorators](class.md#checkclasshasdecorators)
- [checkClassHasMethods](class.md#checkclasshasmethods)
- [checkClassHasProps](class.md#checkclasshasprops)
- [checkDecoratorExistInClass](class.md#checkdecoratorexistinclass)
- [checkIsDecoratorFactory](class.md#checkisdecoratorfactory)
- [checkMethodExistInClass](class.md#checkmethodexistinclass)
- [checkPropExistInClass](class.md#checkpropexistinclass)
- [checkSourceFileHasClass](class.md#checksourcefilehasclass)

## Functions

### checkClassExistInSourceFile

▸ **checkClassExistInSourceFile**(`source`, `classIdentifier`): `boolean`

Check does class declaration exist in source file by class identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `classIdentifier` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:29](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L29)

___

### checkClassHasDecorators

▸ **checkClassHasDecorators**(`source`, `className`): `boolean`

Check class has decorator defined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:112](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L112)

___

### checkClassHasMethods

▸ **checkClassHasMethods**(`source`, `className`): `boolean`

Check does class has method defined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:89](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L89)

___

### checkClassHasProps

▸ **checkClassHasProps**(`source`, `prop`): `boolean`

Check class has prop defined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `prop` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:102](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L102)

___

### checkDecoratorExistInClass

▸ **checkDecoratorExistInClass**(`source`, `className`, `decoratorName`): `boolean`

Check does decorator exist in class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `decoratorName` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:73](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L73)

___

### checkIsDecoratorFactory

▸ **checkIsDecoratorFactory**(`source`, `className`, `decoratorName`): `boolean`

Check is a decorator factory (`@Foo()`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `decoratorName` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:126](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L126)

___

### checkMethodExistInClass

▸ **checkMethodExistInClass**(`source`, `className`, `methodName`): `boolean`

Check does method exist in class declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `methodName` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:43](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L43)

___

### checkPropExistInClass

▸ **checkPropExistInClass**(`source`, `className`, `propName`): `boolean`

Check does prop exist in class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |
| `className` | `string` |  |
| `propName` | `string` |  |

#### Returns

`boolean`

#### Defined in

[class.ts:58](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L58)

___

### checkSourceFileHasClass

▸ **checkSourceFileHasClass**(`source`): `boolean`

Check source file has class declarations exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `SourceFile` | SourceFile |

#### Returns

`boolean`

#### Defined in

[class.ts:19](https://github.com/linbudu599/morpher/blob/25ef250/packages/checker/src/class.ts#L19)
