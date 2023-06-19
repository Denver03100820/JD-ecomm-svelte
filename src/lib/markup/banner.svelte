<script>
    export let BannerImage = [
        {"ImageBanner": "https://icms-image.slatic.net/images/ims-web/6099bc3c-c8a9-430e-a849-8103fc1c77a2.jpg"},
        {"ImageBanner": "https://lzd-img-global.slatic.net/g/icms/images/ims-web/1691b09f-8f9b-4d62-bd79-77577bc3fa4d.jpg_1200x1200q90.jpg"},
        {"ImageBanner": "https://lzd-img-global.slatic.net/g/icms/images/ims-web/a661910f-9012-4b62-8d0a-ba026714d23a.jpg_1200x1200q90.jpg"},
        {"ImageBanner": "https://lzd-img-global.slatic.net/g/icms/images/ims-web/f82ad3e8-533e-4fe9-bac9-0cd9e5413a7e.jpg_1200x1200q90.jpg"}
    ];
</script>
<section class="banner d-flex w-100">
    <div id="carouselId" class="carousel slide w-100" data-bs-ride="carousel">
        
        <div class="carousel-inner" role="listbox">
            {#each BannerImage as Banner, Index}
                <div class="carousel-item w-100 {Index == 0?"active":""}">
                    <img src={Banner.ImageBanner} class="w-100 h-50 d-block" alt="First slide" height="300px">
                </div>
            {/each}
        </div>
       
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>