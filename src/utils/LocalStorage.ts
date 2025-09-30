export const saveTasks = (tasks: any[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const loadTasks = (): any[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};