# Setting Up a Project

## Creating the Project

First you will need to have [Node.js](https://nodejs.org/en/) installed. We recommend using the LTS version, but any version over 14.15 should work. After that, you should be able to run the following command. This will create a new folder at the current location with the project setup inside.

```shell
npx create-next-app
```

To start the website for development, run the following command.

```shell
npm run dev
```

## Adding Tailwind

Within the directory, run the following command. This will add tailwind to you project for you to configure.

```shell
npm install tailwindcss postcss
```

Next you will want to create two new files: `postcss.config.js` at the root of the project, and `tailwind.css` within the `styles` folder.

```txt
📦
├── 📂 node_modules
├── 📂 pages
│   └── 📄 _app.js
├── 📂 public
├── 📂 styles
│   └── 📄 tailwind.css     👈
└── 📄 postcss.config.js    👈
```

Within the `postcss.config.js` file, add the following code.

```js
module.exports = {
  plugins: ['tailwindcss'],
}
```

Then within the `tailwind.css` file, add the following code.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, once you have created and populated both of those files, add the following line to the top of your `_app.js` located within the `pages` folder.

```js
import '../styles/tailwind.css';
```

Now you can use tailwind anywhere across your site.

```jsx
import React from 'react'

const Component = (props) => {
    return (
        <div className="flex bg-red-800 overflow-hidden">
            { props.name }
            
            ...
```