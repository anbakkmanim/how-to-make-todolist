<template>
  <div class="app">
    <add-todo />
    <todo-list :todos="todos" />
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
  data() {
    return {
      todos: [
        {
          id: 0,
          text: "TodoList 만들기",
          completed: false
        },
        {
          id: 1,
          text: "Vue.js 배우기",
          completed: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
