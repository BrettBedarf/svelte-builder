<script type="ts">
	export let title: string = 'unnamed block';
</script>

<div class="wrapper">
	<h1>{title}</h1>
	<div class="slot-wrapper">
		<slot />
	</div>
</div>

<style>
	.slot-wrapper {
		border: 2px solid;
		padding: 1px;
		border-color: blue;
	}
	.wrapper {
		border: 2px solid;
		padding: 2px;
		border-color: red;
	}
</style>
