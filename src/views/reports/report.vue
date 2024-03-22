<template>

<div class="h-screen w-screen bg-blue-500">

<div class="h-auto pb-[200px] w-screen bg-blue-50  flex flex-col mt-[50px] items-center" v-if="reportStore.report">

    <div class="w-[90vw] h-auto grid grid-cols-8 grid-rows-6 gap-1 bg-white">
        <div class="col-span-8 mb-[20px] text-xl font-bold bg-blue-500 text-white p-1">
            Budget Information       </div>
        <div class="col-span-2 grid grid-cols-2 grid-rows-1 ">
            <div class="font-bold text-left pl-5">Trip Id:</div>
            <div class="text-left">{{ reportStore.report.tripId }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Subject:</div>
            <div class="text-left">{{ reportStore.report.subject }}</div>
        </div>


        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Brand:</div>
            <div class="text-left">{{ reportStore.report.brand }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Destination:</div>
            <div class="text-left">{{ reportStore.report.destination }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left pl-5">Departure Date:</div>
            <div class="text-left">{{ reportStore.report.departure_date }}</div>
        </div>


        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Arrival Date:</div>
            <div class="text-left">{{ reportStore.report.arrival_date }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Number of Days:</div>
            <div class="text-left">{{ reportStore.report.numberOfDays }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Number of Travelers:</div>
            <div class="text-left">{{ reportStore.report.numberOfTravelers }}</div>
        </div>


        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left pl-5">Air Ticket Budget:</div>
            <div class="text-left">{{ reportStore.report.airTicketBudget }}</div>
        </div>


        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Hotel Budget:</div>
            <div class="text-left">{{ reportStore.report.hotelBudget }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Total Booking Cost:</div>
            <div class="text-left">{{ reportStore.report.totalBookingCost }}</div>
        </div>


        
        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Transport Expense:</div>
            <div class="text-left">{{ reportStore.report.transportExpense }}</div>
        </div>

        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left pl-5">Incidental Expense:</div>
            <div class="text-left">{{ reportStore.report.incidentalExpense }}</div>
        </div>


        
        <div class="col-span-2 grid grid-cols-2 grid-rows-1">
            <div class="font-bold text-left">Total Trip Budget:</div>
            <div class="text-left">{{ reportStore.report.totalTripBudget }}</div>
        </div>
        



       <div class="justify-center align-middle items-center col-span-8 row-span-1 grid grid-cols-6 grid-rows-1 border border-solid border-black text-black">

        <div class="text-left pl-5 font-bold">
            Budgeted Total Cost:
        </div>
        <div>
            {{reportStore.report.totalTripBudget}}
        </div>


        <div class="font-bold">
            Actual Total Cost:
        </div>
        <div>
            {{reportStore.getActualCost}}
        </div>


        <div class="font-bold">
            Difference:
        </div>
        <div >
            <span v-if="reportStore.difference > 0" class="text-green-500">{{reportStore.difference}}</span>
            <span v-else="reportStore.difference < 0" class="text-red-500">{{reportStore.difference}}</span>
        </div>
              
       </div>





    </div>

    <div  class="mt-[5vh] w-[90vw] h-[70vh] grid grid-cols-4 grid-rows-8 gap-1 bg-white" v-for="(request, requestCounter) in reportStore.report.requests" :key="requestCounter">
        <div class="col-span-4 row-start-1 mb-[20px] text-xl font-bold bg-blue-500 text-white p-1">
            {{request.requester.empName}}
        </div> 

        <div class="col-start-2 col-span-3 font-bold  row-start-2 grid grid-cols-3 grid-rows-1">
            <div class="col-start-1 row-start-2 font-bold text-lg">
                Budgeted
            </div>
            <div class="col-start-2 row-start-2 font-bold text-lg">
              Actual
           </div>
           <div class="col-start-3 row-start-2 font-bold text-lg">
              Difference
           </div>

        </div>
      

     <div class="col-start-1 row-start-2">
        
     </div>


     <div class="col-start-1 row-start-3 mt-[20px] text-right font-bold">
        Air Ticket Budget
     </div>

     <div class="col-start-1 row-start-4 mt-[20px] text-right font-bold">
        Hotel Budget
     </div>

     <div class="col-start-1 row-start-5 mt-[20px] text-right font-bold">
       Transport Expense
     </div>

     <div class="col-start-1 row-start-6 mt-[20px] text-right font-bold">
        Incidental Expense
      </div>
      

      <div class="col-start-1 row-start-7 mt-[20px] text-right font-bold">
        Miscellaneous Expense
      </div>

      <div class="col-start-1 row-start-8 mt-[20px] text-right font-bold">
        Total Expense
      </div>





      <!-- Budgeted Values  -->

      <div class="col-start-2 row-start-3 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].airTicket}}


     </div>

     <div class="col-start-2 row-start-4 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].hotel}}
     </div>

     <div class="col-start-2 row-start-5 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].transport}}
     </div>

     <div class="col-start-2 row-start-6 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].incidental}}
      </div>
      

      <div class="col-start-2 row-start-7 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].miscellaneuous}}
      </div>

      <div class="col-start-2 row-start-8 mt-[20px] ">
        {{reportStore.report.requestReportsBudgeted[requestCounter].airTicket +  reportStore.report.requestReportsBudgeted[requestCounter].hotel + reportStore.report.requestReportsBudgeted[requestCounter].transport + reportStore.report.requestReportsBudgeted[requestCounter].incidental +  reportStore.report.requestReportsBudgeted[requestCounter].miscellaneuous}}
      </div>



      <!-- Actual values -->

      <div class="col-start-3 row-start-3 mt-[20px]">
        {{reportStore.report.requestReportsActual[requestCounter].airTicket}}


     </div>

     <div class="col-start-3 row-start-4 mt-[20px]">
        {{reportStore.report.requestReportsActual[requestCounter].hotel}}
     </div>

     <div class="col-start-3 row-start-5 mt-[20px]">
        {{reportStore.report.requestReportsActual[requestCounter].transport}}
     </div>

     <div class="col-start-3 row-start-6 mt-[20px]">
        {{reportStore.report.requestReportsActual[requestCounter].incidental}}
      </div>
      

      <div class="col-start-3 row-start-7 mt-[20px]">
        {{reportStore.report.requestReportsActual[requestCounter].miscellaneuous}}
      </div>

      <div class="col-start-3 row-start-8 mt-[20px] ">
        {{reportStore.report.requestReportsActual[requestCounter].airTicket +  reportStore.report.requestReportsActual[requestCounter].hotel + reportStore.report.requestReportsActual[requestCounter].transport + reportStore.report.requestReportsActual[requestCounter].incidental +  reportStore.report.requestReportsActual[requestCounter].miscellaneuous}}
      </div>


      <!-- Differences -->


      <div class="col-start-4 row-start-3 mt-[20px]">
       {{reportStore.report.requestReportsBudgeted[requestCounter].airTicket - reportStore.report.requestReportsActual[requestCounter].airTicket}} 


     </div>

     <div class="col-start-4 row-start-4 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].hotel - reportStore.report.requestReportsActual[requestCounter].hotel}} 
     </div>

     <div class="col-start-4 row-start-5 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].transport - reportStore.report.requestReportsActual[requestCounter].transport}} 
     </div>

     <div class="col-start-4 row-start-6 mt-[20px]">
        {{reportStore.report.requestReportsBudgeted[requestCounter].incidental - reportStore.report.requestReportsActual[requestCounter].incidental}} 
      </div>
      

      <div class="col-start-4 row-start-7 mt-[20px]">

        {{reportStore.report.requestReportsBudgeted[requestCounter].miscellaneuous - reportStore.report.requestReportsActual[requestCounter].miscellaneuous}} 

      </div>

      <div class="col-start-4 row-start-8 mt-[20px] ">
        {{
            (reportStore.report.requestReportsBudgeted[requestCounter].airTicket +  reportStore.report.requestReportsBudgeted[requestCounter].hotel + reportStore.report.requestReportsBudgeted[requestCounter].transport + reportStore.report.requestReportsBudgeted[requestCounter].incidental +  reportStore.report.requestReportsBudgeted[requestCounter].miscellaneuous)
            -
            (reportStore.report.requestReportsActual[requestCounter].airTicket +  reportStore.report.requestReportsActual[requestCounter].hotel + reportStore.report.requestReportsActual[requestCounter].transport + reportStore.report.requestReportsActual[requestCounter].incidental +  reportStore.report.requestReportsActual[requestCounter].miscellaneuous)
        }}
      </div>




      
     
     



    </div>

</div>




</div>

</template>


<script setup>
import {onMounted} from "vue";
import {useReportStore} from "../../stores/report";


var reportStore = useReportStore()
onMounted(()=>{
    reportStore.getReport()
})








</script>