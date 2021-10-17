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
 * remove class declaration
 * @param source
 * @param classIdentifier
 * @param apply
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
 * remove class method declaration
 * @param source
 * @param classIdentifier
 * @param methodIdentifier
 * @param apply
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
 * Remove class property declaration
 * @param source
 * @param classIdentifier
 * @param propIdentifier
 * @param apply
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
 * Remove class decorator declarations
 * @param source
 * @param classIdentifier
 * @param decoratorIdentifier
 * @param apply
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
