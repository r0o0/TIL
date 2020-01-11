# Vue Transitions

## List Transitions: `<transition-group>`

Vue's way to like `v-for`

Important keys about transition-group:
- `<transition-group>` renders a `<span>` tag by default. Change this by using `tag` attribute.
- No transition modes (available in `<transition>`)
- Elements inside `<transition-group>` must have a unique `:key` attribute
- Css transition applies to elements that `<transition-group>` is wrapping.

__Example__: <br>
Change the default `<span>` tag to `<ul>` as `<li>` needs to be wrapped with `<ul>`.
```html
<div>
  <transition-group name="list-slide" tag="ul">
    <li v-for="item in items" :key="list-`${item.id}`">
      {{ item.content }}
    </li>
  </transition-group>
</div>
```

Must have an enter and leave css transitions
```css
/*
...other styles
*/

.list-slide-enter-active, .list-slide-leave-active {
  transition: transform 1s ease-in;
}

.list-slide-enter {
  transform: translateX(100%);
}

.list-slide-leave-to {
  transform: translateX(-100%);
}

```
