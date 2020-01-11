# `HTMLImageElement`

## `Image()` constructor

It creates a new `HTMLImageElement` just as `document.createElement('img')`.

```JS
  // takes two arguments
  // new Image(width, height);
  // or none
  const img = new Image();
  const imgset = new Image(200, 100);
  // our image:
  // original width: 400px
  // original height: 200px
  img.src = 'picure.jpeg';
  imgset.src = 'picture.jpeg';

  // get the orignal image size:
  console.log(img.width, img.height); // 400px, 200px

  // give a width and height to imgset and render in body
  document.body.appendChild(imgset);
```

### Give you a result of:
```HTML
<body>
  <img width="200" height="100" src="picture.jpeg" />
</body>
```