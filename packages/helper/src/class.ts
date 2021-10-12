import {
  SourceFile,
  SyntaxKind,
  MethodDeclaration,
  PropertyDeclaration,
  Decorator,
  ClassDeclaration,
} from "ts-morph";

import { getDeclarationIdentifier, MaybyArray } from "./util";

/**
 * Return all class declarations in source file, specify `className` to return only matched
 * @param source
 * @returns
 */
export function getClassDeclarations(source: SourceFile): ClassDeclaration[];

/**
 * Return all class declarations in source file, specify `className` to return only matched
 * @param source
 * @returns
 */
export function getClassDeclarations(
  source: SourceFile,
  className?: string
): ClassDeclaration | undefined;

/**
 * Return all class declarations in source file, specify `className` to return only matched
 * @param source
 * @returns
 */
export function getClassDeclarations(
  source: SourceFile,
  className?: string
): MaybyArray<ClassDeclaration> | undefined {
  const classDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.ClassDeclaration);

  return className
    ? classDeclarationList.find((cls) => cls.getName() === className)
    : classDeclarationList;
}

/**
 * Return all class identifiers in source file
 * @param source
 * @returns
 */
export function getClassIdentifiers(source: SourceFile): string[] {
  return getClassDeclarations(source).map(getDeclarationIdentifier);
}

/**
 * Return all method declarations of target class
 * specify `methodName` to return only matched one.
 * @param source
 * @param className
 * @param methodName
 * @returns MethodDeclaration | MethodDeclaration[] | undefined
 */
export function getClassMethodDeclarations(
  source: SourceFile,
  className: string
): MethodDeclaration[] | undefined;

/**
 * Return all method declarations of target class
 * specify `methodName` to return only matched one.
 * @param source
 * @param className
 * @param methodName
 * @returns MethodDeclaration | MethodDeclaration[] | undefined
 */
export function getClassMethodDeclarations(
  source: SourceFile,
  className: string,
  methodName: string
): MethodDeclaration | undefined;

/**
 * Return all method declarations of target class
 * specify `methodName` to return only matched one.
 * @param source
 * @param className
 * @param methodName
 * @returns MethodDeclaration | MethodDeclaration[] | undefined
 */
export function getClassMethodDeclarations(
  source: SourceFile,
  className: string,
  methodName?: string
): MaybyArray<MethodDeclaration> | undefined {
  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  const methods = targetClass.getMethods();

  return methodName
    ? methods.find((m) => getDeclarationIdentifier(m) === methodName)
    : methods;
}

/**
 * Return all method identifiers of target class.
 * @param source
 * @param className
 * @returns string[]
 */
export function getClassMethodIdentifiers(
  source: SourceFile,
  className: string
): string[] {
  return getClassMethodDeclarations(source, className).map((m) => m.getName());
}

/**
 * Return all prop declarations of target class
 * specify `propName` to return only matched one.
 * @param source
 * @param className
 * @param propName
 * @returns PropertyDeclaration | PropertyDeclaration[] | undefined
 */
export function getClassPropDeclarations(
  source: SourceFile,
  className: string
): PropertyDeclaration[];

/**
 * Return all prop declarations of target class
 * specify `propName` to return only matched one.
 * @param source
 * @param className
 * @param propName
 * @returns PropertyDeclaration | PropertyDeclaration[] | undefined
 */
export function getClassPropDeclarations(
  source: SourceFile,
  className: string,
  propName: string
): PropertyDeclaration[];

/**
 * Return all prop declarations of target class
 * specify `propName` to return only matched one.
 * @param source
 * @param className
 * @param propName
 * @returns PropertyDeclaration | PropertyDeclaration[] | undefined
 */
export function getClassPropDeclarations(
  source: SourceFile,
  className: string,
  propName?: string
): PropertyDeclaration | PropertyDeclaration[] | undefined {
  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  const props = targetClass.getProperties();

  return propName
    ? props.find((p) => getDeclarationIdentifier(p) === propName)
    : props;
}

/**
 * Return all prop identifiers of target class.
 * @param source
 * @param className
 * @returns string[]
 */
export function getClassPropIdentifiers(
  source: SourceFile,
  className: string
): string[] {
  return getClassPropDeclarations(source, className).map((p) => p.getName());
}

/**
 * Return all decorator declarations of target class
 * specify `decoratorName` to return only matched one.
 * @param source
 * @param className
 * @param decoratorName
 * @returns Decorator | Decorator[] | undefined
 */
export function getClassDecorators(
  source: SourceFile,
  className: string
): Decorator[];

/**
 * Return all decorator declarations of target class
 * specify `decoratorName` to return only matched one.
 * @param source
 * @param className
 * @param decoratorName
 * @returns Decorator | Decorator[] | undefined
 */
export function getClassDecorators(
  source: SourceFile,
  className: string,
  decoratorName: string
): Decorator | undefined;

/**
 * Return all decorator declarations of target class
 * specify `decoratorName` to return only matched one.
 * @param source
 * @param className
 * @param decoratorName
 * @returns Decorator | Decorator[] | undefined
 */
export function getClassDecorators(
  source: SourceFile,
  className: string,
  decoratorName?: string
): MaybyArray<Decorator> | undefined {
  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  const decorators = targetClass.getDecorators();

  return decoratorName
    ? decorators.find((d) => getDeclarationIdentifier(d) === decoratorName)
    : decorators;
}

/**
 * Return all decorator identifiers of target class.
 * @param source
 * @param className
 * @returns string[]
 */
export function getClassDecoratorIdentifiers(
  source: SourceFile,
  className: string
): string[] {
  return getClassDecorators(source, className).map((d) => d.getName());
}
