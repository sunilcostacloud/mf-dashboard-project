docker build -t auth-image .

<!-- to convert docker image into tar -->

docker save -o auth-image.tar auth-image

docker run -p 8087:80 auth-image
