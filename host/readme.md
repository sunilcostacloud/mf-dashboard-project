docker build -t host-image .

<!-- to convert docker image into tar -->

docker save -o host-image.tar host-image

docker run -p 8080:80 host-image
