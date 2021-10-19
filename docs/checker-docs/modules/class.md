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

▸ **checkClassExistInSourceFile**(`source`, `className`): `boolean`

Check does class exist in source file

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:29](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L29)

___

### checkClassHasDecorators

▸ **checkClassHasDecorators**(`source`, `className`): `boolean`

Check class has decorator

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:112](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L112)

___

### checkClassHasMethods

▸ **checkClassHasMethods**(`source`, `className`): `boolean`

Check class has method member

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:89](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L89)

___

### checkClassHasProps

▸ **checkClassHasProps**(`source`, `prop`): `boolean`

Check class has prop member

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `prop` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:102](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L102)

___

### checkDecoratorExistInClass

▸ **checkDecoratorExistInClass**(`source`, `className`, `decoratorName`): `boolean`

Check prop exist in class declaration

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `decoratorName` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:73](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L73)

___

### checkIsDecoratorFactory

▸ **checkIsDecoratorFactory**(`source`, `className`, `decoratorName`): `boolean`

Check is decorator factory (`@Foo()`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `decoratorName` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:126](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L126)

___

### checkMethodExistInClass

▸ **checkMethodExistInClass**(`source`, `className`, `methodName`): `boolean`

Check method exist in class declaration

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `methodName` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:43](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L43)

___

### checkPropExistInClass

▸ **checkPropExistInClass**(`source`, `className`, `prop`): `boolean`

Check prop exist in class declaration

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |
| `className` | `string` |
| `prop` | `string` |

#### Returns

`boolean`

#### Defined in

[class.ts:58](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L58)

___

### checkSourceFileHasClass

▸ **checkSourceFileHasClass**(`source`): `boolean`

Check is there class defined in source file

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `SourceFile` |

#### Returns

`boolean`

#### Defined in

[class.ts:19](https://github.com/linbudu599/morpher/blob/e1b7ece/packages/checker/src/class.ts#L19)
