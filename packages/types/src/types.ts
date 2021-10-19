import { Scope, WriterFunction } from "ts-morph";
/**
 * Shared type parameter structure
 */
export interface IGenericTypeParam {
  name: string;
  default?: string | WriterFunction;
  constraint?: string | WriterFunction;
}
/**
 * Interface index signature structure
 */
export interface IInterfaceIndexSignature {
  keyName: string;
  keyType: string;
  returnType: string | WriterFunction;
  isReadonly?: boolean;
}
/**
 * Interface property structure
 */
export interface IInterfaceProperty {
  name: string;
  hasQuestionToken?: boolean;
  type: string | WriterFunction;
}
/**
 * Type alias structure
 */
export interface ISharedTypeStructure {
  name: string;
  /**
   * {@link IGenericTypeParam}
   */
  genericTypeParams?: IGenericTypeParam[];
  isExported?: boolean;
  hasDeclareKeyword?: boolean;
}
/**
 * Class declaration structure
 */
export interface IBaseClassStructure {
  name: string;
  implements?: WriterFunction | (string | WriterFunction)[];
  extends?: string | WriterFunction;
  isAbstract?: boolean;
  isExported?: boolean;
  isDefaultExport?: boolean;
}

/**
 * Decorator structure
 */
export interface IBaseDecoratorStruct {
  name: string;
  /**
   * Arguments for a decorator factory.
   * @remarks Provide an empty array to make the structure a decorator factory.
   */
  arguments?: (string | WriterFunction)[] | WriterFunction;
  typeArguments?: string[];
}
/**
 * Class method param declaration structure
 */
export interface IBaseMethodParamStruct {
  name: string;
  type?: string | WriterFunction;
  isReadonly?: boolean;
  hasQuestionToken?: boolean;
  hasOverrideKeyword?: boolean;
  initializer?: string | WriterFunction;
  isRestParameter?: boolean;
  scope?: Scope;
  /**
   * {@link IBaseDecoratorStruct}
   */
  decorators?: IBaseDecoratorStruct[];
}
/**
 * Class method declaration structure
 */
export interface IBaseMethodStruct {
  name: string;
  isAbstract?: boolean;
  isAsync?: boolean;
  isGenerator?: boolean;
  isStatic?: boolean;
  hasQuestionToken?: boolean;
  hasOverrideKeyword?: boolean;
  /**
   * {@link IBaseMethodParamStruct}
   */
  parameters?: IBaseMethodParamStruct[];
  /**
   * {@link IGenericTypeParam}
   */
  typeParameters?: (IGenericTypeParam | string)[];
  returnType?: string | WriterFunction;
  scope?: Scope;
  /**
   * {@link IBaseDecoratorStruct}
   */
  decorators?: IBaseDecoratorStruct[];
}
/**
 * Class property declaration structure
 */
export interface IBasePropStruct {
  name: string;
  hasExclamationToken?: boolean;
  hasOverrideKeyword?: boolean;
  hasQuestionToken?: boolean;
  type?: string | WriterFunction;
  initializer?: string | WriterFunction;
  isAbstract?: boolean;
  isReadonly?: boolean;
  isStatic?: boolean;
  scope?: Scope;
  /**
   * {@link IBaseDecoratorStruct}
   */
  decorators?: IBaseDecoratorStruct[];
}
