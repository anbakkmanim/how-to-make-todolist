<template>
  <div class="add-todo">
    <input type="text" v-model="text">
    <button @click="handleAdd()">추가</button>
  </div>
</template>

<script>
export default {
  name: "add-todo",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleAdd() {
      
    }
  }
}
</script>

<style lang="scss">

</style>
