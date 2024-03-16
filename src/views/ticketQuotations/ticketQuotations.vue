<template>
    <div class="w-[100vw] py-[20px] mt-10">
    
       
    
    
    
    <v-container id="info"  grid-list-xs  color="indigo-darken-200" class="bg-blue-lighten-5 mb-[20px]">
    <div class="flex flex-row w-full justify-end my-[20px] "> 
    
    <v-btn prepend-icon="mdi-file " class="mr-3 d-print-none" @click="showLogs = true">View Log</v-btn>
    <!-- <v-btn prepend-icon="mdi-share " class="d-print-none" @click="shareDialogue = true">Share</v-btn> -->
    
    </div>
    
    <v-row>
        <v-col cols>
    
    
    
      <div v-if="!trip">
         <Loader/>
      </div>
    
    <v-card class="pa-10 v-card elevation-15 shadow-md shadow-black"  v-if="trip"
        
          max-width="100%"
          elevated="2"
          hover
          :variant="'elevated'"
          :density="2"
       >
    
          <v-card-item>
            <div>
        
              <div class="text-h6 mb-1 bg-blue-darken-1 text-white shadow-sm shadow-black">
              Trip Information
              </div>
              
            </div>
          </v-card-item>
    
    
         <v-row class="pl-[80px]">
            <v-col md="6" class="text-left">
               Destination
            </v-col>
            <v-col md="6" class="text-left">
               {{ trip.destination }}
            </v-col>
         </v-row>
        
         <v-row class="pl-[80px]">
            <v-col md="6" class="text-left">
               Purpose 
            </v-col>
            <v-col md="6" class="text-left">
               {{ trip.subject }}
            </v-col>
         </v-row>
         <v-row class="pl-[80px]">
            <v-col md="6" class="text-left">
               Start Date
            </v-col>
            <v-col md="6" class="text-left">
               {{ trip.departure_date }}
            </v-col>
         </v-row>
         <v-row class="pl-[80px]">
            <v-col md="6" class="text-left">
               End Date
            </v-col>
            
            <v-col md="6" class="text-left">
               {{ trip.arrival_date }}
            </v-col>
         </v-row>
       
        </v-card>
    
    
    </v-col>
    
    
    <v-col cols >
       <v-card class="pa-10 elevation-15 v-card shadow-md shadow-black "   v-if="trip"
        
        max-width="100%"
        elevated="2"
        hover
        
        
        
        :variant="'elevated'"
        :density="2"
     >
    
    <v-card-item>
    
       
       <v-tabs
          v-model="tab"
          bg-color="blue-darken-1"
          
          
          v-if="trip"
        >
          <v-tab    :value="request.requester.empName" v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
         <span class=" text-h6"> {{ request.requester.empName }}</span>
          </v-tab>
          
        </v-tabs>
      
       </v-card-item>
    
    
          <v-window v-model="tab">
            <v-window-item :value="request.requester.empName" v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
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
               Status
            </v-col>
            <v-col md="6" class="text-left">
               {{ request.status }}
            </v-col>
      </v-row>
       <v-row class="pl-[80px]">
            <v-col md="6" class="text-left">
               Current Handler
            </v-col>
            <v-col md="6" class="text-left" v-if="request.currentHandler">
               {{ request.currentHandler.empName }}
            </v-col>
         </v-row>
         <v-row class="pl-2 pb-5">
            <v-col md="12" class="text-left pb-2 ">
               <v-btn @click="showMoreInformation(request)" class="elevation-5" >More Information</v-btn>
             
            </v-col>
        
         </v-row>
         <v-row class="pl-5 pb-5">
            <v-btn size="small" @click="openEmailDialogAccounts(request)" v-if="request && request.confirmed == true && request.hotelConfirmed == true && request.processed == false"  class="d-print-none" color="blue"> Email To Accounts </v-btn>
            <v-btn size="small" @click="openEmailDialogCustom(request)" v-if="request && request.confirmed == true && request.hotelConfirmed == true && request.processed == true"  prepend-icon="mdi-mail" color="blue" class="d-print-none hover:cursor-pointer">Email</v-btn>
            <v-btn size="small" @click="complete(request)" v-if="request && request.processed == false && request.status == 'Being Processed'" color="green d-print-none" class="hover:cursor-pointer ml-2" prepend-icon="mdi-cogs">Complete Processing</v-btn>
            <v-btn size="small" v-if="request && request.processed && request.expenseReportGiven" @click="showExpenseReport(request)" prepend-icon="mdi-file-chart-outline"   color="blue-darken-4 d-print-none ml-2" class="shadow-md shadow-black ">Show Expense Report</v-btn>
    
         </v-row>
    
         </v-window-item>
       </v-window>
       
    
    </v-card>
    
    
    </v-col>
    </v-row>
    </v-container>
    
    
   
    
    
    <v-container v-if="trip" class=" bg-yellow-lighten-2  mt-[80px] shadow-md shadow-black my-[20px] pa-10">
    <v-row class="shadow-sm shadow-black">
    <v-col md="12" class="font-bold text-black text-xl bg-white elevation-5">
    Ticket Quotations
     
    </v-col>    
    </v-row>
    
    <v-row class=" " align="center" justify="center">
    
    
    
          <v-col md="5"    v-for="(quotation, quotationCounter) in trip.quotations" :key="quotationCounter" class="relative mr-5 mt-5   pa-10 bg-white   mb-10   shadow-md shadow-black"  >
      
          <v-row>
                  <v-col md="12" class="bg-blue-darken-1 shadow-md shadow-black font-bold text-xl text-white ">{{ quotation.quoteGiver }}</v-col>
               </v-row>
    
          <v-row>
             <v-col md="12">
                  <v-chip label class="text-caption font-weight-thin pa-2 mr-2 bg-blue-darken-2 border-2 border-solid border-black" v-for="(requestId, requestIdCounter) in quotation.requestIds" :key="requestIdCounter">{{ getUserName(requestId) }}</v-chip>
             </v-col>
          </v-row>
               <v-row class=" border border-red-500 border-solid">
            
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
    
    
       
                   </div>
    
    
    
    
    
    
    
                </v-col>
               </v-row>
    
    
    
    
               <v-row v-if="quotation && quotation.confirmed && quotation.invoices.length > 0" class="shadow-sm shadow-black mb-2">
           
                     <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                         Ticket Invoices
                     </v-col>
             
                    <v-col md="12">
                      <div v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter" class="flex flex-row justify-start">
                           <v-chip label class="text-blue-darken-2 m-1  hover:cursor-pointer" @click="getInvoice(invoice.filename)">{{ invoice.filename }}</v-chip> 
                      </div>
                    </v-col>
               </v-row>
    
    
               <v-row class="shadow-sm shadow-black" v-if="quotation.ticketApprovals.length > 0">
                <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2 ">
                         Ticket Approvals
                     </v-col>
                 
                <v-col md="12">
                    <v-chip label class="mr-2  hover:cursor-pointer" v-for="(ticketApproval, ticketApprovalCounter) in quotation.ticketApprovals" :key="ticketApprovalCounter">
                          {{ ticketApproval.empName }}
                    </v-chip>
                    
                </v-col>
    
               </v-row>



    
        </v-col>
    
    
    
    
          
    
     
    <!-- </template> -->
    
    
    
    </v-row>
    

    
    
   
  
    
    
    
    <v-container class="border-2 border-solid border-black" v-if="trip && trip.ticketApprovals.length > 0">
      <v-row>
       <v-table>
         <tbody>
            <tr>
               <th class="text-h5 bg-blue-darken-3">
                  Processed By
               </th>
               <td>
                  <v-chip label class="mr-2 mb-2" v-for="(accountUser, accountUserCounter) in trip.ticketApprovals" :key="accountUserCounter">
               {{ accountUser.empName }} - {{accountUser.department}}
           </v-chip>
               </td>

            </tr>
         </tbody>
       </v-table>


       
      </v-row>
    </v-container>
    
      <!-- <v-col md="3"  justify="center"  class="bg-blue-darken-2 pt-9 text-h6 " >
            Processed By
         </v-col>
         <v-col md="9">
           <v-chip label class="mr-2 mb-2" v-for="(accountUser, accountUserCounter) in trip.ticketApprovals" :key="accountUserCounter">
               {{ accountUser.empName }} - {{accountUser.department}}
           </v-chip>
         </v-col> -->


<v-container class="mt-2 border-2 border-solid border-black" v-if="trip.ticketsMoneyDisbursed == true">

   
               
               <v-table>
                  <thead class="bg-blue-darken-2 ">
                     <th class="pa-4 text-h6">Amount Disbursed</th>
                     <th class="pa-4 text-h6">Account Number</th>
                     <th class="pa-4 text-h6">Account Holder's Name</th>
                  </thead>
                  <tbody>
                     <tr>
                        <td>{{ trip.amountDisbursedTickets }}</td>
                        <td>{{ trip.ticketsAccountNumber }}</td>
                        <td>{{ trip.ticketsAccountHolderName }}</td>
                     </tr>
                  </tbody>
               </v-table>
 
         
      


</v-container>
       
    </v-container>


    
 

    <v-row justify="center" align="center" v-if="trip && ( (trip.currentHandlerId == user._id && trip.seekingAccountsApprovalForTickets == true) || user.userType == 'admin') && trip.ticketsApprovedByAccounts == false">
              
                <v-btn class="mr-2 bg-purple-darken-2" v-if="trip.ticketsMoneyDisbursed == false"  size="large" @click="disburseDialog = true">
                     Disburse Money
                </v-btn>
                <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="openTicketQuotationsForwardDialog">
                     Forward
                </v-btn>
                <v-btn size="large"  class="bg-grey-darken-1 mr-2" @click="ticketQuotationsBackward">
                    Send Back
                </v-btn>
                <v-btn  size="large" class="bg-green-darken-1" @click="ticketQuotationsProcessingComplete">
                   Complete Processing
                </v-btn>
            </v-row>

       
    </div>
    
    
    
    
    <!-- <ShareDialogue/> -->
    
   
    <Log v-if="trip" />
    <MoreInformationDialog />
    
    <ShowExpenseReportDialog/>
    <TicketQuotationsForwardDialog/>
    <TicketsQuotationDisburseDialog/>
    </template>
    
    
    <script setup>
    import { ref, watch } from 'vue'
    import { storeToRefs } from 'pinia';
    import {useTripStore} from '../../stores/trips'
    import { useTicketQuotationsStore } from '../../stores/ticketQuotationStore';
    import TicketQuotationsForwardDialog from '../../components/TicketQuotationsForwardDialog.vue';
    
    import { useGlobalStore } from '../../stores/global';
    import {useCustomStore} from '../../stores/custom';
    import { useAuthStore } from '../../stores/auth';
    import { useLogStore } from '../../stores/log';
    
    import {useToast} from "vue-toast-notification";
    import axios from "axios"
    import { useRequestsStore } from '../../stores/request';
 
    import Log from '../../components/Trips/Log.vue';
    import MoreInformationDialog from '../../components/MoreInformationDialog.vue';
    import ShowExpenseReportDialog from '../../components/ExpenseReport/ShowExpenseReportDialog.vue';
    import TicketsQuotationDisburseDialog from '../../components/TicketsQuotationDisburseDialog.vue';
    
    var file = ref(null)
    
    
    var triggerInput = () =>{
       debugger
       var element = document.querySelector("#input")
       element.click()
    }
    var toast = useToast();
    var {user} = storeToRefs(useAuthStore())
    
    var tripStore = useTripStore();
    
    var componentReload = ref(false);
    
    var {showLogs} = storeToRefs(useLogStore())
    
    var tab = ref(null)


    var {openTicketQuotationsForwardDialog, ticketQuotationsBackward, ticketQuotationsProcessingComplete} = useTicketQuotationsStore()
    var {disburseDialog} = storeToRefs(useTicketQuotationsStore())
    
    var {getTrip, ticketQuotationAll, TAddCustomQuote, 
       openBookDialog, getUserName, openTicketUnBookDialog,
       openTicketConfirmDialog,
       openTicketRevokeDialog,
       checkConfirmation,
       checkAllConfirmation,
       openHotelQuotationDialog,
       openHotelBookDialog,
       openBookDialog,
       openHotelUnBookDialog,
       openHotelConfirmDialog,
       openHotelRevokeDialog,
       uploadFile,
       uploadHotelFile,
       checkBooked,
       openEmailDialogAccounts,
       openEmailDialogCustom,
       complete,
       checkAllBeingProcessed,
       addOrRemoveTraveler
     
    } = useTripStore()
    
    var {globalUrl} = storeToRefs(useGlobalStore())
    
    var requestStore = useRequestsStore();
    
    var {moreInformationDialog, shareDialogue, expenseReport, showExpenseReportDialog} = storeToRefs(useRequestsStore())
    
    var {request} = storeToRefs(useCustomStore())
    
    var {getInvoice} = useRequestsStore()
    
    
    var showMoreInformation = (request2) => {
       debugger
       moreInformationDialog.value = true
       request.value = request2
    }
    
    
    var showExpenseReport = (request2) =>{
       toast.info("Getting Expense Report")
    
      var data = new FormData()
      data.append("id", request2._id);
    
      axios.post(globalUrl.value + "getExpenseReport", data).then((result)=>{
        expenseReport.value = result.data
        showExpenseReportDialog.value = true
     
        toast.clear();
        toast.success("Got Expense Report")
      })
    
       
    }
    
    
    
    getTrip()
    
    var {trip, overlay, ticketQuotationSelection, 
    
    quoteGiver, hotelQuotationDialog, showLogs, customHotelOverlay, travelerCosts} = storeToRefs(useTripStore())
    
    
    
    
 
    
    
    
    </script>