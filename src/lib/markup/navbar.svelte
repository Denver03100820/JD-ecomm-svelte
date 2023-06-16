<script>
    export let imgSrc = "";
    export let listCategories = [];
</script>
<header class="d-flex w-100 border-bottom py-2 px-2 px-md-4">
    <a href="/"class="nav-brand flex-shrink-0 text-decoration-none d-flex ms-3 flex-row align-items-center"
        style="width: 280px;">
        <img src="{imgSrc}" width="50" alt="logo" />
        <span class="lead fw-bolder ps-4 text-uppercase">LazShopee</span>
    </a>
    <nav class="navbar flex-grow-1">
        <ul class="nav w-100 align-items-center">
            <li class="nav-item d-none d-md-block">
                <a class="nav-link " href="/"><i class="fa-solid fa-home"></i> &nbsp;Home</a>
            </li>
            <li class="nav-item dropdown d-none d-md-block">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-list"></i> &nbsp;Categories
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/"></a></li>
                </ul>
            </li>
            <li class="ms-auto nav-item d-none d-md-block">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-search"></i></button>
                </form>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href='/' type="button" data-bs-toggle="modal" data-bs-target="#loginModal"><i class="fa-solid fa-sign-in"></i> &nbsp;Login</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href='/' type="button" data-bs-toggle="modal" data-bs-target="#registerModal"><i class="fa-solid fa-user-plus"></i> &nbsp;Register</a>
            </li>
            <li class="ms-auto nav-item d-block d-md-none">
                <a class="nav-link" href='/' type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarLinks" aria-controls="navbarLinks"><i class="fa-solid fa-bars"></i></a>
            </li>
        </ul>
    </nav>
</header>