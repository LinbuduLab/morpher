import { SourceFile, SyntaxKind } from "ts-morph";
import { getImportDeclarations } from "@ts-morpher/helper";
import { checkImportExistByModuleSpecifier } from "@ts-morpher/checker";
import { addImportDeclaration } from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

/**
 * Add new members to the namespace import
 * @param source
 * @param importSpec namespace import specifier
 * @param members import clause members to add
 * @param createOnInexist create a namespace import declaration when target import not found
 * @param apply save source file
 * @returns
 */
export function addNamedImportMembers(
  source: SourceFile,
  importSpec: string,
  members: string[],
  createOnInexist = false,
  apply = true
): void {
  const targetImport = getImportDeclarations(source, importSpec);

  if (!targetImport && createOnInexist) {
    addImportDeclaration(
      source,
      members,
      importSpec,
      ImportType.NAMED_IMPORTS,
      apply
    );

    return;
  }

  const importClause = targetImport.getImportClause()!;
  const namedImports = importClause
    .getNamedImports()
    .map((namedImport) => namedImport.getText());

  const namedImportsCanBeAdded = members.filter(
    (mem) => !namedImports.includes(mem)
  );

  if (!namedImportsCanBeAdded.length) {
    return;
  }

  targetImport.addNamedImports(namedImportsCanBeAdded);

  apply && source.saveSync();
}

/**
 * Remove members in the namespace import
 * @param source
 * @param importSpec namespace import specifier
 * @param members import clause members to remove
 * @param apply save source file
 * @returns
 */
export function removeNamedImportMember(
  source: SourceFile,
  importSpec: string,
  members: string[],
  apply = true
): void {
  if (!checkImportExistByModuleSpecifier(source, importSpec)) {
    return;
  }

  const targetImport = getImportDeclarations(source, importSpec)!;

  const importClause = targetImport.getImportClause()!;

  const namedImports = importClause
    .getNamedImports()
    .map((namedImport) => namedImport.getText());

  const namedImportsCanBeRemoved = members.filter((mem) =>
    namedImports.includes(mem)
  );

  if (!namedImportsCanBeRemoved.length) {
    return;
  }

  const updatedNamedImports = namedImports.filter(
    (member) => !namedImportsCanBeRemoved.includes(member)
  );

  targetImport.removeNamedImports();
  targetImport.addNamedImports(updatedNamedImports);

  apply && source.saveSync();
}

/**
 *
 * @param source
 * @param moduleSpecifier import specifier
 * @param updatedModuleSpecifier updated import specifier
 * @param apply save source file
 * @returns
 */
export function updateImportSpecifier(
  source: SourceFile,
  moduleSpecifier: string,
  updatedModuleSpecifier: string,
  apply = true
) {
  if (!checkImportExistByModuleSpecifier(source, moduleSpecifier)) {
    return;
  }

  const targetImport = getImportDeclarations(source, moduleSpecifier);

  targetImport.setModuleSpecifier(updatedModuleSpecifier);

  apply && source.saveSync();
}

/**
 * Set import clause of default import directly
 * @param source
 * @param specifier import specifier
 * @param updatedClause import clause to set
 * @param apply save source file
 * @returns
 */
export function updateDefaultImportClause(
  source: SourceFile,
  specifier: string,
  updatedClause: string,
  apply = true
) {
  if (!checkImportExistByModuleSpecifier(source, specifier)) {
    return;
  }

  const targetImport = getImportDeclarations(source, specifier);

  if (!targetImport || !targetImport?.getDefaultImport()) {
    return;
  }

  targetImport.setDefaultImport(updatedClause);

  apply && source.saveSync();
}

/**
 * Set import clause of namespace import directly
 * @param source
 * @param specifier import specifier
 * @param updatedNamespace import clause to set
 * @param apply save source file
 * @returns
 */
export function updateNamespaceImportClause(
  source: SourceFile,
  specifier: string,
  updatedNamespace: string,
  apply = true
) {
  if (!checkImportExistByModuleSpecifier(source, specifier)) {
    return;
  }

  const targetImport = getImportDeclarations(source, specifier);

  if (!targetImport || !targetImport?.getNamespaceImport()) {
    return;
  }

  targetImport.setNamespaceImport(updatedNamespace);

  apply && source.saveSync();
}
