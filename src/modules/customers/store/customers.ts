import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {setLocalStorageItem} from "@/modules/common/helpers/localStorageHelper";

export const useCustomersStore = defineStore("customers", () => {
  const mockCustomers = [
    {
      id: '1',
      name: 'Alba',
      percent: 50,
    },
    {
      id: '2',
      name: 'Angel',
      percent: 50,
    },
  ]
  const customers = ref<object[]>(mockCustomers);
  const getTotalCustomers = computed(() => customers.value.length);
  function createCustomer(customer: object) {
    customers.value = [...customers.value, customer];
    const localPayload = customers.value.toString();
    setLocalStorageItem('customers', localPayload)
  }

  return { customers, getTotalCustomers, createCustomer };
});

