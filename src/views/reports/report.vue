<template>

<div class="h-screen w-screen ]">

<div class="h-full w-full  flex flex-col mt-[50px] items-center" v-if="reportStore.report">

    <div class="w-[90vw] h-auto grid grid-cols-8 grid-rows-6 gap-1 bg-white">
        <div class="col-span-8 mb-[20px] text-xl font-bold bg-blue-500 text-white p-1">
            Budget Information
        </div>
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
        



       <div class="col-span-8 row-span-1 grid grid-cols-6 grid-rows-1">

        <div>
            Budgeted Total Cost
        </div>
        <div>
            {{reportStore.report.totalTripBudget}}
        </div>
              
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