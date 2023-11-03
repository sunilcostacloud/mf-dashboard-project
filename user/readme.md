docker build -t user-image .

<!-- to convert docker image into tar -->

docker save -o user-image.tar user-image

docker run -p 8086:80 user-image
