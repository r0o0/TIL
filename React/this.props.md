# `this.props` in React

In react data and information of one component can interact with another component. Such data is known as __`'props'`__. And every component has __`'props'`__.

## Syntax

__`props`__ is an object and holds its components data and information. To use the components props inside the component:

```JS
class header extends React.Component {
  render() {
    // see what information this component has whith
    // this.props
    // this here is class header
    console.log(this.props);
  }
}
```
__Note:__ Because react components are classes __`this`__ works the same way as __ES6 class__.

## Pass 'props' to a Component and render

You can pass data and information to a react component.

```JS
// pass data by creating a new attribute
<Nav menu={['home, about, product, contact']} />
```

The above code in the component's props will be:

```JS
class Nav extends React.Component {
  render() {
    console.log(this.props);
    // render props
    return (
      <nav>
        <ul>
          <NavList list={this.props.menu} />
        </ul>
      </nav>
    );
  }
}

// will return in console
//  {menu: [
//    'home',
//    'about',
//    'product',
//    'contact'
//  ]}
```

## `this.props.children`

Every component's __'props'__ has a property named __'children'__. __`this.props.childern`__ contain all information inside of a component's openening and closing JSX tags.

```JS
<HeaderBanner>
  <img src="image1.jpg" alt="image1"/>
  <img src="image2.jpg" alt="image2"/>
</HeaderBanner>

// HeaderBanner's this.props.children will be
// the two img tags inside HeaderBanner tags
```

## defaultProps

You can set a default information to a component's props a __`defaultProps`__ property to it's component.

```JS
class Button extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

Button.defaultProps = {

}
```