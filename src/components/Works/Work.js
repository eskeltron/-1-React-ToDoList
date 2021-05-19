import { useState } from "react";
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap";

import OrderBy from "./OrderBy";
import Items from "./Items";
import MyButton from "./Button";

import shortId from "short-id";
import priorities from "./priority";
const { PRIORITIES, PRIORITIESVALUES } = priorities;

const Work = () => {
    //[{id: string, title: string, description: string,priority:string}]
    const [tasks, setTask] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [orderBy, setOrderBy] = useState("");

    const priorityOptions = [];

    const getNextId = () => {
        let maxId = 1;
        if (tasks.length === 0) {
            maxId = 1;
        } else {
            for (const t of tasks) {
                if (t.id >= maxId) maxId = t.id + 1;
            }
        }
        return maxId;
    };

    const createTask = (e) => {
        e.preventDefault();
        let [title, description, priority] = e.target.elements;
        title = title.value.trim();
        description = description.value.trim();
        priority = priority.value;
        if (
            title.length === 0 ||
            description.length === 0 ||
            priority.length === 0
        ) {
            return;
        }

        const newTasks = [
            ...tasks,
            {
                id: getNextId(),
                title,
                description,
                priority,
            },
        ];

        handleChangeOrderBy(null, newTasks);

        setTask(newTasks);
        e.target.reset();
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    const orderByOptions = {
        priorityASC: "Priority - ASC",
        priorityDESC: "Priority - DESC",
        numberASC: "Number - ASC",
        numberDESC: "Number - DESC",
    };

    const handleChangeOrderBy = (e, a = null) => {
        const orderBystr = e?.target?.value ?? orderBy;
        console.log(orderBystr);
        setOrderBy(orderBystr);
        const orderedTasks = a ?? Array.from(tasks);
        console.log(orderedTasks);

        orderedTasks.sort((a, b) => {
            let result;
            if (orderByOptions[orderBystr] === "Priority - ASC") {
                result =
                    PRIORITIESVALUES[b.priority] - PRIORITIESVALUES[a.priority];
            } else if (orderByOptions[orderBystr] === "Priority - DESC") {
                result =
                    PRIORITIESVALUES[a.priority] - PRIORITIESVALUES[b.priority];
            } else if (orderByOptions[orderBystr] === "Number - ASC") {
                result = b.id - a.id;
            } else if (orderByOptions[orderBystr] === "Number - DESC") {
                result = a.id - b.id;
            }
            return result;
        });

        orderedTasks.filter((v, i, a) => {
            return !a.includes((e) => e.id === v.id);
        });

        setTask(orderedTasks);
    };

    for (const v of PRIORITIES.values()) {
        priorityOptions.push(
            <option key={v} value={v}>
                {v}
            </option>
        );
    }

    const columnStyle = {
        backgroundColor: "#f2a8eb",
        margin: "0.5%",
        border: "1px solid black",
        padding: "1%",
    };

    return (
        <Container>
            <MyButton
                handleOnClick={handleShowForm}
                text={!showForm ? "Show form" : "Hide form"}
            />
            <Row style={{ flexWrap: "nowrap", alignItems: "flex-start" }}>
                {showForm && (
                    <Col
                        md={tasks.length > 0 ? 6 : 12}
                        xs={tasks.length > 0 ? 12 : 24}
                        style={columnStyle}
                    >
                        <h3>Tasks</h3>
                        <Form onSubmit={createTask}>
                            <Form.Group>
                                <Form.Label as="b">Title</Form.Label>
                                <Form.Control placeholder="Title"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label as="b">Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Description about the task"
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label as="b"> Priority</Form.Label>
                                <Form.Control
                                    as="select"
                                    defaultValue={PRIORITIES[0]}
                                >
                                    {priorityOptions}
                                </Form.Control>
                            </Form.Group>
                            <MyButton text="Add task" type="submit" />
                        </Form>
                    </Col>
                )}
                {tasks.length > 0 && (
                    <Col
                        md={showForm ? 6 : 12}
                        xs={showForm ? 12 : 24}
                        style={columnStyle}
                    >
                        <Row>
                            <Col md={6} xs={12}>
                                <h3>Tasks to do</h3>
                            </Col>
                            <Col
                                md={6}
                                xs={12}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <b>Order by: </b>
                                <OrderBy
                                    handleChange={handleChangeOrderBy}
                                    options={orderByOptions}
                                />
                            </Col>
                        </Row>
                        <Items tasks={tasks} />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Work;
