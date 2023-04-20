import { Container, Row, Col } from "react-bootstrap";

export default function QuizzCard ({quizzData, quizzId, quizzLength, handleAnswer}) {

    return (
        <section>
            <Container className="quiz-card">
                <Row>
                    <Col>
                        <h2>({quizzId+1}/{quizzLength}) {quizzData[quizzId].question}</h2>
                       
                        <ul>
                                     {quizzData[quizzId].options.map((quizzOption,id) => {
                                     return <li 
                                    key={"option"+id}
                                    onClick={ () => handleAnswer(quizzOption.isCorrect)}>{quizzOption.answer}</li>
                                 }
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}