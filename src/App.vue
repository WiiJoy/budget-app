<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :class="balanceSign" :total="totalBalance"></TotalBalance>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
   
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
        isItemVisible: true,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome comment',
        id: 2,
        isItemVisible: true,
      },
    },
  }),
  computed: {
    totalBalance() {
      // console.log(Object.values(this.list).reduce((acc, item) => acc + item.value, 0));
      const balance = Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
      // console.log(balance);
      // return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
      return balance;
    },
    balanceSign() {
      let sign = 'zero';
      if (this.totalBalance > 0) {
        sign = 'positive'; 
      } else if (this.totalBalance < 0) {
        sign = 'negative';
      }
      return sign;      
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      console.log(data);
      const newObj = {
        ...data,
        id: String(Object.values(this.list).length + 1)
        // id: String(Math.random())
      };

      if (newObj.type === 'OUTCOME') {
        newObj.value = -newObj.value;
      }

      this.$set(this.list, newObj.id, newObj);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.zero {
  color: black;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
</style>
