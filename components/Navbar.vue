<template>
    <div>
      <h2>Todo List</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
          <button @click="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
      <input type="text" v-model="newTodoText">
      <button @click="addTodo">Add Todo</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref,onMounted } from 'vue';
  
  interface Todo {
    id: number;
    text: string;
  }
  
  export default {
    setup() {
      const todos = ref<Todo[]>([
        { id: 1, text: 'Do homework' },
        { id: 2, text: 'Buy groceries' },
        { id: 3, text: 'Call friend' }
      ]);
      const newTodoText = ref<string>('');
        onMounted(() => {
  console.log(`the component is now mounted.`)
})
      const addTodo = () => {
        const newTodo: Todo = { id: Date.now(), text: newTodoText.value };
        todos.value.push(newTodo);
        newTodoText.value = '';
      };
  
      const removeTodo = (id: number) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
      };
  
      return {
        todos,
        newTodoText,
        addTodo,
        removeTodo
      };
    }
  }
  </script>
  