import { observer } from "mobx-react-lite";
import { Task } from "../types";
import { taskStore } from "../store/taskStore";
import { useState } from "react";
import { TaskItem } from "./TaskItem";

export const TaskFilter = observer(() => {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
    
    const filteredTasks = taskStore.tasks.filter((task: Task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });



    return (
        <div className=" space-y-4">
            <div className=" flex gap-2">
                {["all", "active", "completed"].map((type) => (
                    <button key={type} 
                    onClick={()=> setFilter(type as "all" | "active" | "completed")}
                    className={`px3 py-1 rounded ${filter === type ? "bg-blue-600 text-white" : "bg-blue-600"}`}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <div className=" space-y-2">
                {filteredTasks.length === 0 ?(
                    <p className="text-gray-600"> No Task</p>
                ) : (
                    filteredTasks.map((task: Task) => <TaskItem key={task.id} task={task}/>)
                )}
            </div>
        </div>

    )

});