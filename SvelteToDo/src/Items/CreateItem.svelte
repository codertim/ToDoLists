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

</style>

<div>
    Enter stuff to do:
    <div>
        <input type="text" on:input={handleInputForItem} value={item} />
        <a href="#" on:click={handleAdd}>Add</a>
        <a href="/" use:links>Cancel</a>
    </div>

    <div style="margin-top: 900px;">
        <p>Debugging: {item}</p>
    </div>
</div>
