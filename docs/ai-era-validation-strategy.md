# 在 AI 时代，为什么我要采用「开发不拦风格、提交前统一做 Type Check + ESLint 校验」

> 这篇文章是我对团队和外部伙伴的统一说明：
> 我们不是在“降低工程标准”，而是在 AI 编码时代，把校验策略升级为更高效、更可靠的工程系统。

## 一、先说结论

我们的策略是：

1. AI 写代码优先，开发过程不被风格问题打断。
2. 类型正确性必须强约束，TypeScript 校验不能退。
3. 仅保留高价值校验，统一在 pre-commit 执行。
4. 工具链采用 Next.js 16 官方推荐的 ESLint CLI 方案，不再依赖 Biome。

一句话总结：

**风格不拦路，正确性必须过门。**

---

## 二、我们到底在解决什么问题？

很多团队在 AI 编码落地时会遇到同一个矛盾：

- AI 产出很快，但被格式化、引号、分号、排序这类规则频繁打断。
- 开发体验变差，AI 优势被工具噪音抵消。
- 同时又担心“放松校验会不会带来线上风险”。

我的判断是：
问题不是“要不要校验”，而是“**该校验什么，什么时候校验**”。

---

## 三、决策原则：只保留高价值约束

我按以下优先级做决策：

1. **必须保留**：会导致运行失败、类型错误、类型逃逸的规则。
2. **应当降级**：纯风格、纯格式、低业务价值的问题。
3. **流程统一**：不要靠“每个人记得跑哪些命令”，必须脚本化、可执行。

这就是为什么我们最终收敛到：

- `tsc --noEmit`（类型安全底线）
- `eslint .`（Next.js 16 官方 lint 入口）
- `pre-commit` 执行 `verify`（统一守门）

---

## 四、最终落地方案（可直接复制）

### 1) 命令入口

```json
{
  "scripts": {
    "check": "eslint .",
    "typecheck": "tsc --noEmit",
    "verify": "pnpm typecheck && pnpm check"
  }
}
```

### 2) pre-commit 守门（只做 verify）

```sh
#!/usr/bin/env sh
set -eu

staged_files=$(git diff --cached --name-only --diff-filter=ACMR)
if [ -z "$staged_files" ]; then
  exit 0
fi

pnpm verify
```

### 3) ESLint 规则偏“正确性”，不偏“风格”

```js
rules: {
  '@typescript-eslint/ban-ts-comment': ['error', {
    'ts-expect-error': 'allow-with-description',
    'ts-ignore': true,
    'ts-nocheck': true,
    minimumDescriptionLength: 10
  }],
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',

  // 降噪：不让低价值风格问题阻断开发
  '@typescript-eslint/no-unused-vars': 'off',
  'import/no-anonymous-default-export': 'off',
  'react/no-unescaped-entities': 'off'
}
```

---

## 五、Good vs Bad：为什么「开发不拦风格、提交前统一校验正确性」更好

## Bad（看起来严格，实际上在内耗）

- 开发过程被单双引号、分号、格式化持续打断。
- AI 刚产出代码就被低价值规则重写，迭代节奏断裂。
- 提交 diff 充满格式噪音，评审看不到真正业务变化。

## Good（高信号校验 + 低噪音协作）

- 开发主循环聚焦业务正确性和类型安全。
- AI 产出可以快速进入“可运行、可验证”状态。
- pre-commit 统一守门，流程稳定且团队认知一致。

---

## 六、该策略的实际收益

1. 质量不降：类型和关键正确性规则仍然强制。
2. 效率提升：开发者和 AI 都少被低价值问题打断。
3. 协作更稳：统一 `verify`，不依赖个人习惯。
4. 评审更清晰：代码评审更聚焦行为变化，不被格式噪音淹没。

---

## 七、常见质疑与回答

### 质疑 1：不在开发阶段强推风格，会不会代码变乱？

回答：
风格不是不要，而是**后置**。
我们选择“不阻断开发”，不是“放弃规范”。规范通过统一流程（pre-commit）维护，而不是在主循环制造阻力。

### 质疑 2：AI 会不会写出不安全代码？

回答：
这正是我们保留 `typecheck + eslint(correctness)` 的原因。
我们去掉的是低价值噪音，不是高价值质量门禁。

### 质疑 3：为什么不用多套工具一起校验？

回答：
工具越多，重叠越大，噪音越高。
在 Next.js 16 里，官方 lint 路径就是 ESLint CLI。我们遵循官方方案，并在此基础上定制“高信号规则集”。

---

## 八、对外宣讲的一句话版本

**在 AI 时代，我们把校验从“风格驱动”升级为“正确性驱动”：开发不被样式问题打断，提交前统一执行 TypeScript 与关键 lint 守门。**

这不是降低标准，而是更专业的工程取舍。
