<template>
    <div class="w-[100vw] py-[20px] mt-10" >
    
       
        <div class="sticky pr-[20px] top-0 bg-white h-12  flex flex-row justify-end" style="z-index: 99;" v-if="request && request.currentHandler && user && user.userType != 'admin'">
    
          <div v-if="request.currentHandler.empName == request.requester.superVisor.empName && request.status == 'Seeking Supervisor\'s Approval'" >
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('superVisor', 'ticket', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('superVisor', 'ticket', 'rejected')">Reject</v-btn>
          </div>
          
          <div v-if="request.currentHandler.empName == request.requester.superVisor.empName && request.status == 'Seeking Supervisor\'s Approval For Hotel'" >
             <v-btn color="success" class="mr-[10px]" @click="openApprovalDialogue('superVisor', 'hotel', 'approved')">Approve</v-btn>
             <v-btn color="warning" @click="openApprovalDialogue('superVisor', 'hotel', 'rejected')">Reject</v-btn>
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
    
    <v-container id="info"  grid-list-xs  color="indigo-darken-200" class="bg-blue-lighten-2 border border-solid border-black mb-[20px]">
      <div class="flex flex-row w-full justify-end my-[20px] "> 
       
       <v-btn prepend-icon="mdi-file " class="mr-3 d-print-none" @click="showLogs = true">View Log</v-btn>
       <v-btn prepend-icon="mdi-share " class="d-print-none" @click="shareDialogue = true">Share</v-btn>
    
    </div>
    
       <v-row>
            <v-col cols>
    
    
    
          <div v-if="!request">
             <Loader/>
          </div>
        
    <v-card class="pa-10 v-card "  v-if="request"
            
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
          
         
            </v-card>
    
    
    </v-col>
        </v-row>
    </v-container>
    

<template v-if="request && request.supervisorApproved && request.departmentHeadApproved">
    
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
    
    <v-container class="border-2 border-solid border-black bg-yellow-lighten-2  mt-[80px] elevation-10 my-[20px] pa-10">
    <v-row>
       <v-col md="12" class="font-bold text-black text-xl bg-white">
        Ticket Quotations
         
       </v-col>    
    </v-row>
    
    <v-row class="bg-white elevation-10">
    
       
    
    
    
        <v-col cols  v-if="request" v-for="(quotation, quotationCounter) in request.quotations" :key="quotationCounter"  class="relative  border border-solid border-slate-500">
       
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.quoteGiver }} </v-col>
                
               </v-row>
               <v-row>
                  <v-col md="12" >
                             <div v-html="quotation.quotationText"></div>                           
                  </v-col>
                
               </v-row>
               <v-row >
            <v-col md="12" >
              

              
               <div class="flex flex-row w-full">

               <div class="flex flex-row w-full justify-start">
                   <div class="font-bold border-2 border-solid border-black text-black bg-yellow-darken-2 pa-1 mr-1" v-if="quotation.booked && !quotation.confirmed">Booked</div>
                   <div class="font-bold border-2 border-solid border-black text-black bg-green-darken-1 pa-1 mr-1" v-if="quotation.booked && quotation.confirmed">Confirmed</div>
               </div>


               <div class="flex flex-row w-full justify-end ">
                  <div class="font-bold hover:cursor-pointer border-2 border-solid border-black bg-yellow-500 hover:bg-yellow-800 pa-2 text-white" v-if="!quotation.booked && request.booked == false"  @click="openBookDialogue(quotation)">Book</div>
                  <div class="font-bold text-white mr-1 pa-1 bg-yellow-darken-2 border-2 border-solid border-black pa-1 hover:cursor-pointer" @click="openunbookDialogue(quotation)"  v-if="quotation.booked && !quotation.confirmed">UnBook</div>
                  <div class="font-bold text-white mr-1 bg-green-darken-1 border-2 border-solid border-black pa-1  hover:cursor-pointer" @click="openTicketConfirmDialog(quotation)"  v-if="quotation.booked && !quotation.confirmed && quotation.approved">Confirm</div>
                  <div class="font-bold text-white bg-red-darken-1 border-2 border-solid border-black pa-1 mr-1  hover:cursor-pointer" @click="openRevokeDialogue(quotation)"  v-if="quotation.booked && quotation.confirmed">Revoke</div>
               </div>

               </div>







            </v-col>
           </v-row>
               
               <!-- <v-row v-if="quotation.booked">
    
    
                <v-col md="12">
                   <div class="flex flex-row w-full">
    
    <div class="flex flex-row w-full justify-start">
        <div class="font-bold border-2 border-solid border-black text-black bg-yellow-darken-2 pa-1 mr-1" v-if="quotation.booked && !quotation.confirmed">Booked</div>
        <div class="font-bold border-2 border-solid border-black text-black bg-green-darken-1 pa-1 mr-1" v-if="quotation.booked && quotation.confirmed">Confirmed</div>
    </div>
    
    
    
    
    </div>
    
                </v-col>
           
               </v-row> -->

               
           <v-row v-if="quotation.confirmed" >
              <v-col  md="12">
               <v-file-input
                      @change="uploadFile($event, 'ticket', quotation)"
                      color="deep-purple-accent-4"
                      counter
                      label="Upload Invoice"
                      
                      
                      placeholder="Select your file"
                      prepend-icon="mdi-paperclip"
                      variant="outlined"
                      chips
                      :show-size="1000"></v-file-input>
              </v-col>
        
           </v-row>
    
             
    
               <v-row v-if="quotation.confirmed">

                <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Ticket Invoices
                 </v-col>
                  
                    <v-col md="12">
                      <div v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter">
                             {{ invoice.filename }}
                      </div>
                    </v-col>
               </v-row>
    
    
               <v-row>

                <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2 ">
                     Ticket Approvals
                 </v-col>
                 
                 <v-col md="12">
                     <div v-for="(ticketApproval, ticketApprovalCounter) in quotation.ticketApprovals">
                           {{ ticketApproval.empName }}
                     </div>
                     
                 </v-col>
     
                </v-row>
               
             </v-col>
    
    </v-row>
    
    
    <v-row class="" v-if="request && request.confirmed == false">

<div class="w-full mt-[10px] flex flex-row justify-center items-center " >

<div class="p-3 border-2 border-solid border-black bg-blue-400 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="overlay = !overlay" >Add Custom Quotation</div>
</div>
</v-row>
<v-overlay
:model-value="overlay"

scroll-strategy="reposition"

scrim="blue"
class="align-center justify-center w-full"
>

<div class="w-[800px] h-[600px] bg-white p-3 flex flex-col">
<div class="h-[30px] w-full flex flex-row justify-center items-center font-bold">Add A Custom Quotation</div>
<div class="w-full">
   <v-text-field
      name="name"
      label="Quotation By"
      id="id"
     
      class="text-h1 textField"
      v-model="customQuoteGiver"
   ></v-text-field>
</div>
<Editor />
<div class="w-full flex flex-row justify-end items-center mt-2 p-3">
   <div class="p-3 bg-green-400 text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="addCustomQuote('ticket')">Add</div>
</div>

</div>

</v-overlay>
    
    
    </v-container>
    
    <v-container class="border-2 bg-green-lighten-2  border-black border-solid mt-[40px] pa-10 elevation-4" v-if="request && request.confirmed == true">
    <v-row class="bg-white">
       <v-col md="12" class="font-bold text-black text-xl">
        Hotel Quotations
         
       </v-col>    
    </v-row>
    
    <v-row>
    
       
    
    
    
        <v-col cols  v-if="request " v-for="(quotation, quotationCounter) in request.hotelQuotations"  class="relative  border border-solid border-slate-500 bg-white pa-10">
       
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.quoteGiver }}</v-col>
             
               
                </v-row>
               <v-row>
                  <v-col md="12" >
                             <div v-html="quotation.quotationText"></div>                           
                  </v-col>
                
               </v-row>
               
        
    
    
    
               <v-row >
            <v-col md="12" >
              

              
               <div class="flex flex-row w-full">

               <div class="flex flex-row w-full justify-start">
                   <div class="font-bold border-2 border-solid border-black text-black bg-yellow-darken-2 pa-1 mr-1" v-if="quotation.booked && !quotation.confirmed">Booked</div>
                   <div class="font-bold border-2 border-solid border-black text-black bg-green-darken-1 pa-1 mr-1" v-if="quotation.booked && quotation.confirmed">Confirmed</div>
               </div>


               <div class="flex flex-row w-full justify-end ">
                  <div class="font-bold hover:cursor-pointer border-2 border-solid border-black bg-yellow-500 hover:bg-yellow-800 pa-2 text-white" v-if="!quotation.booked && request.hotelBooked == false"  @click="openHotelBookDialogue(quotation)">Book</div>
                  <div class="font-bold text-white mr-1 pa-1 bg-yellow-darken-2 border-2 border-solid border-black pa-1 hover:cursor-pointer" @click="openHotelunbookDialogue(quotation)"  v-if="quotation.booked && !quotation.confirmed">UnBook</div>
                  <div class="font-bold text-white mr-1 bg-green-darken-1 border-2 border-solid border-black pa-1  hover:cursor-pointer" @click="openHotelConfirmDialogue(quotation)"  v-if="quotation.booked && !quotation.confirmed ">Confirm</div>
                  <div class="font-bold text-white bg-red-darken-1 border-2 border-solid border-black pa-1 mr-1  hover:cursor-pointer" @click="openHotelRevokeDialogue(quotation)"  v-if="quotation.booked && quotation.confirmed">Revoke</div>
               </div>

               </div>







            </v-col>
           </v-row>

           

       <v-row v-if="quotation.confirmed" >
              <v-col  md="12" >
               <v-file-input 
    @change="uploadHotelFile($event, 'hotel', quotation)"
    color="deep-purple-accent-4"
    counter
    label="File input"
    
    placeholder="Select your file"
    prepend-icon="mdi-paperclip"
    variant="outlined"
    chips
    :show-size="1000"
  >

  </v-file-input>
              </v-col>

           </v-row>

           
    
    
               <v-row v-if="quotation.confirmed">

                
                <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Hotel Invoices
                 </v-col>
                  
                    <v-col md="12">
                      <div v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter">
                             {{ invoice.filename }}
                      </div>
                    </v-col>
               </v-row>
    
    
               <v-row>
                 
                 <v-col md="12">
                          <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Hotel Approvals
                 </v-col>
                     <div v-for="(hotelApproval, hotelApprovalCounter) in quotation.hotelApprovals" :key="hotelApprovalCounter">
                           {{ hotelApproval.empName }}
                     </div>
                     
                 </v-col>
     
                </v-row>
        </v-col>
    
         
        
        
    
    
    </v-row>

    <div class="w-full flex flex-row justify-center items-center mt-3" >
<div v-if="(request && user && (user.userType == 'admin')) && request.confirmed == true && request.hotelConfirmed == false" class="p-3 mr-4 bg-blue-500 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="hotelOverlay = !hotelOverlay" >Add Hotel Quotation</div>
<div v-if="(request && user && (user.userType == 'admin' )) && request.confirmed == true && request.hotelConfirmed == false" class="p-3 bg-blue-500 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="customHotelOverlay = !customHotelOverlay" >Add Custom Hotel Quotation</div>
</div>
    
    
<v-overlay
:model-value="hotelOverlay"

scroll-strategy="reposition"

scrim="blue"
class="align-center justify-center w-full"
>

<Hotels/>

</v-overlay>

    

<v-overlay
:model-value="customHotelOverlay"

scroll-strategy="reposition"

scrim="blue"
class="align-center justify-center w-full"
>

<div class="w-[800px] h-[600px] bg-white p-3 flex flex-col">
<div class="h-[30px] w-full flex flex-row justify-center items-center font-bold">Add A Custom Hotel Quotation</div>
<div class="w-full">
   <v-text-field
      name="name"
      label="Quotation By"
      id="id"
      class="v-text-field"
      v-model="customQuoteGiver"
   ></v-text-field>
</div>
<HotelEditor />
<div class="w-full flex flex-row justify-end items-center mt-2 p-3">
   <div class="p-3 bg-green-400 text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="addCustomQuote('hotel')">Add</div>
</div>

</div>

</v-overlay>
    
    </v-container>
    
    
    
    
    
    
    
    
    
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request && (user.userType == 'admin') && request.status == 'Seeking Invoices'">
       <v-btn @click="openEmailDialogue('accounts')" class="d-print-none" color="blue">Email To Accounts</v-btn>
    </div>
    
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && (request.status == 'Processing Complete' || request.Status == 'Being Processed')">
       <v-btn @click="openEmailDialogue('custom')" prepend-icon="mdi-mail" color="blue" class="d-print-none">Email</v-btn>
    </div>
    
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request & (user.userType == 'admin') && request.status == 'Being Processed'">
       <v-btn @click="complete" color="green d-print-none" prepend-icon="mdi-cogs">Complete Processing</v-btn>
    </div>
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && request.processed && !request.expenseReportGiven">
       <v-btn @click="sendExpenseReportDialog = true" prepend-icon="mdi-file-chart-outline"  color="blue-darken-4 d-print-none">Give Expense Report</v-btn>
    </div>
    
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="request && request.processed && request.expenseReportGiven">
       <v-btn @click="openShowExpenseReportDialog()" prepend-icon="mdi-file-chart-outline"  color="blue-darken-4 d-print-none">Show Expense Report</v-btn>
    </div>
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >
       <v-btn @click="print()" prepend-icon="mdi-printer" class="text-white" color="orange d-print-none">Print</v-btn>
    </div>
    
    
    </template>
    
    
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
    
    
    </template>
    
    
    
    <script setup>
    
    
    import { useGlobalStore } from '../stores/global';
    import { useAuthStore } from '../stores/auth';
    import { useLogStore } from '../stores/log';
    import { storeToRefs } from 'pinia';
   
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
    
    
    var {request, overlay,  customQuoteGiver, customHotelOverlay, shareDialogue,
        revokeDialogue, customHotelQuoteGiver, hotelOverlay, hotelConfirmDialogue, customHotelOverlay,
        sendExpenseReportDialog, showExpenseReportDialog
       } = storeToRefs(useRequestsStore())
    var {getCustomRequest, openBookDialogue, openunbookDialogue, openRevokeDialogue, 
         openShowExpenseReportDialog,
        hotelHover, hotelMoveout, openHotelBookDialogue, openApprovalDialogue, share, bookHotel, bookHotelDirect,
       openHotelunbookDialogue, openHotelConfirmDialogue, openHotelRevokeDialogue, uploadFile, uploadHotelFile, openEmailDialogue, openTicketConfirmDialog,
       addCustomQuote, addCustomHotelQuote, supervisorApprove, departmentHeadApprove, book, confirm, moveout, hoopenRevokeDialoguegetInvoice, complete} = useRequestsStore()
    
    var globalStore = useGlobalStore();
    
    
    getCustomRequest();
    
    var {user} = storeToRefs(useAuthStore())
    
    var {showLogs} = storeToRefs(useLogStore())
    
    
    
    
    
    
    
    
    
    
    
    
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