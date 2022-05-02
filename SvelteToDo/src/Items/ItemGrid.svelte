<script>
    export let items = [];
    export let onClick;

    ///const handleOnClick = msg => { console.log('Item Clicked - message:', msg); };
</script>

<style>
    #all-items {
        background-color: var(--colorOrange);
        padding: 30px;
    }

    .delete-item {
        color: #ff0000;
    }
</style>

<div>
    <h3>To Do Items</h3>
    <div id="all-items">
        <!-- items: {items} -->
        <ul>

        {#each items as item}
          <li>Item: {item.message || ''} &nbsp; <a href="/#" class="delete-item" on:click={() => onClick(item.message)}>X</a></li>
        {/each}
        </ul>

    </div>
</div>
