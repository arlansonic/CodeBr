<template>
  <div class="door-area">
    <div class="door-frame" :class="{ selected: selected && !open }">
      <Gift v-if="open && hasGift" />
      <div class="door" :class="{ open }" @click="selected = !selected">
        <div class="number" :class="{ selected }">{{ number }}</div>
        <div class="knob" :class="{ selected }" @click.stop="open = true" @click:teste="success" ></div>

      </div>
    </div>
  </div>
</template>

<script>
import Gift from "./Gift";
export default {
  name: "Door",
  components: { Gift },
  props: {
    number: {},
    hasGift: { type: Boolean },
  },
  data: function () {
    //Data é uma função
    return {
      open: false,
      selected: false,
      success:'Parabéns Porta Premiada'
    };
  },
  methods: {
    teste: function (event) {
      alert(this.success);
      return event;
    },
  },
};
</script>

<style>
:root {
  --dor-border: 5px solid brown;
  --selected-border: 5px solid yellow;
}

.door-area {
  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid #aaa;
  font-size: 3em;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.door-frame {
  position: absolute;
  height: 300px;
  width: 180px;

  border-left: var(--dor-border);
  border-top: var(--dor-border);
  border-right: var(--dor-border);

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.door {
  position: absolute;
  height: 295px;
  width: 170px;
  background-color: chocolate;

  display: flex;
  flex-direction: column;
  padding: 20px;
}

.door .knob {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: brown;
  align-self: flex-start;
  margin-top: 60px;
}

.door-frame.selected {
  border-left: var(--selected-border);
  border-top: var(--selected-border);
  border-right: var(--selected-border);
}

.door .number.selected {
  color: yellow;
}

.door .knob.selected {
  background-color: yellow;
}

.door.open {
  background-color: #0007;
}

.door.open .knob {
  display: none;
}

.door.open .number {
  display: none;
}
</style>