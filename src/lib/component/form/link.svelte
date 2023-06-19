<script>
  export let className = "";
  export let style = "";
  export let attributes = {};
  export let href = "";
  export let action = () => {};
</script>

<a {href} class={className} {style} {...attributes} on:click={action}>
  <slot />
</a>
