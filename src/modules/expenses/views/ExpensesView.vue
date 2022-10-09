<script setup lang="ts">
import { useExpensesStore } from "@/modules/expenses/store/expenses";
import { useCustomersStore } from '@/modules/customers/store/customers'
import { onBeforeMount } from "vue";
import router from "@/router";
import ListItem from "@/modules/common/components/ListItem.vue";
import Button from '@/modules/common/components/Button.vue'

const expensesStore = useExpensesStore();
const customersStore = useCustomersStore()

const buttons = [
  {
    text: 'Editar',
    type: 'confirm',
    action: 'editItem',
  },
  {
    text: 'Eliminar',
    type: 'cancel',
    action: 'deleteItem',
  },
]

onBeforeMount(() => {
  expensesStore.fetchData()
  console.log("expenses", expensesStore.expenses);
});
const emitItemHandler = ({ id, action }: {id:string; action:string; }) => {
  if (action === 'editItem') editItem(id)
  if (action === 'deleteItem') deleteItem(id)
};
const editItem = (id: string) => {
  router.push(`/expense-detail/${id}`);
};
const deleteItem = (id: string) => {
  expensesStore.remove(id)
};
const createExpense = () => {
  router.push(`/expense-detail/new`);
};

const getCustomerName = (id) => {
  const customer = customersStore.customers.find(customer => customer.id === id)
  return customer && customer.name ? customer.name : ''
}
</script>

<template>
  <div class="content">
    <div v-if="false" class="lds-dual-ring"></div>
    <div v-else class="content__products">
      <Button
          title="Añadir"
          type="confirm"
          @click="createExpense"
      />
      <ListItem
        v-for="expense in expensesStore.expenses"
        :key="expense.id"
        :id="expense.id"
        :buttons="buttons"
        :image="expense.image"
        :title="`${expense.name} - ${getCustomerName(expense.customerId)}`"
        :description="expense.description"
        :amount="expense.amount"
        @item-click="emitItemHandler"
      />
    </div>
  </div>
</template>
