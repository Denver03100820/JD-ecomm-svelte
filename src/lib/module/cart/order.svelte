<script>
    import { Card, CardBody, CardHeader, CardFooter} from '$lib/component/card';
    import { Container, Row, Col, Div } from '$lib/component/container';
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '$lib/component/modal';
    // import UiHr from '$lib/component/ui/hr.svelte';
    // import UiIcon from '$lib/component/ui/icon.svelte';
    import TextFormat from '$lib/component/header/textformat.svelte';
    // import Header from '$lib/component/header/header.svelte';
    import { Link, Button, Input, Label, Checkbox } from '$lib/component/form';
    export let idName;
</script>



<Modal bind:idName   className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}>
    <ModalContent>
        <ModalHeader>My Order</ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Card className={"mb-3"}>
                        <CardHeader className={"d-flex justify-content-between"}>
                            <TextFormat type="small">Order#0000000221215</TextFormat>
                            <TextFormat type="small">Date Order : 06-23-24</TextFormat>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="col-6">
                                    <Div className={"d-flex"}>
                                        <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png" style="width: 100px;"  alt="Product">
                                        <TextFormat type="span" className={"ms-3"}>Nokia</TextFormat>
                                    </Div>
                                </Col>
                                <Col className="col-6 " >
                                    <Div className={"d-flex justify-content-between"}>
                                        <TextFormat type="span">Qty: 1</TextFormat>
                                        <TextFormat type="span">3000</TextFormat>
                                        <TextFormat type="span" className={"badge text-bg-info"}>Waiting for Payment</TextFormat>
                                    </Div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card className={"mb-3"}>
                        <CardHeader className={"d-flex justify-content-between"}>
                            <TextFormat type="small">Order#0000000221215</TextFormat>
                            <TextFormat type="small">Date Order : 06-23-24</TextFormat>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="col-6">
                                    <Div className={"d-flex"}>
                                        <img src="https://ph-live.slatic.net/p/4f884bbf68a05dd7f003bd5fb499e03c.png" style="width: 100px;"  alt="Product">
                                        <TextFormat type="small" className={"ms-3"}>TP-Link Archer AX10</TextFormat>
                                    </Div>
                                </Col>
                                <Col className="col-6 " >
                                    <Div className={"d-flex justify-content-between"}>
                                        <TextFormat type="span">Qty: 1</TextFormat>
                                        <TextFormat type="span">3000</TextFormat>
                                        <TextFormat type="span" className={"badge text-bg-success"}>Done</TextFormat>
                                    </Div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </ModalBody>
    </ModalContent>
</Modal>
    