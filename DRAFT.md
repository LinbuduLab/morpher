# Draft of API

分类：import / export / class / statements / types / function / jsx(tsx)

## Checker

- 基于 ms 检查 import 类型
- 基于 dec 检查 import 类型
- 检查是否是 xx 导入
- 检查是否有导入存在
- 检查指定导入是否存在
- 检查是否是仅类型导入
- 检查 export 类型 （var let const）
- 检查 export 是否存在
- 检查是否是 interface / type 导出
- 检查 class 是否有 xx 装饰器
- 检查 class 是否存在
- 检查 statements 是否存在
- 检查 interface type 是否存在
- 检查函数是否拥有重载
- 检查函数是否有参数，返回值
- 检查函数是否是箭头函数
- 检查函数是否存在

## Helper

- 获取 import 声明
- 获取所有仅类型声明
- 获取所有 import specifier
- 获取所有仅类型声明的 specifier
- 获取所有 export 的 identifiers
- 获取所有 type / interface export 的 identifier
- 获取所有 export statements
- 获取所有 type / interface 的 declaration

## Cleaner

- 基于 ms 移除导入
- 移除所有导入
- 移除所有仅类型导入
- 基于 var 移除导出
- 基于 export type 移除导出
- 移除 type interface 导出

## Creator

- 创建导入
- 创建仅类型导入
- 创建导出
- 创建类型导出

## Modifier

## Types
