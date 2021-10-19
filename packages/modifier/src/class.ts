import { SourceFile } from "ts-morph";

import {
  getClassDeclarations,
  getClassMethodDeclarations,
  getClassPropDeclarations,
  getClassDecorators,
} from "@ts-morpher/helper";
import {
  IBaseMethodStruct,
  IBaseClassStructure,
  IBasePropStruct,
  IBaseDecoratorStruct,
} from "@ts-morpher/types";

/**
 * Update class identifier
 * @param source
 * @param classIdentifier
 * @param updatedIdentifier
 * @param apply
 * @returns
 */
export function updateClassIdentifier(
  source: SourceFile,
  classIdentifier: string,
  updatedIdentifier: string,
  apply = true
): void {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  targetClass.set({
    name: updatedIdentifier,
  });

  apply && source.saveSync();
}

/**
 * Update class decorator identifier
 * @param source
 * @param classIdentifier
 * @param decoratorIdentifier
 * @param updatedIdentifier
 * @param apply
 * @returns
 */
export function updateClassDecoratorIdentifier(
  source: SourceFile,
  classIdentifier: string,
  decoratorIdentifier: string,
  updatedIdentifier: string,
  apply = true
) {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  const targetDecorator = getClassDecorators(
    source,
    classIdentifier,
    decoratorIdentifier
  );

  if (!targetDecorator) return;

  targetDecorator.set({
    name: updatedIdentifier,
  });

  apply && source.saveSync();
}

/**
 * Update base class structure
 * @param source
 * @param classIdentifier
 * @param baseClassStruct {@link IBaseClassStructure}
 * @param apply
 * @returns
 */
export function updateBaseClassStructure(
  source: SourceFile,
  classIdentifier: string,
  baseClassStruct: IBaseClassStructure,
  apply = true
) {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  targetClass.set(baseClassStruct);

  apply && source.saveSync();
}

/**
 * Update base class method declaration structure
 * @param source
 * @param classIdentifier
 * @param methodIdentifier
 * @param baseMethodStruct {@link IBaseMethodStruct}
 * @param apply
 * @returns
 */
export function updateBaseClassMethodStructure(
  source: SourceFile,
  classIdentifier: string,
  methodIdentifier: string,
  baseMethodStruct: IBaseMethodStruct,
  apply = true
) {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  const targetMethod = getClassMethodDeclarations(
    source,
    classIdentifier,
    methodIdentifier
  );

  if (!targetMethod) return;

  targetMethod.set(baseMethodStruct);

  apply && source.saveSync();
}

/**
 * Update base class prop declaration structure
 * @param source
 * @param classIdentifier
 * @param propIdentifier
 * @param basePropStruct {@link IBasePropStruct}
 * @param apply
 * @returns
 */
export function updateBaseClassPropStructure(
  source: SourceFile,
  classIdentifier: string,
  propIdentifier: string,
  basePropStruct: IBasePropStruct,
  apply = true
) {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  const targetProp = getClassPropDeclarations(
    source,
    classIdentifier,
    propIdentifier
  );

  if (!targetProp) return;

  targetProp.set(basePropStruct);

  apply && source.saveSync();
}

/**
 * Update base class decorator declaration structure
 * @param source
 * @param classIdentifier
 * @param decoratorIdentifier
 * @param baseDecoratorStruct {@link IBaseDecoratorStruct}
 * @param apply
 * @returns
 */
export function updateBaseClassDecoratorStructure(
  source: SourceFile,
  classIdentifier: string,
  decoratorIdentifier: string,
  baseDecoratorStruct: IBaseDecoratorStruct,
  apply = true
) {
  const targetClass = getClassDeclarations(source, classIdentifier);

  if (!targetClass) return;

  const targetDecorator = getClassDecorators(
    source,
    classIdentifier,
    decoratorIdentifier
  );

  if (!targetDecorator) return;

  targetDecorator.set(baseDecoratorStruct);

  apply && source.saveSync();
}
