import { makeAutoObservable } from "mobx";
import {saveTasks, loadTasks} from '../utils/LocalStorage';
import { Task } from "../types";


class TaskStore {
    tasks: Task[] = loadTasks();

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: Omit<Task, 'id' | 'completed'>) {
        this.tasks.push({ ...task, id: crypto.randomUUID(), completed: false });
        saveTasks(this.tasks);
    }

    toggleTask(id: string) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasks(this.tasks);
        }

    }

    deleteTask(id: string) {
        const task= this.tasks.filter(t => t.id !== id);
        saveTasks(task);
    }

}

export const taskStore = new TaskStore();
