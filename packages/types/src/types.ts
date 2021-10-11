import {
  NamedNodeStructure,
  ReadonlyableNodeStructure,
  ReturnTypedNodeStructure,
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
  isReadonly: ReadonlyableNodeStructure["isReadonly"];
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
