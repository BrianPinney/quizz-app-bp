import { Container, Row, Col, Button } from "react-bootstrap"

export default function QuizzResult({score, quizzLength, handleReset}) {

    return (
        <section>
            <Container className="quiz-result">
                <Row>
                    <Col>
                    <h2>Quizz Result</h2>
                    <p>Your scored {score} out of {quizzLength}.</p>
                    <Button onClick={handleReset}>Reset</Button>
                    </Col>
                </Row>
            </Container>s
        </section>
    )
}