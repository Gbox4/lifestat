<script>
    let routerInfo = [];

    function update() {
        console.log("fetching...")
        fetch('/router').then(x => x.json()).then(x => {
            routerInfo = x
            console.log(routerInfo)
        })

        setTimeout(update, 60000);
    }
    
    console.log("aaa")
    update()

</script>

<main>
    <p>Local network</p>
    <table>
        <tr>
            <th>Hostname</th>
            <th>Local IP</th>
        </tr>
        {#each routerInfo as i}
            <tr>
                <td>{i.name}</td>
                <td>{i.address}</td>
            </tr>
        {/each}
    </table>
</main>

<style>
table {
    width: 30rem;
    padding: 1rem;
    border-collapse: collapse;
}

th, td {
    text-align: left;
}

p {
    font-size: 4rem;
    margin-bottom: 2rem;
}
</style>