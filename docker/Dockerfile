from node:18-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Build the app
COPY . .

RUN npm run build


# Stage 2

FROM nginx:1.21-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
