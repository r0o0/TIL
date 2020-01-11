# Next.js Basics

No need to __import React__ in Next.js!! It does it for you :)

## `<Head>` Component

Add all meta tags you need and dynamic ones as well.

``` JS
import NextHead from 'next/head';

const defaultDescription = '';

function Head(props) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={props.description || defaultDescription} />
    </NextHead>
  );
};

export default Home;
```

## Routers

In Next.js has incorporated routers in its library. It will automatically treat all files in `pages/` folder as pages.

When user clicks on the 'about' link it will lead to `domain.com/about`
``` JS
// ,/pages/index.js
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Home;

// ./pages/about.js
function About() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};
export default About;
```

