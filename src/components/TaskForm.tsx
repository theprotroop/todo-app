import { useState } from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "../store/taskStore";

export const TaskForm = observer(()=>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return; 
        taskStore.addTask({title, description: description || undefined});
        setTitle("")
        setDescription("")
    };

    return (
        <div className="p-4 bg-gray-100 rounded space-y-2">
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="enter the title"
                className="w-full p-2 border rounded"
             />
             <textarea
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="enter the description"
                className="w-full p-2 border rounded"
             />

             <button type="submit" 
                onClick={handleSubmit}
                className="w-full p-2 bg-blue-500 text-white rounded">
                Add Task
             </button>
        </div>
    );
});