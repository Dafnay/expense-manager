<script setup lang="ts">
import { useCustomersStore } from '@/modules/customers/store/customers'
import {onBeforeMount} from "vue";
import router from "@/router"
import ListItem from "@/modules/common/components/ListItem.vue";

const customersStore = useCustomersStore()

onBeforeMount(() => {
  console.log('customers', customersStore.customers)
})
const emitItemHandler = (id:string) => {
  router.push(`/customer-detail/${id}`)
  console.log('emitItemHandler')
}
</script>

<template>
  <div class="content">
    <div v-if="false" class="lds-dual-ring"></div>
    <div v-else class="content__products">

      <ListItem
          v-for="product in customersStore.customers"
          :key="product.id"
          :id="product.id"
          buttonText="Editar"
          :image="product.image"
          :title="product.name"
          :description="product.description"
          :amount="product.percent"
          @item-click="emitItemHandler"
      />
    </div>
  </div>
</template>
