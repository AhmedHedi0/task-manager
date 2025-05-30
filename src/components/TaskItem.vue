<template>
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <div class="flex items-start justify-between">
      <div class="flex items-start">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleTaskStatus(task.id)"
          class="mt-1 mr-3"
        />
        <div>
          <h3 
            class="text-lg font-medium"
            :class="{ 'line-through text-gray-500': task.completed }"
          >
            {{ task.title }}
          </h3>
          <p v-if="task.description" class="text-gray-600 mt-1">
            {{ task.description }}
          </p>
          <div class="flex mt-2 text-sm text-gray-500">
            <span 
              class="mr-4 px-2 py-1 rounded"
              :class="priorityClass"
            >
              {{ task.priority }}
            </span>
            <span v-if="task.dueDate" class="mr-4">
              Due: {{ formatDate(task.dueDate) }}
            </span>
            <span>Created: {{ formatDate(task.createdAt) }}</span>
          </div>
        </div>
      </div>
      
      <button 
        @click="deleteTask(task.id)"
        class="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Task, TaskPriority } from '../models/Task';
import { useTaskStore } from '../../stores/taskStore';
const props = defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();

const toggleTaskStatus = (id: string) => {
  taskStore.toggleTaskStatus(id);
};

const deleteTask = (id: string) => {
  taskStore.deleteTask(id);
};

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};

const priorityClass = computed(() => {
  switch (props.task.priority) {
    case TaskPriority.High:
      return 'bg-red-100 text-red-800';
    case TaskPriority.Medium:
      return 'bg-yellow-100 text-yellow-800';
    case TaskPriority.Low:
      return 'bg-green-100 text-green-800';
    default:
      return '';
  }
});
</script>