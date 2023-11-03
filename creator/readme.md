docker build -t creator-image .

<!-- to convert docker image into tar -->

docker save -o creator-image.tar creator-image

docker run -p 8085:80 creator-image
