<script>
    export let className = "";
    export let style ="";
    export let attributes ={};
</script>
<div class="modal-footer justify-content-center text-center {className}" style:style {...attributes}>
    <slot />
</div>


