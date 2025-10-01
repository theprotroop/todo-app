import { observer } from "mobx-react-lite";
import { TaskForm } from "../components/TaskForm";
import { TaskFilter } from "../components/TaskFilter";

export const Home = observer (() => {

    return (
        <div className=" max-w-lg mx-auto p-4">
            <h1 className=" text-2xl font-bold mb-4"> Todo App </h1>
            <TaskForm />
            <TaskFilter />
        </div>
    );
});