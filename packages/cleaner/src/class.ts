import { SourceFile } from "ts-morph";

import {
  getClassDeclarations,
  getClassMethodDeclarations,
  getClassPropDeclarations,
  getClassDecorators,
} from "@ts-morpher/helper";
import {
  checkClassExistInSourceFile,
  checkMethodExistInClass,
  checkPropExistInClass,
  checkDecoratorExistInClass,
} from "@ts-morpher/checker";

/**
 * Remove class declaration by identifier.
 * @param source SourceFile
 * @param classIdentifier
 * @param apply save source file
 * @returns
 */
export function removeClass(
  source: SourceFile,
  classIdentifier: string,
  apply = true
) {
  if (!checkClassExistInSourceFile(source, classIdentifier)) {
    return;
  }

  getClassDeclarations(source, classIdentifier).remove();

  apply && source.saveSync();
}

/**
 * Remove class method declaration by identifier.
 * @param source SourceFile
 * @param classIdentifier
 * @param methodIdentifier
 * @param apply save source file
 * @returns
 */
export function removeClassMethod(
  source: SourceFile,
  classIdentifier: string,
  methodIdentifier: string,
  apply = true
) {
  if (
    !checkClassExistInSourceFile(source, classIdentifier) ||
    !checkMethodExistInClass(source, classIdentifier, methodIdentifier)
  ) {
    return;
  }

  getClassMethodDeclarations(
    source,
    classIdentifier,
    methodIdentifier
  ).remove();

  apply && source.saveSync();
}

/**
 * Remove class property declaration by identifier.
 * @param source SourceFile
 * @param classIdentifier
 * @param propIdentifier
 * @param apply save source file
 * @returns
 */
export function removeClassProp(
  source: SourceFile,
  classIdentifier: string,
  propIdentifier: string,
  apply = true
) {
  if (
    !checkClassExistInSourceFile(source, classIdentifier) ||
    !checkPropExistInClass(source, classIdentifier, propIdentifier)
  ) {
    return;
  }

  getClassPropDeclarations(source, classIdentifier, propIdentifier).remove();

  apply && source.saveSync();
}

/**
 * Remove class decorator declaration by identifier.
 * @param source SourceFile
 * @param classIdentifier
 * @param decoratorIdentifier
 * @param apply save source file
 * @returns
 */
export function removeClassDecorator(
  source: SourceFile,
  classIdentifier: string,
  decoratorIdentifier: string,
  apply = true
) {
  if (
    !checkClassExistInSourceFile(source, classIdentifier) ||
    !checkDecoratorExistInClass(source, classIdentifier, decoratorIdentifier)
  ) {
    return;
  }

  getClassDecorators(source, classIdentifier, decoratorIdentifier).remove();

  apply && source.saveSync();
}
