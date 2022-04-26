<script>
    import Time from './Time.svelte';
    import Calendar from './Calendar.svelte';
</script>

<main>
    <div class="container">
        <div class="left">
            <Time/>
            <Calendar/>
        </div>

        <div class="right">
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