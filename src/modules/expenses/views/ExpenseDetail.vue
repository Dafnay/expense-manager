<script setup lang="ts">
import {computed, ComputedRef, onBeforeMount, ref} from "vue";
import { useCustomersStore } from '@/modules/customers/store/customers'
import { useExpensesStore } from '@/modules/expenses/store/expenses'
import { useRoute } from 'vue-router'
import router from "@/router";

import { v1 } from 'uuid'

import Button from '@/modules/common/components/Button.vue'
import { ExpenseInterface } from "@/modules/expenses/interfaces/expense.interface";

const route = useRoute()

const customersStore = useCustomersStore()
const expenseStore = useExpensesStore()

const expense = ref(
    {
      id: '',
      name: '',
      isComputable: false,
      amount: 0,
      customerId: ''
    }
)

const isNew = computed(() => {
  return id.value === 'new'
})
const id:ComputedRef = computed(() => {
  return route.params.id
})

onBeforeMount(() => {
  const parsedId = id.value.toString()
  if (!isNew.value) expense.value = { ...expense.value, ...getExpense(parsedId)}
})

const createExpense = () => {
  const newExpense: ExpenseInterface = {
    id: v1(),
    name: expense.value.name,
    isComputable: expense.value.isComputable,
    amount: +expense.value.amount,
    customerId: expense.value.customerId,
  }
  // const newExpense: ExpenseInterface = { ...expense.value, id: v1(), amount: +expense.value.amount }
  expenseStore.add(newExpense)
  router.push('/expenses')
}

const getExpense = (id:string) => {
  const data = expenseStore.fetchExpense(id)
  if (data) console.log(data)
  if (typeof data === 'object') return { ...data }
}

</script>

<template>
  <div>
    <div>
      <label for="name">Nombre</label>
      <input v-model="expense.name" type="text" name="name" required>
    </div>
    <div>
      <label for="computable">Computable</label>
      <input v-model="expense.isComputable" type="checkbox" name="computable" required>
    </div>
    <div>
      <label for="amount">Cantidad</label>
      <input v-model="expense.amount" type="text" name="amount" required>
    </div>
    <div>
      <label for="customers">Selecciona pagador</label>
      <select name="customers" id="customers" v-model="expense.customerId" required>
        <option v-for="customer in customersStore.customers" :key="customer.id" :value="customer.id">{{ customer.name }}</option>
      </select>
    </div>
    <Button
        title="Añadir"
        type="confirm"
        @click="createExpense"
    />
  </div>
</template>
