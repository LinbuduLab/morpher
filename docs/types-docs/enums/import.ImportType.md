[@ts-morpher/types](../README.md) / [import](../modules/import.md) / ImportType

# Enumeration: ImportType

[import](../modules/import.md).ImportType

## Table of contents

### Enumeration members

- [DEFAULT\_IMPORT](import.ImportType.md#default_import)
- [DEFAULT\_WITH\_NAMED\_IMPORT](import.ImportType.md#default_with_named_import)
- [DIRECTLY\_IMPORT](import.ImportType.md#directly_import)
- [NAMED\_IMPORT](import.ImportType.md#named_import)
- [NAMESPACE\_IMPORT](import.ImportType.md#namespace_import)

## Enumeration members

### DEFAULT\_IMPORT

• **DEFAULT\_IMPORT** = `"DEFAULT_IMPORT"`

e.g. import path from "path"；

#### Defined in

[import.ts:16](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/import.ts#L16)

___

### DEFAULT\_WITH\_NAMED\_IMPORT

• **DEFAULT\_WITH\_NAMED\_IMPORT** = `"DEFAULT_WITH_NAMED_IMPORT"`

e.g. import ts, { transpileModule } from "typescript";

#### Defined in

[import.ts:20](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/import.ts#L20)

___

### DIRECTLY\_IMPORT

• **DIRECTLY\_IMPORT** = `"DIRECTLY_IMPORT"`

e.g. import "ui-library/dist/index.css"

#### Defined in

[import.ts:24](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/import.ts#L24)

___

### NAMED\_IMPORT

• **NAMED\_IMPORT** = `"NAMED_IMPORT"`

e.g. import { exec } from "child_process";

#### Defined in

[import.ts:12](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/import.ts#L12)

___

### NAMESPACE\_IMPORT

• **NAMESPACE\_IMPORT** = `"NAMESPACE_IMPORT"`

e.g. import * as fs from "fs";

#### Defined in

[import.ts:8](https://github.com/linbudu599/morpher/blob/43a898f/packages/types/src/import.ts#L8)
