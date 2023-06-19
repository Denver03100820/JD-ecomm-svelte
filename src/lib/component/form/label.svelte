<script>
  export let className = "";
  export let idName = "";
  export let forLabel = "";
</script>

<label class={className} id={idName} for={forLabel}>
  <slot />
</label>
