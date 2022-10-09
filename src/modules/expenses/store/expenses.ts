import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/modules/common/helpers/localStorageHelper";
import type { ExpenseInterface } from "@/modules/expenses/interfaces/expense.interface";

const LOCAL_KEY = "expenses";
interface StateInterface {
  expenses: ExpenseInterface[]
}

export const useExpensesStore = defineStore({
  id: LOCAL_KEY,
  state: (): StateInterface => ({
    expenses: [],
  }),
  getters: {},
  actions: {
    add(expense: ExpenseInterface) {
      const payload: ExpenseInterface[] = [...this.expenses, expense]
      this.expenses = [...payload]
      setLocalStorageItem(LOCAL_KEY, payload)
    },
    remove(id: string) {
      this.expenses = this.expenses.filter(expense => expense.id !== id)
      console.log("removeItemFromCart", id);
    },
    fetchData() {
      const data: [] = getLocalStorageItem(LOCAL_KEY) || []
      this.expenses = [...data]
    },
    fetchExpense(id: string) {
      if (expenses.value.length === 0) fetchData()
      const expense = expenses.value.find(item => item.id === id)
      return expense
    },
  },
});

const expenses = ref<object[]>([]);
function fetchData() {
  const data = getLocalStorageItem(LOCAL_KEY) || []
  expenses.value = [...expenses.value, ...data]
}
function add(expense: ExpenseInterface) {
  const payload = [...expenses.value, expense]
  expenses.value = [...payload]
  setLocalStorageItem(LOCAL_KEY, payload)
}
