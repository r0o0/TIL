# The `keyof` Operator (ts 2.1)

Queries set of keys of the given type.

```js
interface Post {
  id: number;
  title: string;
  text: string;
  author: string;
  posted?: Date;
}
```

```js
type PostKeys = keyof Post;
// "id" | "title" | "text" | "author" | "posted"
```

## When to use:
Use `keyof` when you need to use the type of Post in a generic.

```js
interface ListProps<T> {
  page: number
  // ...types
}

const post = {
  id: 1,
  title: "Post Title",
  text: "Post Text",
  author: "Bot"
};

function isKeyinObject<ListProps extends keyof Post>(obj: ListProps, key: Post) {
  return obj[key];
}

isKeyinObject(post, 'id'); // number
isKeyinObject(post, 'text'); // string
```

