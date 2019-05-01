import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getAllTodos(state) {
      return state.todos.sort();
    }
  },
  mutations: {
    addTodo(state, payload) {
      const newId = state.todos.length > 0
        ? state.todos.reduce(
            (max, todo) => Math.max(max, todo.id),
            state.todos[0].id
          ) + 1
        : 0;

      state.todos.push({
        id: newId,
        text: payload,
        completed: false
      });
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    updateTodo(state, payload) {
      let todoIndex = state.todos.findIndex(todo => todo.id === payload);

      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    }
  }
});