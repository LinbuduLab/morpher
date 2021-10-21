import { ImportDeclaration, SourceFile } from "ts-morph";
import { getImportDeclarations } from "@ts-morpher/helper";
import { checkImportExistByModuleSpecifier } from "@ts-morpher/checker";
import { createImportDeclaration } from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

// /**
//  * Split one `Import Declaration` into common one and type-only one
//  * - return undefined if no named imports exist
//  * - retrun [OriginImportDeclaration] if no typeImports exist in current named imports
//  * @param source
//  * @param moduleSpecifier
//  * @param typeImports
//  * @returns
//  */
// export function splitTypeOnlyImportDeclaration(
//   source: SourceFile,
//   moduleSpecifier: string,
//   typeImports: string[]
// ): [ImportDeclaration] | [ImportDeclaration, ImportDeclaration] | undefined {
//   const targetImport = getImportDeclarations(source, moduleSpecifier);
//   const namedImports = targetImport.getNamedImports().map((i) => i.getText());

//   if (!namedImports.length) return;

//   const existTypeOnlyImports = typeImports.filter((typeImport) =>
//     namedImports.includes(typeImport)
//   );

//   if (!existTypeOnlyImports.length) return [targetImport];

//   const getTypeOnlyImportDeclaration = source.addImportDeclaration({
//     namedImports: existTypeOnlyImports,
//     isTypeOnly: true,
//     moduleSpecifier,
//   });

//   targetImport.removeNamedImports();

//   targetImport.addNamedImports(
//     namedImports.filter((named) => !existTypeOnlyImports.includes(named))
//   );

//   return [targetImport, getTypeOnlyImportDeclaration];
// }

/**
 * Add new members to the namespace import.
 * @param source SourceFile
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

  if (!targetImport) {
    return createOnInexist
      ? createImportDeclaration(
          source,
          members,
          importSpec,
          ImportType.NAMED_IMPORT,
          apply
        )
      : void 0;
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
 * Remove members in the namespace import.
 * @param source SourceFile
 * @param importSpec namespace import specifier
 * @param members import clause members to remove
 * @param apply save source file
 * @returns
 */
export function removeNamedImportMembers(
  source: SourceFile,
  importSpec: string,
  members: string[],
  apply = true
): void {
  const targetImport = getImportDeclarations(source, importSpec);

  if (!targetImport) {
    return;
  }

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
 * Update import module specifier.
 * @param source SourceFile
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
  const targetImport = getImportDeclarations(source, moduleSpecifier);

  if (!targetImport) {
    return;
  }

  targetImport.setModuleSpecifier(updatedModuleSpecifier);

  apply && source.saveSync();
}

/**
 * Set import clause of default import directly.
 * @param source SourceFile
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
  const targetImport = getImportDeclarations(source, specifier);

  if (!(targetImport && targetImport.getDefaultImport())) {
    return;
  }

  targetImport.setDefaultImport(updatedClause);

  apply && source.saveSync();
}

/**
 * Set import clause of namespace import directly.
 * @param source SourceFile
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
  const targetImport = getImportDeclarations(source, specifier);

  if (!(targetImport && targetImport.getNamespaceImport())) {
    return;
  }

  targetImport.setNamespaceImport(updatedNamespace);

  apply && source.saveSync();
}
