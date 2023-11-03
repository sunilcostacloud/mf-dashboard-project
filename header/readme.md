docker build -t header-image .

<!-- to convert docker image into tar -->

docker save -o header-image.tar header-image

docker run -p 8081:80 header-image
