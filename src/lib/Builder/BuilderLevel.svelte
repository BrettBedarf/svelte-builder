<script type="ts">
	import type { ComponentConfig, BuilderNode as TBuilderNode } from './builder.types';
	import { BuilderNode } from '.';
	import { BuilderLevel } from '.';

	export let level: TBuilderNode[];
	export let config: ComponentConfig;
</script>

{#each level as node}
	<BuilderNode {config} {node} />
{/each}
