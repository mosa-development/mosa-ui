<script lang="ts">
	import { cn } from '$lib/utils/cn.js';

	interface Props {
		variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
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
		sm: 'py-1 px-3 text-xs',
		md: 'py-1.5 px-4 text-sm',
		lg: 'py-2 px-6 text-base'
	};

	const variantClasses = {
		primary:
			'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-2 ring-primary ring-offset-2 ring-offset-background',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
		destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive-hover',
		outline:
			'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground',
		ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground'
	};

	const buttonClasses = $derived(
		cn(
			'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
			'focus-visible:outline-none',
			disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
			sizeClasses[size],
			disabled ? variantClasses[variant].split('hover:')[0] : variantClasses[variant],
			className
		)
	);
</script>

<button {type} {disabled} class={buttonClasses} {onclick} {...restProps}>
	{@render children()}
</button>
