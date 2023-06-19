<script>
    import { Ul, Li } from '$lib/component/list';
    import { Link, Button } from '$lib/component/form';
    export let imgSrc = "";
    import UiIcon from '$lib/component/ui/icon.svelte';
    export let listCategories = [
        {"link":"/","name":"Mobile Phones"},
        {"link":"/","name":"Mens Dress"},
        {"link":"/","name":"Womens Dress"},
    ];
</script>
<header class="d-flex w-100 border-bottom py-2 px-2 px-md-4">
    <a href="/"class="nav-brand flex-shrink-0 text-decoration-none d-flex ms-3 flex-row align-items-center"
        style="width: 280px;">
        <img src="{imgSrc}" width="50" alt="logo" />
        <span class="lead fw-bolder ps-4 text-uppercase">LazShopee</span>
    </a>
    <nav class="navbar flex-grow-1">
        <Ul className={"nav w-100 align-items-center"}>
            <Li className={"nav-item d-none d-md-block"}>
                <Link className={"nav-link"} href={"page"}>
                    <UiIcon type="solid" name="home"></UiIcon> &nbsp;Home
                </Link>
            </Li>
            <Li className={"nav-item d-none d-md-block"}>
                <Link className={"nav-link dropdown-toggle"} href={"/"}  attributes={{"role":"button", "data-bs-toggle":"dropdown", "aria-expanded":"false"}}>
                    <UiIcon type="solid" name="list"></UiIcon> &nbsp;Categories
                </Link>
                <Ul className={"dropdown-menu"}>
                    {#each listCategories as item}
                        <Li>
                            <Link className={"dropdown-item"} href={item.link}>{item.name}</Link>
                        </Li>
                    {/each}
                </Ul>
            </Li>
            <Li className={"ms-auto nav-item d-none d-md-block"}>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <Button className={"btn btn-outline-success"} type={"submit"}><UiIcon type="solid" name="search"></UiIcon></Button>
                </form>
            </Li>
            <Li className={"nav-item d-none d-md-block"}>
                <Button className={"nav-link"} type={"button"} attributes={{"data-bs-toggle":"modal", "data-bs-target":"#loginModal"}}>
                    <UiIcon type="solid" name="sign-in"></UiIcon> &nbsp;Login
                </Button>
            </Li>
            <Li className={"nav-item d-none d-md-block"}>
                <Button className={"nav-link"} type={"button"} attributes={{"data-bs-toggle":"modal", "data-bs-target":"#registerModal"}}>
                    <UiIcon type="solid" name="user-plus"></UiIcon> &nbsp;Register
                </Button>
            </Li>
            <Li className={"ms-auto nav-item d-block d-md-none"}>
                <Button className={"nav-link"} type={"button"} attributes={{"data-bs-toggle":"offcanvas", "data-bs-target":"#navbarLinks", "aria-controls":"navbarLinks"}}>
                    <UiIcon type="solid" name="bars"></UiIcon>
                </Button>
            </Li>
        </Ul>
    </nav>
</header>
