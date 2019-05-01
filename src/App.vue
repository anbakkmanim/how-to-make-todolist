<template>
  <div class="app">
    <add-todo />
    <todo-list :todos="getAllTodos" />
    <delete-all-todo />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import DeleteAllTodo from "./components/DeleteAllTodo";

export default {
  name: "app",
  components: {
    AddTodo,
    TodoList,
    DeleteAllTodo
  },
  computed: {
    getAllTodos() {
      return this.$store.getters.getAllTodos;
    }
  }
}
</script>

<style lang="scss">

</style>
