<template>
  <div class="h-screen flex flex-col bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="w-full bg-white shadow p-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Task Manager</h1>
        <div class="flex space-x-4">
          <router-link
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[$route.path === '/' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200']"
          >
            Tasks
          </router-link>
          <router-link
            to="/add"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[$route.path === '/add' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200']"
          >
            Add Task
          </router-link>
          <router-link
            to="/about"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[$route.path === '/about' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200']"
          >
            About
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main content area centered vertically and horizontally -->
    <main class="flex-grow flex items-center justify-center">
      <router-view />
    </main>
  </div>
</template>
