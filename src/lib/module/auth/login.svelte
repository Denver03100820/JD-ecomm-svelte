<script>
    import { Container, Row, Col, Div } from '$lib/component/container';
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '$lib/component/modal';
    import UiHr from '$lib/component/ui/hr.svelte';
    import UiIcon from '$lib/component/ui/icon.svelte';
    import TextFormat from '$lib/component/header/textformat.svelte';
    import { Link, Button, Input,Label } from '$lib/component/form';

</script>



<Modal idName={"loginModal"}>
    <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
            <Container>
                <Div className={"d-flex flex-column mb-3"}>
                    <Div className={"form-floating mb-3"}>
                        <Input idName={"floatingUsername"} placeholder={"username"}></Input>
                        <Label forLabel={"floatingUsername"}>Username</Label>
                    </Div>
                    <Div className={"form-floating mb-3"}>
                        <Input type={"password"} idName={"floatingPassword"} placeholder={"password"}></Input>
                        <Label forLabel={"floatingPassword"}>Password</Label>
                    </Div>
                    <Div className={"d-flex justify-content-end mb-3"}>
                        <Button className={"btn btn-primary py-2"}>LOGIN</Button>
                    </Div>
                </Div>
                <Row>
                    <Col className={"col-6"}>
                        <Link className={"text-decoration-none text-primary"} href={"/"}>Register Now</Link>
                    </Col>
                    <Col className={"col-6 text-end"}>
                        <Link className={"text-secondary"} href={"/"}>Forgot Password?</Link>
                    </Col>
                </Row>
                <UiHr></UiHr>
                <Div className={"d-flex justify-content-center"}>
                    <TextFormat className={"mb-3"}>Sign up with:</TextFormat>
                </Div>
                <Div className={"d-flex justify-content-center flex-row"}>
                    <Button className={"btn btn-outline-primary w-50 me-1"}><UiIcon type="brands" name="facebook"></UiIcon> &nbsp;Facebook</Button>
                    <Button className={"btn btn-outline-dark w-50 me-1"}><UiIcon type="brands" name="google"></UiIcon> &nbsp;Google</Button>
                </Div>
            </Container>
        </ModalBody>
    </ModalContent>
</Modal>