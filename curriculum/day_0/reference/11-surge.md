# surge.sh

To publish your intro to web development websites so that others you share the url with can see it, we will use surge.sh. Watch the video or follow the commands below:

[![maxresdefault-surge.jpg](../images/maxresdefault-surge.jpg)](https://surge.sh/help/getting-started-with-surge)

Install surge with npm:

```bash
npm install --global surge
```

Login or create an account:

```bash
surge login
```

Publish your project:

```bash
surge --domain your-name.surge.sh
```

If your site is in a nested folder:

```
npx surge --domain your-name.surge.sh --project ./dist
```

Publish your code publicly to GitHub. Add the link to your project under `About > Repository Details (gear icon) > Website`.

![github-link.png](../images/github-link.png)

## Homework

Publish all of your previous projects with surge, and add the surge links to your projects’ GitHub descriptions.

## Optional

- [Vercel](https://vercel.com/)
- [GitHub Pages](https://www.npmjs.com/package/gh-pages#command-line-utility)
