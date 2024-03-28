<template>




<v-dialog
    v-model="showLogs"
    width="auto"
    class=""
    >

    <div class="overflow-y-scroll   bg-white pa-10 elevation-5 w-auto border-2 border-solid border-black  ">
    
        
    <v-icon @click="showLogs = false" style="position:absolute; right:30px; top:10px;">mdi-close</v-icon>
   
<v-container v-if="logs" class=" ">

 <v-row class="mb-[2px] ">
   <v-col md='12' class="text-center ">
      <span class="font-bold text-2xl ">Request Log</span>
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

 <v-row v-for="(log, logCounter) in logs" class=" border border-solid border-black ">
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
import {useLogStore} from "../stores/log"
import {storeToRefs} from "pinia"
import { defineProps, onMounted } from "vue";


var props = defineProps(["requestId"])

var {logs, showLogs} = storeToRefs(useLogStore())

var {getLogs} = useLogStore()



  
  getLogs(props.requestId);















</script>