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


         
       
               <v-col v-if="request.requester.flyerNo"
                 cols
                
                 class="border border-black border-solid"
               >
               <span class="font-bold text-black">Phone</span>: {{ request.requester.mobileNo }}
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
    
    
<v-container >
        <div class="flex flex-col w-full  items-center border-2 border-solid border-black p-2" v-if="request && request.ticketInvoiceUploaded == false">
          <div class="w-full flex flex-row  border-2 border-solid border-black  text-white px-[10px] pl-[340px] py-[10px]  text-xl font-bold bg-blue-400">Your Quotation:</div>
        <div class="w-full">
        
          <div class="p-10" v-if="quotation" v-html="quotation.quotationText"></div>
        </div>
        
        
        </div>
</v-container>
    
<div class="flex flex-row w-full justify-center items-center mt-2" v-if="request && request.ticketInvoiceUploaded == false">   
<div class="w-[20vw]">        
    <v-file-input
      label="Upload Invoice"
      :clearable="true"
      prepend-icon="mdi-file"
      outlined
      @change="uploadFile"
    
    ></v-file-input></div>

</div>
   
    <div class="flex flex-row w-full justify-end pr-[200px] mt-[10px] p-10  " v-if="request && request.ticketInvoiceUploaded == false">
        
    <div class="bg-emerald-400 p-3 font-bold text-white hover:cursor-pointer hover:scale-125 border-2 border-solid border-black" @click="submit">Submit </div>
    </div>
    
    
    <div v-if="resultCheck == true">
    Your invoice has been submitted. 
    </div>
    
    </template>
    <script setup>
    import {useRoute, useRouter} from 'vue-router';
    import { useGlobalStore } from '../stores/global';
    import {storeToRefs} from 'pinia'
    import {ref, onMounted, computed} from 'vue';
    import Quill from 'quill';
    import axios from "axios";
    
    import Editor from 'primevue/editor';
    
    
    var route = useRoute();
    var router = useRouter();
    var request = ref();
    var globalStore = useGlobalStore();
    var quotation = ref();
    var file = ref();
    var value = ref('')
    const editor = ref(null);
    var editorContent = ref();
    var resultCheck = ref(false);


var {globalUrl} = storeToRefs(useGlobalStore())

    
    
    
    var id = route.params.id;
    var agentId = route.params.agentId;
    
    
    
    function getRequestForConfirmation(){
       var data = new FormData();
       console.log("this is the id")
       console.log(id)
       data.append("id", id);
       data.append("agentId", agentId);
       
       axios.post(globalUrl.value + "getRequestForInvoice", data).then((result)=>{
            request.value = result.data
            quotation.value = result.data.quotations.filter((x)=>x.confirmed == true)[0]
    
       }).catch((error)=>console.log(error))
    
      }
    
    
    function submit(){
      var data = new FormData();
      data.append("agentId", agentId);
      data.append("id", id)
    
      data.append("file", file.value)
      console.log("this is the file")
      console.log(file.value)
    
      axios.post(globalUrl.value + "giveInvoice", data).then((result)=>{
        if(result.data == true){
               resultCheck.value = true;
        }
      })
    }


    const uploadFile = (event) => {
  file.value = event.target.files[0];
  // You can now send this file object to the server, read its content, etc.
};

    
    getRequestForConfirmation()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </script>