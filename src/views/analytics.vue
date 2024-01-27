<template>



<div class="ml-[30vw] mt-16" >
<apexchart width="600" height="300" type="area" :options="timeSeriesOptions" :series="timeSeriesData">
  
</apexchart>
</div>






</template>














<script setup>
   import { storeToRefs } from 'pinia';
   import {useChartStore} from "../stores/chart.js"



    var {timeSeriesData, timeSeriesOptions} = storeToRefs(useChartStore())
    var {getRequestsByTime} = useChartStore();

    getRequestsByTime()




</script>