import { Row, Col, ListGroup } from "react-bootstrap";

// .color1 {color: #eac544;}
// .color2 {color: #e1dc7e;}
// .color3 {color: #153b9c;}
// .color4 {color: #1d83c5;}
// .color5 {color: #20d2d8;}

const Items = ({ tasks }) => {
    const items = [];

    for (const [i, v] of tasks.entries()) {
        items.push(
            <ListGroup.Item
                as="li"
                key={v.id}
                variant={v.priority}
                style={{
                    margin: "0.5%",
                    borderRadius: "0.25rem",
                }}
            >
                <Row>
                    <Col md={3} xs={6}>
                        <p>#{v.id}</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <h4>{v.title}</h4>
                    </Col>
                    <Col md={3} xs={6}>
                        <p>{v.priority[0].toUpperCase()}</p>
                    </Col>
                </Row>
                <p
                    style={{
                        textAlign: "left",
                        wordWrap: "break-word",
                        textIndent: "30px",
                    }}
                >
                    {v.description}
                </p>
            </ListGroup.Item>
        );
    }

    return (
        <ListGroup as="ul" variant="flush">
            {items}
        </ListGroup>
    );
};

export default Items;
