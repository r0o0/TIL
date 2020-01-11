# Server Side Rendering (SSR)

 What __Server Side Rendering(SSR)__ do is it will load the html file on the server which will turn the html file to a document browsers can read.

 #### Pros
 - For better search results __Search Engine Optimization(SEO)__ in sites such as _Google_ – crawlable content.
 - For __Social Media Optimization(SMO)__ – shows preview with page title, description, and image of links posted on social media.
- Faster first page load time hence provides a good user experience.
- Really fast if page is static (no interactions)

 #### Cons
 - If user has a slow internet connection (mobile)
 - Old generation device (mobile)
 - Too much interactions -> heavy load -> slow load time
 - Full page reloads

#### A Peek at Client Side Rendering (CSR)

Single Page Application(SPA) uses client side rendering. If you click on 'View source' of a client side rendered web app it will look like this:

Pretty much nothing inside of the `<body>`.

 ``` html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/app.js"></script>
  </body>
</html>
 ```

__How?:__ Browser downloads only one page on load (similar look as above) before the rest of its content start loading. The load can takes quite some time which is why client side rendering isn't efficient for SEO.

#### Pros
- Building web apps? Go SPA!
- Page loads fast after initial load
- Perfect for rich interactive sites
- Works like an app – no full page reloads

#### Cons
- Initial load can take some time
- Not suitable for SEO

<br>

__I...__ <br>
__Need SEO, Heavy on interactions, Need site fast, Building web app__

# SSR + SPA

When you need all of that which you probably do in most real world cases... you combine them and get all the pros and nullify all the cons!! :) <br>
You get a first fast load by rendering with __SSR__ and __SPA__ comes right after playing its role of flawless navigation(no full page reloads).

## SSR Frameworks
 - __React__: [Next.js](https://nextjs.org/ "Next.js")
 - __Vue__: [Nuxt.js](https://nuxtjs.org/ "Nuxt.js")