import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const findIndexByTodoId = (state, id) => {
  return state.todos.findIndex(todo => todo.id === id);
};

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
      let todoIndex = findIndexByTodoId(state, payload);

      state.todos.splice(todoIndex, 1);
    },
    updateTodo(state, payload) {
      let todoIndex = findIndexByTodoId(state, payload);
      
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    }
  }
});