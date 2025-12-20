import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import type { MiddlewareHandler } from "hono";
import { z } from "zod";
import { auth } from "~/lib/auth";

type SessionData = NonNullable<Awaited<ReturnType<typeof auth.api.getSession>>>;

type RpcVariables = {
  session: SessionData;
};

const requireSession: MiddlewareHandler<{ Variables: RpcVariables }> = async (c, next) => {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  c.set("session", session);
  await next();
};

const EchoSchema = z.object({
  message: z.string().min(1),
});

const app = new Hono<{ Variables: RpcVariables }>().basePath("/api");

const routes = app
  .get("/rpc/health", (c) => {
    return c.json({ ok: true });
  })
  .post("/rpc/echo", zValidator("json", EchoSchema), (c) => {
    const input = c.req.valid("json");
    return c.json({ message: input.message });
  })
  .get("/rpc/me", requireSession, (c) => {
    const session = c.get("session");
    return c.json({ user: session.user, session: session.session });
  });

export type AppType = typeof routes;
export { routes as app };
