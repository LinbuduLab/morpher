import { SourceFile, SyntaxKind } from "ts-morph";
import { getExistClassMethods } from "@ts-morpher/helper";
// 为类新增方法
export function createClassMethods(
  source: SourceFile,
  className: string,
  methods: string[],
  apply = true
) {
  const existClassMethods: string[] = getExistClassMethods(source, className);
  const methodsCanBeAdded = methods.filter(
    (method) => !existClassMethods.includes(method)
  );
  if (!methodsCanBeAdded.length) {
    return;
  }
  const classDec = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getFirstChildByKind(SyntaxKind.ClassDeclaration);

  if (!classDec) {
    return;
  }

  methodsCanBeAdded.forEach((m) => {
    classDec.addMethod({
      name: m,
      // hasQuestionToken: true,
      isAsync: false,
      parameters: [],
      returnType: "void",
      statements: 'console.log("Method Added By Midway Code Mod")',
      typeParameters: [],
    });
  });

  apply && source.saveSync();
}
