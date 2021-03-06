import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { FadeTransform,Stagger } from 'react-animation-components';


const required = val => val && val.length;   
const maxLength = len => val => !val || (val.length <= len);  
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CateringForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };


    }

handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // this.props.resetFeedbackForm();
//     this.props.postFeedback();
}


render() {
        
    return (

                <div className="container">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(1) translateY(-50%)'
                        }}>
                        <div className='row'> 
                        <div className ='col-md-6'>
                            <LocalForm model="feedbackForm" onSubmit={values => this.handleSubmit(values)}> {/* model="feedbackForm */}
                                    <Row className="form-group">
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                                placeholder="First Name"
                                                className="form-control"
                                                validators={{
                                                    required, 
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".firstName"
                                                show="touched" // show error if user left the column wthout meeting unput equirements
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".lastName" id="lastName" name="lastName"
                                                placeholder="Last Name"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".lastName"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                        <Col md={10}>
                                            <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                                placeholder="Phone number"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    minLength: minLength(10),
                                                    maxLength: maxLength(15),
                                                    isNumber
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".phoneNum"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 10 numbers',
                                                    maxLength: 'Must be 15 numbers or less',
                                                    isNumber: 'Must be a number'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Control.text model=".email" id="email" name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 4, offset: 2}}>
                                            <div className="form-check">
                                                <Label check>
                                                    <Control.checkbox
                                                        model=".agree"
                                                        name="agree"
                                                        className="form-check-input"
                                                    /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <Control.select model=".contactType" name="contactType" className="form-control">
                                                <option>By Phone</option>
                                                <option>By Email</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".feedback" id="feedback" name="feedback"
                                                rows="12"
                                                className="form-control"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </Row>
                            </LocalForm>
                        </div>
                        <div className='col-md-6'>
                        <img width="90%" src="HV-React/images/pic44.jpg" alt="Card image cap" className='rounded'/>
                        </div>
                        </div>
                    </FadeTransform>
                    
                </div>
         
    );
}
}


export default CateringForm;