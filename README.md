# Morpher

WIP...

## Packages Deps

- checker -> helper & types
- creator -> helper & types & checker
- cleaner -> helper & types & checker
- helper -> types & checker
- modifier -> helper & types & checker
- types

## Packages

### Checker

- import
  - [x] Check `Import Declaration` exist in `Source File` by `Module Specifier` / `Import Declaration`.
  - [x] Check `Import Declaration` type(namespace / named / default) by `Module Specifier` / `Import Declaration`.
  - [x] Check is `Import Declaration` prompted type by `Module Specifier` / `Import Declaration`.
  - [ ] Check is `Import Declaration` type-only import by `Module Specifier`.
- export
  - Check `Export Declaration` exist by `Module Specifier`.
  - Check `Export Declaration` type( redirect export / direct export ) by `Module Specifier`.
- class
  - Check `Class Declaration` exist by `Class Specifier`.
  - Check `Class Method Declaration` exist by `Method Specifier`.
  - Check `Class Declaration` Decorators.
- function
  - Check `Function Declaration` exist by `Function Specifier`.
  - Check `Function Args` exist.
  - Check `Function` type (is arrow func)?
- interface / type alias

### Creator

- import
- export
- class
- function
- interface / type alias

### Helper

- import
- export
- class
- function
- interface / type alias

### Modifier

- import
- export
- class
- function
- interface / type alias

### Cleaner

- import
- export
- class
- function
- interface / type alias

## API

### Import

- [x] Add `Import Declaration` (Named / Namespce / Default).
- [x] Add `Named Import` members.
- [x] Modify `Import Clause` of `Default Import` / `Namespace Import`.
- [ ] Modify `Module Specifier` of `Import Declaration`.
- [ ] Remove `Import Declaration` by `Module Specifier`.
- [ ] Remove `Import Declaration` by `Import Type`.
- [ ] Find `Import Declaration` / `Import Module Specifier` (by `Module Specifier`).
- [ ] Judge type of `Import Declaration` (Named / Namespce / Default).

### Export

- [ ] Add const / let `Export Declaration` .
- [ ] Remove const / let `Export Declaration` .
- [ ] Modify `Identifier` of const / let `Export Declaration` .
- [ ] Find `Export Declaration` / `Export Module Specifier` (by value).
- [ ] Find `Variable Identifier` of `Export Declaration`.
- [ ] Add `Type Referrence` for `Export Declaration`.
- [ ] Add `Type Assertion` for `Export Declaration`.

### Class

- [ ] Find Class `Method Declaration` / `Method Identifier`.
- [ ] Find Class `Prop Declaration` / `Prop Identifier`.
- [ ] Add `Method Declaration` for class.
- [ ] Add `Props Declaration` for class.
- [ ] Find `Class Declaration` .
- [ ] Ensure Class `Method Declaration`.
- [ ] Ensure Class `Prop Declaration` .
- [ ] Ensure `Class Declaration` with `Decorator Declaration`
- [ ] Ensure Class `Method Declaration` with `Arguments Declaration `.
- [ ] Ensure Class `Method Declaration` with `Decorator Declaration `.
- [ ] Ensure Class `Prop Declaration` with `Decorator Declaration `.

### Function

- [ ] Find `Function Declaration` / `Function Identifier`.
- [ ] Modify `Function Declaration` identifier.
- [ ] Modify `Function Declaration` arguments.
- [ ] Modify `Function Declaration` type ( Common / Arrow Function ).

### Typing

- [ ] Create `Type Alias Declaration`.
- [ ] Remove `Type Alias Declaration`.
- [ ] Find `Type Alias Declaration`.
- [ ] Modify `Type Alias Declaration` identifier.

### Statement

- [ ] Insert `Statements` inside Class methods.
- [ ] Insert `Statements` inside Function body(start / end).
- [ ] Insert `Statements` after `Import Declaration`.
