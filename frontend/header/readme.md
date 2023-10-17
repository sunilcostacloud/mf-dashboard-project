create a new microfrontend from scratch

// if you use yarn:

yarn init -y

yarn add react@17.0.1 react-dom@17.0.1

yarn add @babel/runtime react-router-dom@5.2.0

yarn add --dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react autoprefixer babel-loader css-loader html-webpack-plugin postcss postcss-loader style-loader webpack webpack-cli file-loader clean-webpack-plugin webpack-dev-server eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh html-loader

// if you use npm:

npm init -y

npm install react@17.0.1 react-dom@17.0.1

npm install @babel/runtime

npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react autoprefixer babel-loader css-loader html-webpack-plugin postcss postcss-loader style-loader webpack webpack-cli file-loader clean-webpack-plugin webpack-dev-server eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh html-loader

// package.json

remove : "description": "" and "main": "index.js", and add "private": true,

then add:

"scripts": {
"build": "webpack --mode production",
"build:dev": "webpack --mode development",
"build:start": "cd dist && PORT=8080 npx serve",
"start": "webpack serve --open --mode development",
"start:live": "webpack serve --open --mode development --live-reload --hot",
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
},

copy webpack.config.js, .gitignore, src, .babelrc, .eslintrc.cjs files and paste it in project

// if you use yarn:

yarn

// if you use npm:

npm install
