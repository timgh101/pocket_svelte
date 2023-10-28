<script>
	/** @type {import('./$types').PageData} */
	export let data;
	export let form;
</script>

<div class="container">
	<article>
		<header>
			<h2 class="_header">Register</h2>
		</header>
		<p><a href="/login">Already Registered?</a></p>
		<form action="?/register" method="POST">
			<!-- form contents -->

			<label for="uName">Username</label>
			<input
				type="text"
				id="uName"
				name="uName"
				placeholder="CoolUser123"
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
			<label for="passwordConfirm">Confirm Password</label>
			<input
				type="password"
				id="passwordConfirm"
				name="passwordConfirm"
				placeholder="Confirm Password"
				value="password123"
				required
			/>
			{#if form?.loginError}
				<p class="error_msg">Error during registration, please try again</p>
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
