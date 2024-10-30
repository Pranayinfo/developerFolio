# Stage 1: Build
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Production
FROM node:14

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app .

# Set Node.js heap size
ENV NODE_OPTIONS="--max-old-space-size=2048"  # Set heap size to 2GB

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
