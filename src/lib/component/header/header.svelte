<script>
    export let className = "";
    export let style ="";
    export let header = "";
    export let attributes ={};
</script>

<svelte:element this={header} class={className} style:style {...attributes}>
    <slot></slot>
</svelte:element>