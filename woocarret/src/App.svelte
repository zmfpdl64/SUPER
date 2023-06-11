<script>
  import Index from "./pages/Index.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Write from "./pages/Write.svelte";
  import Router from 'svelte-spa-router';
  import './css/style.css';

  const routes = {
    '/':Index,
    '/write':Write,
    '*':NotFound,
  }
</script>
<Router routes={routes} />

<main>
</main>

<style>

</style>
