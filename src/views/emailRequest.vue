<template>
    <div class="w-[100vw] py-[20px]">
    
       
        <div class="sticky top-0 bg-white h-12  flex flex-row justify-end" style="z-index: 99;" v-if="request && request.currentHandler && user && user.userType != 'admin'">
    
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
    
    <v-container grid-list-xs  color="indigo-darken-200" class="border border-solid border-black mb-[20px]">
        <v-row>
            <v-col cols>
    
        
    <v-card v-if="request"
              class=""
              max-width="100%"
              :color="'black'"
              :variant="'outlined'"
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <div class="text-h6 mb-1 bg-blue-500 text-white">
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
                   Mode
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.mode }}
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
    <v-col cols>
    
    
        
    <v-card v-if="request"
              class="px-2px "
              max-width="100%"
              :color="'black'"
              :variant="'outlined'"
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <div class="text-h6 mb-1 bg-blue-500 text-white">
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
                   Department Head
                </v-col>
                <v-col md="6" class="text-left">
                   {{ request.requester.departmentHead.empName }}
                </v-col>
             </v-row>
         
            </v-card>
    
    
    </v-col>
        </v-row>
    </v-container>
    
    <v-container v-if="request && request.messages && request.messages[request.messages.length - 1]" class="border border-black mb-4 p-3">
       <v-row>
          <v-col md="12" class="bg-gray-500 text-white font-bold text-lg" >Latest Message</v-col>
       </v-row>
       <v-row class="bg-blue-500 text-white font-bold">
          <v-col md="3" class="flex flex-row justify-end font-bold">Approval:</v-col>
    
          <v-col md="9"  class="flex flex-row justify-start">{{ request.messages[request.messages.length - 1].status }}</v-col>
         
       </v-row>
       <v-row>
          <v-col md="3" class="flex flex-row justify-end font-bold">Message:</v-col>
          <v-col md="9" class="flex flex-row justify-start">{{ request.messages[request.messages.length - 1].content }}</v-col>
    
       </v-row>
    </v-container>
    
    <v-container grid-list-xs  color="indigo-darken-200" class="border border-solid border-black" v-if="request && request.costItems">
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
    
    
    <v-container class="border border-black border-solid mt-[40px]">
    <v-row>
       <v-col md="12" class="font-bold text-black text-xl">
        Quotations
         
       </v-col>    
    </v-row>
    
    <v-row>
    
        <v-col cols @click="openBookDialogue(quotation)" v-if="request && request.booked == false" v-for="(quotation, quotationCounter) in request.quotations"  @mouseover="hover(quotationCounter)" @mouseleave="moveout(quotationCounter)" :class="{'relative hover:cursor-pointer hover:border-solid hover:border-black hover:border-[20px] hover:bg-emerald-300 border border-solid border-slate-500':user.userType == 'admin'}"  >
          <div class="absolute top-[40px] left-[5px] bg-yellow-500 text-white font-bold text-lg px-1 border border-solid border-black" v-if="quotation.hovered && user.userType == 'admin'">Book</div>     
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.agent.name }}</v-col>
               </v-row>
               <v-row>
            
                  <v-col md="12" >
                  
                             <div v-html="quotation.quotationText"></div>
                                                   
                  </v-col>
               
               </v-row>
              
               <v-row v-if="quotation.booked">
                <v-col md="12">
                  <div class="flex flex-col w-full">
                   <div class="flex flex-row w-full justify-start">
                       <div class="font-bold text-black">Booked</div>
                       
                   </div>
                   <div class="flex flex-row w-full justify-start">
                      <v-btn color="success">Confirm</v-btn>
                   </div>
                
    
                  </div>
                </v-col>
               </v-row>
        </v-col>
    
    
    
        <v-col cols  v-if="request && request.booked == true " v-for="(quotation, quotationCounter) in request.quotations"  class="relative  border border-solid border-slate-500">
       
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.agent.name }}</v-col>
                  <v-col md="12"> <div class="flex flex-row w-full justify-start">
                       <div class="font-bold  bg-yellow-600 text-white border border-solid border-black p-1 mb-[10px]" v-if="request.confirmed == false && quotation.booked == true">Booked</div>
                       <div class="font-bold  bg-green-600 text-white border border-solid border-black p-1 rounded-none" v-if="request.confirmed == true && quotation.confirmed == true">Confirmed</div>
                       
                   </div></v-col>
               </v-row>
               <v-row>
                  <v-col md="12" >
                             <div v-html="quotation.quotationText"></div>                           
                  </v-col>
                
               </v-row>
               
               <v-row v-if="quotation.booked">
                <v-col md="12">
                  <div class="flex flex-col w-full">
                   <!-- <div class="flex flex-row w-full justify-start">
                       <div class="font-bold  bg-yellow-600 text-white border border-solid border-black p-1 mb-[10px]" v-if="request.confirmed == false ">Booked</div>
                       <div class="font-bold  bg-green-600 text-white border border-solid border-black p-1 rounded-none" v-if="request.confirmed == true">Confirmed</div>
                       
                   </div> -->
                   <div class="flex flex-row w-full justify-end" v-if="request.status == 'Seeking Confirmation' && request.confirmed == false"> 
                      <v-btn color="red" class="mr-2 bg-red-500" @click="openunbookDialogue(quotation)">Unbook</v-btn>
                      <v-btn color="success" @click="confirm(quotation)">Confirm</v-btn>
                      
                   </div>
                   <div class="flex flex-row w-full justify-between" v-if="request.status == 'Seeking Invoice' && request.confirmed == true"> 
                      <!-- <v-btn color="success" @click="openunbookDialogue(quotation)">Unbook</v-btn> -->
                      <v-btn color="success" @click="openRevokeDialogue(quotation)">Revoke</v-btn>
                      
                   </div>
                   <!-- <div class="flex flex-row w-full justify-between"  v-if="request.status == 'Seeking Confirmation' && request.confirmed == false"> 
                      <v-btn color="success"  @click="openunbookDialogue(quotation)">Unbook</v-btn>
                      
                      
                   </div> -->
                 
                 
                
    
                  </div>
                </v-col>
               </v-row>
        </v-col>
    
         
        
        
    
    
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
    
    
    <div class="w-full flex flex-row justify-center items-center" >
    
    <div v-if="user.userType == 'admin' && request && request.confirmed == false && request.status != 'Request Rejected'" class="p-3 bg-blue-400 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="overlay = !overlay" >Add Custom Quotation</div>
    </div>
    
    <div class="w-[80vw] ml-[100px] mt-[20px] border border-solid border-black p-3 d-print-none" v-if="request && request.ticketInvoices && request.confirmed">
       <div class="w-full text-xl font-bold">Ticket Documents</div>
    <div class="flex flex-col w-full justify-start items-start pl-[100px] mt-[10px] " >
    
    <div class="text-underline text-blue-500  flex flex-row  font-bold underline hover:cursor-pointer" @click="getInvoice(invoice)" v-for="(invoice, invoiceCounter) in request.ticketInvoices">{{ invoice }}</div> 
    </div>
    
    <div class="flex flex-row w-[100vw] justify-center items-center   mt-[20px] text-black " v-if="request && request.confirmed">
     <div class="flex flex-row justify-center items-center w-[30%]">  <v-file-input
          label="Upload Invoice"
          :clearable="true"
          prepend-icon="mdi-file"
          outlined
          @change="uploadFile($event, 'ticket')"
        
        ></v-file-input></div>
    </div>
    </div>
    
    <v-container v-if="request && request.ticketApprovals.length > 0">
       <v-row class="border-2 border-solid border-black my-3">
          <v-col md="12" class="font-bold text-xl">Ticket Approvers</v-col>
          <v-col md="4" v-for="(approver, approversCounter) in request.ticketApprovals" class="border m-3 border-solid border-black">
            <v-row>
             <v-col md="12">
                 {{ approver.empName }}
             </v-col>
            </v-row>
            <v-row>
             <v-col md="12">
                 {{ approver.designation }}
             </v-col>
            </v-row>
          </v-col>
       </v-row>
    </v-container>
    
    
    
    
    <v-container class="border border-black border-solid mt-[40px]" v-if="request && request.confirmed == true">
    <v-row>
       <v-col md="12" class="font-bold text-black text-xl">
        Hotel Quotations
         
       </v-col>    
    </v-row>
    
    <v-row>
    
        <v-col cols @click="openHotelBookDialogue(quotation)" v-if="request && request.hotelBooked == false" v-for="(quotation, quotationCounter) in request.hotelQuotations"  @mouseover="hotelHover(quotationCounter)" @mouseleave="hotelMoveout(quotationCounter)" :class="{'relative hover:cursor-pointer hover:border-solid hover:border-black hover:border-[20px] hover:bg-emerald-300 border border-solid border-slate-500':user.userType == 'admin'}"  >
          <div class="absolute top-[40px] left-[5px] bg-yellow-500 text-white font-bold text-lg px-1 border border-solid border-black" v-if="quotation.hovered && user.userType == 'admin'">Book</div>     
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.agent.name }}</v-col>
               </v-row>
               <v-row>
            
                  <v-col md="12" >
                   asd
                             <div v-html="quotation.quotationText"></div>
                                                   
                  </v-col>
               
               </v-row>
              
               <v-row v-if="quotation.booked">
                <v-col md="12">
                  <div class="flex flex-col w-full">
                   <div class="flex flex-row w-full justify-start">
                       <div class="font-bold text-black">Booked</div>
                       
                   </div>
                   <div class="flex flex-row w-full justify-start">
                      <v-btn color="success">Confirm</v-btn>
                   </div>
                
    
                  </div>
                </v-col>
               </v-row>
        </v-col>
    
    
    
        <v-col cols  v-if="request && request.hotelBooked == true " v-for="(quotation, quotationCounter) in request.hotelQuotations"  class="relative  border border-solid border-slate-500">
       
          <v-row>
                  <v-col md="12" class="bg-gray-400 font-bold text-xl text-white">{{ quotation.agent.name }}</v-col>
               </v-row>
               <v-row>
                  <v-col md="12" >
                             <div v-html="quotation.quotationText"></div>                           
                  </v-col>
                
               </v-row>
               
               <v-row v-if="quotation.booked">
                <v-col md="12">
                  <div class="flex flex-col w-full">
                   <div class="flex flex-row w-full justify-start">
                       <div class="font-bold  bg-yellow-600 text-white border border-solid border-black p-1 mb-[10px]" v-if="request.hotelConfirmed == false ">Booked</div>
                       <div class="font-bold  bg-green-600 text-white border border-solid border-black p-1 rounded-none" v-if="request.hotelConfirmed == true">Confirmed</div>
                       
                   </div>
                   <div class="flex flex-row w-full justify-end" v-if="request.status == 'Seeking Hotel Confirmation' && request.hotelConfirmed == false"> 
                      <v-btn color="red" class="mr-2" @click="openHotelunbookDialogue(quotation)">Unbook</v-btn>
                      <v-btn color="success" @click="openHotelConfirmDialogue(quotation)">Confirm</v-btn>
                      
                   </div>
                   <div class="flex flex-row w-full justify-between" v-if="request.status == 'Seeking Invoices' && request.hotelConfirmed == true"> 
                      <!-- <v-btn color="success" @click="openunbookDialogue(quotation)">Unbook</v-btn> -->
                      <v-btn color="red" class="mt-2" @click="openHotelRevokeDialogue(quotation)">Revoke</v-btn>
                      
                   </div>
                   <!-- <div class="flex flex-row w-full justify-between"  v-if="request.status == 'Seeking Confirmation' && request.confirmed == false"> 
                      <v-btn color="success"  @click="openunbookDialogue(quotation)">Unbook</v-btn>
                      
                      
                   </div> -->
                 
                 
                
    
                  </div>
                </v-col>
               </v-row>
        </v-col>
    
         
        
        
    
    
    </v-row>
    
    
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
    
    
    
    <div class="w-full flex flex-row justify-center items-center mt-3" >
    <div v-if="(request && user && (user.userType == 'admin' || user.mailAddress == request.travelHandler.mailAddress )) && request.confirmed == true" class="p-3 mr-4 bg-blue-400 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="hotelOverlay = !hotelOverlay" >Add Hotel Quotation</div>
    <div v-if="(request && user && (user.userType == 'admin' || user.mailAddress == request.travelHandler.mailAddress )) && request.confirmed == true" class="p-3 bg-blue-400 text-white font-bold hover:bg-blue-900 hover:text-black hover:cursor-pointer" @click="customHotelOverlay = !customHotelOverlay" >Add Custom Hotel Quotation</div>
    </div>
    
    <div class="w-[80vw] ml-[100px] mt-[20px] d-print-none border border-solid border-black" v-if="request && request.hotelInvoices && request.hotelConfirmed">
       <div class="w-full text-xl font-bold">Hotel Documents</div>
    <div class="flex flex-col w-full justify-start items-start pl-[100px] mt-[10px] " >
    
    <div class="text-underline text-blue-500  flex flex-row  font-bold underline hover:cursor-pointer" @click="getInvoice(invoice)" v-for="(invoice, invoiceCounter) in request.hotelInvoices">{{ invoice }}</div> 
    </div>
    
    <div class="flex flex-row w-[100vw] justify-center items-center   mt-[20px] text-black " v-if="request && request.hotelConfirmed">
     <div class="flex flex-row justify-center items-center w-[30%]">  <v-file-input
          label="Upload Invoice"
          :clearable="true"
          prepend-icon="mdi-file"
          outlined
          @change="uploadFile($event, 'hotel')"
        
        ></v-file-input></div>
    </div>
    </div>
    
    
    
    
    <v-container v-if="request && request.hotelApprovals.length > 0">
       <v-row class="border-2 border-solid border-black my-3">
          <v-col md="12" class="font-bold text-xl">Hotel Approvers</v-col>
          <v-col md="4" v-for="(approver, approversCounter) in request.hotelApprovals" class="border m-3 border-solid border-black">
            <v-row>
             <v-col md="12">
                 {{ approver.empName }}
             </v-col>
            </v-row>
            <v-row>
             <v-col md="12">
                 {{ approver.designation }}
             </v-col>
            </v-row>
          </v-col>
       </v-row>
    </v-container>
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request &&( (request.travelHandler && request.travelHandler.mailAddress == user.mailAddress) || (user.userType == 'admin')) && request.status == 'Seeking Invoices'">
       <v-btn @click="openEmailDialogue">Email To Accounts</v-btn>
    </div>
    
    
    <div class="flex flex-row w-[100vw] mt-[30px] justify-center items-center" v-if="user && request &&( (request.travelHandler && request.travelHandler.mailAddress == user.mailAddress) || (user.userType == 'admin')) && request.status == 'Being Processed'">
       <v-btn @click="complete">Complete Processing</v-btn>
    </div>
    
    
    
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
    
    
    
    
    </template>
    
    
    
    <script setup>
    
    
    import {ref, onMounted} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import { useGlobalStore } from '../stores/global';
    import { useAuthStore } from '../stores/auth';
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
    import HotelRevokeDialogue from '../components/HotelRevokeDialogue.vue';
    import EmailDialogue from '../components/EmailDialogue.vue';
    import HotelEditor from "../components/HotelEditor.vue"
    import DepartmentHeadApproveDialogue from '../components/DepartmentHeadApproveDialogue.vue';
    import SupervisorApproveDialogue from '../components/SupervisorApproveDialogue.vue';
    
    
    var {request, overlay,  customQuoteGiver, customHotelOverlay,
        revokeDialogue, customHotelQuoteGiver, hotelOverlay, hotelConfirmDialogue, customHotelOverlay} = storeToRefs(useRequestsStore())
    var {getEmailRequest, openBookDialogue, openunbookDialogue, openRevokeDialogue, 
        hotelHover, hotelMoveout, openHotelBookDialogue, openApprovalDialogue,
       openHotelunbookDialogue, openHotelConfirmDialogue, openHotelRevokeDialogue, uploadFile, openEmailDialogue,
       addCustomQuote, addCustomHotelQuote, supervisorApprove, departmentHeadApprove, book, confirm, moveout, hover, getInvoice, complete} = useRequestsStore()
    
    var globalStore = useGlobalStore();
    
    
    
    
    var {user} = storeToRefs(useAuthStore())
    
    
    
    
    
    
    
    
    getEmailRequest()
    
    
    
    
    
    
    
    
    
    
    
    </script>