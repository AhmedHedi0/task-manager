<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">About This Project</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-md">
      <p class="mb-4">
        This Task Manager application was built with Vue 3, TypeScript, and Vite.
      </p>
      
      <h2 class="text-xl font-semibold mb-2">Technologies Used:</h2>
      <ul class="list-disc pl-5 mb-4">
        <li>Vue 3 with Composition API</li>
        <li>TypeScript</li>
        <li>Pinia for State Management</li>
        <li>Vue Router</li>
        <li>Tailwind CSS</li>
      </ul>
      
      
    </div>
    
    <div class="mt-6">
  <router-link to="/">
    <button
      type="button"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Back to Task Manager
    </button>
  </router-link>
</div>

  </div>
</template>