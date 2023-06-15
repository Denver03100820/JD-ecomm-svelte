<script>
    import UiIcon from '$lib/component/ui/icon.svelte';
    export let rating;
  </script>
  
  <span>
    {#each Array(5) as _, index}
    <UiIcon type="solid" name="star" color={(index >= rating)?"#adb5bd":"#ffcc14"}></UiIcon>
    {/each}
  </span>