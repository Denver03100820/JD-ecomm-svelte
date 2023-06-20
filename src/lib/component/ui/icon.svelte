<script>
    export let name = "home";
    export let type = "";
    export let color = "";
    export let style = "";
</script>
<i class="fa{type ? '-'+type : ''} fa-{name}" style="{style} color:{color ? color :''} "></i>