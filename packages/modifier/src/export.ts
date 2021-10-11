import {
  ImportDeclaration,
  SourceFile,
  SyntaxKind,
  TryStatement,
  TypeAliasDeclarationStructure,
  VariableDeclarationKind,
  WriterFunction,
} from "ts-morph";
import { ensureArray, MaybyArray } from "@ts-morpher/helper";
import { ExportType } from "@ts-morpher/types";

import {} from "@ts-morpher/checker";
import {} from "@ts-morpher/creator";
import {
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
  getExportVariableIdentifiers,
  getExportVariableStatements,
} from "@ts-morpher/helper";
import {
  IGenericTypeParam,
  IInterfaceIndexSignature,
  IInterfaceProperty,
  ISharedTypeStructure,
} from "@ts-morpher/types";

export function updateVariableExportIdentifier(
  source: SourceFile,
  identifier: string,
  updatedIdentifier: string,
  apply = true
) {
  updateVariableExportStructure(
    source,
    identifier,
    {
      name: updatedIdentifier,
    },
    apply
  );
}

export function updateVariableExportKind(
  source: SourceFile,
  identifier: string,
  declarationKind: VariableDeclarationKind,
  apply = true
) {
  updateVariableExportStructure(
    source,
    identifier,
    {
      name: identifier,
      declarationKind,
    },
    apply
  );
}

interface IBaseDeclarationStructure {
  name: string;
  hasExclamationToken?: boolean;
  initializer?: string | WriterFunction;
  type?: string | WriterFunction;
}

interface IBaseVariableExportStructure {
  name: string;

  declarationKind?: VariableDeclarationKind;
  declarations?: IBaseDeclarationStructure[];

  isExported?: boolean;
  isDefaultExport?: boolean;
}

export function updateVariableExportStructure(
  source: SourceFile,
  identifier: string,
  structure: IBaseVariableExportStructure,
  apply = true
) {
  if (!getExportVariableIdentifiers(source).includes(identifier)) {
    return;
  }

  const target = getExportVariableStatements(source, identifier);

  target.set(structure);

  apply && source.saveSync();
}

interface IBaseTypeAliasStructure extends ISharedTypeStructure {
  type?: string | WriterFunction;
}

export function updateTypeExportStructure(
  source: SourceFile,
  identifier: string,
  structure: IBaseTypeAliasStructure,
  apply = true
) {
  if (!getTypeExportIdentifiers(source).includes(identifier)) {
    return;
  }

  const target = getTypeExportDeclaration(source, identifier);

  target.set(structure);

  apply && source.saveSync();
}

interface IBaseInterfaceStructure extends ISharedTypeStructure {
  extends?: (string | WriterFunction)[] | WriterFunction;
}

export function updateInterfaceExportStructure(
  source: SourceFile,
  identifier: string,
  structure: IBaseInterfaceStructure,
  apply = true
) {
  if (!getInterfaceExportIdentifiers(source).includes(identifier)) {
    return;
  }

  const target = getInterfaceExportDeclaration(source, identifier);

  target.set(structure);

  apply && source.saveSync();
}
