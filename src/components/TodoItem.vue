<template>
  <li class="todo-item">
    <span @click="handleChange()" :class="{completed: todo.completed}">
      {{ todo.text }}
    </span>
    <span @click="handleDelete()">
      &times;
    </span>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: ["todo"],
  methods: {
    handleChange() {

    },
    handleDelete() {

    }
  }
}
</script>

<style lang="scss">

</style>
