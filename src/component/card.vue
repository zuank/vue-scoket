<template>
  <div class="card">
    <div class="card_eader">
      <slot name='title'></slot>
    </div>
    <div class="card_body">
      <slot name='body'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
    };
  },
};
</script>

<style>
.card {
  box-shadow: 0 0 1px #ddd;
  border-radius: 5px;
  padding: 10px;
}
</style>
