<script>
    import Header from '$lib/component/header/header.svelte';
    export let className = "";
</script>

<div class="modal-header {className}">
    <Header header="h5" className={"modal-title"} attributes={{"id":"modalTitleId"}}><slot></slot></Header>
</div>
