import {
  SourceFile,
  SyntaxKind,
  MethodDeclaration,
  PropertyDeclaration,
  Decorator,
  ClassDeclaration,
} from "ts-morph";

import { getDeclarationIdentifierByKind, MaybeArray } from "./util";

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
  className: string
): ClassDeclaration | undefined;

/**
 * Return all class declarations in source file, specify `className` to return only matched
 * @param source
 * @returns
 */
export function getClassDeclarations(
  source: SourceFile,
  className?: string
): MaybeArray<ClassDeclaration> | undefined {
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
): MaybeArray<MethodDeclaration> {
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
  return getClassMethodDeclarations(source, className).map((m) => m.getName());
}

/**
 * Return class method decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param methodName
 */
export function getClassMethodDecorators(
  source: SourceFile,
  className: string,
  methodName: string
): Decorator[];

/**
 * Return class method decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param methodName
 * @param decoratorName
 */
export function getClassMethodDecorators(
  source: SourceFile,
  className: string,
  methodName: string,
  decoratorName: string
): Decorator | undefined;

/**
 * Return class method decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param methodName
 * @param decoratorName
 */
export function getClassMethodDecorators(
  source: SourceFile,
  className: string,
  methodName: string,
  decoratorName?: string
): MaybeArray<Decorator> | undefined {
  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) {
    return decoratorName ? undefined : [];
  }

  const decorators = targetMethod.getDecorators();

  return decoratorName
    ? decorators.find((deco) => deco.getName() === decoratorName)
    : decorators;
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
  return getClassPropDeclarations(source, className).map((p) => p.getName());
}

/**
 * Return class prop decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param propName
 */
export function getClassPropDecorators(
  source: SourceFile,
  className: string,
  propName: string
): Decorator[];

/**
 * Return class prop decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param propName
 * @param decoratorName
 */
export function getClassPropDecorators(
  source: SourceFile,
  className: string,
  propName: string,
  decoratorName: string
): Decorator | undefined;

/**
 * Return class prop decorators, specify decorator name to return only matched.
 * @param source
 * @param className
 * @param propName
 * @param decoratorName
 */
export function getClassPropDecorators(
  source: SourceFile,
  className: string,
  propName: string,
  decoratorName?: string
): MaybeArray<Decorator> | undefined {
  const targetProp = getClassPropDeclarations(source, className, propName);

  if (!targetProp) {
    return decoratorName ? undefined : [];
  }

  const decorators = targetProp.getDecorators();

  return decoratorName
    ? decorators.find((deco) => deco.getName() === decoratorName)
    : decorators;
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
): MaybeArray<Decorator> | undefined {
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
  return getClassDecorators(source, className).map((d) => d.getName());
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
): string[] {
  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return [];

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
): string[] {
  const targetProp = getClassPropDeclarations(source, className, propName);

  if (!targetProp) return [];

  return targetProp.getModifiers().map((m) => m.getText());
}
