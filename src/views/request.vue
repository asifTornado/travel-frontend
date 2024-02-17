<template>
<div class="w-screen px-[20px] mt-10" >

   
    <div class="sticky   bg-blue-lighten-5 h-12 w-full flex flex-row justify-center"  v-if="request && request.currentHandler && user">

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

<v-container id="info"  grid-list-xs   class="bg-blue-lighten-5 mb-[20px]">
  <div class="flex flex-row w-full justify-end my-[20px] "> 
   
   <v-btn prepend-icon="mdi-file " class="mr-3 d-print-none" @click="showLogs = true">View Log</v-btn>
   <v-btn prepend-icon="mdi-share " class="d-print-none" @click="shareDialogue = true">Share</v-btn>

</div>

   <v-row>
        <v-col cols>


      <div v-if="!request">
         <Loader/>
      </div>
    
<v-card class="pa-10 v-card elevation-5"  v-if="request"
        
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


    
<v-card v-if="request"
          class="pa-10 v-card elevation-5 "
          max-width="100%"
         e
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
        <v-col md="12" class="text-left">
           <v-btn @click="showMoreInformation(request)">More Information</v-btn>
         
        </v-col>
    
     </v-row>

     
        </v-card>


</v-col>
    </v-row>
</v-container>

<v-container  v-if="request && request.messages && request.messages[request.messages.length - 1]" class="  bg-red-lighten-2 pa-10  shadow-md shadow-black  mb-4 p-3">
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

<v-container grid-list-xs  color="indigo-darken-200" class=" pa-10 elevation-4 border-solid " v-if="request && request.costItems">
    <v-row class="align-center font-bold text-black align-self-center justify-center text-h6 font-weight-bold">Estimated Total Cost</v-row>
    <v-row class="bg-gray-400 text-white font-bold border  border-solid">
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


<v-container class=" bg-yellow-lighten-2  mt-[80px] shadow-md shadow-black my-[20px] pa-10">
   
<v-row class="font-bold text-black text-2xl bg-white mb-10 elevation-10" >
   <v-col md="12" class="text-h5 font-weight-bold" >
    Ticket Quotations
     
   </v-col>    
</v-row>

<v-row class=" " justify="center" align="center"> 

   



    <v-col md="5"  v-if="request" v-for="(quotation, quotationCounter) in request.quotations" :key="quotationCounter"  class="relative shadow-md shadow-black  mb-10 mr-5 mt-5 bg-white  pa-10 border border-solid border-slate-500">
   
      <v-row>
              <v-col md="12" class="bg-blue-darken-3 font-bold text-xl text-white">{{ quotation.quoteGiver }} </v-col>
            
           </v-row>
           <v-row>
              <v-col md="12" class="shadow-sm shadow-black p-4" >
                         <div v-html="quotation.quotationText"></div>                           
              </v-col>
            
           </v-row>
           
           <v-row v-if="quotation.booked">


            <v-col md="12">
               <div class="flex flex-row w-full">

<div class="flex flex-row w-full justify-start">
    <div class="font-bold  text-black bg-yellow-darken-2 pa-1 mr-1" v-if="quotation.booked && !quotation.confirmed">Booked</div>
    <div class="font-bold  text-black bg-green-darken-1 pa-1 mr-1" v-if="quotation.booked && quotation.confirmed">Confirmed</div>
</div>




</div>

            </v-col>
       
           </v-row>

         

           <v-row v-if="quotation.confirmed && quotation.invoices.length > 0" class="shadow-sm shadow-black mb-4">

            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Ticket Invoices
                 </v-col>
              
                <v-col md="12">
                  <div v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter">
                     <v-chip label class="m-1 text-blue-darken-2  hover:cursor-pointer" @click="getInvoice(invoice.filename)">{{ invoice.filename }}</v-chip> 
                  </div>
                </v-col>
           </v-row>


           <v-row class="shadow-sm shadow-black" v-if="quotation.ticketApprovals.length > 0">
             
            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2 ">
                     Ticket Approvals
                 </v-col>
             
            <v-col md="12">
                <v-chip label class="m-1" v-for="(ticketApproval, ticketApprovalCounter) in quotation.ticketApprovals" :key="ticketApprovalCounter">
                      {{ ticketApproval.empName }}
                </v-chip>
                
            </v-col>
 
            </v-row>
           
         </v-col>

</v-row>






</v-container>








<v-container class=" bg-green-lighten-2   border-solid mt-[40px] pa-10 shadow-md shadow-black" v-if="request && request.confirmed == true">
<v-row class="bg-white elevation-10 mb-5">
   <v-col md="12" class="font-bold text-black text-xl">
    Hotel Quotations
     
   </v-col>    
</v-row>

<v-row justify="center" align="center">

   



    <v-col md="5"  v-if="request " v-for="(quotation, quotationCounter) in request.hotelQuotations"  class="relative  mb-10 mr-5 mt-5 shadow-md shadow-black  border border-solid border-slate-500 bg-white pa-10">
   
      <v-row>
              <v-col md="12" class="bg-blue-darken-3 font-bold text-xl text-white">{{ quotation.quoteGiver }}</v-col>
         
           
            </v-row>
           <v-row>
              <v-col md="12" class="shadow-sm shadow-black">
                         <div v-html="quotation.quotationText"></div>                           
              </v-col>
            
           </v-row>
           
           <v-row >
            <v-col md="12">
               <div class="flex flex-row w-full justify-start">
                   <div class="font-bold  text-black bg-yellow-darken-2 pa-1 mr-1" v-if="quotation.booked && !quotation.confirmed">Booked</div>
                   <div class="font-bold  text-black bg-green-darken-1 pa-1 mr-1" v-if="quotation.booked && quotation.confirmed">Confirmed</div>
               </div>

            </v-col>
           </v-row>



     


           <v-row v-if="quotation.confirmed && quotation.invoices.length > 0" class="shadow-sm shadow-black mb-4">
              
            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Hotel Invoices
                 </v-col>
         
                <v-col md="12">
                  <div v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter" class="flex flex-row justify-start">
                       <v-chip label class="text-blue-darken-2  m-1 hover:cursor-pointer" @click="getInvoice(invoice.filename)">{{ invoice.filename }}</v-chip> 
                  </div>
                </v-col>
           </v-row>


           <v-row  v-if="quotation.hotelApprovals.length > 0" class="shadow-sm shadow-black">
            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2 ">
                     Hotel Approvals
                 </v-col>
             
            <v-col md="12">
                <v-chip label class="m-1" v-for="(hotelApproval, hotelApprovalCounter) in quotation.hotelApprovals" :key="hotelApprovalCounter">
                      {{ hotelApproval.empName }}
                </v-chip>
                
            </v-col>
 
            </v-row>
    </v-col>

     
    
    


</v-row>





</v-container>










<!-- <div class=" flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request &&( (request.requester.travelHandler && request.requester.travelHandler.mailAddress == user.mailAddress) || (user.userType == 'admin')) && request.status == 'Seeking Invoices'">
   <v-btn @click="openEmailDialogue('accounts')" class="d-print-none" color="blue">Email To Accounts</v-btn>
</div>


<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && (request.status == 'Processing Complete' || request.Status == 'Being Processed')">
   <v-btn @click="openEmailDialogue('custom')" prepend-icon="mdi-mail" color="blue" class="shadow-md shadow-black d-print-none">Email</v-btn>
</div> -->


<!-- <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request &&( (request.requester.travelHandler && request.requester.travelHandler.mailAddress == user.mailAddress) || (user.userType == 'admin')) && request.status == 'Being Processed'">
   <v-btn @click="complete" color="green d-print-none" prepend-icon="mdi-cogs" class="shadow-md shadow-black ">Complete Processing</v-btn>
</div> -->

<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && request.processed && !request.expenseReportGiven">
   <v-btn @click="sendExpenseReportDialog = true" prepend-icon="mdi-file-chart-outline"  color="blue-darken-4 d-print-none" class="shadow-md shadow-black ">Give Expense Report</v-btn>
</div>


<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && request.processed && request.expenseReportGiven">
   <v-btn @click="openShowExpenseReportDialog()" prepend-icon="mdi-file-chart-outline"  color="blue-darken-4 d-print-none" class="shadow-md shadow-black ">Show Expense Report</v-btn>
</div>

<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >
   <v-btn @click="print()" prepend-icon="mdi-printer" class="text-white shadow-md shadow-black " color="orange d-print-none" >Print</v-btn>
</div>

<div v-if="request && request.hotelConfirmed == true && request.moneyReceiptSubmitted == false" class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >
   <v-btn @click="moneyReceiptDialog = true" prepend-icon="mdi-cash" class="text-white shadow-md shadow-black d-print-none bg-indigo-darken-2" color=" " >Apply For Advance Payment</v-btn>
</div>


<v-row justify="center" align="center" v-if="request && request.currentHandlerId == user._id && request.beingProcessed == true && request.processed == false">
                    <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="openRequestForwardDialog">
                         Forward
                    </v-btn>
                    <v-btn size="large"  class="bg-grey-darken-1 mr-2" @click="requestBackward">
                        Reject
                    </v-btn>
                    <v-btn size="large" class="bg-green-darken-1" @click="requestProcessingComplete">
                       Complete Processing
                    </v-btn>
</v-row>




</div>

<BookDialog/>

<UnBookDialogue/>

<RevokeDialogue/>


<HotelBookDialogue/>

<HotelUnbookDialogue/>

<HotelConfirmDialogue/>

<HotelRevokeDialogue/>


<EmailDialogue/>


<DepartmentHeadApproveDialogue/>

<SupervisorApproveDialogue/>

<ShareDialogue />


<TicketConfirmDialog/>


<SendExpenseReportDialog/>

<ShowExpenseReportDialog v-if="request"/>
 
<Log v-if="request"  v-bind:requestId="request._id" />

<SupervisorRequestApprovalDialog/>

<MoreInformationDialog />

<MoneyReceiptDialog/>

</template>



<script setup>

import MoneyReceiptDialog from '../components/MoneyReceiptDialog.vue';
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
import BookDialog from "../components/bookDialog.vue"
import UnBookDialogue from "../components/unbookDialogue.vue"
import RevokeDialogue from "../components/revokeDialogue.vue"
import Hotels from '../components/hotel/hotels.vue';
import HotelBookDialogue from '../components/hotelBookDialogue.vue';
import HotelUnbookDialogue from '../components/hotelUnbookDialogue.vue';
import HotelConfirmDialogue from '../components/HotelConfirmDialogue.vue';
import TicketConfirmDialog from '../components/ticketConfirmDialog.vue';
import HotelRevokeDialogue from '../components/HotelRevokeDialogue.vue';
import EmailDialogue from '../components/EmailDialogue.vue';
import HotelEditor from "../components/HotelEditor.vue"
import DepartmentHeadApproveDialogue from '../components/DepartmentHeadApproveDialogue.vue';
import SupervisorApproveDialogue from '../components/SupervisorApproveDialogue.vue';
import ShareDialogue from '../components/ShareDialogue.vue';
import Log from '../components/log.vue';
import ShowExpenseReportDialog from '../components/ExpenseReport/ShowExpenseReportDialog.vue';
import SendExpenseReportDialog from '../components/ExpenseReport/SendExpenseReportDialog.vue';
import SupervisorRequestApprovalDialog from '../components/SupervisorRequestApprovalDialog.vue';
import MoreInformationDialog from '../components/MoreInformationDialog.vue';
import { useCustomStore } from '../stores/custom';
import { useMoneyReceiptStore } from '../stores/moneyReceiptStore';



var {request, overlay,  customQuoteGiver, customHotelOverlay, shareDialogue,
    revokeDialogue, customHotelQuoteGiver, hotelOverlay, hotelConfirmDialogue, customHotelOverlay,
    sendExpenseReportDialog, showExpenseReportDialog,  moreInformationDialog
   } = storeToRefs(useRequestsStore())
var {getRequest, openBookDialogue, openunbookDialogue, openRevokeDialogue, 
     openShowExpenseReportDialog,
    hotelHover, hotelMoveout, openHotelBookDialogue, openApprovalDialogue, share, bookHotel, bookHotelDirect,
   openHotelunbookDialogue, openHotelConfirmDialogue, openHotelRevokeDialogue, uploadFile, openEmailDialogue, openTicketConfirmDialog,
   addCustomQuote, addCustomHotelQuote, supervisorApprove, departmentHeadApprove, book, confirm, moveout, hover, getInvoice, complete,
   openSupervisorRequestApprovalDialog, 
  
} = useRequestsStore()

var globalStore = useGlobalStore();
var customStore = useCustomStore();
var {moneyReceiptDialog} = storeToRefs(useMoneyReceiptStore())

getRequest();

var {user} = storeToRefs(useAuthStore())

var {showLogs} = storeToRefs(useLogStore())


var showMoreInformation = (request2) => {
   debugger
   moreInformationDialog.value = true
   customStore.request = request2
}













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