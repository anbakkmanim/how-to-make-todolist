<template>
  <li class="todo-item">
    <span @click="handleUpdate()" :class="{'completed': todo.completed}">
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
    handleUpdate() {
      this.$store.commit('updateTodo', this.todo.id);
    },
    handleDelete() {
      this.$store.commit('deleteTodo', this.todo.id);
    }
  }
}
</script>

<style lang="scss">
.completed {
  text-decoration: line-through;
}
</style>
