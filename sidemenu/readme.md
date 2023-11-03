docker build -t sidemenu-image .

<!-- to convert docker image into tar -->

docker save -o sidemenu-image.tar sidemenu-image

docker run -p 8082:80 sidemenu-image
