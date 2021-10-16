import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class BoardComponent extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>TODO</Col>
                        <Col id="middle-col">IN_PROGRESS</Col>
                        <Col>DONE</Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col id="middle-col">2</Col>
                        <Col>3</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BoardComponent;