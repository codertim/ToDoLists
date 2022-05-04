<script>
	import { Route, Router } from 'svelte-routing';
	import Items from './Items/Items.svelte';
	import CreateItem from './Items/CreateItem.svelte';
	export let url = '';

	let items = [{message: 'Test1'}, {message: 'Test2'}];

	
    function handleItemAdd(itemText) {
        console.log("##### handleItemAdd - starting - itemText:", itemText);
		if (itemText) {
			items.push({ message: itemText});
		}
	}
</script>

<Router {url}>
	<main>
		<h1>To Do</h1>
		<Route path="/add/">
			<h2>Add</h2>
			<CreateItem  onItemAdd={handleItemAdd} />
		</Route>
		<Route path="/">
			<Items items={items} />
		</Route>
		<p style="margin-top: 10rem;">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</main>
</Router>

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