<script>
  export let className = "";
  export let style = "";
  export let attributes = {},
    action = () => {};
  // export let type ="button";
</script>

<button class={className} style:style {...attributes} on:click={action}>
  <slot />
</button>
