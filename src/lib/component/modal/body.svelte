<script>
    export let className = "";
    export let style ="";
    export let attributes ={};
</script>
<div class="modal-body {className}" style:style {...attributes}>
    <slot />
</div>


