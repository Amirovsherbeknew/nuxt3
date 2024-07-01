<template>
  <div>
    <h2>Todo List</h2>
    <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 1
        </span>
      </template>
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
       <div>dklasjdalksdjaskldjaslkdjlskjd</div>
      </template>
      Tab 2
    </a-tab-pane>
  </a-tabs>
    <ul>
      <li v-for="item in todoList">
        <b>{{ item.id }}</b> <span>{{ item.title }}</span><input type="checkbox" :checked="item.verifyed"/>
          @change="Verifyed(item.id, $event)" />
      </li>
    </ul>
    <input type="text" v-model="toValue">
    <button @click="added">Added</button>
  </div>
</template>
<script lang="ts" setup>
import { watch } from 'vue'
interface todoElmType {
  id: number,
  title: string,
  verifyed: boolean
}
const todoList = ref<todoElmType[]>([])
const toValue = ref<string>('')
  const activeKey = ref('1');
const added = () => {
  if (toValue.value) {
    todoList.value.push({
      id: todoList.value.length + 1,
      title: toValue.value || '',
      verifyed: false
    })
    toValue.value = ''
  }
}
const Verifyed = (id: number, check: Event) => {
  todoList.value = todoList.value.map(item => {
    if (item.id === id) {
      return { ...item, verifyed: (check.target as HTMLInputElement).checked }
    }
    else return item
  })
}
</script>