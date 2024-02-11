<template>
    <v-dialog v-model="sendExpenseReportDialog" width="100vw" class="ml-10 elevation-10" height="100vh">
        <v-icon class=" hover:cursor-pointer" style="position:absolute; top:0px; right:40px" @click="sendExpenseReportDialog = false" >
            mdi-close
        </v-icon>

        <v-container class=" overflow-y-scroll bg-white ml-10 report elevation-10 pa-10 "  ref="report">
            <v-row class="bg-white">
                <v-col md="11" class="text-center text-h2">
                    Travel Expense Report
                </v-col>
                <v-col>
                   
                </v-col>
            </v-row>
           
             <v-row class="bg-white mb-1 mt-3 pa-5">
                <v-col md="4">
                    <v-text-field   label="Employee Name" variant="solo"  v-model="user.empName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field  label="Employee Id" variant="solo" v-model="user._id"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field  class="" variant="solo" label="Department" v-model="user.department"></v-text-field>
                </v-col>
            </v-row>

            
            <v-row class="border border-solid border-black bg-white ">
                <v-col md="4" class="text-center mt-5">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                   <v-text-field label="Start Date" variant="solo" type="date" v-model="request.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field label="End Date" variant="solo" type="date" v-model="request.endDate"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="bg-white ">
                <v-col md="2" class="text-center font-weight-bold">
                    Date
                </v-col>
                <v-col md="2"  class="text-center font-weight-bold">
                    Expense Type
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    Description
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    Amount(USD)
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    Notes
                </v-col>
            </v-row>

            <v-row v-for="(expense, expenseCounter) in expenses" :key="expenseCounter" class="bg-white">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field density="compact" type="date" v-model="expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2"  class="text-center font-weight-bold">
                     <v-text-field density="compact" type="text" v-model="expenses[expenseCounter].expenseType">
                        
                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea density="compact" rows="1" auto-grow v-model="expenses[expenseCounter].description">
                        
                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field density="compact" v-model="expenses[expenseCounter].amount">
                        
                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea rows="1" density="compact" auto-grow v-model="expenses[expenseCounter].notes">
                        
                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold mt-3">
                     
                        <v-btn color="success" prepend-icon="mdi-plus" class="mr-2" size="small" @click="addExpense(expenseCounter)"></v-btn>
                        <v-btn class="" color="red" prepend-icon="mdi-minus" size="small" @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col>
            </v-row>

<v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="showSendReportProceedDialog = true">Send Report</v-btn>
            </v-col>
</v-row>

</v-container>


</v-dialog>

<ExpenseReportProceedDialog  />



</template>





<script setup>
import { useRequestsStore } from '../../stores/request';
import { storeToRefs } from 'pinia';
import {ref, provide} from "vue"
import ExpenseReportProceedDialog from './ExpenseReportProceedDialog.vue';
import { useUserStore } from '../../stores/users';
import { useAuthStore } from '../../stores/auth';




var showProceedDialog = ref()





var {sendExpenseReportDialog, expenses, expenseReport, request, showSendReportProceedDialog} = storeToRefs(useRequestsStore());
var {addExpense, deleteExpense} = useRequestsStore();
var {user} = storeToRefs(useAuthStore())


console.log("dialog opened")



</script>

<style scoped>







</style>