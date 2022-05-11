<template>
  <ul class="error-messages">
    <li v-for="(item, key) in validationErrors" :key="item.key">
      {{key}} {{ item[0] }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RwValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  }
}
</script>
