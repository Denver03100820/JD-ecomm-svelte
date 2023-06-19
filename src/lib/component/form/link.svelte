<script>
    export let className ="";
    export let style ="";
    export let attributes ={};
    export let href ="";
</script>
<a href="{href}" class="{className}" style="{style}" {...attributes}>
    <slot />
</a>