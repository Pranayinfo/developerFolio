# First stage: Build
FROM node:20.0-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install git for dependency installation
RUN apk add --no-cache git

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application (if applicable)
RUN npm run build

# Second stage: Serve with Nginx
FROM nginx:alpine

# Copy built application from the first stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

