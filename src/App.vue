<template>
  <div id="app">
    <router-link
      @click="clicked()"
      :to="{
        name: 'AddPaymentForm',
        params: { section: 'payment', category: 'Food' },
        query: { value: 200 },
      }"
      >Food 200</router-link
    >
    <br />
    <router-link
      :to="{
        name: 'AddPaymentForm',
        params: { section: 'payment', category: 'Transport' },
        query: { value: 50 },
      }"
      >Transport 50</router-link
    >
    <br />
    <router-link
      :to="{
        name: 'AddPaymentForm',
        params: { section: 'payment', category: 'Entertainment' },
        query: { value: 2000 },
      }"
      >Entertainment 2000</router-link
    >
    <br />
    <header>
      <h3>My personal costs</h3>
    </header>
    <main>
      <button @click="clicked()">ADD NEW COST+</button>
      <AddCategoryFormButton />
      <AddPaymentForm @addNewPayment="addPayment()" v-show="toggle" />
      <PaymentsDisplay :items="currentElements" />
      <MyPagination
        :current="current"
        :length="6"
        :n="n"
        @changePage="changePage"
      />
      <!-- <button @click="getQuantity">Click me</button> -->
    </main>
  </div>
</template>
<script>
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import MyPagination from "@/components/MyPagination.vue";
import AddCategoryFormButton from "@/components/AddCategoryFormButton.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination,
    AddCategoryFormButton,
  },
  data() {
    return {
      current: 1,
      n: 3,
      toggle: false,
    };
  },
  computed: {
    ...mapGetters(["getPaymentList"]),
    currentElements() {
      return this.getPaymentList.slice(
        this.n * (this.current - 1),
        this.n * (this.current - 1) + this.n
      );
    },
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    addPayment(data) {
      this.paymentsList.push(data);
      // this.paymentsList = [...this.paymentsList, data];
      console.log(data);
    },
    // fetchData() {
    //   return [
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
    clicked() {
      this.toggle = !this.toggle;
    },
    changePage(p) {
      this.current = p;
      this.$store.dispatch("fetchData", p);
    },
    // getQuantity(){
    //   console.log(this.$store.paymentsList)
    // }
  },
  created() {
    // this.paymentsList = this.fetchData();
    // this.$store.commit("setPaymentsListData", this.fetchData());
    // this.setPaymentListData(this.fetchData())
    this.$store.dispatch("fetchData", this.current);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
title {
  font-size: 12px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
input {
  margin-top: 5px;
  opacity: 50%;
}
button {
  background-color: rgb(12, 136, 145);
  color: white;
  border: none;
}
</style>
