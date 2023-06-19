<script>
    export let className = "form-control";
    export let idName = "";
    export let forLabel = "";

</script>
<label class="{className}" id="{idName}" for="{forLabel}">
    <slot></slot>
</label>