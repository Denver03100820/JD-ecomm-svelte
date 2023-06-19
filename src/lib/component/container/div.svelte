<script>
    export let className = "";
    export let style ="";
    export let attributes ={};
</script>

<div class={className} style:style {...attributes}>
    <slot></slot>
</div>