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

Then to stop the development server, press the following keys while focused in the terminal.

<div style="margin-left: 2rem;">
On Windows: 
<kbd>Ctrl</kbd> + <kbd>C</kbd>

On Mac: 
<kbd>Control</kbd> + <kbd>C</kbd>
</div>

## Adding Tailwind

Within the directory, run the following command. This will install the dependencies required to setup tailwind.

```shell
npm install tailwindcss postcss autoprefixer
```

Then run the below command to generate the following two config files: `postcss.config.js` and `tailwind.config.js`. The first configures *postcss* to build tailwind, and the second allows you to change how *tailwind* behaves in your project.

```shell
npx tailwindcss init -p
```

Next you will want to create a new file called `tailwind.css` in the `styles` directory, which is located within the root of the project.

```txt
📦
├── 📂 node_modules
├── 📂 pages
│   └── 📄 _app.js
├── 📂 public
├── 📂 styles
│   └── 📄 tailwind.css     👈
├── 📄 tailwind.config.js
└── 📄 postcss.config.js
```

Within this new file, `tailwind.css`, add the following code. This file will ultimately load tailwind into your project.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, once you have completed all of the previous steps, add the following line to the top of your `_app.js` located within the `pages` folder.

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