<template>
  <div class="hello">
  </div>
 
</template>

<script>
// import AddPaymentForm from "@/components/AddPaymentForm.vue";
// import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // components: {
  //   PaymentsDisplay,
  //   AddPaymentForm
  // },
  // data() {
  //   return {
  //     paymentsList: [],
  //   };
  // },
  // methods: {
  //   addPayment(data){
  //     this.paymentsList.push(data)
  //   },
  //   fetchData() {
  //     return [
  //       {
  //         date: "28.03.2020",
  //         category: "Food",
  //         value: 169,
  //       },
  //       {
  //         date: "24.03.2020",
  //         category: "Transport",
  //         value: 360,
  //       },
  //       {
  //         date: "24.03.2020",
  //         category: "Food",
  //         value: 532,
  //       },
  //     ];
  //   },
  //   created() {
  //     this.paymentsList = this.fetchData();
  //   },
  // },
}
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
</style>
