import { useState } from "react";
import { Button } from "../layout/Base";
import TaskForm from "./formTasks/index";
import ShowTasks from "./showTasks";

const Tasks = () => {
    // task: {
    //     id:Number,
    //     title:String,
    //     description:String,
    //     priority:String
    // }
    const [tasks, setTask] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const getNextId = () => (tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1);

    const handleShowModal = (display = true) => {
        setShowModal(display);
    };
    const handleCreateTask = (task) => {
        task.id = getNextId();
        setTask([...tasks, task]);
        handleShowModal(false);
        //setShowPopUp()
    };

    return (
        <>
            <Button onClick={handleShowModal}>Add new task</Button>
            {showModal && (
                <TaskForm
                    createTask={handleCreateTask}
                    closeModal={() => {
                        handleShowModal(false);
                    }}
                />
            )}
            {tasks.length > 0 && <ShowTasks tasks={tasks} />}
        </>
    );
};
export default Tasks;
