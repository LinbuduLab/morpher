import { SourceFile, SyntaxKind } from "ts-morph";
import { getModuleSpecifierText } from "./get-import-declaration";
import { addImportDeclaration } from "./add-import-declaration";
import { ImportType } from "../typings/import";

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
