import { defineStore } from 'pinia';
import { type Task, TaskPriority } from '../src/models/Task';
import { v4 as uuidv4 } from 'uuid';

interface TaskState {
  tasks: Task[];
}

export const useTaskStore = defineStore('tasks', {
  state: (): TaskState => ({
    tasks: []
  }),
  
  getters: {
    completedTasks: (state) => state.tasks.filter(task => task.completed),
    activeTasks: (state) => state.tasks.filter(task => !task.completed),
    tasksByPriority: (state) => (priority: TaskPriority) => 
      state.tasks.filter(task => task.priority === priority)
  },
  
  actions: {
    addTask(taskData: Omit<Task, 'id' | 'createdAt'>) {
      const newTask: Task = {
        ...taskData,
        id: uuidv4(),
        createdAt: new Date()
      };
      this.tasks.push(newTask);
    },
    
    toggleTaskStatus(taskId: string) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    
    updateTask(taskId: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) {
      const taskIndex = this.tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
      }
    },
    
    deleteTask(taskId: string) {
      const taskIndex = this.tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
      }
    }
  }
});