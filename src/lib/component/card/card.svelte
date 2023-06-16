<script>
    import CardHeader from '$lib/component/card/header.svelte';
    import CardBody from '$lib/component/card/body.svelte';
    export let className = "";
</script>

<div class="card {className}">
    <slot>
        <CardHeader>
            <h2 class="h4">Card Header</h2>
        </CardHeader>
        <CardBody>
            <p>Card Body</p>
        </CardBody>
    </slot>
</div>