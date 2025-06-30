# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 to access in browser
EXPOSE 1208
