import { SourceFile, SyntaxKind, Project } from "ts-morph";
import path from "path";
import { getClassMethodDeclarations } from "@ts-morpher/helper";

// // TODO: 更新函数名、函数参数

// // export function createClassDec(source: SourceFile, identifier: string) {
// //   source.addClass({
// //     name: identifier,
// //     decorators: [
// //       {
// //         name: "ObjectType",
// //         arguments: [],
// //       },
// //     ],
// //     properties: [
// //       {
// //         name: "foo",
// //         type: "number",
// //         decorators: [
// //           {
// //             name: "Field",
// //             // create arrow func .getText() ""
// //             arguments: ["() => Int"],
// //           },
// //         ],
// //       },
// //     ],
// //     methods: [],
// //   });

// //   source.saveSync();
// // }

// export function createClassDecorator(
//   source: SourceFile,
//   identifier: string,
//   decoratorName: string
// ) {}

// const test = new Project().addSourceFileAtPath(
//   path.join(__dirname, "./sample.ts")
// );

// createClassDec(test, "Foo");

// export function createClassProp(identifier: string, prop: string) {}

// // 为类新增方法
// export function createClassMethods(
//   source: SourceFile,
//   className: string,
//   methods: string[],
//   apply = true
// ) {
//   const existClassMethods: string[] = getExistClassMethods(source, className);
//   const methodsCanBeAdded = methods.filter(
//     (method) => !existClassMethods.includes(method)
//   );
//   if (!methodsCanBeAdded.length) {
//     return;
//   }
//   const classDec = source
//     .getFirstChildByKind(SyntaxKind.SyntaxList)
//     .getFirstChildByKind(SyntaxKind.ClassDeclaration);

//   if (!classDec) {
//     return;
//   }

//   methodsCanBeAdded.forEach((m) => {
//     classDec.addMethod({
//       name: m,
//       // hasQuestionToken: true,
//       isAsync: false,
//       parameters: [],
//       returnType: "void",
//       statements: 'console.log("Method Added By Midway Code Mod")',
//       typeParameters: [],
//     });
//   });

//   apply && source.saveSync();
// }
