<script>
    import Header from '$lib/component/header/header.svelte';
    export let className = "";
</script>

<div class="modal-header {className}">
    <Header header="h5" className={"modal-title"} attributes={{"id":"modalTitleId"}}><slot></slot></Header>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>