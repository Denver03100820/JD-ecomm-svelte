<script>
    export let className = "";
    export let header = "";
</script>

<svelte:element this={header} class={className}>
    <slot></slot>
</svelte:element>