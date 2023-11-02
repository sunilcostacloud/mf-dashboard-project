# Use an official Nginx runtime as the base image

FROM nginx:latest

# Remove the default Nginx welcome page

RUN rm -rf /usr/share/nginx/html/\*

# Copy the built files from the "dist" directory from your local machine into the Nginx container

COPY dist/ /usr/share/nginx/html/

# Copy your custom Nginx configuration that handles client-side routing

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx when the container starts

CMD ["nginx", "-g", "daemon off;"]