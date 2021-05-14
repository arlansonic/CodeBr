<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator/>  
    
  </div>
</template>

<script>
import Calculator from "./main/Calculator";

export default {
  components: {Calculator}
};
</script>

<style>

@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: #42b983; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #42b983,
    #1d976c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #43cea2,
    #185a9d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>