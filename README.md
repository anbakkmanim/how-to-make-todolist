# Vue.js + Vuex Todolist



### 프로젝트 세팅

```sh
$ vue create <프로젝트 이름>
```

Manually select features -> CSS Pre-processors만 체크 -> Sass/SCSS (with node-sass), In dedicated config files

완료되었으면 프로젝트 설치된 곳에서 에디터를 엽니다.

1. `src/components/HelloWorld.vue` 삭제
2. `src/App.vue`에서 아래 내용만 남기고 모두 지우기

```html
<template>
  <div class="app">
    Hello world!
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style lang="scss">
</style>
```


### 컴포넌트 만들기

`src/components` 폴더에서 `AddTodo.vue`, `TodoList.vue`, `TodoItem.vue`, `DeleteAllTodo.vue` 파일을 만듭니다.

```html
<template>
  <div class="add-todo"> <!-- kebab-case로 작성 -->
    AddTodo <!-- PascalCase로 작성 -->
  </div>
</template>

<script>
export default {
  name: "add-todo" // kebab-case로 작성
}
</script>

<style lang="scss">
</style>
```



### 컴포넌트 다듬기

`AddTodo.vue` 파일을 열고, 내용을 아래와 같이 수정합니다.

```html
<template>
  <div class="add-todo">
    <input v-model="text">
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
```

`TodoList.vue` 파일을 열고, 내용을 아래와 같이 수정합니다.

```html
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
```

`TodoItem.vue` 파일을 열고, 내용을 아래와 같이 수정합니다.

```html
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
```

`DeleteAllTodo.vue` 파일을 열고, 내용을 아래와 같이 수정합니다.

```html
<template>
  <div class="delete-all-todo">
    <button @click="handleDeleteAll()">모두 삭제</button>
  </div>
</template>

<script>
export default {
  name: "delete-all-todo",
  methods: {
    handleDeleteAll() {

    }
  }
}
</script>

<style lang="scss">
</style>
```

마지막으로, `App.vue`의 내용을 변경합니다.

```html
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
```

더미 데이터로 렌더링된 아무 기능 없는 TodoList가 완성되었습니다.

이제 이 TodoList가 동작하게 하려면 `Vuex`로 상태 관리를 해줘야 합니다.



### Vuex 세팅

다음 명령어를 입력하여 `Vuex`를 설치합니다.

```sh
$ npm i --save vuex
```

그 다음, `src/store.js` 파일을 생성합니다.

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  }
});
```

그 다음, `src/main.js` 파일에서 `store`를 사용한다고 명시해줍니다.

```js
import Vue from "vue";
import App from "./App.vue";
import store from "./store"; // 추가

Vue.config.productionTip = false;

new Vue({
  store, // 추가
  render(h) { return h(App) }
}).$mount('#app');

```



### Vuex Store 만들기

Vuex Store는 기본적으로 `State`, `Getters`, `Mutations`, `Actions`의 구조로 형성되어 있습니다.

- `State`: 어떠한 상태를 저장해놓는 저장소입니다.
- `Getters`: `State`에서 무언가를 가공하여 얻기 쉽도록 도와주는 `get` 함수들입니다.
- `Mutations`: 저장된 `State`를 변형하는 `set` 함수들입니다.
- `Actions`: `Mutations`를 비동기적으로 처리할 수 있도록 도와주는 함수들입니다.