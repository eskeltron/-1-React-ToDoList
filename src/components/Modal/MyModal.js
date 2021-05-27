import { Modal, Button, Container } from "../layout/Base";

const MyModal = ({ title, Body, handleOnKeyPress, acceptProperties, cancelProperties }) => {
    if (handleOnKeyPress) {
        document.addEventListener("keydown", handleOnKeyPress);
    }

    return (
        <Modal>
            <Container>
                <Container.Header>
                    <h2>{title}</h2>
                </Container.Header>
                <Container.Body>
                    <Body />
                </Container.Body>
                <Container.Footer>
                    {acceptProperties && (
                        <Button id="accept" onClick={acceptProperties.handle}>
                            {acceptProperties.text}
                        </Button>
                    )}
                    {cancelProperties && (
                        <Button id="cancel" onClick={cancelProperties.handle}>
                            {cancelProperties.text}
                        </Button>
                    )}
                </Container.Footer>
            </Container>
        </Modal>
    );
};

export default MyModal;
