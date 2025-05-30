<template>
  <div class="bg-gray-100 p-4 rounded-lg">
    <h2 class="text-lg font-semibold mb-2">Task Statistics</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white p-3 rounded shadow-sm">
        <div class="text-sm text-gray-500">Total Tasks</div>
        <div class="text-2xl font-bold">{{ taskStore.tasks.length }}</div>
      </div>
      <div class="bg-white p-3 rounded shadow-sm">
        <div class="text-sm text-gray-500">Completed</div>
        <div class="text-2xl font-bold">{{ taskStore.completedTasks.length }}</div>
      </div>
      <div class="bg-white p-3 rounded shadow-sm">
        <div class="text-sm text-gray-500">Active</div>
        <div class="text-2xl font-bold">{{ taskStore.activeTasks.length }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '../../stores/taskStore';

const taskStore = useTaskStore();
</script>