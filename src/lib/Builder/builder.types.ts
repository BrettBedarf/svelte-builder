import type { SvelteComponent } from 'svelte';

export type ComponentConfig = {
	[key: string]: {
		name: string;
		component: typeof SvelteComponent;
	};
};

export type BuilderNode = {
	component: string;
	props?: any[] | null;
	children?: BuilderNode[] | null;
};

export type BuilderLayout = {
	meta: Record<string, any>;
	layout: BuilderNode[];
};
