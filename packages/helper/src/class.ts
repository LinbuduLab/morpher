import {
  SourceFile,
  SyntaxKind,
  MethodDeclaration,
  PropertyDeclaration,
  Decorator,
  ClassDeclaration,
} from "ts-morph";

import { getDeclarationIdentifierByKind, MaybyArray } from "./util";

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

  return classDeclarationList
    ? className
      ? classDeclarationList.find((cls) => cls.getName() === className)
      : classDeclarationList
    : [];
}

/**
 * Return all class identifiers in source file
 * @param source
 * @returns
 */
export function getClassIdentifiers(source: SourceFile): string[] {
  return getClassDeclarations(source).map(getDeclarationIdentifierByKind);
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
): MethodDeclaration[];

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
): MaybyArray<MethodDeclaration> {
  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return methodName ? undefined : [];
  }

  const methods = targetClass.getMethods();

  return methodName
    ? methods.find((m) => getDeclarationIdentifierByKind(m) === methodName)
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
  return (getClassMethodDeclarations(source, className) ?? []).map((m) =>
    m.getName()
  );
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
): PropertyDeclaration | undefined;

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
    return propName ? undefined : [];
  }

  const props = targetClass.getProperties();

  return propName
    ? props.find((p) => getDeclarationIdentifierByKind(p) === propName)
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
): string[] | undefined {
  return (getClassPropDeclarations(source, className) ?? []).map((p) =>
    p.getName()
  );
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
    return decoratorName ? undefined : [];
  }

  const decorators = targetClass.getDecorators();

  return decoratorName
    ? decorators.find(
        (d) => getDeclarationIdentifierByKind(d) === decoratorName
      )
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
): string[] | undefined {
  return (getClassDecorators(source, className) ?? []).map((d) => d.getName());
}

/**
 * Return method modifiers flags like public / static / readonly
 * @param source
 * @param className
 * @param methodName
 * @returns
 */
export function getClassMethodModifiers(
  source: SourceFile,
  className: string,
  methodName: string
): string[] | undefined {
  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return methodName ? undefined : [];

  return targetMethod.getModifiers().map((m) => m.getText());
}

/**
 * Return prop modifiers flags like public / static / readonly
 * @param source
 * @param className
 * @param propName
 * @returns
 */ export function getClassPropModifiers(
  source: SourceFile,
  className: string,
  propName: string
): string[] | undefined {
  const targetProp = getClassPropDeclarations(source, className, propName);

  if (!targetProp) return propName ? undefined : [];

  return targetProp.getModifiers().map((m) => m.getText());
}
