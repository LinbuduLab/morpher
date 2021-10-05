import {
  SourceFile,
  SyntaxKind,
  MethodDeclaration,
  PropertyDeclaration,
} from "ts-morph";

import { getDeclarationIdentifier, MaybyArray } from "./util";

/**
 * Return all method declarations inside class `className`
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
 * Return all method declarations inside class `className`
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
 * Return all method declarations inside class `className`
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
  const classDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.ClassDeclaration);

  const targetClass = classDeclarationList.find(
    (classDec) => getDeclarationIdentifier(classDec) === className
  );

  if (!targetClass) {
    return;
  }

  const methods = targetClass.getMethods();

  return methodName
    ? methods.find((m) => getDeclarationIdentifier(m) === methodName)
    : methods;
}

/**
 * Return all method identifiers inside class.
 * @param source
 * @param className
 * @returns string[]
 */
export function getExistClassMethodIdentifiers(
  source: SourceFile,
  className: string
): string[] {
  return getClassMethodDeclarations(source, className).map((m) => m.getName());
}

/**
 * Return all prop declarations inside class `className`
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
 * Return all prop declarations inside class `className`
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
 * Return all prop declarations inside class `className`
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
  const classDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.ClassDeclaration);

  const targetClass = classDeclarationList.find(
    (classDec) => getDeclarationIdentifier(classDec) === className
  );

  if (!targetClass) {
    return;
  }

  const props = targetClass.getProperties();

  return propName
    ? props.find((p) => getDeclarationIdentifier(p) === propName)
    : props;
}

/**
 * Return all prop identifiers inside class.
 * @param source
 * @param className
 * @returns string[]
 */
export function getExistClassPropIdentifiers(
  source: SourceFile,
  className: string
): string[] {
  return getClassPropDeclarations(source, className).map((p) => p.getName());
}
