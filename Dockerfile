# Gunakan Node.js sebagai base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
