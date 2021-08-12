FROM node:lts-alpine AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --fozen-lockfile

# rebuild the code only When needed
FROM node:lts-alpine AS builder

ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# production image, copy all files and run it
FROM node:lts-alpine AS runner

ARG X_TAG
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
CMD [ "node_modules/.bin/next", "start" ]