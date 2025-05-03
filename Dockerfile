# Gunakan image Node.js sebagai base image
FROM node:16-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Tentukan port aplikasi
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["npm", "start"]
