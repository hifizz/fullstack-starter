# 手动测试用例清单：订阅支付（Stripe + Creem）

> 适用范围：订阅支付、试用/宽限期、退款、权限同步与前后端配置一致性。

## A. 配置与基础健康

1. 环境变量校验
- 前置：不设置 `CREEM_API_KEY` 或 `STRIPE_SECRET_KEY`
- 步骤：启动应用、访问订阅入口
- 预期：后端提示缺少配置；对应 provider 不可用

2. 试用/宽限期默认值
- 前置：`SUBSCRIPTION_TRIAL_DAYS` 未设置；`PAST_DUE_GRACE_DAYS` 未设置
- 步骤：启动服务，读取配置
- 预期：试用期默认 7 天；past_due 宽限期默认 5 天

3. 定价共享
- 前置：`src/lib/pricing.ts` 配置 `monthly=9.9`，`annual=99`
- 步骤：前端 pricing 页展示；后端创建 checkout
- 预期：前端显示与后端结算金额一致

## B. Checkout 创建与价格防篡改

4. Stripe Checkout 创建（monthly）
- 步骤：在 UI 选择 `monthly + stripe`，创建 checkout
- 预期：返回 Stripe checkout URL；金额为 $9.9

5. Creem Checkout 创建（annual）
- 步骤：选择 `annual + creem`
- 预期：返回 Creem checkout URL；金额为 $99

6. 非法 provider
- 步骤：请求 `provider=invalid`
- 预期：400，明确错误信息

7. 金额篡改防护
- 步骤：手动请求把金额改为 $0.1 或 $9999
- 预期：后端忽略前端金额，仍使用配置中的 9.9/99

8. free 计划不可结算
- 步骤：尝试 `planKey=free` 创建 checkout
- 预期：拒绝创建，提示免费计划无需支付

## C. 订阅状态与权限判断

9. 试用期激活（trial 有权限）
- 步骤：创建 trial 订阅后访问 `/api/rpc/me`
- 预期：`plan.status=trial`，`isPro=true`

10. 试用到期转付费
- 步骤：试用结束后成功扣款
- 预期：`plan.status=active`，`isPro=true`

11. 试用结束未付款
- 步骤：试用到期后未能付款
- 预期：`plan.status=canceled`（或终止状态），`isPro=false`

12. active 正常访问
- 步骤：已付费订阅访问 `/api/rpc/me`
- 预期：`isPro=true`，`plan.status=active`

13. 取消订阅（grace）
- 步骤：取消订阅但未到期
- 预期：`plan.status=grace`，`isPro=true`

14. 到期后降级
- 步骤：等待周期结束
- 预期：`plan.status=canceled`，`isPro=false`

15. past_due 宽限期仍可访问
- 步骤：制造支付失败进入 `past_due`
- 预期：在 `PAST_DUE_GRACE_DAYS=5` 内 `isPro=true`

16. past_due 超时降级
- 步骤：超过 5 天未补款
- 预期：`plan.status=canceled`，`isPro=false`

## D. Webhook 与状态同步

17. Stripe 订阅创建 webhook
- 步骤：完成 Stripe Checkout
- 预期：订阅记录写入本地表，状态 `trial/active`

18. Stripe 付款失败 -> past_due
- 步骤：使用失败支付方式，触发 `past_due`
- 预期：本地订阅更新为 `past_due`，`isPro=true`（宽限期内）

19. Stripe 退款事件
- 步骤：触发退款 webhook
- 预期：状态变 `refunded`，`isPro=false`（立即降级）

20. Creem webhook 同步
- 步骤：完成 Creem 订阅
- 预期：本地订阅写入/更新

21. 重复 webhook 幂等
- 步骤：重复发送同一事件
- 预期：不会重复扣权/重复变更

22. 无效签名 webhook
- 步骤：发送伪造 webhook
- 预期：拒绝处理（401/400）

## E. 前端功能与入口

23. 定价页展示正确
- 步骤：访问 `/pricing`
- 预期：显示 `Free/Monthly/Annual`，金额正确，文案不冲突

24. 支付方式选择
- 步骤：选择 Stripe/Creem
- 预期：调用对应 provider；未选择时默认 Stripe

25. 支付成功跳转
- 步骤：完成支付
- 预期：跳转成功页，`/api/rpc/me` 显示订阅状态

26. 取消后仍可访问
- 步骤：取消后访问 Pro 功能
- 预期：到期前仍可访问，过期后不可访问

## F. 安全与异常路径

27. 未登录访问订阅接口
- 步骤：未登录调用 checkout / me
- 预期：401

28. 篡改 planKey
- 步骤：传入不存在的 planKey
- 预期：400

29. 跨用户越权
- 步骤：使用 A 用户会话访问 B 用户订阅资源（如存在）
- 预期：403/401

30. 配置缺失下 UI 兜底
- 步骤：仅配置 Stripe，不配置 Creem
- 预期：UI 仍可购买 Stripe；Creem 不显示或置灰
