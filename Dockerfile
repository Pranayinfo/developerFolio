# Stage 1: Build the React app
FROM node:20.0-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Install git (for projects that rely on git dependencies)
RUN apk add --no-cache git

# Copy package.json and package-lock.json files
COPY package.json ./

# Set Node.js heap size for the build stage
ENV NODE_OPTIONS="--max-old-space-size=2048"  # Set heap size to 2GB

# Install dependencies
RUN npm install

# Copy the app source
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the production build with a lightweight web server
FROM node:20.0-alpine

# Set Node.js heap size for the production stage (if needed)
# You can omit this if your app served by `serve` does not require it.
ENV NODE_OPTIONS="--max-old-space-size=2048"  # Set heap size to 2GB

# Install `serve` to serve the production build
RUN npm install -g serve

# Copy the production build from the build stage
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "/app/build", "-l", "3000"]

