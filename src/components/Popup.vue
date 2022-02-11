<template>
<div>
    <h1>{{data.tcnId}}</h1>
    <table>
        <tr>
            <th>Current</th>
            <td>{{data.trafficSituation}}</td>
        </tr>
        <tr>
            <th>Time loss</th>
            <td>{{data.averageTimeInPicture}}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'Popup',
    props: ['data'],
}
</script>

<style lang="scss">
h1 {
    font-size: 1.7em;
}
</style>
