import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, author } = props.nw;
    return (

        <Col md="4">
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{author}</small>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default News;