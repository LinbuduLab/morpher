import {
  SourceFile,
  SyntaxKind,
  DecoratorStructure,
  StructureKind,
  MethodDeclaration,
  PropertyDeclaration,
} from "ts-morph";

export function getExistClassMethodsDeclaration(
  source: SourceFile,
  className: string
): MethodDeclaration[];

export function getExistClassMethodsDeclaration(
  source: SourceFile,
  className: string,
  methodName: string
): MethodDeclaration;

// 获得类的方法声明，可根据方法名查找
export function getExistClassMethodsDeclaration(
  source: SourceFile,
  className: string,
  methodName?: string
) {
  const classDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.ClassDeclaration);

  const targetClass = classDeclarations.filter(
    (classDecs) =>
      classDecs.getFirstChildByKind(SyntaxKind.Identifier).getText() ===
      className
  );

  if (!targetClass.length) {
    return;
  }

  const targetClassItem = targetClass[0];

  const methods = targetClassItem.getMethods();

  if (methodName) {
    return methods.filter(
      (m) =>
        m.getFirstChildByKind(SyntaxKind.Identifier).getText() === methodName
    )[0];
  } else {
    return methods;
  }
}

// 获取类的所有方法名称
export function getExistClassMethods(source: SourceFile, className: string) {
  return getExistClassMethodsDeclaration(source, className).map((m) =>
    m.getName()
  );
}

export function getExistClassPropDeclarations(
  source: SourceFile,
  className: string
): PropertyDeclaration[];

export function getExistClassPropDeclarations(
  source: SourceFile,
  className: string,
  propName: string
): PropertyDeclaration[];

// 获取类的属性声明，可根据属性名查找
export function getExistClassPropDeclarations(
  source: SourceFile,
  className: string,
  propName?: string
): PropertyDeclaration | PropertyDeclaration[] {
  const classDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.ClassDeclaration);

  const targetClass = classDeclarations.filter(
    (classDecs) =>
      classDecs.getFirstChildByKind(SyntaxKind.Identifier).getText() ===
      className
  );

  if (!targetClass.length) {
    return;
  }

  const targetClassItem = targetClass[0];

  const props = targetClassItem.getProperties();

  if (propName) {
    return props.filter(
      (m) => m.getFirstChildByKind(SyntaxKind.Identifier).getText() === propName
    )[0];
  } else {
    return props;
  }
}

// 获取类的属性名
export function getExistClassProps(source: SourceFile, className: string) {
  return getExistClassPropDeclarations(source, className).map((m) =>
    m.getName()
  );
}
