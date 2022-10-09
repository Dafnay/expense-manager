<template>
  <div class="item-card">
    <figure v-if="image" class="card-img">
      <img :src="image" alt="">
    </figure>
    <div class="item-detail">
      <h5>{{title}}</h5>
      <p>{{description}}</p>
      <h3>{{amount}}</h3>
      <Button
          v-for="(button, index) in buttons"
          :key="index"
          :title="button.text"
          :type="button.type"
          @click="emitItem(button.action)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/modules/common/components/Button.vue'
const emits = defineEmits(['item-click'])

// props
const props = defineProps({
  id:  {
    type: String,
    default: null
  },
  buttons: {
    type: Array,
    default: () => [],
  },
  image: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  amount: {
    type: Number,
    required: true
  }
})

// methods
const emitItem = (action:string) => {
  emits('item-click', {id: props.id, action})
}
</script>

<style scoped>
.item-card {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 7fr;
  border: 2px solid #2d2a4c;
  height: 13rem;
}

.item-detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;
  width: 10rem;
  border-right: #2d2a4c solid 2px;
}

.card-img img {
  width: 100%;
  height: auto;
}

@supports (object-fit: cover) {
  .card-img img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
