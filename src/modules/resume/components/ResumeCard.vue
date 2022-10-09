<template>
  <h2>{{title}}</h2>
  <div>
    <h5>Gastos Computables</h5>
    <p v-for="(expense, index) in customerComputable" :key="`${index}computable`">{{expense.name}}: {{expense.amount}}</p>
    <h6>Total: {{totalComputable}}</h6>
  </div>
  <div>
    <h5>Gastos No Computables</h5>
    <p v-for="(expense, index) in customerNoComputable" :key="`${index}noComputable`">{{expense.name}}: {{expense.amount}}</p>
    <h6>Total: {{totalNoComputable}}</h6>
  </div>
<div>

</div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const totalComputable = computed(() => {
  let customerId = props.customer.id
  let total = 0
  props.computable?.filter(item => item.customerId === customerId).forEach(expense => total += expense.amount)
  return total
})
const totalNoComputable = computed(() => {
  let customerId = props.customer.id
  let total = 0
  props.noComputable?.filter(item => item.customerId === customerId).forEach(expense => total += expense.amount)
  return total
})
const customerComputable = computed(() => {
  let customerId = props.customer.id
  return props.computable?.filter(item => item.customerId === customerId)
})
const customerNoComputable = computed(() => {
  let customerId = props.customer.id
  return props.noComputable?.filter(item => item.customerId === customerId)
})
const props = defineProps( {
  title: {
    type: String,
    required: true
  },
  customer: {
    type: Object,
    required: true
  },
  computable: {
    type: Array,
    default: () => []
  },
  noComputable: {
    type: Array,
    default: () => []
  }
} )
</script>

<style scoped>

</style>
