import { Button } from "react-bootstrap";
import "./button.css";

const styleComp = {
    backgroundColor: "#592749",
    borderColor: "#3a1238",
};

const MyButton = ({ handleOnClick, text, type = "Button" }) => {
    return (
        <Button
            className="focus-style"
            type={type}
            style={styleComp}
            onClick={handleOnClick}
        >
            {text}
        </Button>
    );
};

export default MyButton;
