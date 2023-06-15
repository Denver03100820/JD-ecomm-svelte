<script>
    import { Card, CardHeader, CardBody } from '$lib/component/card';
    import StarRating from '$lib/module/page/products/starRating.svelte';
    let items = [
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"10.00","productRating":"5"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"20.00","productRating":"4"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"30.00","productRating":"3"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"40.00","productRating":"2"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"50.00","productRating":"1"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"60.00","productRating":"5"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"70.00","productRating":"4"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"80.00","productRating":"3"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"90.00","productRating":"2"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"100.00","productRating":"1"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"99.00","productRating":"1"},
        {"productImage":"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png", "productName":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.","productPrice":"66.00","productRating":"1"}
    ];
</script>
<div class="container">
    <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
        {#each items as item}
            <div class="col">
                <!-- <a href="page.html" class="card p-0 text-decoration-none"> -->
                    <Card classCard="p-0 text-decoration-none">
                        <div class="rounded-top-2" style="background: url('{item.productImage}') no-repeat center center;
                        background-size: cover;
                        background-position: center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover; 
                        -o-background-size: cover;
                        height: 170px;">
                        </div>
                        <CardBody>
                            <h4 class="card-title h6 text-truncate fw-normal d-block">{item.productName}</h4>
                            <h5 class="text-primary">Php {item.productPrice}</h5>
                            <small>
                                <StarRating rating={item.productRating}/>
                                (200)
                            </small>
                        </CardBody>
                    </Card>
            </div>
        {/each}
    </div>
    <div class="text-center mt-3">
      <button type="button" name="" id="" class="btn btn-outline-primary btn-lg rounded-0 w-50">Load More</button>
    </div>
</div>
