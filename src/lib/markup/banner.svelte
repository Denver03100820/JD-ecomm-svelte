<script>
    // export let BannerImage = [];
</script>
<section class="banner d-flex w-100">
    <div id="carouselId" class="carousel slide w-100" data-bs-ride="carousel">
        
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item w-100 active">
                <img src={Banner.ImageBanner} class="w-100 h-50 d-block" alt="First slide" height="300px">
            </div>
            {/each}
        </div>
       
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <!-- <span class="visually-hidden">Previous</span> -->
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <!-- <span class="visually-hidden">Next</span> -->
        </button>
    </div>
</section>