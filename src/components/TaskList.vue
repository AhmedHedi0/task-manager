<template>
  <div>
    <div v-if="filteredTasks.length === 0" class="text-center py-8 text-gray-500">
      No tasks found.
    </div>
    
    <div v-else>
      <TaskItem 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { TaskFilter } from '../models/Task';
import { useTaskStore } from '../../stores/taskStore';
import TaskItem from './TaskItem.vue';

const props = defineProps<{
  filter: TaskFilter;
}>();

const taskStore = useTaskStore();

const filteredTasks = computed(() => {
  switch (props.filter) {
    case 'active':
      return taskStore.activeTasks;
    case 'completed':
      return taskStore.completedTasks;
    case 'all':
    default:
      return taskStore.tasks;
  }
});
</script>