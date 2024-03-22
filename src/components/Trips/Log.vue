<template>




    <v-dialog
        v-model="showLogs"
        
        class="ml-15 "
        persistent
        >
    
        <div class="overflow-y-scroll  bg-white pa-10 elevation-5 w-[90vw] border-2 border-solid border-black  ">
    
        
          <v-icon @click="showLogs = false" style="position:absolute; right:30px; top:10px;">mdi-close</v-icon>
         
    <v-container v-if="logs" class=" ">
    
       <v-row class="mb-[2px]">
         <v-col md='12' class="text-center">
            <span class="font-bold text-2xl">Request Log</span>
         </v-col>
      
       </v-row>
    
       
    
       <v-row class="bg-black text-white ">
         <v-col md="1" class="text-sm font-bold">
            Serial
         </v-col>
         <v-col md="2" class="text-sm font-bold">
            Date
         </v-col>
    
         <v-col md="3" class="text-sm font-bold">
             Event
         </v-col>
         
         <v-col md="3" class="text-sm font-bold">
             From
         </v-col>
    
         <v-col md="3" class="text-sm font-bold"> 
              To
         </v-col>
       </v-row>
    
       <v-row v-for="(log, logCounter) in logs" class="border border-solid border-black">
          <v-col md="1" class="text-sm">
            {{ logCounter + 1 }}
          </v-col>
          <v-col md="2" class="text-sm">
            {{ log.Date }}
          </v-col>
          <v-col md="3" class="text-sm">
            {{ log.Event  }}
          </v-col>
          <v-col md="3" class="text-sm">
            {{ log.From  }}
          </v-col>
          <v-col md="3" class="text-sm">
            {{ log.To  }}
          </v-col>
          <v-spacer></v-spacer>
       </v-row>
    
    
    </v-container>
    
    
    
    
    </div>
    
       </v-dialog>
    
    
    
    
    
    
    </template>
    
    <script setup>
   
    import { useTripStore } from "../../stores/trips";
    import { useGlobalStore } from "../../stores/global";
    import {storeToRefs} from "pinia"
    import { defineProps, ref } from "vue";
    import axios from "axios";
    

    var {globalUrl} = storeToRefs(useGlobalStore());

    var {trip, showLogs} = storeToRefs(useTripStore())
    

    var requestIds = trip.value.requests.map((request) => request._id)


    var logs = ref([])

    
    
    
    
    var getLogsForTrip = () => {

          var data = new FormData()
          data.append("requestIds", JSON.stringify(requestIds))

          axios.post(globalUrl.value + "getLogsForTrip", data).then((response) => {
            logs.value = response.data
          }).catch((error) => {
            console.log(error)
          })
    } 


   getLogsForTrip()



   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </script>