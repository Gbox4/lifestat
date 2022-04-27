<script>
    import Time from './Time.svelte';
    import Calendar from './Calendar.svelte';
    import Network from './Network.svelte';
</script>

<main>
    <div class="container">
        <div class="left">
            <Time/>
            <Calendar/>
        </div>

        <div class="right">
            <Network/>
        </div>
    </div>
    
</main>

<style>
    :global(body) {
        background-color: black;
        color: white;
        padding: 2rem 2rem;
    }
    :global(*) {
        margin: 0;
    }

    .container {
        display: flex;
        gap: 6rem;
    }

    .left {
        display: flex;
        flex-direction: column;
        flex: 1 1;
    }

    .right {
        display: flex;
        flex-direction: column;
        flex: 1 1;
    }

</style>