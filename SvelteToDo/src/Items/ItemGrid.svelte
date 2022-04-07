<script>
    export let items = [];
    export let onClick;

    ///const handleOnClick = msg => { console.log('Item Clicked - message:', msg); };
</script>

<style>
</style>

<div>
    <h3>To Do Items</h3>
    <div>
        <!-- items: {items} -->
        <ul>

        {#each items as item}
          <li>Item: {item.message || ''} <a href="/#" on:click={() => onClick(item.message)}>X</a></li>
        {/each}
        </ul>

    </div>
</div>
