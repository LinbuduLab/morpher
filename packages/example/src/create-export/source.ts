import { CompilerOptions, ParsedCommandLine } from "typescript";

export type DeepPartial<T extends any> = {
        [K in keyof T]?: T extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
      };

export interface IEmpty {
    [key: string]: any;
}

export interface IFoo extends IEmpty {
    parsedCommandLine: DeepPartial<ParsedCommandLine>;
    compilerOptions: DeepPartial<CompilerOptions>;
}
