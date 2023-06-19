<script>
    export let className = "";
    export let type = "";
</script>

<div class='container{type ? "-"+type : ""} {className}'>
    <slot></slot>
</div>