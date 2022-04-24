<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="operand1" /> <br />
    <input v-model="operand2" /> <br />
    <button v-on:click="result = +operand1 + +operand2">+</button>
    <button v-on:click="result = operand1 - operand2">-</button>
    <button @click="result = Math.round(operand1 / operand2)">/</button>
    <button @click="result = operand1 * operand2">*</button>
    <button @click="result = Math.pow(operand1, operand2)">Степень</button
    ><br />
    <h3 v-if="result == Infinity" style="color: red">На ноль делить нельзя</h3>
    <h3 v-else>{{ result }}</h3>
    <br />
    <br />
    <input type="checkbox" id="checkbox" v-model="toggle" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br />
    <div v-show="toggle">
      <button
        v-for="number in 10"
        :key="number.index"
        @click="getValue(number - 1)"
      >
        {{ number - 1 }}
      </button>
      <button @click="delValue()">&#129040;</button>
      <br />
      <input
        type="radio"
        id="operand1"
        name="radio"
        v-model="picked"
        v-bind:value="operand1"
      />
      <label for="operand1">Операнд 1</label>
      <input
        type="radio"
        id="operand2"
        name="radio"
        v-model="picked"
        v-bind:value="operand2"
      />
      <label for="operand2">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      toggle: "",
      picked: "",
    };
  },
  // const key = Date.now()
  // Vue.$set(this.value, indexOfItem, getValue()),
  methods: {
    getValue(item) {
      if (this.picked == this.operand1) {
        this.operand1 += item.toString();
      } else if (this.picked == this.operand2) {
        this.operand2 += item.toString();
      }
    },
    delValue() {
      if (this.picked == this.operand1) {
        this.operand1 = this.operand1.substring(0, this.operand1.length - 1);
      } else if (this.picked == this.operand2) {
        this.operand2 = this.operand2.substring(0, this.operand2.length - 1);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  margin-bottom: 10px;
}
button {
  margin-right: 2px;
  color: #124b31;
}
</style>
