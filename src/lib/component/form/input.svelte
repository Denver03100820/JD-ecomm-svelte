<script>
  export let type = "text";
  export let className = "form-control";
  export let idName = "";
  export let placeholder = "";
  export let name = "";
  export let value = "";
  export let style = "";
</script>

<input
  {type}
  class={className}
  id={idName}
  {name}
  {value}
  {placeholder}
  {style}
/>
