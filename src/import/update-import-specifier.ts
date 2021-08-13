import { SourceFile } from "ts-morph";
import { getImportDeclaration } from "./get-import-declaration";
import { importDeclarationExist } from "./has-import-declaration";

export function updateImportSpecifier(
  source: SourceFile,
  prevSpec: string,
  updatedSpec: string,
  apply = true
) {
  if (!importDeclarationExist(source, prevSpec)) {
    return;
  }

  const targetImport = getImportDeclaration(source, prevSpec)!;

  targetImport.setModuleSpecifier(updatedSpec);

  apply && source.saveSync();
}
