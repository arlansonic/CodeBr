<template>
  <div id="app">
      <h1>Problema de Monty Hall</h1>
      <Door number="1" :hasGift="false"/>
  </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door}
}
</script>

<style>

*{
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
}

body{
    color: white;
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

#app h1{
    border: 1px solid #000;
    background-color: #004;
    padding: 20px;    
    margin-bottom: 40px;
}
</style>