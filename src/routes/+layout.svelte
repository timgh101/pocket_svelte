<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	export let data;
</script>

<SvelteToast />

<div class="app">
	<Header user={data.user} />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
