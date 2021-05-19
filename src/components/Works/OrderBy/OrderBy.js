import { Form } from "react-bootstrap";

//options = {key:value, key:value}
const OrderBy = ({ options, handleChange }) => {
    return (
        <Form.Control
            as="select"
            onChange={handleChange}
            style={{ width: "60%" }}
        >
            {generateOptions(options)}
        </Form.Control>
    );
};

const generateOptions = (options) => {
    const optionsToReturn = [];
    for (const key of Object.keys(options)) {
        optionsToReturn.push(
            <option key={key} value={key}>
                {options[key]}
            </option>
        );
    }
    return optionsToReturn;
};
export default OrderBy;
