<script lang="ts">
	import { Builder } from '$lib/Builder';
	import componentsConfig from './components';
	import layout from './builder-layout.json';
	import type { ComponentConfig } from '$lib/Builder/builder.types';

	const config: ComponentConfig = componentsConfig;
</script>

<div>index {JSON.stringify(config)}</div>
<Builder {config} {layout} />
