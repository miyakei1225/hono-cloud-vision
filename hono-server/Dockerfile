FROM node:23-alpine3.21 AS base

FROM oven/bun:1 AS builder
ENV PATH="/root/.bun/bin:${PATH}"
WORKDIR /app

COPY package*json tsconfig.json src ./

RUN bun install --frozen-lockfile && \
    bun run build && \
    bun install --production

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 hono

COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/dist /app/dist
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json

USER hono
EXPOSE 8080

CMD ["node", "/app/dist/index.js"]
