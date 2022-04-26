<script>
	let hour = new Date().toTimeString().slice(0, 2);
	let minute = new Date().toTimeString().slice(3, 5);
    let second = new Date().toTimeString().slice(6, 8)

    // function update() {
    //     fetch('/rand').then(x => x.text()).then(x => {
    //         time = x;
    //         setTimeout(update, 1000);
    //     });
    // }

    function update() {
        hour = new Date().toTimeString().slice(0, 2);
        minute = new Date().toTimeString().slice(3, 5);
        second = new Date().toTimeString().slice(6, 8)
        setTimeout(update, 1000);
    }
    
    update()

</script>

<main>
	<p class="clock">
        <span class="hour">{hour}</span>
        <span class="minute">:{minute}</span>
        <span class="second">{second}</span>
    </p>
</main>

<style>
    .clock {
        display: flex;
        align-items: flex-end;
    }

    .hour {
        font-size: 12rem;
        color: #9f9f9f;
    }
    .minute {
        font-size: 12rem;
        color: white;
    }
    .second {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 6rem;
        color: #9f9f9f;
    }
</style>