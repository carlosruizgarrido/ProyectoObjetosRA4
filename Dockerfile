FROM node:22-alpine
WORKDIR /app

# tsx ejecuta TypeScript directamente, sin compilar ni package.json
RUN npm install -g tsx typescript

COPY . .

CMD ["tsx", "Main.ts"]