export const TaskPriority = {
  Low: "low",
  Medium: "medium",
  High: "high"
} as const;

export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];

// Then in your Task interface:
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  priority: TaskPriority;
}

export type TaskFilter = "all" | "active" | "completed";