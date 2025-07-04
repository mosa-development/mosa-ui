<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground p-8">
  {@render children()}
</div>