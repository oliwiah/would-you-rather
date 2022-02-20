import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, CardGroup, Button, FormGroup, Form } from 'react-bootstrap';
import { handleAddQuestion } from '../actions/shared'

const NewQuestion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState('');
    const [optionTwoText, setOptionTwoText] = useState('');

    const handleOptionOneChange = (event) => {
        setOptionOneText(event.target.value);
    };

    const handleOptionTwoChange = (event) => {
        setOptionTwoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(handleAddQuestion(optionOneText, optionTwoText));
        setOptionOneText('');
        setOptionTwoText('');
        navigate('/');
    };

    return (
        <CardGroup>
            <Card>
                <Card.Title style={{ fontSize: '1.5em' }}>Add a new question</Card.Title>
                <div className="user-card">
                    <Card.Body>
                        <Card.Text style={{ fontSize: '1.5em' }}>Would you rather...</Card.Text>
                        <FormGroup>
                            <Form.Label>First option</Form.Label>
                            <Form.Control as="textarea" rows={1} value={optionOneText} onChange={handleOptionOneChange}/>
                            <br/>
                            <Form.Label>Second option</Form.Label>
                            <Form.Control as="textarea" rows={1} value={optionTwoText} onChange={handleOptionTwoChange}/>
                            <br />
                            <Button
                                color="info"
                                onClick={handleSubmit}
                                disabled={optionOneText === '' || optionTwoText === ''}
                            >
                                Add
                            </Button>
                        </FormGroup>
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
    );
};

export default NewQuestion;
