<template>
    <v-dialog v-model="showExpenseReportDialog" class="ml-12" persistent>


        <v-container class="bg-white overflow-y-scroll ml-10 " id="report"   ref="report">
            <v-row>
                <v-col md="11" class="text-center text-h2">
                    Travel Expense Report
                </v-col>
                <v-col>
                    <v-chip class="bg-red-darken-1 hover:cursor-pointer" @click="showExpenseReportDialog = false" >
                      Close
                    </v-chip>
                </v-col>
            </v-row>

            <v-row>
                <v-col md="4">
                    <v-text-field  label="Employee Name" readonly variant="solo" v-model="expenseReport.employeeName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field  label="Employee Id" readonly variant="solo" v-model="expenseReport.employeeId"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field  class="text-h5" readonly variant="solo" label="Department" v-model="expenseReport.department"></v-text-field>
                </v-col>
            </v-row>

            <v-row class="border border-solid border-black">
                <v-col md="4" class="text-center mt-3">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                   <v-text-field readonly variant="solo" label="Start Date" type="date" v-model="expenseReport.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly variant="solo" label="End Date" type="date" v-model="expenseReport.endDate"></v-text-field>
                </v-col>
            </v-row>


            <v-row justify="center">
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
                <v-col md="2" class="text-center font-weight-bold">
                    Voucher
                </v-col>
            </v-row>

            <v-row v-for="(expense, expenseCounter) in expenseReport.expenses" :key="expenseCounter" align="center" justify="center">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field readonly variant="solo" type="date" v-model="expenseReport.expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2"  class="text-center font-weight-bold">
                     <v-text-field readonly variant="solo" type="text" v-model="expenseReport.expenses[expenseCounter].expenseType">
                        
                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea readonly variant="solo" rows="1" auto-grow v-model="expenseReport.expenses[expenseCounter].description">
                        
                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field readonly variant="solo" v-model="expenseReport.expenses[expenseCounter].amount">
                        
                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea readonly variant="solo" rows="1" class="text-h6 changed-text"  auto-grow v-model="expenseReport.expenses[expenseCounter].notes">
                        
                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-btn class="bg-grey-darken-1"  @click="showVoucher(expenseCounter, 'show')">View </v-btn>
                </v-col>
             
            </v-row>

<!-- <v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="showSendReportProceedDialog = true">Send Report</v-btn>
            </v-col>
</v-row> -->

</v-container>


</v-dialog>





</template>





<script setup>
import { useAuthStore } from '../../stores/auth';
import { useRequestsStore } from '../../stores/request';
import { storeToRefs } from 'pinia';


var {showExpenseReportDialog, request, expenseReport} = storeToRefs(useRequestsStore());
var {user} = storeToRefs(useAuthStore())
var {getExpenseReport, showVoucher} = useRequestsStore();








</script>