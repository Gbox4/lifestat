<script>

    export const getFormattedDate = (now) => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const day = days[ now.getDay() ];
        const date = now.getDate()
        const month = months[ now.getMonth() ];
        const year = now.getFullYear()

        return `${day}, ${month} ${date}, ${year}`
    }

    let dateStr = ""

    function update() {
        dateStr = getFormattedDate(new Date())

        setTimeout(update, 60000);
    }
    
    update()

</script>

<main>
    <p class="dateStr">{dateStr}</p>
</main>

<style>
    .dateStr {
        font-size: 3rem;
        color: white;
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
    }
</style>