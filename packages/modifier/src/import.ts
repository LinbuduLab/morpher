import { SourceFile, SyntaxKind } from "ts-morph";
import { getImportDec, getModuleSpecifierText } from "@ts-morpher/helper";
import { checkImportExistByModSpec } from "@ts-morpher/checker";
import { addImportDeclaration } from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

export function addNamedImportsMember(
  source: SourceFile,
  importSpec: string,
  members: string[],
  apply = true
): void {
  const importDecs = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  if (!importDecs?.length) {
    addImportDeclaration(
      source,
      members,
      importSpec,
      ImportType.NAMED_IMPORTS,
      apply
    );

    return;
  }

  const targetImportDec = importDecs.find(
    (dec) => getModuleSpecifierText(dec) === importSpec
  );

  if (!targetImportDec) {
    addImportDeclaration(
      source,
      members,
      importSpec,
      ImportType.NAMED_IMPORTS,
      apply
    );

    return;
  }

  const importClause = targetImportDec.getImportClause()!;
  const namedImports = importClause
    .getNamedImports()
    .map((namedImport) => namedImport.getText());

  const namedImportsCanBeAdded = members.filter(
    (mem) => !namedImports.includes(mem)
  );

  if (!namedImportsCanBeAdded.length) {
    return;
  }

  targetImportDec.addNamedImports(namedImportsCanBeAdded);

  apply && source.saveSync();
}

export function removeNamedImportsMember(
  source: SourceFile,
  importSpec: string,
  members: string[],
  apply = true
): void {
  if (!checkImportExistByModSpec(source, importSpec)) {
    return;
  }

  const targetImportDec = getImportDec(source, importSpec)!;

  const importClause = targetImportDec.getImportClause()!;
  const namedImports = importClause
    .getNamedImports()
    .map((namedImport) => namedImport.getText());

  const namedImportsCanBeRemoved = members.filter(
    (mem) => !namedImports.includes(mem)
  );

  const updatedNamedImports = namedImports.filter(
    (member) => !namedImportsCanBeRemoved.includes(member)
  );

  if (!namedImportsCanBeRemoved.length) {
    return;
  }

  targetImportDec.removeNamedImports();
  targetImportDec.addNamedImports(updatedNamedImports);

  apply && source.saveSync();
}

export function updateImportSpecifier(
  source: SourceFile,
  prevSpec: string,
  updatedSpec: string,
  apply = true
) {
  if (!checkImportExistByModSpec(source, prevSpec)) {
    return;
  }

  const targetImport = getImportDec(source, prevSpec)!;

  targetImport.setModuleSpecifier(updatedSpec);

  apply && source.saveSync();
}

export function updateDefaultImportClause(
  source: SourceFile,
  specifier: string,
  updatedClause: string,
  apply = true
) {
  if (!checkImportExistByModSpec(source, specifier)) {
    return;
  }
  const targetImport = getImportDec(source, specifier);

  if (!targetImport?.getDefaultImport()) {
    return;
  }

  targetImport.setDefaultImport(updatedClause);

  apply && source.saveSync();
}

export function updateNamespaceImportClause(
  source: SourceFile,
  specifier: string,
  updatedNamespace: string,
  apply = true
) {
  if (!checkImportExistByModSpec(source, specifier)) {
    return;
  }

  const targetImport = getImportDec(source, specifier);

  if (!targetImport?.getNamespaceImport()) {
    return;
  }

  targetImport.setNamespaceImport(updatedNamespace);

  apply && source.saveSync();
}
