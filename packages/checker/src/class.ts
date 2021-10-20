import { SourceFile } from "ts-morph";

import {
  getClassDeclarations,
  getClassIdentifiers,
  getClassMethodDeclarations,
  getClassMethodIdentifiers,
  getClassPropDeclarations,
  getClassPropIdentifiers,
  getClassDecorators,
  getClassDecoratorIdentifiers,
} from "@ts-morpher/helper";

/**
 * Check source file has class declarations exist.
 * @param source SourceFile
 * @returns
 */
export function checkSourceFileHasClass(source: SourceFile): boolean {
  return Boolean(getClassDeclarations(source).length);
}

/**
 * Check does class declaration exist in source file by class identifier.
 * @param source SourceFile
 * @param classIdentifier
 * @returns
 */
export function checkClassExistInSourceFile(
  source: SourceFile,
  classIdentifier: string
): boolean {
  return getClassIdentifiers(source).includes(classIdentifier);
}

/**
 * Check does method exist in class declaration.
 * @param source SourceFile
 * @param className
 * @param methodName
 * @returns
 */
export function checkMethodExistInClass(
  source: SourceFile,
  className: string,
  methodName: string
): boolean {
  return getClassMethodIdentifiers(source, className).includes(methodName);
}

/**
 * Check does prop exist in class.
 * @param source SourceFile
 * @param className
 * @param propName
 * @returns
 */
export function checkPropExistInClass(
  source: SourceFile,
  className: string,
  propName: string
): boolean {
  return getClassPropIdentifiers(source, className).includes(propName);
}

/**
 * Check does decorator exist in class.
 * @param source SourceFile
 * @param className
 * @param decoratorName
 * @returns
 */
export function checkDecoratorExistInClass(
  source: SourceFile,
  className: string,
  decoratorName: string
): boolean {
  return getClassDecoratorIdentifiers(source, className).includes(
    decoratorName
  );
}

/**
 * Check does class has method defined.
 * @param source SourceFile
 * @param className
 * @returns
 */
export function checkClassHasMethods(
  source: SourceFile,
  className: string
): boolean {
  return Boolean(getClassMethodDeclarations(source, className).length);
}

/**
 * Check class has prop defined.
 * @param source SourceFile
 * @param prop
 * @returns
 */
export function checkClassHasProps(source: SourceFile, prop: string): boolean {
  return Boolean(getClassPropDeclarations(source, prop).length);
}

/**
 * Check class has decorator defined.
 * @param source SourceFile
 * @param className
 * @returns
 */
export function checkClassHasDecorators(
  source: SourceFile,
  className: string
): boolean {
  return Boolean(getClassDecorators(source, className).length);
}

/**
 * Check is a decorator factory (`@Foo()`)
 * @param source SourceFile
 * @param className
 * @param decoratorName
 * @returns
 */
export function checkIsDecoratorFactory(
  source: SourceFile,
  className: string,
  decoratorName: string
): boolean {
  const targetDecorator = getClassDecorators(source, className, decoratorName);

  return targetDecorator ? targetDecorator.isDecoratorFactory() : false;
}
