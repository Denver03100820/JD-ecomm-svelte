<script>
  import { Card, CardBody, CardHeader, CardFooter } from "$lib/component/card";
  import { Container, Row, Col, Div } from "$lib/component/container";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/component/modal";
  // import UiHr from '$lib/component/ui/hr.svelte';
  // import UiIcon from '$lib/component/ui/icon.svelte';
  import TextFormat from "$lib/component/header/textformat.svelte";
  // import Header from '$lib/component/header/header.svelte';
  import { Link, Button, Input, Label, Checkbox } from "$lib/component/form";
  import { product } from "$lib/module/page/products/store.js";
  import { order } from "$lib/module/cart/store.js";
  export let idName, items;

  let orderList = items.map((data) => {
    let orderProd = $product.filter((prod) => prod.ProductID == data.productId);
    data.image = orderProd[0].productImage;
    return data;
  });
  $: console.log(orderList);
</script>

<Modal
  bind:idName
  className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}
>
  <ModalContent>
    <ModalHeader>My Order</ModalHeader>
    <ModalBody>
      <Container>
        <Row>
          {#each items as order}
            <Card className={"mb-3"}>
              <CardHeader className={"d-flex justify-content-between"}>
                <TextFormat type="small">Order</TextFormat>
                <TextFormat type="small">Date Order :</TextFormat>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="col-6">
                    <Div className={"d-flex"}>
                      <img
                        src={order.image}
                        style="width: 100px;"
                        alt="Product"
                      />
                      <TextFormat type="span" className={"ms-3"}
                        >Nokia</TextFormat
                      >
                    </Div>
                  </Col>
                  <Col className="col-6 ">
                    <Div className={"d-flex justify-content-between"}>
                      <TextFormat type="span">Qty: {order.quantity}</TextFormat>
                      <TextFormat type="span">{order.price}</TextFormat>
                      <TextFormat type="span" className={"badge text-bg-info"}
                        >Waiting for Payment</TextFormat
                      >
                    </Div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          {/each}
        </Row>
      </Container>
    </ModalBody>
  </ModalContent>
</Modal>
