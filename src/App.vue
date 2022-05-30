<template>
  <toDoList />
  <toDoTask />
</template>

<script>
import toDoTask from "./components/todoTask.vue"
import toDoList from "./components/todoList.vue"
export default {
  name: 'App',
  components: {
    toDoList,
    toDoTask,
  }
}
</script>
