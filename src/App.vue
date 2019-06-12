<template>
  <div id="app">
    <h1>The Weather</h1>
    <router-view/>
  </div>
</template>

<style>
:root {
  --bg-primary-color: #2e76c0;
  --bg-primary-hover: #2f649a;
  --bg-primary-disabled: #abc8e6;
  --bg-color-text: #334150;
  --bg-color-gray-dark: #91a1b0;
  --bg-color-gray-light: #d1dbe5;
  --bg-color-bg-dark: #eef3f8;
  --bg-color-bg-light: #f5f8fb;
  --bg-color-line: #d1dbe5;
  --bg-border-radius: 4px;
}

html {
  background-color: hsl(210, 100%, 97%);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}

#app h1 {
  text-align: left;
  border-bottom: 1px var(--bg-color-line) solid;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
