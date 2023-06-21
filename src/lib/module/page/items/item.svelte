<script>

  import UiImage from "$lib/component/ui/image.svelte";
  import UiIcon from "$lib/component/ui/icon.svelte";
  import UiHr from "$lib/component/ui/hr.svelte";
  import Header from "$lib/component/header/header.svelte";
  import TextFormat from "$lib/component/header/textformat.svelte";
  import { Container, Row, Div, Col } from "$lib/component/container";
  import { Button, Link } from "$lib/component/form";
  import StarRating from "$lib/module/page/products/starRating.svelte";
  import Input from "$lib/component/form/input.svelte";
  import { order } from "$lib/module/cart/store.js";


  export let items;
  console.log($order);
  let quantity = 0;
  let price = items.productPrice;
  let optionIndex = 0;
  $: {
    if (quantity <= 0) quantity = 0;
  }

  const setOrder = () => {
    let dataOrder = {};

    let orderItem = $order.map((data, index) => {
      data.index = index;
      return data;
    });

    dataOrder.price = price;
    dataOrder.option = optionIndex;
    dataOrder.quantity = quantity;
    dataOrder.ProductID = items.productId;
    console.log(optionIndex);
    if ($order.length) {
      let isExist = orderItem.filter(
        (data) =>
          data.ProductID == items.productId && data.option == optionIndex
      );
      if (isExist.length) {
        dataOrder.quantity += isExist[0].quantity;
        order.update(dataOrder, isExist[0].index);
      } else {
        if (quantity > 0) order.add(dataOrder);
      }
    } else {
      if (quantity > 0) order.add(dataOrder);
    }
  };
</script>


<Container>
  <Row className="bg-white p-4">
    <Col className="col-12 col-md-5 d-flex flex-column">
      <UiImage src={items.productImage} className={"w-100 rounded"} />
    </Col>
    <Col className="col-12 col-md-7 d-flex flex-column px-5 py-3">
      <Header header="h3">{items.productName}</Header>
      <TextFormat type="p">
        {items.productName}
      </TextFormat>
      <StarRating rating={5} /> ({items.productRating})
      <UiHr />
      <Header header="h5">Options</Header>
      <Div className="d-flex mt-1">
        {#if items.productOptions}
          {#each items.productOptions as items, index}
            <Link
              className=""
              action={() => {
                price = items.price;
                console.log(index);
                optionIndex = index;
              }}
            >
              <UiImage
                src={items.image}
                className="mx-3"
                style="height: 70px; width: 70px; background-size: cover; background-position: center;"
              />
            </Link>
          {:else}
            adasdasd
          {/each}
        {/if}
      </Div>
      <UiHr />
      <Header header="h5">Amount</Header>
      <Header header="h4">PHP {price}</Header>
      <UiHr />

      <Div className="d-flex align-items-center">
        Quantity
        <Div className="input-group ms-3" style="width: 120px;">
          <Button
            className="btn border border-end-0"
            action={() => (quantity -= 1)}
            ><UiIcon type="solid" name="minus text-success" /></Button
          >
          <Input
            type="text"
            className="form-control border border-start-0 border-end-0 text-center text-success"
            value={quantity}
          />
          <Button
            className="btn border border-start-0"
            action={() => (quantity += 1)}
            ><UiIcon type="solid" name="plus text-success" /></Button
          >
        </Div>
        <small class="px-4" style="font-size: 11px;">
          Only <span class="text-danger fw-bolder">10 items</span> Left! <br />
          Don't miss it
        </small>
      </Div>
      <Button className="btn btn-outline-success mt-4" action={() => setOrder()}
        >Add to Cart</Button
      >
    </Col>
  </Row>
</Container>

