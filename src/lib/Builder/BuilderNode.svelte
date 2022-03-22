<script type="ts">
	import { BuilderLevel, BuilderNode } from '.';
	import type { BuilderNode as TBuilderNode, ComponentConfig } from './builder.types';

	export let config: ComponentConfig;
	export let node: TBuilderNode;

	const props = node.props ?? {}; // prevents trying to spread undefined/null props
</script>

<svelte:component this={config[node.component].component} {...props}>
	{#if node?.children?.length > 0}
		<BuilderLevel level={node.children} {config} />
	{/if}
</svelte:component>
