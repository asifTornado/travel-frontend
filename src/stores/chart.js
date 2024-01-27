import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';


import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'



export const useChartStore = defineStore("chart", () => {
   
   
var timeSeriesOptions = ref({
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: true
      },
      markers: {
        size: 10,
      },
      title: {
        text: 'Total Requests By Time',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val
          },
        },
        title: {
          text: 'Number of Requests'
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
  })

var timeSeriesData = ref([])

var {globalUrl} = storeToRefs(useGlobalStore())




function getRequestsByTime(){
    var data = new FormData();
    data.append("timespan", "100")
    axios.post(globalUrl.value + "getRequestsByTime", data).then((results)=>{
        debugger
        var series = results.data.value.map((item)=>{
            debugger
            return {
                x:new Date(item.date).getTime(),
                y:parseInt(item.count)
            }
        })

        timeSeriesData.value = [{
            name: 'Requests',
            data: series
          }]
        console.log("these are the results")
        console.log(timeSeriesData.value)
    }).catch((error)=>{console.log(error)})
}





  return {
    timeSeriesData, timeSeriesOptions,
    getRequestsByTime
 
  }




  



  






})