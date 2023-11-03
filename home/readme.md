docker build -t home-image .

<!-- to convert docker image into tar -->

docker save -o home-image.tar home-image

docker run -p 8083:80 home-image
