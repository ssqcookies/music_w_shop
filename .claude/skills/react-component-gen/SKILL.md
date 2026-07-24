---
skill_name: ReactTSX组件标准化生成器
trigger_keywords:
  - 生成React组件
  - 写TSX组件
  - 创建React函数组件
  - 封装前端通用组件
  - React FC组件
exclude_scenes:
  - Vue组件、Svelte、原生JS组件
version: 1.0
author: Frontend Dev
---

## 一、适用触发条件（前置判断）
1. 当用户指令包含「React组件、TSX、函数式组件、FC、TypeScript组件、封装UI组件」任意关键词，自动启用本Skill；
2. 仅用于**React 18+/19 函数式组件**，不处理Class类组件；
3. 仅输出符合工程规范的可直接落地代码，不做多余科普解释。

## 二、强制硬性约束（否定式优先，对应Skill简洁设计原则）
### 禁止行为（优先级最高）
1. ❌ 禁止使用`any`、`unknown`模糊类型，所有变量、Props、返回值必须严格TS类型定义；
2. ❌ 禁止写内联行内样式`style={{}}`，统一使用Tailwind CSS类名；
3. ❌ 禁止直接在组件内部写大量业务请求、复杂逻辑，组件只负责UI渲染；
4. ❌ 禁止省略`memo`缓存包裹，纯展示类组件必须包裹`React.memo`做浅层渲染优化；
5. ❌ 禁止箭头函数直接赋值给FC类型，统一使用具名函数方便调试；
6. ❌ 禁止不设置`displayName`，必须给组件补充调试名称；
7. ❌ 禁止children只限定单一`ReactElement`类型，要兼容文本、数组、Fragment。

### 强制必须执行规则（祈使语气）
1. 组件结构固定顺序：导入语句 → Props接口定义 → 组件声明 → 默认导出 → displayName赋值；
2. Props接口统一命名为`I组件名Props`，导出`export interface`方便外部复用；
3. children类型必须写完整：`children?: React.ReactNode`，替换单一ReactElement的局限性；
4. 使用`FC<IProps>`约束组件类型，解构props获取参数；
5. 根节点使用`className="小写组件名"`作为外层样式钩子；
6. 所有导入区分普通导入与类型导入，类型导入加`type`关键字；
7. 组件内部预留loading、empty、error三种兜底状态注释占位；
8. 代码添加极简JSDoc注释说明组件用途、入参含义。

## 三、标准模板范本（基于你截图Recommend组件修正版）
```tsx
import { memo, ReactNode } from "react";
import type { FC } from "react";

/**
 * 推荐模块容器组件
 */
export interface IRecommendProps {
  /** 子节点内容，支持任意React子元素 */
  children?: ReactNode;
  // 后续扩展props在此追加
}

const Recommend: FC<IRecommendProps> = memo(function Recommend(props) {
  const { children } = props;

  return (
    <div className="recommend">
      <div>Recommend</div>
      {/* 子节点渲染 */}
      {children}
      {/* 可选：兜底空状态 */}
      {/* {!children && <div>暂无推荐内容</div>} */}
    </div>
  );
});

Recommend.displayName = "Recommend";

export default Recommend;