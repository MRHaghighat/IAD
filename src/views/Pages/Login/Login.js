import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import translate from '../../../../src/assets/international/fa.js'

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h3>حساب کاربری</h3>
                      <p className="text-muted">{translate.SignInToYourAccount.fa}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={translate.Username.fa} autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder={translate.Password.fa} autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                        <Button color="link" className="px-0">{translate.ForgotPassword.fa}</Button>
                        </Col>
                        <Col xs="6" className="text-left">
                          <Button color="primary" className="px-4">{translate.Login.fa}</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>{translate.Signup.fa}</h2>
                      <p>{translate.Register.description_fa}</p>
                      <Button color="primary" className="mt-3" active>{translate.Register.fa}</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
