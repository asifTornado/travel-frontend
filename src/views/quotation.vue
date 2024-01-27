<template>





<v-container v-if="request && resultCheck == false" class="border-2 elevation-4 border-solid border-black mb-[20px] mt-16">
             <v-row><v-col cols="12" class="font-bold text-xl text-white bg-emerald-400 elevation-6 border-2 border-solid border-black">Traveller Information</v-col></v-row>
             <v-row >
               <v-col
                 cols
          
                 class="border border-black border-solid"
               >
              <span class="font-bold text-black">Name</span>: {{ request.requester.empName }}
               
               
               </v-col>
       
               <v-col
                 cols
                 
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Passport Number</span>: {{ request.requester.passportNo }}
               </v-col>


         
       
               <v-col v-if="request.requester.flyerNo"
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Frequest Flyer Number</span>: {{ request.requester.flyerNo }}
               </v-col>
             </v-row>



             <v-row >
               <v-col
                 cols
          
                 class="border border-black border-solid"
               >
              <span class="font-bold text-black">Designation</span>: {{ request.requester.designation }}
               
               
               </v-col>
       
               <v-col
                 cols
                 
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Email</span>: {{ request.requester.mailAddress }}
               </v-col>


         
       
          
             </v-row>
<v-row>
  <v-col 
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Unique Id</span>: {{ request.requester.empId }}
               </v-col>
  <v-col 
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Phone</span>: {{ request.requester.mobileNo }}
               </v-col>
</v-row>


<v-row v-if="request.requester.hasFrequentFlyerNo">

<v-row v-for="(flyer, flyerCounter) in request.requester.flyerNos" :key="flyerCounter">
  <v-col 
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Airline</span>: {{ flyer.airline }}
               </v-col>



               <v-col 
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Number</span>: {{ flyer.number }}
               </v-col>
</v-row>




</v-row>

             <v-row>
                <v-row>
                  <v-col md="12" class="font-bold text-xl mt-3">
                     Traveller Preferences
                  </v-col>
                </v-row>
             <v-row>
              <v-col md="12">
                <div v-html="request.requester.preferences">

                </div>
              </v-col>
             </v-row>


             </v-row>
          
     
     
           </v-container >

<v-container v-if="request && resultCheck == false" class="border-2 elevation-4 border-solid border-black">
             <v-row><v-col cols="12" class="elevation-6 border-2 border-solid border-black font-bold text-xl text-white bg-blue-400 ">Travel Information</v-col></v-row>
             <v-row >
               <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
              <span class="font-bold text-black">Destination</span>: {{ request.destination }}
               
               
               </v-col>
       
               <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Travel Mode</span>: {{ request.mode }}
               </v-col>


         
       
               <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Accomodation Required</span>: {{ request.accomodationRequired }}
               </v-col>
             </v-row>
             <v-row>
              <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Start Date</span>: {{ request.startDate }}
               </v-col>
               <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">End Date</span>: {{ request.endDate }}
               </v-col>
                 <v-col
                 cols="12"
                 md="4"
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Number of nights</span>: {{ request.numberOfNights }}
               </v-col>
     
             </v-row>
 
     
           </v-container >


<div class="flex flex-col w-full p-3 items-center" v-if="resultCheck==false">


  
  <div class="w-[50%] flex flex-row h-[40%]  mt-[80px] text-lg font-bold">Give Your Quotation</div>
<div class="w-[80%] h-[40%]">

  <div ref="editor" class="editor"></div>
</div>


</div>


<div class="flex flex-row w-full justify-end pr-[200px] mt-[100px] mb-15  " v-if="resultCheck == false">
<div class="bg-emerald-400 p-3 font-bold text-white hover:cursor-pointer hover:scale-125 border-2 border-solid border-black" @click="submit">Submit Quotation</div>
</div>


<div v-if="resultCheck == true" class="mt-15 pa-10 mx-10  text-h2 text-green-500 border-2 elevation-10 border-solid border-black">
Your Quotation has been submitted. You  will be notified by mail about the results.
</div>

</template>
<script setup>
import {useRoute, useRouter} from 'vue-router';
import { useGlobalStore } from '../stores/global';
import {ref, onMounted} from 'vue';
import Quill from 'quill';
import axios from "axios";
import {storeToRefs} from "pinia"

import Editor from 'primevue/editor';


var route = useRoute();
var router = useRouter();
var request = ref();
var globalStore = useGlobalStore();
var {globalUrl} = storeToRefs(useGlobalStore())
var value = ref('')
const editor = ref(null);
var editorContent = ref();
var resultCheck = ref(false);

onMounted(() => {
  const quill = new Quill(editor.value, {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'table': true }],
      ]
    },
    theme: 'snow'
  });

  quill.on('text-change', () => {
    editorContent.value = quill.root.innerHTML;
  });

});




var id = route.params.id;
var agentId = route.params.agentId;



function getRequestForQuotation(){
   var data = new FormData();
   console.log("this is the id")
   console.log(id)
   data.append("id", id);
   data.append("agentId", agentId);
   
   axios.post(globalUrl.value + "getRequestForQuotation", data).then((result)=>{

    if(result.data != false){
      
      request.value = result.data
    }else{
      resultCheck.value = true;
    }

   }).catch((error)=>console.log(error))

  }


function submit(){
  var data = new FormData();
  data.append("agentId", agentId);
  data.append("id", id)
  data.append("quotation", editorContent.value)

  axios.post(globalUrl.value + "giveQuotation", data).then((result)=>{
    if(result.data == true){
           resultCheck.value = true;
    }
  })
}

getRequestForQuotation()















</script>