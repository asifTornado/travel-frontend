<template>
    <v-dialog v-model="sendExpenseReportDialog"  width="80vw" class="dialog"  height="100vh">
        <v-icon class=" hover:cursor-pointer" style="position:absolute; font-weight: bold; top:5px; right:5px" @click="sendExpenseReportDialog = false" >
            mdi-close
        </v-icon>

        <v-container class="container overflow-y-scroll bg-white ml-3  report elevation-10   "  ref="report">
            <v-row class="bg-white">
                <v-col md="11" class="text-center text-h2">
                    Travel Expense Report
                </v-col>
                <v-col>
                   
                </v-col>
            </v-row>
           
             <v-row class="bg-white  ">
                <v-col md="4">
                    <v-text-field  density="compact"  label="Employee Name" variant="outlined"  v-model="user.empName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field density="compact"  label="Employee Id" variant="outlined" v-model="user._id"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field density="compact"  class="" variant="outlined" label="Department" v-model="user.department"></v-text-field>
                </v-col>
            </v-row>

            
            <v-row class="border border-solid border-black bg-white ">
                <v-col md="4" class="text-center ">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                   <v-text-field label="Start Date" variant="outlined" density="compact" type="date" v-model="request.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field label="End Date" variant="outlined" density="compact" type="date" v-model="request.endDate"></v-text-field>
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
                <v-col md="1" class="text-center font-weight-bold">
                    Voucher
                </v-col>
            </v-row>

        

            <v-row v-for="(expense, expenseCounter) in expenses" :key="expenseCounter" class="bg-white">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field density="compact" type="date" v-model="expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2"  class="text-center font-weight-bold">
                     <v-combobox density="compact" type="text" v-model="expenses[expenseCounter].expenseType" :items="helperStore.expenseTypes">
                        
                     </v-combobox>
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
                <v-col md="1">
                       <v-file-input variant="outlined" density="compact" prepend-icon=""  @change="uploadVoucher($event, expenseCounter)" v-if="expenses[expenseCounter].voucherGiven == false">Upload </v-file-input>
                       <v-btn class="bg-grey-darken-1" v-if="expenses[expenseCounter].voucherGiven == true" @click="showVoucher(expenseCounter)">View </v-btn>
                </v-col>
                <v-col md="1" class="font-weight-bold ">
                     
                        <v-btn class="bg-blue-darken-2 button-2"  size="x-small" @click="addExpense(expenseCounter)">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-btn class="bg-blue-lighten-4 button-2"  size="x-small" @click="deleteExpense(expenseCounter)">
                        <v-icon>
                            mdi-minus
                        </v-icon>
                        </v-btn>
                </v-col>
            </v-row>




<v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="sendExpenseReport">Send Report</v-btn>
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
import {useHelperStore} from "../../stores/helper";



var helperStore = useHelperStore()

var showProceedDialog = ref()





var {sendExpenseReportDialog, expenses, expenseReport, request, showSendReportProceedDialog} = storeToRefs(useRequestsStore());
var {addExpense, deleteExpense, sendExpenseReport, uploadVoucher, showVoucher} = useRequestsStore();
var {user} = storeToRefs(useAuthStore())


console.log("dialog opened")



</script>

<style scoped>
.container{
    background-color: red!;
    border-radius: 2px;
    
}


.button{
    border-radius: 0px!;
}




</style>