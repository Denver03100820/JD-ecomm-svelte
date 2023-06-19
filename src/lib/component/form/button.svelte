<script>
    export let className ="";
    export let style ="";
    export let attributes ={};
    // export let type ="button";
</script>
<button class="{className}" style:style {...attributes}>
    <slot />
</button>