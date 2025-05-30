<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4 relative">
    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Task Manager</h1>

      <!-- Task Stats -->
      <section class="mb-6">
        <TaskStats />
      </section>
<!-- Spacer Line -->
<hr class="my-12 border-t border-gray-300" />

<!-- Filter Buttons -->
<section class="flex justify-center gap-4">
  <button 
    v-for="filter in ['all', 'active', 'completed']" 
    :key="filter"
    @click="currentFilter = filter as TaskFilter"
    :class="[
      'px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-transform duration-300 ease-in-out',
      currentFilter === filter
        ? 'bg-blue-200 text-blue-800 shadow-inner scale-105'
        : 'bg-blue-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 hover:scale-105'
    ]"
  >
    {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
  </button>
</section>

<!-- Spacer Line -->
<hr class="my-12 border-t border-gray-300" />

      <!-- Task List -->
      <section class="mb-6">
        <TaskList :filter="currentFilter" />
      </section>

      




    </div>
    <router-link to="/add" aria-label="Add Task">
  <button
    style="width: 56px; height: 56px; background-color: #3b82f6; color: white; position: fixed; bottom: 2rem; right: 2rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; z-index: 50; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5); cursor: pointer;"
  >
    <svg
      style="width: 28px; height: 28px; stroke: white;"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </button>
</router-link>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TaskFilter } from '../src/models/Task';
import TaskStats from '../src/components/TaskStats.vue';
import TaskList from '../src/components/TaskList.vue';

const currentFilter = ref<TaskFilter>('all');
</script>
