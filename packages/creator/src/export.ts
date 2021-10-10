import {
  ImportDeclaration,
  SourceFile,
  SyntaxKind,
  TryStatement,
  VariableDeclarationKind,
} from "ts-morph";
import ow from "ow";

import { ensureArray, MaybyArray } from "@ts-morpher/helper";
import { ExportType } from "@ts-morpher/types";

/**
 * Create a base export variable statement
 * @param source
 * @param identifier variable identifier, foo in export const foo = 'bar'
 * @param initializer initializer(only string), bar in export const foo = 'bar'
 * @param kind declaration kind
 * @param apply save source file
 */
export function createBaseVariableExport(
  source: SourceFile,
  identifier: string,
  initializer: string,
  kind: VariableDeclarationKind,
  apply = true
) {
  source.addVariableStatement({
    isExported: true,
    declarations: [
      {
        name: identifier,
        initializer,
      },
    ],
    declarationKind: kind,
  });

  apply && source.saveSync();
}

interface IGenericTypeParam {
  name: string;
  default: string;
  constraint: string;
}

/**
 * Create base type alias export
 * @param source 
 * @param identifier 
 * @param typeInitializer 
 * @param genericTypeParams 
 * @param apply 
 * @example
 * createBaseTypeExport(source, "Foo", "Record<T, unknown>", [
  {
    name: "T",
    default: "'default_string_literal'",
    constraint: "string",
  },
]);

create following statement:

export type Foo<T extends string = "default_string_literal"> = Record<
  T,
  unknown
>;

 */
export function createBaseTypeExport(
  source: SourceFile,
  identifier: string,
  typeInitializer: string,
  genericTypeParams: Partial<IGenericTypeParam>[],
  apply = true
) {
  source.addTypeAlias({
    isExported: true,
    name: identifier,
    type: typeInitializer,
    typeParameters: genericTypeParams.map((typeParam) => ({
      name: typeParam.name,
      default: typeParam.default,
      constraint: typeParam.constraint,
    })),
  });

  apply && source.saveSync();
}
