<script>
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="space-y-8">
  <h1 class="text-3xl font-bold">Component Library Test Page</h1>
  
  <section>
    <h2 class="text-xl font-semibold mb-4">Buttons</h2>
    
    <div class="space-x-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="text">Text</Button>
    </div>
  </section>
  
  <section>
    <h2 class="text-xl font-semibold mb-4">Sizes</h2>
    
    <div class="space-x-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </section>
</div>