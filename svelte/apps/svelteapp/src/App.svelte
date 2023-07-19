 <script lang="ts">
	import { Counter } from '@svelte/shared';
	export let name: string;
</script>

<main>
	<h1>Welcome {name}!</h1>
	<p>Visit <a href="https://nx.dev">Nx</a> or <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Counter/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
