# Build web application
FROM node:12 as npm_builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build


# Build backend
FROM golang:1.13 as go_builder

WORKDIR /app

RUN go get -u github.com/gobuffalo/packr/packr

COPY . .
COPY --from=npm_builder /app/dist /app/dist

RUN go get

RUN CGO_ENABLED=0 GOOS=linux packr build


# Final docker image with a single binary
FROM scratch

WORKDIR /app
COPY --from=go_builder /app/xvzf.tech .

ENTRYPOINT ["/app/xvzf.tech"]
EXPOSE 3000
