import { SourceFile } from "ts-morph";

import { getClassDeclarations } from "@ts-morpher/helper";
import {
  checkClassExistInSourceFile,
  checkMethodExistInClass,
  checkPropExistInClass,
  checkDecoratorExistInClass,
} from "@ts-morpher/checker";
import {
  IBaseMethodStruct,
  IBaseClassStructure,
  IBasePropStruct,
  IBaseDecoratorStruct,
} from "@ts-morpher/types";

/**
 * Create class declaration from base structure.
 * @param source SourceFile
 * @param baseClassStruct {@link IBaseClassStructure}
 * @param apply save source file
 * @returns
 */
export function createBaseClass(
  source: SourceFile,
  baseClassStruct: IBaseClassStructure,
  apply = true
) {
  if (checkClassExistInSourceFile(source, baseClassStruct.name)) {
    return;
  }

  source.addClass({
    ...baseClassStruct,
    properties: [],
    methods: [],
    decorators: [],
  });

  apply && source.saveSync();
}

/**
 * Create method declaration for target class, from base structure.
 * @param source SourceFile
 * @param className
 * @param baseMethodStruct {@link IBaseMethodStruct}
 * @param apply save source file
 * @returns
 */
export function createBaseClassMethod(
  source: SourceFile,
  className: string,
  baseMethodStruct: IBaseMethodStruct,
  apply = true
) {
  if (checkMethodExistInClass(source, className, baseMethodStruct.name)) {
    return;
  }

  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  targetClass.addMethod(baseMethodStruct);

  apply && source.saveSync();
}

/**
 * Create prop declaration for target class, from base structure.
 * @param source SourceFile
 * @param className
 * @param basePropStruct {@link IBasePropStruct}
 * @param apply save source file
 * @returns
 */
export function createBaseClassProp(
  source: SourceFile,
  className: string,
  basePropStruct: IBasePropStruct,
  apply = true
) {
  if (checkPropExistInClass(source, className, basePropStruct.name)) {
    return;
  }

  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  targetClass.addProperty(basePropStruct);

  apply && source.saveSync();
}

/**
 * Create decorator declaration for target class, from base structure.
 * @param source SourceFile
 * @param className
 * @param baseDecoratorStruct {@link IBaseDecoratorStruct}
 * @param apply save source file
 * @returns
 */
export function createBaseClassDecorator(
  source: SourceFile,
  className: string,
  baseDecoratorStruct: IBaseDecoratorStruct,
  apply = true
) {
  if (checkDecoratorExistInClass(source, className, baseDecoratorStruct.name)) {
    return;
  }

  const targetClass = getClassDeclarations(source, className);

  if (!targetClass) {
    return;
  }

  targetClass.addDecorator(baseDecoratorStruct);

  apply && source.saveSync();
}
