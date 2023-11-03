docker build -t admin-image .

<!-- to convert docker image into tar -->

docker save -o admin-image.tar admin-image

docker run -p 8084:80 admin-image
