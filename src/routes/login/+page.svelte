<script>
	import { toast } from '@zerodevx/svelte-toast';
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="container">
	<article>
		<header>
			<h2 class="_header">Login</h2>
		</header>
		<p><a href="/register">Not Yet Registered?</a></p>
		<form action="?/login" method="POST">
			<!-- form contents -->

			<label for="uName">Username</label>
			<input
				type="text"
				id="uName"
				name="uName"
				placeholder="Username"
				value="CoolUser123"
				required
			/>

			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="Password"
				value="password123"
				required
			/>

			{#if form?.loginError}
				<p class="error_msg">Error logging in, please try again</p>
			{/if}
			<!-- Button -->
			<button type="submit">Submit</button>
			<!-- form contents -->
		</form>
	</article>
</div>

<style>
	h2._header {
		text-align: center;
	}
	p.error_msg {
		color: red;
	}
</style>
