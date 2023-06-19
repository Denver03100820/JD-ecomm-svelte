<script>
    export let className = "";
    export let style ="";
    export let type = "";
    export let attributes ={};
</script>

<svelte:element this={type} class={className} style:style {...attributes}>
    <slot></slot>
</svelte:element>