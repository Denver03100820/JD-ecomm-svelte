<script>
    import { Container, Row, Col, Div } from '$lib/component/container';
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '$lib/component/modal';
    // import UiHr from '$lib/component/ui/hr.svelte';
    import UiIcon from '$lib/component/ui/icon.svelte';
    import TextFormat from '$lib/component/header/textformat.svelte';
    import Header from '$lib/component/header/header.svelte';
    import { Link, Button, Input, Label, Checkbox } from '$lib/component/form';

</script>



<Modal idName={"cartModal"}  className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}>
    <ModalContent>
        <ModalHeader>Cart</ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Col className={"col-12"}>
                        <Div className="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center align-middle">
                                        <td><img src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png" style="width: 100px;" alt="Product"></td>
                                        <td>Nokia</td>
                                        <td>
                                            <Div className={"d-flex align-items-center"}>
                                                <Div className={"input-group ms-3"} style={"width: 120px"}>
                                                    <Button className={"btn border border-end-0"}><UiIcon type={"solid"} name={"minus"}></UiIcon></Button>
                                                    <Input className={"form-control border border-start-0 border-end-0 text-center text-success"} value={"1"}></Input>
                                                    <Button className={"btn border border-start-0"}><UiIcon type={"solid"} name={"plus"}></UiIcon></Button>
                                                </Div>
                                                <TextFormat type={"small"} className={"px-4"} style={"font-size: 11px;"}>
                                                    Only <TextFormat type={"span"} className={"text-danger fw-bolder"}>10 items</TextFormat> Left! <br>
                                                    Don't miss it
                                                </TextFormat>
                                            </Div>
                                        </td>
                                        <td>3000.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button className={"btn btn-primary"} style={"width: 150px;"}>Checkout</Button>
        </ModalFooter>
    </ModalContent>
</Modal>
    