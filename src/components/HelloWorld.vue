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
    };
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
