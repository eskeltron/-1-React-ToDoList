// import { Form } from "react-bootstrap";
import { Form } from "../../layout/Base";
import MyModal from "../../Modal/MyModal";
import priorities from "../priorities";
import { useForm } from "react-hook-form";

const FormTask = ({ createTask, closeModal }) => {
    const { register, watch, handleSubmit, errors } = useForm();

    console.log(watch);

    const handleCreateTask = () => {
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const priority = document.getElementById("priority").value.trim();
        if (title && description && priority) {
            document.getElementById("submitForm").click();
            console.log(errors);
            // createTask({ title, description, priority });
        }
    };

    const handleCloseModal = () => {
        closeModal();
    };

    const handleOnKeyPress = (e) => {
        //HACER Q FUNCIONE react-hook-form
        const acceptButton = document.getElementById("accept");
        const cancelButton = document.getElementById("cancel");
        if (acceptButton && e.keyCode === 13) {
            acceptButton.click();
            // document.removeEventListener("keydown", handleOnKeyPress);
        } else if (cancelButton && e.keyCode === 27) {
            cancelButton.click();
            // document.removeEventListener("keydown", handleOnKeyPress);
        }
    };

    const acceptProperties = {
        text: "Create",
        handle: handleCreateTask,
    };

    const cancelProperties = {
        text: "Cancel",
        handle: handleCloseModal,
    };

    const onSubmit = (data) => console.log(data);

    return (
        <MyModal
            title="Create a new task"
            Body={() => (
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label as="b">Title:</Form.Label>
                        <Form.Control
                            placeholder="Title"
                            id="title"
                            autoComplete="off"
                            {...register("title", { required: true, minLength: 4 })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label as="b">Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Description about the task"
                            id="description"
                            {...register("description", { required: true, minLength: 5 })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label as="b">Priority:</Form.Label>
                        <Form.Control
                            as="select"
                            id="priority"
                            isValid={false}
                            {...register("priority", { required: true })}
                        >
                            {Object.entries(priorities.PRIORITIESVALUES).map((i) => {
                                return (
                                    <option key={i[0]} value={i[0]}>
                                        {i[0]}
                                    </option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Control id="submitForm" type="submit" display="none" />
                </Form>
            )}
            acceptProperties={acceptProperties}
            cancelProperties={cancelProperties}
            handleOnKeyPress={handleOnKeyPress}
        />
    );
};

export default FormTask;
