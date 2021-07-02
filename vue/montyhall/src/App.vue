<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="NewHour">
        <h5>{{ NewHour() }}</h5>
      </div>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas Portas?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
          v-on="success"
        />
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta é premiada? </label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button class="restart" v-if="started" @click="started = false ">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <div :hasGift="success" v-if="started" @click="started">
          <Door :hasGift="i === selectedPort" :number="i" />
        </div>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";
export default {
  name: "App",
  components: { Door },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
      success: " Parabéns Porta Premiada",
    };
  },
  methods: {
    NewHour() {
      return new Date().toLocaleString();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}
body {
  color: white;
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
#app h1 {
  border: 1px solid #000;
  background-color: #004;
  padding: 20px;
  margin-bottom: 40px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}
.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.NewHour {
  font-size: 25px;   
  margin-bottom: 50px;
}

.NewHour h5 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: last baseline;  
  position: relative;    
}

.restart{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;   
}
</style>