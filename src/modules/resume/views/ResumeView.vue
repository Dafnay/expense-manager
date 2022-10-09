<script setup lang="ts">
import { useExpensesStore } from "@/modules/expenses/store/expenses";
import { useCustomersStore } from '@/modules/customers/store/customers'
import ResumeCard from "@/modules/resume/components/ResumeCard.vue";
import {computed} from "vue";
const expensesStore = useExpensesStore();
const customersStore = useCustomersStore()

const computableExpenses = computed(() => {
  return expensesStore.expenses.filter(expense => expense.isComputable)
})
const noComputableExpenses = computed(() => {
  return expensesStore.expenses.filter(expense => !expense.isComputable)
})

</script>

<template>
  <div class="content">
    <div v-if="false" class="lds-dual-ring"></div>
    <div v-else class="content__products">
      <ResumeCard
          v-for="customer in customersStore.customers"
          :key="customer.id"
          :title="customer.name"
          :customer="customer"
          :computable="computableExpenses || []"
          :noComputable="noComputableExpenses || []"
      />
    </div>
  </div>

</template>
