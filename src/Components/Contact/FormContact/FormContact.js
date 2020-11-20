import React, { Component } from 'react';
import { Container ,Row ,Col ,Form ,Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';

// style
import './FormContact.scss';
import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';
// Http Client
import Client from "../../../Service/Client";


class FormContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            loading: false,
            success:false,
            errors:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendContactRequest = this.sendContactRequest.bind(this);
    }

    handleChange(event) {
        const inputName = event.target.name;
        this.setState({
            [inputName]: event.target.value
        });
    }

    sendContactRequest(event) {
        event.preventDefault();
        this.setState({
            loading:true
        });
        const client = new Client();
        const bodyFormData = new FormData();
        bodyFormData.append('name', this.state.name)
        bodyFormData.append('email', this.state.email)
        bodyFormData.append('message', this.state.message)
        client.post('contact_us.php', bodyFormData).then((data) => {
            this.setState({
                loading:false,
                success: data.data.success,
                errors : data.data.errors
            })
            if(data.data.success){
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                })
            }
        })
    }
    render(){
        const { t } = this.props;
        const { name, email, message ,loading , success ,errors} = this.state;
        return(
            <section className="FormContact pt-5 pb-5 mt-md-5">
                {
                    loading ? 
                    <Loader
                        type="BallTriangle"
                        color="#dab469"
                        height={100}
                        width={100}
                        timeout={100000} 
                        className="load_spinner"
                
                    /> : ''
                }
                
                <Container>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={5} md={6} className="mt-5">
                            <h1 className={getLanguage()==='he' || getLanguage()==='ar'?'text-right mb-4 GE_SS':'text-left mb-4 times'}>{t('contact.title')}</h1>
                            <ul className="mb-0 list-unstyled p-0">
                                <li className={getLanguage()==='ar'?'GE_SS':'lota'}>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faEnvelope}/></div></Col>
                                        <Col lg={10} xs={8} className="d-flex justify-content-start align-items-center"><a href="mailto:info@amkan.ae">info@amkan.ae</a></Col>
                                    </Row>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5} md={6} className={(getLanguage()==='ar'?'GE_SS':'lota') + ' mt-5'}>
                            <Form onSubmit={this.sendContactRequest}>
                                {
                                    success ? 
                                        <div className="alert alert-success">
                                            {t('contact-us.success')}
                                        </div>: ''
                                }
                                {
                                    errors.legnth ? 
                                        <ul className="alert alert-danger">
                                            {errors.map((item)=>{
                                                return <li>{item}</li>
                                            })}
                                        </ul> : ''
                                }
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" required={'required'} name={'name'}  placeholder={t('contact.name')} onChange={this.handleChange}  value={name}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name={'email'} required={'required'} placeholder={t('contact.email')} onChange={this.handleChange} value={email}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" required={'required'} name={'message'} rows={4} placeholder={t('contact.message')} onChange={this.handleChange} value={message} />
                                </Form.Group>
                                <Button variant="warning" type={'submit'}>{t('contact.send')}</Button>
                            </Form>

                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

FormContact.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(FormContact);