import { SourceFile, VariableDeclarationKind, WriterFunction } from "ts-morph";

import {
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
  getExportVariableIdentifiers,
  getExportVariableStatements,
} from "@ts-morpher/helper";
import { ISharedTypeStructure } from "@ts-morpher/types";

/**
 * update variable export identifier
 * @param source
 * @param identifier previous identifier
 * @param updatedIdentifier updated identifier
 * @param apply save source file
 */
export function updateVariableExportIdentifier(
  source: SourceFile,
  identifier: string,
  updatedIdentifier: string,
  apply = true
) {
  const initializer = getExportVariableStatements(source, identifier)
    ?.getDeclarations()[0]
    ?.getInitializer()
    ?.getText();

  updateVariableExportStructure(
    source,
    identifier,
    {
      declarations: [{ name: updatedIdentifier, initializer }],
    },
    apply
  );
}

/**
 * update variable export declaration kind
 * @param source
 * @param identifier previous identifier
 * @param declarationKind updated declaration kind
 * @param apply save source file
 */
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
      declarationKind,
    },
    apply
  );
}

/**
 * Basic variable declaration structure
 */
export interface IBaseDeclarationStructure {
  name: string;
  hasExclamationToken?: boolean;
  initializer?: string | WriterFunction;
  type?: string | WriterFunction;
}

/**
 * Basic variable structure
 */
export interface IBaseVariableExportStructure {
  declarationKind?: VariableDeclarationKind;

  /**
   * {@link IBaseDeclarationStructure}
   */
  declarations?: IBaseDeclarationStructure[];

  isExported?: boolean;
  isDefaultExport?: boolean;
}

/**
 * update base structure of variable export
 * @param source
 * @param identifier variable identifier
 * @param structure {@link IBaseVariableExportStructure} updated structure
 * @param apply save source file
 * @returns void
 */
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

/**
 * Basic type alias structure
 */
export interface IBaseTypeAliasStructure extends ISharedTypeStructure {
  type?: string | WriterFunction;
}

/**
 * update base structure of type alias export
 * @param source
 * @param identifier type alias identifier
 * @param structure {@link IBaseTypeAliasStructure} updated structure
 * @param apply save source file
 * @returns
 */
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

/**
 * Basic interface structure
 */
export interface IBaseInterfaceStructure extends ISharedTypeStructure {
  extends?: (string | WriterFunction)[] | WriterFunction;
}

/**
 * update base structure of interface export
 * @param source
 * @param identifier interface identifier
 * @param structure {@link IBaseInterfaceStructure } updated structure
 * @param apply save source file
 * @returns void
 */
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
