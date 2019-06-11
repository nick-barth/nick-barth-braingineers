<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --bg-primary-color: #2e76c0;
  --bg-primary-hover: #2f649a;
  --bg-primary-disabled: #abc8e6;
  --bg-color-text: #334150;
  --bg-color-error: #ff3100;
  --bg-color-success: #00b2a3;
  --bg-color-gray-dark: #91a1b0;
  --bg-color-gray-light: #d1dbe5;
  --bg-color-bg-dark: #eef3f8;
  --bg-color-bg-light: #f5f8fb;
  --bg-color-line: #d1dbe5;
  --bg-border-radius: 4px;
}

html {
  background-color: #def7ff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
