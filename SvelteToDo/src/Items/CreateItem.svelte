<script>
    let item = '';
    
    function handleInputForItem(e) {
        item = e.target.value;
    }

    $: console.log('item: ', item);
</script>

<style>

</style>

<div>
    Enter stuff to do:
    <div>
        <input type="text" on:input={handleInputForItem} value={item} />
    </div>

    <div style="margin-top: 900px;">
        <p>Debugging: {item}</p>
    </div>
</div>
