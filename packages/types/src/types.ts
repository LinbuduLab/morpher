import {
  NamedNodeStructure,
  ReadonlyableNodeStructure,
  ReturnTypedNodeStructure,
  Scope,
  WriterFunction,
} from "ts-morph";

export interface IGenericTypeParam {
  name: NamedNodeStructure["name"];
  default?: string | WriterFunction;
  constraint?: string | WriterFunction;
}

export interface IInterfaceIndexSignature {
  keyName: string;
  keyType: string;
  returnType: ReturnTypedNodeStructure["returnType"];
  isReadonly?: ReadonlyableNodeStructure["isReadonly"];
}

export interface IInterfaceProperty {
  name: string;
  hasQuestionToken?: boolean;
  type: string | WriterFunction;
}

export interface ISharedTypeStructure {
  name: string;
  genericTypeParams?: IGenericTypeParam[];
  isExported?: boolean;
  hasDeclareKeyword?: boolean;
}

export interface IBaseClassStructure {
  name: string;
  implements?: WriterFunction | (string | WriterFunction)[];
  extends?: string | WriterFunction;
  isAbstract?: boolean;
  isExported?: boolean;
  isDefaultExport?: boolean;
}

export interface IBaseDecoratorStruct {
  name: string;
  /**
   * Arguments for a decorator factory.
   * @remarks Provide an empty array to make the structure a decorator factory.
   */
  arguments?: (string | WriterFunction)[] | WriterFunction;
  typeArguments?: string[];
}

export interface IBaseMethodParamStruct {
  name: string;
  type?: string | WriterFunction;
  isReadonly?: boolean;
  hasQuestionToken?: boolean;
  hasOverrideKeyword?: boolean;
  initializer?: string | WriterFunction;
  isRestParameter?: boolean;
  scope?: Scope;
  decorators?: IBaseDecoratorStruct[];
}

export interface IBaseMethodStruct {
  name: string;
  isAbstract?: boolean;
  isAsync?: boolean;
  isGenerator?: boolean;
  isStatic?: boolean;
  hasQuestionToken?: boolean;
  hasOverrideKeyword?: boolean;
  parameters?: IBaseMethodParamStruct[];
  typeParameters?: (IGenericTypeParam | string)[];
  returnType?: string | WriterFunction;
  scope?: Scope;
  decorators?: IBaseDecoratorStruct[];
}

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
  decorators?: IBaseDecoratorStruct[];
}
