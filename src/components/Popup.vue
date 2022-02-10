<template>
<div>
    <div>
        <h3>{{data.tcnId}}</h3>
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
</div>
</template>

<script>
export default {
   name: 'Popup',
   props: [ 'data' ],
}

</script>

<style>
    
</style>
