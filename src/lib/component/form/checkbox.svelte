<script>
    import Input from '$lib/component/form/input.svelte';
    import Label from '$lib/component/form/label.svelte';
    export let className = "";
    export let idName = "";
    export let forLabel = "";
</script>
<div class="form-check {className}" id="{idName}">
        <Input className={"form-check-input"} type={"checkbox"} idName="{idName}"></Input>
        <Label className={"form-check-label"} forLabel="{forLabel}">
            <slot></slot>
        </Label>
</div>