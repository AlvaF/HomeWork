<template>
  <div>
    <header>
      <div>My personal costs</div>
    </header>
    <main>
      <button @click="clicked()">ADD NEW COST+</button>
      <AddPaymentForm @addNewPayment="addPayment()" v-show="toggle" />
      <PaymentsDisplay :items="paymentsList" />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "HomeView",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      toggle: false,
    };
  },

  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addPayment(data) {
      this.paymentsList.push(data);
      // this.paymentsList = [...this.paymentsList, data];
      console.log(data);
    },
    clicked() {
      this.toggle = !this.toggle;
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>
