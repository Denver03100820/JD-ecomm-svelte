<script>
    export let className = "modal-dialog-centered";
    export let idName = "";
</script>

<div class="modal fade" id="{idName}" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog {className}" role="document">
        <slot></slot>
    </div>
</div>

