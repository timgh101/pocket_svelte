<script>
	// @ts-nocheck

	export let user;
</script>

<div class="container">
	<nav>
		<ul>
			<li><strong><a href="/">WhenFree</a></strong></li>
		</ul>
		{#if user}
			<ul>
				<li>
					<form class="logout_form" action="/logout" method="POST">
						<button class="logout_button" type="submit">Logout</button>
					</form>
				</li>
			</ul>
		{:else}
			<ul>
				<li>
					<a href="/login"><button class="logout_button" type="submit">Login/Register</button></a>
				</li>
			</ul>
		{/if}
	</nav>
</div>

<style>
	form.logout_form {
		margin-bottom: 0;
	}
</style>
