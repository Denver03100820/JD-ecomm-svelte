<script>
    import { Container, Row, Col, Div } from '$lib/component/container';
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '$lib/component/modal';
    // import UiHr from '$lib/component/ui/hr.svelte';
    // import UiIcon from '$lib/component/ui/icon.svelte';
    // import TextFormat from '$lib/component/header/textformat.svelte';
    import Header from '$lib/component/header/header.svelte';
    import { Link, Button, Input, Label, Checkbox } from '$lib/component/form';

</script>



<Modal idName={"registerModal"}  className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}>
    <ModalContent>
        <ModalHeader>Registration Form</ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Header header={"h4"} className={"h6 text-secondary"}>Personal Information</Header>
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input idName={"floatingLastname"} placeholder={"Fastname"}></Input>
                            <Label forLabel={"floatingLastname"}>Lastname</Label>
                        </Div>
                    </Col>
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input idName={"floatingFirstname"} placeholder={"Firstname"}></Input>
                            <Label forLabel={"floatingFirstname"}>Firstname</Label>
                        </Div>
                    </Col>
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input idName={"floatingMiddle"} placeholder={"Middle"}></Input>
                            <Label forLabel={"floatingMiddle"}>Middle</Label>
                        </Div>
                    </Col>
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input type={"number"} idName={"floatingContact"} placeholder={"Contact"}></Input>
                            <Label forLabel={"floatingContact"}>Contact</Label>
                        </Div>
                    </Col>
                    <Col className={"col-12"}>
                        <Div className={"form-floating mb-3"}>
                            <Input type={"email"} idName={"floatingContact"} placeholder={"Email Address"}></Input>
                            <Label forLabel={"floatingContact"}>Email Address</Label>
                        </Div>
                    </Col>
                    <Header header={"h4"} className={"h6 text-secondary"}>Account Information</Header>
                    <Col className={"col-12"}>
                        <Div className={"form-floating mb-3"}>
                            <Input idName={"floatingUsername"} placeholder={"Username"}></Input>
                            <Label forLabel={"floatingUsername"}>Username</Label>
                        </Div>
                    </Col>   
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input type={"password"} idName={"floatingPassword"} placeholder={"Password"}></Input>
                            <Label forLabel={"floatingPassword"}>Password</Label>
                        </Div>
                    </Col>
                    <Col className={"col-6"}>
                        <Div className={"form-floating mb-3"}>
                            <Input type={"password"} idName={"floatingConfirmPassword"} placeholder={"ConfirmPassword"}></Input>
                            <Label forLabel={"floatingConfirmPassword"}>Confirm Password</Label>
                        </Div>
                    </Col>   
                </Row>
                <Div className="mt-3">
                    <Button className={"btn btn-primary"} style={"width: 150px;"}>Register</Button>
                </Div>
            </Container>
        </ModalBody>
    </ModalContent>
</Modal>

    