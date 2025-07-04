<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
    
  interface Props {
    variant?: 'primary' | 'secondary' | 'destructive' | 'text';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    children?: any;
    onclick?: (event: MouseEvent) => void;
  }
  
  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    type = 'button',
    class: className = '',
    children,
    onclick,
    ...restProps
  }: Props = $props();
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
  };
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    text: 'text-primary hover:text-primary/90',
  };
  
  const buttonClasses = $derived(cn(
    'btn',
    'border rounded-md',
    sizeClasses[size],
    variantClasses[variant],
    className
  ));
</script>

<button
  {type}
  {disabled}
  class={buttonClasses}
  {onclick}
  {...restProps}
>
  {@render children()}
</button>