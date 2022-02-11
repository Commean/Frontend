<template>
<div class="popup">
    <h1>{{data.tcnId}}</h1>
    <div class="overview">
        <h2 id="status_title">Status</h2>
        <img id="status" :src="require('/src/assets/popup/currentSituation.svg')" alt="">
        <h2 id="time_loss_title">Time loss</h2>
        <p id="time_loss">{{data.averageTimeInPicture}} min</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        data: Object,
    },
    data() {
        return {
            img: {
                ratio: 125 / 12,
                height: 15,
                car: {
                    number: 5,
                }
            }
        }
    },
    methods: {
        getImgHeight() {
            return this.img.height + 'px'
        },
        getImgWidth() {
            let width = this.img.ratio * this.img.height;
            let size_car = width / this.img.car.number;
            return (width - size_car * 1) + 'px'; //TODO
        },
    }

}
</script>

<style lang="scss">
.popup {
    display: grid;
    grid-template-areas:
        'title title'
        'table table'
        'status .';

    h1 {
        font-size: 1.7em;
        grid-area: title;
    }

    .overview {
        display: inline-grid;
        grid-area: table;

        grid-template-areas:
            'status_title status'
            'time_loss_title time_loss';
        grid-template-columns: auto 200px;
        grid-template-rows: auto 20px;

        img {
            object-fit: cover;
            object-position: right;
            height: v-bind('getImgHeight()');
            width: v-bind('getImgWidth()');

        }

        h2 {
            font-size: 1.2em;
        }

        h2,
        p {
            padding: 0;
            margin: auto 0;
        }

        #status_title {
            grid-area: status_title;
        }

        #status {
            grid-area: status;
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
