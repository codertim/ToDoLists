<script>
    import ItemGrid from './ItemGrid.svelte';
    import Button from '../common/Button.svelte';
    import { links } from 'svelte-routing';

    export let items = [];

    function handleItemSelectDelete(msg) {
        console.log("##### handleClickDelete - starting - msg:", msg);
        items = items.filter(item => item.message != msg);
    }
</script>
<style>
</style>
<div>
    <Button>Delete Me</Button>
    <a href="/add/" use:links>Add</a>
    <ItemGrid items={items} onClick={handleItemSelectDelete} />
</div>

