# useEffect vs useLayoutEffect (react hooks)

__useEffect__ and __useLayoutEffect__ seem to work similarly because the way we write them are similar but they actually work differently.

They have different timing.
```js
useEffect(() => {
    console.log("USE EFFECT FUNCTION TRIGGERED");
}, []); // logs second
  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
}, []); // logs first
```

__When there is a change in the DOM:__
 - __useEffect__ is asynchronous and triggers after every change has been painted
    1. Change in state or a need of a re-render
    2. Render component
    3. Screen is visually updated
    4. __`useEffect`__ runs
  - __useLayoutEffect__ is synchronous and triggers after a render but before the screen is visually updated.
    1. Change in state or a need of a re-render
    2. Render component
    3. __`useLayoutEffect`__ runs and when finished
    4. Screen is visually updated
