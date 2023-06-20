<script>

    let quantity = 0;
    $:{
        if(quantity <= 0 )
        quantity = 0;
        if(quantity >= 10)
        quantity = 10;
    }

    let selectedOptions =  { 
            "productPrice": "400", 
            "productImage": "https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-13-ultra-1.jpg",
            "productName": "Xiaomi",
            "productDescription" : 
            "Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece. Professional optics, emotive imaging aesthetics and full Leica experience are embodied in the device to bridge the century old imaging legends and the masterpieces you are creating today."
        }
    ;
   
    
    
    

    let options = [
        { 
            "productPrice": "400", 
            "productImage": "https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-13-ultra-1.jpg",
            "productName": "Xiaomi",
            "productDescription" : 
            "Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece. Professional optics, emotive imaging aesthetics and full Leica experience are embodied in the device to bridge the century old imaging legends and the masterpieces you are creating today."
        },
        { 
            "productPrice": "425", 
            "productImage": "https://cdn-files.kimovil.com/default/0008/64/thumb_763515_default_big.jpg",
            "productName": "Xiaomi",
            "productDescription" : 
            "Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece. Professional optics, emotive imaging aesthetics and full Leica experience are embodied in the device to bridge the century old imaging legends and the masterpieces you are creating today."
        },
        { 
            "productPrice": "435", 
            "productImage": "https://specifications-pro.com/wp-content/uploads/2022/03/Xiaomi-13-Ultra-3-600x600.png",
            "productName": "Xiaomi",
            "productDescription" : 
            "Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece. Professional optics, emotive imaging aesthetics and full Leica experience are embodied in the device to bridge the century old imaging legends and the masterpieces you are creating today."
        },
        { 
            "productPrice": "445", 
            "productImage": "https://cdn11.bigcommerce.com/s-gdiye50htc/images/stencil/500x659/products/623/4123/MPH2467Y__23034.1683400148.jpg?c=1",
            "productName": "Xiaomi",
            "productDescription" : 
            "Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece. Professional optics, emotive imaging aesthetics and full Leica experience are embodied in the device to bridge the century old imaging legends and the masterpieces you are creating today."
        },
    ];

    function handleClick(item) {
        selectedOptions = item;
    }

</script>



<nav class="breadcrumb mb-5">
    <a class="breadcrumb-item text-decoration-none" href="#">Electronics</a>
    <a class="breadcrumb-item text-decoration-none" href="#">Phones</a>
    <span class="breadcrumb-item active" aria-current="page">Nokia</span>
</nav>
<div class="container">
    <div class="product row bg-white p-4">
        <div class="col-12 col-md-5 d-flex flex-column">
            <div class="rounded-2" style="background: url('https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png') no-repeat center center;
            background-size: cover;
            background-position: center;
            -webkit-background-size: cover;
            -moz-background-size: cover; 
            -o-background-size: cover;
            height: 400px;">
            </div>
            <div class="d-flex justify-content-center mt-3">
                <div class="mx-3" style="background: url('https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png') no-repeat center center;
                background-size: cover;
                background-position: center;
                -webkit-background-size: cover;
                -moz-background-size: cover; 
                -o-background-size: cover;
                height: 70px; width: 70px;">
                </div>
                <div class="mx-3" style="background: url('https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png') no-repeat center center;
                background-size: cover;
                background-position: center;
                -webkit-background-size: cover;
                -moz-background-size: cover; 
                -o-background-size: cover;
                height: 70px; width: 70px;">
                </div>
                <div class="mx-3" style="background: url('https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png') no-repeat center center;
                background-size: cover;
                background-position: center;
                -webkit-background-size: cover;
                -moz-background-size: cover; 
                -o-background-size: cover;
                height: 70px; width: 70px;">
                </div>
                <div class="mx-3" style="background: url('https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png') no-repeat center center;
                background-size: cover;
                background-position: center;
                -webkit-background-size: cover;
                -moz-background-size: cover; 
                -o-background-size: cover;
                height: 70px; width: 70px;">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-7 d-flex flex-column px-5 py-3">
            {#if selectedOptions}
            <h3>{selectedOptions.productName}</h3>
            
            
            <p>
                {selectedOptions.productDescription}
            </p>
            {/if}
            <small>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                (200)
            </small>
            <hr>
           

            <h4 class="h5">Options</h4>
            <div class="d-flex mt-1">
                {#each options as variant}
                  <a href="#" class="mx-3" on:click={() => handleClick(variant)}>
                    <img src="{variant.productImage}" style="background-size: cover;
                      background-position: center;
                      -webkit-background-size: cover;
                      -moz-background-size: cover; 
                      -o-background-size: cover;
                      height: 70px; width: 70px;" alt="">
                  </a>
                {/each}
              </div>
              <hr>
              <div class="d-flex align-items-center mb-4">
                {#if selectedOptions}
                  <label for=""><h1>${selectedOptions.productPrice}</h1></label>
                {/if}
              </div>
          
            <div class="d-flex align-items-center">
                
                
                Quantity
                <div class="input-group ms-3" style="width: 120px;">
                    <button class="btn border border-end-0" type="button" on:click={() => quantity -= 1}><i class="fa-solid fa-minus text-success"></i></button>
                    <input type="text" class="form-control border border-start-0 border-end-0 text-center text-success width-10"  value="{quantity}" aria-label="Example text with two button addons">
                    <button class="btn border border-start-0" type="button" on:click={() => quantity += 1}><i class="fa-solid fa-plus text-success"></i></button>
                </div>
                <small class="px-4" style="font-size: 11px;">
                    Only <span class="text-danger fw-bolder">10 items</span> Left! <br>
                    Don't miss it
                </small>
            </div>
            <div class="d-flex mt-4">
                <button class="btn btn-success text-center" style="width: 200px;">Buy Now</button>
                <button class="btn btn-outline-success text-center ms-3" style="width: 200px;">Add to Cart</button>
            </div>
        </div>
    </div>
    <div class="description row bg-white p-4 mt-3">
        <h4>Product Description</h4>
        <div class="d-flex flex-column">
            Processor: <br>
            RAM: <br>
            Storage: 4 MB <br>
            Display: 2.4 inches <br>
            Battery: 1020 mAh <br>
            ModelNokia 125 <br>
            ReleasedMay 2020 <br>
            StatusAvailable <br>
            TypeBar <br>
            Dimensions132 x 50.5 x 15 mm <br>
            Weight91.3 Grams <br>
            Display TypeTFT <br>
            Size2.4 inches <br>
            Resolution240 x 320 pixels <br>
            Display Colors16M <br>
            Pixel Density167 ppi (pixels per inch) <br>
            Internal Storage4 MB <br>
            <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png" alt="" width="50%">
        </div>
    </div>
    <div class="description row bg-white p-4 mt-3">
        <h4>Ratings & Reviews</h4>
        <div class="d-flex flex-column">
        
        </div>
    </div>
</div>

