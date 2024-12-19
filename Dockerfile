# Use Node.js for building the Angular project
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build -- --output-path=dist/wordpresenter --configuration=production

# Use Nginx for serving the Angular application
FROM nginx:stable-alpine

# Copy the Angular build output to the Nginx directory
COPY --from=build /app/dist/wordpresenter /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]