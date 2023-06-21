<script>
  import { Card, CardBody, CardImage } from "$lib/component/card";
  import { Container, Row, Col } from "$lib/component/container";
  import { Link } from "$lib/component/form";
  import Header from "$lib/component/header/header.svelte";
  import StarRating from "$lib/module/page/products/starRating.svelte";
  import { product } from "$lib/module/page/products/store.js";
  let items = [
    {
      productId: "1",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "10.00",
      productRating: 5,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 20,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 30,
        },
      ],
    },
    {
      productId: "2",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "20.00",
      productRating: 4,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 20,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 30,
        },
      ],
    },
    {
      productId: "3",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "30.00",
      productRating: 3,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 101,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 201,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 301,
        },
      ],
    },
    {
      productId: "4",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "40.00",
      productRating: 2,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 208,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 303,
        },
      ],
    },
    {
      productId: "5",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "50.00",
      productRating: 1,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 201,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 330,
        },
      ],
    },
    {
      productId: "6",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "60.00",
      productRating: 5,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 230,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 330,
        },
      ],
    },
    {
      productId: "7",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "70.00",
      productRating: 4,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 280,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 380,
        },
      ],
    },
    {
      productId: "8",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "80.00",
      productRating: 3,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 290,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 390,
        },
      ],
    },
    {
      productId: "9",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "90.00",
      productRating: 2,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 270,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 350,
        },
      ],
    },
    {
      productId: "10",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "100.00",
      productRating: 1,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 210,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 310,
        },
      ],
    },
    {
      productId: "11",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "99.00",
      productRating: 1,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 220,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 320,
        },
      ],
    },
    {
      productId: "12",
      productImage:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      productPrice: "66.00",
      productRating: 1,
      productOptions: [
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 10,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 40,
        },
        {
          image:
            "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
          name: "sadas",
          price: 360,
        },
      ],
    },
  ];

  product.set(items);
</script>

<Container>
  <Row className={"row-cols-2 row-cols-lg-6 row-cols-md-4 g-2 g-lg-3"}>
    {#each $product as item}
      <Link
        href="/lazshopee/web/item/{item.productId}"
        className="text-decoration-none"
      >
        <Col>
          <Card className="p-0 text-decoration-none">
            <CardImage image={item.productImage} />
            <CardBody>
              <Header
                header="h4"
                className={"card-title h6 text-truncate fw-normal d-block"}
                >{item.productName}</Header
              >
              <Header header="h5" className={"text-primary"}
                >Php {item.productPrice}</Header
              >
              <Header header="small">
                <StarRating rating={item.productRating} />
                ({item.productRating})
              </Header>
            </CardBody>
          </Card>
        </Col>
      </Link>
    {/each}
  </Row>
</Container>
