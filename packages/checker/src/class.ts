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
  getClassMethodModifiers,
  getClassPropModifiers,
  STATIC_KEYWORD,
  PUBLIC_KEYWORD,
  PRIVATE_KEYWORD,
  PROTECTED_KEYWORD,
  ASYNC_KEYWORD,
  READONLY_KEYWORD,
} from "@ts-morpher/helper";

/**
 * Check is there class defined in source file
 * @param source
 * @returns
 */
export function checkSourceFileHasClass(source: SourceFile): boolean {
  return Boolean(getClassDeclarations(source).length);
}

/**
 * Check does class exist in source file
 * @param source
 * @param className
 * @returns
 */
export function checkClassExistInSourceFile(
  source: SourceFile,
  className: string
): boolean {
  return getClassIdentifiers(source).includes(className);
}

/**
 * Check method exist in class declaration
 * @param source
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
 * Check prop exist in class declaration
 * @param source
 * @param className
 * @param prop
 * @returns
 */
export function checkPropExistInClass(
  source: SourceFile,
  className: string,
  prop: string
): boolean {
  return getClassPropIdentifiers(source, className).includes(prop);
}

/**
 * Check prop exist in class declaration
 * @param source
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
 * Check class has method member
 * @param source
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
 * Check class has prop member
 * @param source
 * @param prop
 * @returns
 */
export function checkClassHasProps(source: SourceFile, prop: string): boolean {
  return Boolean(getClassPropDeclarations(source, prop).length);
}

/**
 * Check class has decorator
 * @param source
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
 * Check is decorator factory (`@Foo()`)
 * @param source
 * @param className
 * @param decoratorName
 * @returns
 */
export function checkIsDecoratorFactory(
  source: SourceFile,
  className: string,
  decoratorName: string
): boolean | undefined {
  const targetDecorator = getClassDecorators(source, className, decoratorName);

  if (!targetDecorator) return;

  return targetDecorator.isDecoratorFactory();
}

export function checkIsClassMethodStatic(
  source: SourceFile,
  className: string,
  methodName: string
): boolean | undefined {
  if (!getClassMethodIdentifiers(source, className).includes(methodName)) {
    return;
  }

  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return;

  return getClassMethodModifiers(source, className, methodName).includes(
    STATIC_KEYWORD
  );
}

export function checkIsClassMethodPublic(
  source: SourceFile,
  className: string,
  methodName: string
): boolean | undefined {
  if (!getClassMethodIdentifiers(source, className).includes(methodName)) {
    return;
  }

  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return;

  return getClassMethodModifiers(source, className, methodName).includes(
    PUBLIC_KEYWORD
  );
}

export function checkIsClassMethodPrivate(
  source: SourceFile,
  className: string,
  methodName: string
): boolean | undefined {
  if (!getClassMethodIdentifiers(source, className).includes(methodName)) {
    return;
  }

  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return;

  return getClassMethodModifiers(source, className, methodName).includes(
    PRIVATE_KEYWORD
  );
}

export function checkIsClassMethodProtected(
  source: SourceFile,
  className: string,
  methodName: string
): boolean | undefined {
  if (!getClassMethodIdentifiers(source, className).includes(methodName)) {
    return;
  }

  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return;

  return getClassMethodModifiers(source, className, methodName).includes(
    PROTECTED_KEYWORD
  );
}

export function checkIsClassMethodrAsync(
  source: SourceFile,
  className: string,
  methodName: string
): boolean | undefined {
  if (!getClassMethodIdentifiers(source, className).includes(methodName)) {
    return;
  }

  const targetMethod = getClassMethodDeclarations(
    source,
    className,
    methodName
  );

  if (!targetMethod) return;

  return getClassMethodModifiers(source, className, methodName).includes(
    ASYNC_KEYWORD
  );
}

export function checkIsClassPropStatic(
  source: SourceFile,
  className: string,
  prop: string
): boolean | undefined {
  if (!getClassPropIdentifiers(source, className).includes(prop)) {
    return;
  }

  const targetProp = getClassPropDeclarations(source, className, prop);

  if (!targetProp) return;

  return getClassPropModifiers(source, className, prop).includes(
    STATIC_KEYWORD
  );
}

export function checkIsClassPropPublic(
  source: SourceFile,
  className: string,
  prop: string
): boolean | undefined {
  if (!getClassPropIdentifiers(source, className).includes(prop)) {
    return;
  }

  const targetProp = getClassPropDeclarations(source, className, prop);

  if (!targetProp) return;

  return getClassPropModifiers(source, className, prop).includes(
    PUBLIC_KEYWORD
  );
}

export function checkIsClassPropPrivate(
  source: SourceFile,
  className: string,
  prop: string
): boolean | undefined {
  if (!getClassPropIdentifiers(source, className).includes(prop)) {
    return;
  }

  const targetProp = getClassPropDeclarations(source, className, prop);

  if (!targetProp) return;

  return getClassPropModifiers(source, className, prop).includes(
    PRIVATE_KEYWORD
  );
}

export function checkIsClassPropProtected(
  source: SourceFile,
  className: string,
  prop: string
): boolean | undefined {
  if (!getClassPropIdentifiers(source, className).includes(prop)) {
    return;
  }

  const targetProp = getClassPropDeclarations(source, className, prop);

  if (!targetProp) return;

  return getClassPropModifiers(source, className, prop).includes(
    PROTECTED_KEYWORD
  );
}

export function checkIsClassPropReadonly(
  source: SourceFile,
  className: string,
  prop: string
): boolean | undefined {
  if (!getClassPropIdentifiers(source, className).includes(prop)) {
    return;
  }

  const targetProp = getClassPropDeclarations(source, className, prop);

  if (!targetProp) return;

  return getClassPropModifiers(source, className, prop).includes(
    READONLY_KEYWORD
  );
}
