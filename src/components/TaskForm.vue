<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Add New Task</h2>
    
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        id="title"
        v-model="taskForm.title"
        type="text"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
    
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea
        id="description"
        v-model="taskForm.description"
        class="w-full px-3 py-2 border border-gray-300 rounded-md"
        rows="3"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label for="dueDate" class="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
      <input
        id="dueDate"
        v-model="taskForm.dueDate"
        type="date"
        class="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
    
    <div class="mb-4">
      <label for="priority" class="block text-sm font-medium text-gray-700 mb-1">Priority</label>
      <select
        id="priority"
        v-model="taskForm.priority"
        class="w-full px-3 py-2 border border-gray-300 rounded-md"
      >
        <option v-for="priority in priorities" :key="priority" :value="priority">
          {{ priority.charAt(0).toUpperCase() + priority.slice(1) }}
        </option>
      </select>
    </div>
    
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Add Task
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { TaskPriority } from '../models/Task';
import { useTaskStore } from '../../stores/taskStore';

const taskStore = useTaskStore();
const priorities = Object.values(TaskPriority);

interface TaskForm {
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
}

const taskForm = reactive<TaskForm>({
  title: '',
  description: '',
  dueDate: '',
  priority: TaskPriority.Medium
});

const handleSubmit = () => {
  taskStore.addTask({
    title: taskForm.title,
    description: taskForm.description || undefined,
    dueDate: taskForm.dueDate ? new Date(taskForm.dueDate) : undefined,
    priority: taskForm.priority,
    completed: false
  });
  
  // Reset form
  taskForm.title = '';
  taskForm.description = '';
  taskForm.dueDate = '';
  taskForm.priority = TaskPriority.Medium;
};
</script>