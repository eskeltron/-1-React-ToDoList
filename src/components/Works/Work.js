import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import OrderBy from "./OrderBy";
import Items from "./Items";
import MyButton from "./Button";

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
        if (title.length === 0 || description.length === 0 || priority.length === 0) {
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
        setOrderBy(orderBystr);
        const orderedTasks = a ?? Array.from(tasks);

        orderedTasks.sort((a, b) => {
            let result;
            if (orderByOptions[orderBystr] === "Priority - ASC") {
                result = PRIORITIESVALUES[b.priority] - PRIORITIESVALUES[a.priority];
            } else if (orderByOptions[orderBystr] === "Priority - DESC") {
                result = PRIORITIESVALUES[a.priority] - PRIORITIESVALUES[b.priority];
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

    const columnStyle = {
        backgroundColor: "#f2a8eb",
        margin: "0.5%",
        border: "1px solid black",
        padding: "1%",
    };

    return (
        <Container>
            <h3>
                Amount tasks to do: <b>{tasks.length}</b>
            </h3>
            <MyButton handleOnClick={handleShowForm} text={!showForm ? "Show form" : "Hide form"} />
            <Row style={{ flexWrap: "nowrap", alignItems: "flex-start" }}>
                {showForm && (
                    <Col
                        md={tasks.length > 0 ? 6 : 12}
                        xs={tasks.length > 0 ? 12 : 24}
                        style={columnStyle}
                    >
                        <h3>Tasks</h3>
                    </Col>
                )}
                {tasks.length > 0 && (
                    <Col md={showForm ? 6 : 12} xs={showForm ? 12 : 24} style={columnStyle}>
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
