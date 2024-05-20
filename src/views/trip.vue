<template>
<div class="w-[100vw] py-[20px] " v-if="user.userType == 'admin' || user.userType == 'manager'">

   


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
           Destination:
        </v-col>
        <v-col md="6" class="text-left">
           {{ trip.destination }}
        </v-col>
     </v-row>
    
     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Purpose:
        </v-col>
        <v-col md="6" class="text-left">
           {{ trip.subject }}
        </v-col>
     </v-row>
     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Start Date:
        </v-col>
        <v-col md="6" class="text-left">
           {{ trip.departure_date }}
        </v-col>
     </v-row>
     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           End Date:
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.arrival_date }}
        </v-col>
     </v-row>

     <template v-if="trip.custom == false">
     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Total Number Of Travelers
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.numberOfTravelers }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Type
        </v-col>
        
        <v-col md="6" class="text-left">
           <span v-if="trip.custom">Planned</span>
           <span v-else>Unplanned</span>
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
      <v-col md="6" class="text-left font-weight-bold text-h6">
         Budget Information

      </v-col>
    </v-row>
     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Air Ticket Budget
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.airTicketBudget }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Hotel Budget
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.hotelBudget }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
            Total Booking Cost
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.hotelBudget }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Transport Expense
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.transportExpense }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Incidental Expense
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.incidentalExpense }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Total Trip Budget
        </v-col>
        
        <v-col md="6" class="text-left">
           {{ trip.totalTripBudget }}
        </v-col>
     </v-row>

   </template>
   
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
      density="compact"
      
      
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
  <v-row class="pl-[80px]  ">
        <v-col md="6" class="text-left bg-green-lighten-1">
           Status
        </v-col>
        <v-col md="6" class="text-left bg-green-lighten-1">
           {{ request.status }}
        </v-col>
  </v-row>
  <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Supervisor
        </v-col>
        <v-col md="6" class="text-left" v-if="request.requester.superVisor">
           {{ request.requester.superVisor.empName }}
        </v-col>
     </v-row>

     <v-row class="pl-[80px]">
        <v-col md="6" class="text-left">
           Department Head
        </v-col>
        <v-col md="6" class="text-left" v-if="request.requester.zonalHead">
           {{ request.requester.zonalHead.empName }}
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






<v-container v-if="trip" class=" bg-yellow-lighten-2  bg-white  mt-[80px] shadow-md shadow-black my-[20px] pa-10">
<v-row class="shadow-sm shadow-black bg-white">
<v-col md="12" class="font-bold text-black text-xl ">
Ticket Quotations
<v-row v-if="trip.seekingAccountsApprovalForTickets == false  && checkConfirmation('ticket') == true" class="bg-white" justify="end" align="end">
  <div  @click="sendToAccounts()" color="success" class="mb-2 mr-2 pa-1 bg-blue-darken-3 hover:cursor-pointer" size="small">Send To Accounts</div>
</v-row> 
</v-col>  
 
</v-row>

<v-row class=" " align="center" justify="center">



      <v-col md="5"    v-for="(quotation, quotationCounter) in trip.quotations" :key="quotationCounter" class="relative mr-5 mt-5   pa-10 bg-white   mb-10   shadow-md shadow-black"  >
  
      <v-row class="">
              <v-col md="12" class="bg-blue-darken-1 border-2  border-solid  font-bold text-xl text-white pa-1 mb-1">{{ quotation.quoteGiver }}</v-col>
           </v-row>

      <v-row>
         <v-col md="12">
              <v-chip label class="text-caption font-weight-thin pa-2 mr-2 bg-blue-darken-2 border-2 border-solid border-black" v-for="(requestId, requestIdCounter) in quotation.requestIds" :key="requestIdCounter">{{ getUserName(requestId) }}</v-chip>
         </v-col>
      </v-row>
           <v-row class="border-2 border-solid p-4">
        
              <v-col md="12"  >
              
                         <div  class="quotation max-h-[20vh] overflow-y-auto" v-html="quotation.quotationText" ></div>
                                               
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
                  <div class="font-bold hover:cursor-pointer border-2 border-solid border-black bg-yellow-500 hover:bg-yellow-800 pa-2 text-white" v-if="!quotation.booked && checkBooked('ticket') == false"  @click="openBookDialog(quotation)">Book</div>
                  <div class="font-bold text-white mr-1 pa-1 bg-yellow-darken-2 border-2 border-solid border-black pa-1 hover:cursor-pointer" @click="openTicketUnBookDialog(quotation)"  v-if="quotation.booked && !quotation.confirmed">UnBook</div>
                  <div class="font-bold text-white mr-1 bg-green-darken-1 border-2 border-solid border-black pa-1  hover:cursor-pointer" @click="openTicketConfirmDialog(quotation)"  v-if="quotation.booked && quotation.confirmed == false && quotation.approved == true">Confirm</div>
                  <div class="font-bold text-white bg-red-darken-1 border-2 border-solid border-black pa-1 mr-1  hover:cursor-pointer" @click="openTicketRevokeDialog(quotation)"  v-if="quotation.booked && quotation.confirmed">Revoke</div>
               </div>

               </div>







            </v-col>
           </v-row>




           <v-row v-if="quotation.confirmed"  >
              <v-col  md="12">
               <v-file-input
                      @change="uploadFile($event, 'ticket', quotation)"
                      color="deep-purple-accent-4"
                      counter
                      label="Upload Invoice"
                      id="input"
                      
                      placeholder="Select your file"
                      prepend-icon="mdi-paperclip"
                      variant="outlined"
                      density="compact"
                      chips
                      :show-size="1000"></v-file-input>
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
                <v-chip label class="text-blue-darken-2 m-1  hover:cursor-pointer" v-for="(ticketApproval, ticketApprovalCounter) in quotation.ticketApprovals" :key="ticketApprovalCounter">
                      {{ ticketApproval.empName }}
                </v-chip>
                
            </v-col>

           </v-row>

    </v-col>




      

 
<!-- </template> -->



</v-row>

<v-row class="" v-if="checkConfirmation('ticket') == false">

<div class="w-full mt-[10px] flex flex-row justify-center items-center " >

<div class="p-3 shadow-sm shadow-black bg-blue-400 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="overlay = !overlay" >Add Custom Quotation</div>
</div>
</v-row>





<v-overlay
:model-value="overlay"


persistent
scrim="blue"
class="align-center justify-center w-full  border-2 border-solid border-black"
>

<div class="w-[800px] h-[600px] overflow-y-scroll  bg-white p-3 flex flex-col border-2 border-solid border-black">
<div class="h-[30px] w-full flex flex-row justify-center items-center font-bold">Add A Custom Quotation</div>
<div class="w-full">
<v-text-field
  name="name"
  label="Quotation By"
  id="id"
  density="compact"
  class="textField"
  variant="outlined"
  v-model="quoteGiver"
>
<template v-slot:label>

<span class="text-h5">Quotation By</span>

</template>

</v-text-field>
</div>

<GiveCustomQuote/>


<v-container>
<v-row>
<v-col cols v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
   <v-checkbox v-if="request.supervisorApproved == true && request.departmentHeadApproved == true" :label="request.requester.empName" @change="addOrRemoveTraveler($event, request)" :value="request._id" v-model="ticketQuotationSelection"></v-checkbox>
</v-col>
<v-col cols>
   <v-checkbox v-if="trip.requests.filter(x => x.supervisorApproved == true && x.departmentHeadApproved == true).length > 1" label="All" value="All" @change="ticketQuotationAll"></v-checkbox>
</v-col>
</v-row> 
<v-container>
   <v-table
    fixed-header
   
    width="100px"
    density="compact"
    hover
  >
    <thead>
      <tr class="bg-white">
        <th class="text-center text-h6 text-black font-weight-bold">
          Name
        </th>
        <th class="text-center text-h6 text-black font-weight-bold">
          Total  Cost
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="(cost, counter) in travelerCosts" :key="counter" 
      class="bg-grey-lighten-5"
      density="compact"
      >
        <td  class=" text-center " justify="center" align="center" >{{ cost.name }}</td>
        <td justify="center" align-self="center" align="center" density="compact"> 
         <v-text-field

         class="text-center mt-3 "
         name="totalcost"
         density="compact"
         id="totalCost"
         variant="outlined"
         
         v-model="travelerCosts[counter].totalcost"
       ></v-text-field></td>
      </tr>
    </tbody>
  </v-table>

</v-container>
</v-container>
<v-row class="w-full flex flex-row justify-end items-center  p-3">
<div class="p-3 bg-green-400 text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="TAddCustomQuote('ticket')">Add</div>
<div class="p-3 bg-grey-darken-1 ml-2  text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="overlay = false">Cancel</div>
</v-row>

</div>



</v-overlay>

  
<v-container v-if="trip && trip.ticketApprovals.length > 0">
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


<v-container class="mt-2" v-if="trip.ticketsMoneyDisbursed == true">

   
               
   <div class="grid grid-cols-6 grid-rows-1">
    
    <div class="text-end text-md font-bold">Amount Disbursed:</div>
    <div>{{ trip.amountDisbursedTickets }}</div>
 
    <div class="text-end text-md font-bold">Acount Number:</div>
    <div>{{ trip.ticketsAccountNumber }}</div>
 
    <div class="text-end text-md font-bold">Account Holder's Name:</div>
    <div>{{ trip.ticketsAccountHolderName }}</div>
 
    </div>  
         
      


</v-container>




</v-container>






<v-container  class=" bg-green-lighten-1 mt-[40px] pa-10 shadow-md shadow-black" v-if=" trip && checkConfirmation('ticket') == true">
<v-row class="bg-white shadow-sm shadow-black">
<v-col md="12" class="font-bold text-black text-xl elevation-10 ">
Hotel Quotations
 
</v-col>    
</v-row>

<v-row  class="d-flex flex-row  justify-start align-start">

<v-col  v-for="(quotation, quotationCounter) in trip.hotelQuotations" :key="quotationCounter" md="5"  class="relative  mb-10 mr-5 mt-5  bg-white  hover:bg-emerald-300 shadow-md shadow-black "  >
    
  <v-row>
          <v-col md="12" class="bg-blue-darken-2 font-bold text-xl text-white border-2 border-solid ">{{ quotation.quoteGiver }}</v-col>
       </v-row>
       <v-row>
         <v-col md="12" class="">
              <v-chip label class="text-caption font-weight-thin pa-2 mr-2 bg-blue-darken-2 border-2 border-solid border-black" v-for="(requestId, requestIdCounter) in quotation.requestIds" :key="requestIdCounter">{{ getUserName(requestId) }} </v-chip>
         </v-col>
      </v-row>
       <v-row>
    
          <v-col md="12" class="border-2 border-solid p-4 h-[100%] overflow-y-auto" >
         
                     <div class="quotation max-h-[20vh]" v-html="quotation.quotationText"></div>
                                           
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
                  <div class="font-bold hover:cursor-pointer border-2 border-solid border-black bg-yellow-500 hover:bg-yellow-800 pa-2 text-white" v-if="!quotation.booked && checkBooked('hotel') == false"  @click="openHotelBookDialog(quotation)">Book</div>
                  <div class="font-bold text-white mr-1 pa-1 bg-yellow-darken-2 border-2 border-solid border-black pa-1 hover:cursor-pointer" @click="openHotelUnBookDialog(quotation)"  v-if="quotation.booked && !quotation.confirmed">UnBook</div>
                  <div class="font-bold text-white mr-1 bg-green-darken-1 border-2 border-solid border-black pa-1  hover:cursor-pointer" @click="openHotelConfirmDialog(quotation)"  v-if="quotation.booked && quotation.confirmed == false && quotation.approved == true">Confirm</div>
                  <div class="font-bold text-white bg-red-darken-1 border-2 border-solid border-black pa-1 mr-1  hover:cursor-pointer" @click="openHotelRevokeDialog(quotation)"  v-if="quotation.booked && quotation.confirmed">Revoke</div>
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
    label="Upload Invoice"
    
    placeholder="Select your file"
    prepend-icon="mdi-paperclip"
    variant="outlined"
    density="compact"
    chips
    :show-size="1000"
  >

  </v-file-input>
              </v-col>

           </v-row>


           <v-row v-if="quotation && quotation.confirmed && quotation.invoices.length > 0" class="shadow-sm shadow-black mb-2">

            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2 mb-2  ">
                     Hotel Invoices
                 </v-col>
              
                <v-col md="12" justify="start" align="start">
                  <v-chip label color="blue" v-for="(invoice, invoiceCounter) in quotation.invoices" :key="invoiceCounter" class="flex flex-row m-1 justify-start" @click="getInvoice(invoice.filename)">
                        {{ invoice.filename }}
                  </v-chip>
                </v-col>
           </v-row>



           <v-row class="shadow-sm shadow-black" v-if="quotation.hotelApprovals.length > 0">

            <v-col md="12" class="text-h8 font-weight-bold bg-blue-lighten-2  ">
                     Hotel Approvals
                 </v-col>
             
             <v-col md="12" justify="start" align="start">
                 <v-chip label class="m-1" v-for="(hotelApproval, hotelApprovalCounter) in quotation.hotelApprovals" :key="hotelApprovalCounter">
                       {{ hotelApproval.empName }}
                 </v-chip>
                 
             </v-col>
 
            </v-row>
</v-col>




 




</v-row>

<v-row>

<div class="w-full flex flex-row justify-center items-center mt-3"  v-if="checkConfirmation('hotel') == false">
<div v-if="user && trip && user.userType == 'admin'" class="shadow-sm shadow-black  p-3 mr-4 bg-blue-500 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="hotelQuotationDialog = !hotelQuotationDialog" >Add Hotel Quotation</div>
<div v-if="user && trip && user.userType == 'admin'" class="shadow-sm shadow-black  p-3 bg-blue-500 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="customHotelOverlay = !customHotelOverlay" >Add Custom Hotel Quotation</div>
</div>

</v-row>






<v-overlay
:model-value="customHotelOverlay"


persistent
scrim="blue"
class="align-center justify-center w-full border-2 border-solid border-black"
>
      
<div class="w-[800px] h-[600px]  overflow-y-scroll bg-white p-3 flex flex-col border-2 border-solid border-black">
<div class="h-[30px] w-full flex flex-row justify-center items-center font-bold">Add A Custom Quotation</div>
<div class="w-full">
<v-text-field
  name="name"
  label="Quotation By"
  id="id"
  density="compact"
  class=""
  variant="outlined"
  v-model="quoteGiver"
>
<template v-slot:label>
<span class="text-h5">Quotation By</span>

</template>

</v-text-field>
</div>

<GiveCustomQuote/>


<v-container>
<v-row>
<v-col cols v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
   <v-checkbox v-if="request.supervisorApproved == true && request.confirmed == true && request.departmentHeadApproved == true" @change="addOrRemoveTraveler($event, request)" :label="request.requester.empName" :value="request._id" v-model="ticketQuotationSelection"></v-checkbox>
</v-col>
<v-col cols>
   <v-checkbox label="All" v-if="trip.requests.filter(x => x.supervisorApproved == true && x.departmentHeadApproved == true).length > 1" value="All" @change="ticketQuotationAll"></v-checkbox>
</v-col>
</v-row> 
</v-container>
<v-container>
   <v-table
    fixed-header

    width="100px"
    density="compact"
    hover
  >
    <thead>
      <tr class="bg-white">
        <th class="text-center text-h6 text-black font-weight-bold">
          Name
        </th>
        <th class="text-center text-h6 text-black font-weight-bold">
          Total  Cost
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="(cost, counter) in travelerCosts" :key="counter" 
      class="bg-grey-lighten-5"
      density="compact"
      >
        <td  class=" text-center " justify="center" align="center" >{{ cost.name }}</td>
        <td justify="center" align-self="center" align="center" density="compact"> 
         <v-text-field

         class="text-center mt-3 "
         name="totalcost"
         density="compact"
         id="totalCost"
         variant="outlined"
         v-model="travelerCosts[counter].totalcost"
       ></v-text-field></td>
      </tr>
    </tbody>
  </v-table>

</v-container>

<div class="w-full flex flex-row justify-end items-center mt-2 p-3">
<div class="p-3 bg-green-400 text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="TAddCustomQuote('hotel')">Add</div>
<div class="p-3 bg-grey-darken-1 ml-2  text-white font-bold hover:bg-green-700 hover:text-black hover:cursor-pointer" @click="customHotelOverlay = false">Cancel</div>
</div>


</div>

</v-overlay>




</v-container>















<div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >

<v-btn @click="tripStore.sendToAccountAndAudit" prepend-icon="mdi-mail" class="text-white" color="orange d-print-none">Send To Account and Audit</v-btn>

</div> 


<div v-if="user && trip && trip.beingProcessedAccounts == true && trip.currentAccountsHandlerId == user._id" class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >

  

                <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="tripStore.openAccountsTripForwardDialog">
                    Forward
                </v-btn>
                <v-btn size="large" class="bg-grey-darken-1 mr-2" @click="tripStore.accountsTripBackWard">
                    Reject
                </v-btn>
                <v-btn size="large" class="bg-green-darken-1" @click="tripStore.accountsTripComplete">
                    Complete Processing
                </v-btn>

</div> 


<div v-if="user && trip && trip.beingProcessedAudit == true && trip.currentAuditHandlerId == user._id" class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" >


   <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="tripStore.openAuditTripForwardDialog">
                    Forward
                </v-btn>
                <v-btn size="large" class="bg-grey-darken-1 mr-2" @click="tripStore.auditTripBackWard">
                    Reject
                </v-btn>
                <v-btn size="large" class="bg-green-darken-1" @click="tripStore.auditTripComplete">
                    Complete Processing
                </v-btn>



</div> 



</div>




<!-- <ShareDialogue/> -->

<BookDialog/>

<TicketUnBookDialog/>

<TicketConfirmDialog/>

<TicketRevokeDialog/>

<HotelQuotationDialog/>

<HotelBookDialog/>

<HotelUnBookDialog/>

<HotelConfirmDialog/>

<HotelRevokeDialog/>

<EmailAccountsDialog/>

<EmailCustomDialog/>
<Log v-if="trip" />
<MoreInformationDialog  v-if="moreInformationDialog == true"/>

<ShowExpenseReportDialog/>

<AuditTripForwardDialog/>

<AccountsTripForwardDialog/>

</template>


<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import {useTripStore} from '../stores/trips'
import { defineAsyncComponent } from 'vue';

import { useGlobalStore } from '../stores/global';
import {useCustomStore} from '../stores/custom';
import { useAuthStore } from '../stores/auth';
import { useLogStore } from '../stores/log';

import {useToast} from "vue-toast-notification";

import axios from "axios"
const AuditTripForwardDialog = defineAsyncComponent(()=>import("../components/AccountsTripForwardDialog.vue"))
// import AuditTripForwardDialog from '../components/AuditTripForwardDialog.vue';
const AccountsTripForwardDialog = defineAsyncComponent(()=>import("../components/AccountsTripForwardDialog.vue"))
// import AccountsTripForwardDialog from '../components/AccountsTripForwardDialog.vue';


const GiveCustomQuote = defineAsyncComponent(()=>import("../components/Trips/GiveCustomQuote.vue"))
// import GiveCustomQuote from "../components/Trips/GiveCustomQuote.vue"


import { useRequestsStore } from '../stores/request';

const BookDialog = defineAsyncComponent(()=>import('../components/Trips/bookDialog.vue'))
// import BookDialog from '../components/Trips/bookDialog.vue';

const TicketUnBookDialog = defineAsyncComponent(()=>import('../components/Trips/TicketUnBookDialog.vue'))
// import TicketUnBookDialog from '../components/Trips/TicketUnBookDialog.vue';

const TicketConfirmDialog = defineAsyncComponent(()=>import('../components/Trips/TicketConfirmDialog.vue'))
// import TicketConfirmDialog from '../components/Trips/TicketConfirmDialog.vue';

const TicketRevokeDialog = defineAsyncComponent(()=>import("../components/Trips/TicketRevokeDialog.vue"))
// import TicketRevokeDialog from '../components/Trips/TicketRevokeDialog.vue';

const HotelQuotationDialog = defineAsyncComponent(()=>import("../components/Trips/HotelQuotationDialog.vue"))
// import HotelQuotationDialog from '../components/Trips/HotelQuotationDialog.vue';

const HotelBookDialog = defineAsyncComponent(()=>import("../components/trips/HotelBookDialog.vue"))
// import HotelBookDialog from "../components/trips/HotelBookDialog.vue"

const HotelUnBookDialog = defineAsyncComponent(()=>import("../components/Trips/HotelUnBookDialog.vue"))
// import HotelUnBookDialog from '../components/Trips/HotelUnBookDialog.vue';

const HotelConfirmDialog = defineAsyncComponent(()=>import("../components/Trips/HotelConfirmDialog.vue"))
// import HotelConfirmDialog from '../components/Trips/HotelConfirmDialog.vue';

const HotelRevokeDialog = defineAsyncComponent(()=>import("../components/Trips/HotelRevokeDialog.vue"))
// import HotelRevokeDialog from '../components/Trips/HotelRevokeDialog.vue';

const EmailAccountsDialog = defineAsyncComponent(()=>import("../components/Trips/EmailAccountsDialog.vue"))
// import EmailAccountsDialog from '../components/Trips/EmailAccountsDialog.vue';

const EmailCustomDialog = defineAsyncComponent(()=>import("../components/Trips/EmailCustomDialog.vue"))


// import EmailCustomDialog from '../components/Trips/EmailCustomDialog.vue';
import Log from '../components/Trips/Log.vue';
import MoreInformationDialog from '../components/MoreInformationDialog.vue';
import ShareDialogue from '../components/ShareDialogue.vue';
import ShowExpenseReportDialog from '../components/ExpenseReport/ShowExpenseReportDialog.vue';

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
   addOrRemoveTraveler,
   sendToAccounts,
   sendToAccountAndAudit,
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



<style >
.quotation{
  

   overflow-x: auto;
   overflow-y:auto 
   
}


</style>