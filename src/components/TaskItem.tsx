import { observer } from "mobx-react-lite";
import { taskStore } from "../store/taskStore";
import { Task } from "../types";
import { useState } from "react";

interface TaskItemProps {
    task: Task;
}

export const TaskItem = observer(({task}: TaskItemProps) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || "");

    const handleSave = ()=> {
        if(!title.trim()) return;
        taskStore.editTask(task.id, { title, description: description || undefined});
        setIsEditing(false);
    };

    return (
        <div className="flex items-center p-2 border-b gap-2">
            {isEditing} ? (
            <>
                <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-1 border rounded flex-1"
                />

                <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-1 border rounded flex-1"
                />
                
                <button onClick={handleSave}
                className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    Save
                </button>

                <button onClick={()=> setIsEditing(false)}
                className="px-2 py-1 bg-gray-500 text-white rounded"
                >
                    Cancel
                </button>
            </>
            ) : (
             <>
             <input type="checkbox" 
                checked={task.completed}
                onChange={() => taskStore.toggleTask(task.id)}
                className="mr-2"
              />

              <div className="flex-1">
                <h3 className={task.completed ? "line-through" : ""}> {task.title}</h3>
                {task.description && <p className="text-sm text-gray-600"> {task.description} </p>}
              </div>

              <button
                onClick={()=> setIsEditing(true)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              
              >
                Edit
              </button>

              <button
                onClick={()=> taskStore.deleteTask(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              
              >
                Delete
              </button>

             </>   
            );
        </div>
    );
});