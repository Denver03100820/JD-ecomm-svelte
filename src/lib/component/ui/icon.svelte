<script>
    export let name = "home";
    export let type = "";
    export let color = "";
</script>
<i class="fa{type ? '-'+type : ''} fa-{name}" style="color:{color ? color :''} "></i>