<script>
  import { Container, Row, Col, Div } from "$lib/component/container";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/component/modal";
  // import UiHr from '$lib/component/ui/hr.svelte';
  import UiIcon from "$lib/component/ui/icon.svelte";
  import TextFormat from "$lib/component/header/textformat.svelte";
  import Header from "$lib/component/header/header.svelte";
  import { Link, Button, Input, Label, Checkbox } from "$lib/component/form";
  import { product } from "$lib/module/page/products/store.js";
  import { order } from "$lib/module/cart/store.js";
  export let idName;

  let orderList = $order.map((data) => {
    let orderProd = $product.filter((prod) => prod.ProductID == data.productId);
    data.image = orderProd[0].productImage;
    return data;
  });

  const quantityInc = (q) => {
    let quant = q + 1;
    return quant;
  };

  const quantityDec = (q) => {
    let quant = q <= 1 ? 0 : q - 1;

    return quant;
  };

  const setOrder = (items) => {
    let dataOrder = {};

    let isExist = $order.filter(
      (data) => data.ProductID == items.ProductID && data.option == items.option
    );

    if (isExist.length) {
      isExist[0].quantity = items.quantity;
      order.update(isExist[0], isExist[0].index);
    }
  };
  $: {
    orderList = $order.map((data) => {
      let orderProd = $product.filter(
        (prod) => prod.ProductID == data.productId
      );
      data.image = orderProd[0].productImage;
      return data;
    });
  }
</script>

<Modal
  bind:idName
  className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}
>
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
                  {#each orderList as items}
                    <tr class="text-center align-middle">
                      <td
                        ><img
                          src={items.image}
                          style="width: 100px;"
                          alt="Product"
                        /></td
                      >
                      <td>Nokia</td>
                      <td>
                        <Div className={"d-flex align-items-center"}>
                          <Div
                            className={"input-group ms-3"}
                            style={"width: 120px"}
                          >
                            <Button
                              className={"btn border border-end-0"}
                              action={() => {
                                items.quantity = quantityDec(items.quantity);
                                setOrder(items);
                              }}
                              ><UiIcon type={"solid"} name={"minus"} /></Button
                            >
                            <Input
                              className={"form-control border border-start-0 border-end-0 text-center text-success"}
                              value={items.quantity}
                            />
                            <Button
                              className={"btn border border-start-0"}
                              action={() => {
                                items.quantity = quantityInc(items.quantity);
                                setOrder(items);
                              }}><UiIcon type={"solid"} name={"plus"} /></Button
                            >
                          </Div>
                        </Div>
                      </td>
                      <td>{items.quantity * items.price}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </Div>
          </Col>
        </Row>
      </Container>
    </ModalBody>
    <ModalFooter>
      <Button className={"btn btn-primary"} style={"width: 150px;"}
        >Checkout</Button
      >
    </ModalFooter>
  </ModalContent>
</Modal>
