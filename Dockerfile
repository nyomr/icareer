# Use Node.js runtime
FROM node:20.14.0-alpine as builder

# Set the working directory in container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN  npm Install

# Copy the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
