import { Container, Row, Col } from "react-bootstrap"

export default function Footer () {
const currentYear = new Date().getFullYear()
const githubLink = "https://github.com/brianpinney/quizz-app-bp"

    return (
        <Container>
            <Row>
                <Col> <footer>
                    <p><small>&copy;{currentYear}</small>
                    <br />
                    <a href={githubLink} target="_blank" rel="noreferrer">Code in Github</a>
                    </p>
                    </footer>
                </Col>
            </Row>
        </Container>
       
    )
}