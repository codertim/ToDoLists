<script>
    import { links, navigate } from 'svelte-routing';
    let item = '';
    export let onItemAdd;
    
    function handleInputForItem(e) {
        item = e.target.value;
    }

    function handleAdd() {
        console.log("##### handleAdd - starting");
        onItemAdd(item);
        navigate('/', { replace: true});
    }

    $: console.log('item: ', item);
</script>

<style>
    .add-stuff a {
        text-decoration: none;
    }

    .add-stuff a:hover {
        border-bottom: 5px solid #0000FF;
    }
</style>

<div>
    Enter stuff to do:
    <div class="add-stuff">
        <input type="text" on:input={handleInputForItem} value={item} />
        <br />
        <a href="#" on:click={handleAdd}>Add</a>
        |
        <a href="/" use:links>Cancel</a>
    </div>

    <div style="margin-top: 900px;">
        <p>Debugging: {item}</p>
    </div>
</div>
