<script>
  import ModulePageItems from "$lib/module/page/items/item.svelte";
  export let data;
  console.log(data);
</script>

<section class="content py-5 px-md-5" style="background: #f5f5f5;">
  <ModulePageItems items={data} />
</section>
