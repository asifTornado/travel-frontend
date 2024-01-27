<template>
    <div class="w-[100vw] py-[20px] mt-10" >
    
       
        <div class="sticky pr-[20px] top-0 bg-white h-12  flex flex-row justify-end" style="z-index: 99;" v-if="request && request.currentHandler && user && user.userType != 'admin'">
    
          <div v-if="request.currentHandler.empName == request.requester.superVisor.empName && request.status == 'Seeking Supervisor\'s Approval'" >
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('superVisor', 'ticket', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('superVisor', 'ticket', 'rejected')">Reject</v-btn>
          </div>
          
          <div v-else-if="request.currentHandler.empName == request.requester.superVisor.empName && request.status == 'Seeking Supervisor\'s Approval For Hotel'" >
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('superVisor', 'hotel', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('superVisor', 'hotel', 'rejected')">Reject</v-btn>
          </div>
          <div v-else-if="request.currentHandlerId == request.requester.superVisorId && request.supervisorApproved == false" >
             <v-btn color="success" class="mr-[10px]" @click="openSupervisorRequestApprovalDialog('approved')">Approve</v-btn>
             <v-btn color="warning" @click="openSupervisorRequestApprovalDialog('rejected')">Reject</v-btn>
          </div>
         <div v-else-if="request.currentHandler.empName == request.requester.zonalHead.empName && request.status == 'Seeking Department Head\'s Approval'">
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('departmentHead', 'ticket', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('departmentHead', 'ticket', 'rejected')">Reject</v-btn>
         </div>
         <div v-else-if="request.currentHandler.empName == request.requester.zonalHead.empName && request.status == 'Seeking MD\'s Approval'">
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('departmentHead', 'ticket', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('departmentHead', 'ticket', 'rejected')">Reject</v-btn>
         </div>
         
       
       
       
       </div>
    
    <v-container id="info"  grid-list-xs  color="indigo-darken-200" class="bg-blue-lighten-2 elevation-10 border border-solid border-black mb-[20px]">
      <div class="flex flex-row w-full justify-end my-[20px] "> 
       
       <v-btn prepend-icon="mdi-file " class="mr-3 d-print-none" @click="showLogs = true">View Log</v-btn>
       <v-btn prepend-icon="mdi-share " class="d-print-none" @click="shareDialogue = true">Share</v-btn>
    
    </div>
    
       <v-row>
            <v-col cols>
    
    
    
          <div v-if="request == null">
             <Loader/>
          </div>
        
    <v-card class="pa-10 v-card "  v-if="request && request.requester"
            
              max-width="100%"
              elevated="2"
              hover
              
              
              :variant="'elevated'"
              :density="2"
           
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <div class="text-h6 mb-1 bg-blue-500 text-white elevation-5">
                    Request Information
                  </div>
                  
                </div>
              </v-card-item>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Destination
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.destination }}
                </v-col>
             </v-row>
           
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Purpose 
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.purpose }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Start Date
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.startDate }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   End Date
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.endDate }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Request Date
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.date }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px] bg-green-500 text-white">
                <v-col md="6" class="text-left">
                   Request Status
                </v-col>
                <v-col md="6" class="text-left p-10">
                   {{ request.status }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px] text-black" v-if=request.currentHandler>
                <v-col md="6" class="text-left">
                   Current Handler
                </v-col>
                <v-col md="6" class="text-left p-10">
                   {{ request.currentHandler.empName }}
                </v-col>
             </v-row>
         
            </v-card>
    
    
    </v-col>
    <v-col cols >
    
    
        
    <v-card v-if="request && request.requester"
              class="pa-10 v-card "
              max-width="100%"
             elevated="2"
              :variant="'elevated'"
              hover
    
            
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <div class="text-h6 mb-1 bg-blue-500 text-white elevation-6">
                    Requester Information
                  </div>
                  
                </div>
              </v-card-item>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Name
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.empName }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Email
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.mailAddress }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Designation
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.designation }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Department
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.department }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Supervisor
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.superVisor.empName }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Zonal Head
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.zonalHead.empName }}
                </v-col>
             </v-row>
             <v-row class="pl-[80px]">
                <v-col md="6" class="text-left">
                   Travel Handler
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.travelHandler.empName }}
                </v-col>
             </v-row>
         
            </v-card>
    
    
    </v-col>
        </v-row>
    </v-container>
    
    <v-container  v-if="request && request.messages && request.messages[request.messages.length - 1]" class="  bg-red-lighten-2 pa-10 border-2 elevation-4 border-black mb-4 p-3">
       <v-row>
          <v-col md="12" class=" text-black    bg-white font-bold text-lg" >Latest Message</v-col>
       </v-row>
       <v-row class=" text-black font-bold bg-white">
          <v-col md="3" class="flex flex-row justify-end font-bold">Approval:</v-col>
    
          <v-col md="9"  class="flex flex-row justify-start">{{ request.messages[request.messages.length - 1].status }}</v-col>
         
       </v-row>
       <v-row class="bg-white text-black">
          <v-col md="3" class="flex flex-row justify-end font-bold">Message:</v-col>
          <v-col md="9" class="flex flex-row justify-start">{{ request.messages[request.messages.length - 1].content }}</v-col>
    
       </v-row>
    </v-container>
    
    <v-container grid-list-xs  color="indigo-darken-200" class="border-2 pa-10 elevation-4 border-solid border-black" v-if="request && request.costItems">
        <v-row class="align-center font-bold text-black align-self-center justify-center text-h6 font-weight-bold">Estimated Total Cost</v-row>
        <v-row class="bg-gray-400 text-white font-bold border border-black border-solid">
            <v-col md="2">
                 Item
            </v-col>
            <v-col md="2">
                 Number of Items
            </v-col>
            <v-col md="2">
                 Cost
            </v-col>
            <v-col md="2">
                 Total Cost
            </v-col>
    
        </v-row>
        <v-row v-for="(item, itemCounter) in request.costItems" v-if="request">
            <v-col md="2">
                 {{ item.item }}
            </v-col>
            <v-col md="2">
                 {{ item.numberOfItems }}
            </v-col>
            <v-col md="2">
                 {{ item.itemCost }}
            </v-col>
            <v-col md="2">
                 {{ item.totalItemCost }}
            </v-col>
        </v-row>
    </v-container>
    
 <template v-if="user && request && request.requester && user._id == request.requesterId && request.currentHandlerId == user._id">
          <Activities/>
          <Objectives/>
          <Personnel/>
          <Items/>
          <Meetings/>
          
 </template>

 <template v-else-if="user && request && request.requester && (user._id == request.requester.superVisor._id || user._id == request.requester.zonalHead._id) && request.currentHandlerId == user._id">
     <Information :request="request"/>
     <Budget/>

 </template>

 
    
    
    
    
    
        
<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && request.requester && request.supervisorApproved == false &&  request.requesterId == user._id && request.currentHandlerId == user._id">
       <v-btn @click="giveInfo" class="d-print-none" color="blue">Submit</v-btn>
    </div>


<v-container class="bg-grey-lighten-3" v-if="request.supervisorApproved == false">

   <v-row>
  
      <v-col md="12">

      <v-btn @click="approve" class="d-print-none mr-3" color="green" v-if="request && request.requester && request.supervisorApproved == false &&  request.requester.superVisorId == user._id && request.currentHandlerId == user._id">Approve</v-btn>
      <v-btn @click="reject" class="d-print-none mr-3 text-white" v-if="request && request.requester && request.supervisorApproved == false &&  request.requester.superVisorId == user._id && request.currentHandlerId == user._id" color="orange">Reject</v-btn>
      <v-btn @click="permanentlyReject" class="d-print-none" color="red" v-if="request && request.requester && request.supervisorApproved == false &&  request.requester.superVisorId == user._id && request.currentHandlerId == user._id">Permanently Reject</v-btn>
    
   </v-col>
   
</v-row>
   
</v-container>



<v-container class="bg-grey-lighten-3" v-if="request.supervisorApproved == true && request.departmentHeadApproved == false ">

<v-row>

   <v-col md="12">

   <v-btn @click="approve" class="d-print-none mr-3" color="green" v-if="request && request.requester && request.departmentHeadApproved == false &&  request.requester.zonalHeadId == user._id && request.currentHandlerId == user._id">Approve</v-btn>
   <v-btn @click="reject" class="d-print-none mr-3 text-white" v-if="request && request.requester && request.departmentHeadApproved == false &&  request.requester.zonalHeadId == user._id && request.currentHandlerId == user._id" color="orange">Reject</v-btn>
   <v-btn @click="permanentlyReject" class="d-print-none" color="red" v-if="request && request.requester && request.departmentHeadApproved == false &&  request.requester.zonalHeadId == user._id && request.currentHandlerId == user._id">Permanently Reject</v-btn>
 
</v-col>

</v-row>

</v-container>
    
   
   
   
    
   
    
    
    
    
    
    </div>



      <Log v-if="request._id" :request-id="request._id" />

    

    
      <ShareDialogue/>
    </template>
    
    
 
    <script setup>
    
    
    import {ref, onMounted} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import { useGlobalStore } from '../stores/global';
    import { useAuthStore } from '../stores/auth';
    import { useLogStore } from '../stores/log';
    import { storeToRefs } from 'pinia';
    import {useToast} from "vue-toast-notification";
    import Quill from 'quill';
    import axios from "axios"
    import Editor from '../components/editor.vue'
    import { useRequestsStore } from '../stores/request';
    import { useCustomStore } from '../stores/custom';
    import Activities  from '../components/Customtrip/Activities.vue'
    import Items from '../components/Customtrip/Items.vue'
    import Personnel from '../components/Customtrip/Personnel.vue'
    import Objectives from '../components/Customtrip/Objectives.vue'
    import Information from '../components/Information.vue';
    import Meetings from '../components/Customtrip/Meetings.vue';
    import Budget from '../components/Customtrip/Budget.vue';
    


    import ShareDialogue from '../components/ShareDialogue.vue';
    import Log from '../components/log.vue';

    
    
    
   //  var {overlay,  customQuoteGiver, customHotelOverlay, shareDialogue,
   //      revokeDialogue, customHotelQuoteGiver, hotelOverlay, hotelConfirmDialogue, customHotelOverlay,
   //      sendExpenseReportDialog, showExpenseReportDialog
   //     } = storeToRefs(useRequestsStore())
   //  var {getRequest, openBookDialogue, openunbookDialogue, openRevokeDialogue, 
   //       openShowExpenseReportDialog,
   //      hotelHover, hotelMoveout, openHotelBookDialogue, openApprovalDialogue, share, bookHotel, bookHotelDirect,
   //     openHotelunbookDialogue, openHotelConfirmDialogue, openHotelRevokeDialogue, uploadFile, openEmailDialogue, openTicketConfirmDialog,
   //     addCustomQuote, addCustomHotelQuote, supervisorApprove, departmentHeadApprove, book, confirm, moveout, hover, getInvoice, complete,
   //     openSupervisorRequestApprovalDialog,
   //     moreInformationDialog
   //  } = useRequestsStore()
    
   //  var globalStore = useGlobalStore();


    var {giveInfo, approve, reject, permanentlyReject, getRequestForApproval} = useCustomStore();
    
    var {shareDialogue} = storeToRefs(useRequestsStore());

    getRequestForApproval()
    

  
    
    var {request} = storeToRefs(useCustomStore())
    
    var {user} = storeToRefs(useAuthStore())
    
    var {showLogs} = storeToRefs(useLogStore())


    var {departmentHeadApprove} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    
    
    function print(){
       window.print()
    }
    
    
    
    
    
    
    
    </script>
    
    
    
    <style >
    
    
    
    
    .v-card{
       cursor:auto ;
     
    }
    
    
    .textField::label{
       background-color: red;
       size:100px
    }
    
    
    
    
    </style>