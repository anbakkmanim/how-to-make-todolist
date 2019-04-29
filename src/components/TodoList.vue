<template>
  <ul class="todo-list">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "todo-list",
  props: ["todos"],
  components: {
    TodoItem
  }
}
</script>

<style lang="scss">

</style>
