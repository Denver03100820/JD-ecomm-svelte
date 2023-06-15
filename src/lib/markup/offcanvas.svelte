<script>
    export let imgSrc = "";
</script>
<div class="offcanvas offcanvas-start" tabindex="-1" id="navbarLinks" aria-labelledby="navbarLinksLabel">
    <div class="offcanvas-header">
        <div class="nav-brand flex-shrink-0 text-decoration-none d-flex ms-3 flex-row align-items-center"
            style="width: 280px;">
            <img src="{imgSrc}" width="50" alt="logo" />
            <span class="lead fw-bolder ps-4 text-uppercase">LazShopee</span>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/" class="text-decoration-none">Home</a></li>
            <li class="list-group-item">
                <a 
                    href="/" 
                    class="text-decoration-none d-flex justify-content-between align-items-center" 
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample">
                    Categories <i class="fa-solid fa-angle-right"></i>
                </a>
            </li>
            <li class="list-group-item collapse" id="collapseExample">
                <a href="/">sample</a>
            </li>
            <li class="list-group-item"><a href="/" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
            <li class="list-group-item"><a href="/" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a></li>
        </ul>
        
    </div>
</div>