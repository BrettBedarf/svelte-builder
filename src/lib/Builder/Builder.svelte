<script type="ts">
	import type { BuilderLayout, ComponentConfig } from './builder.types';
	import { BuilderLevel } from '.';

	export let config: ComponentConfig;
	export let layout: BuilderLayout;
</script>

<div>Builder {JSON.stringify(config)}</div>
<BuilderLevel {config} level={layout.layout} />
