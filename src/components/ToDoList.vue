<template>
  <div>
    <!-- <p>{{ status }}</p> -->
    
    <template v-if="status=='pending'">
      <ToDoItem v-for="pending in pendingTask" :todo="pending" :key="pending.id">
      </ToDoItem>

    </template>
    <template v-else>
      <ToDoItem v-for="completed in completedTask" :key="completed.id" :todo="completed">
      </ToDoItem>
    </template>
  </div>
</template>

<script setup>
import { onMounted, defineProps, ref,computed} from 'vue';
import { useTodoStore } from '../stores/todo'
// import ToDoItem from '../components/ToDoItem.vue'
import ToDoItem from '../components/ToDoItem.vue';
const todoStore = useTodoStore();

const {status}=defineProps(['status']);
onMounted(async () => {
  await todoStore.fetchTodos()   // wait for initial todos
})
const pendingTask = computed(() =>
  todoStore.todos.filter(todo => todo.status === "pending")
)

const completedTask = computed(() =>
  todoStore.todos.filter(todo => todo.status === "completed")
)
</script>

<style>

</style>