<script>
    import MarkupNavbar from '$lib/markup/navbar.svelte';
    import MarkupBanner from '$lib/markup/banner.svelte';
    import MarkupOffcanvas from '$lib/markup/offcanvas.svelte';
    import imgSrc from '$lib/images/shopping-online.png';
</script>
<div class="position-absolute d-flex flex-column vw-100 vh-100 overflow-hidden">
    <MarkupNavbar imgSrc={imgSrc}></MarkupNavbar>
    <main class="d-flex flex-column flex-grow-1 overflow-y-auto">
        <MarkupBanner></MarkupBanner>
        <!-- Content -->
        <section class="content py-5 px-md-5" style="background: #f5f5f5;">
            <slot />
        </section>
    </main>
</div>
<MarkupOffcanvas imgSrc={imgSrc}></MarkupOffcanvas>

<style>
    /* Add the shadow style */
    /* .card:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    } */
</style>