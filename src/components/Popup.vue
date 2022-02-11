<template>
<div class="popup">
    <h1>{{data.tcnId}}</h1>
    <div class="overview">
        <h2 id="current_title">Current</h2>
        <img id="current" :src="require('/src/assets/popup/currentSituation.svg')" alt="">
        <h2 id="time_loss_title">Time loss</h2>
        <p id="time_loss">{{data.averageTimeInPicture}} min</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Popup',
    props: ['data'],
}
</script>

<style lang="scss">
.popup {
    display: grid;
    grid-template-areas:
        'title title'
        'table table'
        'status .';
    //grid-template-columns: auto 200px;
    //grid-template-rows: 80px auto;

    h1 {
        font-size: 1.7em;
        grid-area: title;
    }

    .overview {
        display: inline-grid;
        grid-area: table;

        grid-template-areas:
            'current_title current'
            'time_loss_title time_loss';
        grid-template-columns: auto 150px;

        h2 {
            font-size: 1.2em;
        }

        h2,
        p {
            padding: 0;
            margin: auto 0;
        }

        #current_title {
            grid-area: current_title;
        }

        #current {
            grid-area: current;
        }

        #time_loss_title {
            grid-area: time_loss_title;
        }

        #time_loss {
            grid-area: time_loss;
        }
    }
}
</style>
