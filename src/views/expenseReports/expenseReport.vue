<template>
    <div class="w-screen " v-if="expenseReport && expenseReport.submitted == true">


        <v-container class="  bg-white mt-10 report elevation-10 pa-10 " ref="report"
            v-if="expenseReport.submitted == false">
            <v-row class="bg-white">
                <v-col md="11" class="text-center text-h2">
                    Travel Expense Report
                </v-col>
                <v-col>

                </v-col>
            </v-row>

            <v-row class="bg-white mb-1 mt-3 pa-5">
                <v-col md="4">
                    <v-text-field label="Employee Name" variant="outlined"
                        v-model="expenseReport.employeeName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field label="Employee Id" variant="outlined" v-model="expenseReport.employeeId"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field class="" variant="outlined" label="Department"
                        v-model="expenseReport.department"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="border border-solid border-black bg-white ">
                <v-col md="4" class="text-center mt-5">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                    <v-text-field label="Start Date" variant="outlined" type="date"
                        v-model="expenseReport.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field label="End Date" variant="outlined" type="date"
                        v-model="expenseReport.endDate"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="bg-white ">
                <v-col md="2" class="text-center font-weight-bold">
                    Date
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
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

            <v-row v-for="(expense, expenseCounter) in expenseReport.expenses" :key="expenseCounter" class="bg-white">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="outlined" density="compact" type="date"
                        v-model="expenseReport.expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="outlined" density="compact" type="text"
                        v-model="expenseReport.expenses[expenseCounter].expenseType">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea variant="outlined" density="compact" rows="1" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].description">

                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="outlined" density="compact"
                        v-model="expenseReport.expenses[expenseCounter].amount">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea variant="outlined" rows="1" density="compact" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].notes">

                    </v-textarea>
                </v-col>
                <v-col md="1">
                    <v-file-input variant="outlined" density="compact" prepend-icon=""
                        @change="uploadVoucher($event, expenseCounter)"
                        v-if="expenseReport.expenses[expenseCounter].voucherGiven == false">Upload </v-file-input>
                    <v-btn class="bg-grey-darken-1" v-if="expenseReport.expenses[expenseCounter].voucherGiven == true"
                        @click="showVoucher(expenseCounter)">View </v-btn>
                </v-col>
                <v-col md="1" class="text-center font-weight-bold ">

                    <v-btn prepend-icon="mdi-plus" class="bg-blue-darken-2" size="x-small"
                        @click="addExpense(expenseCounter)"></v-btn>
                    <v-btn class="bg-blue-lighten-4" prepend-icon="mdi-minus" size="x-small"
                        @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col>
                <!-- <v-col md="2" class="text-center font-weight-bold mt-3">
                     
                        <v-btn color="success" prepend-icon="mdi-plus" class="mr-2" size="small" @click="addExpense(expenseCounter)"></v-btn>
                        <v-btn class="" color="red" prepend-icon="mdi-minus" size="small" @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col> -->
            </v-row>

            <!-- <v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="showSendReportProceedDialog = true">Send Report</v-btn>
            </v-col>
</v-row> -->

        </v-container>

        <v-container class="  bg-white mt-10 report elevation-10 pa-10 " ref="report"
            v-else-if="expenseReport.submitted == true && expenseReport.travelManagerSubmitted == false">
            <v-row class="bg-white">
                <v-col md="12" class="text-center text-h2">
                    Travel Expense Report
                </v-col>

            </v-row>

            <v-row class="bg-white mb-1 mt-3 pa-5">
                <v-col md="4">
                    <v-text-field readonly label="Employee Name" variant="solo"
                        v-model="expenseReport.employeeName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="Employee Id" variant="solo"
                        v-model="expenseReport.employeeId"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly class="" variant="solo" label="Department"
                        v-model="expenseReport.department"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="border border-solid border-black bg-white ">
                <v-col md="4" class="text-center mt-5">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="Start Date" variant="solo" type="date"
                        v-model="expenseReport.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="End Date" variant="solo" type="date"
                        v-model="expenseReport.endDate"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="bg-white ">
                <v-col md="2" class="text-center font-weight-bold">
                    Date
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
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

            <v-row v-for="(expense, expenseCounter) in expenseReport.expenses" :key="expenseCounter" class="bg-white">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field v-bind:variant="expense.source == 'traveler' ? 'solo' : 'outlined'"
                        v-bind:readonly="expense.source == 'traveler' ? true : false" density="compact" type="date"
                        v-model="expenseReport.expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field v-bind:variant="expense.source == 'traveler' ? 'solo' : 'outlined'"
                        v-bind:readonly="expense.source == 'traveler' ? true : false" density="compact" type="text"
                        v-model="expenseReport.expenses[expenseCounter].expenseType">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea v-bind:variant="expense.source == 'traveler' ? 'solo' : 'outlined'"
                        v-bind:readonly="expense.source == 'traveler' ? true : false" density="compact" rows="1" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].description">

                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field v-bind:variant="expense.source == 'traveler' ? 'solo' : 'outlined'"
                        v-bind:readonly="expense.source == 'traveler' ? true : false" density="compact"
                        v-model="expenseReport.expenses[expenseCounter].amount">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea v-bind:variant="expense.source == 'traveler' ? 'solo' : 'outlined'"
                        v-bind:readonly="expense.source == 'traveler' ? true : false" rows="1" density="compact" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].notes">

                    </v-textarea>
                </v-col>
                <v-col md="1">
                    <v-file-input variant="outlined" density="compact" prepend-icon=""
                        @change="uploadVoucher($event, expenseCounter)"
                        v-if="expenseReport.expenses[expenseCounter].voucherGiven == false">Upload </v-file-input>
                    <v-btn class="bg-grey-darken-1" v-if="expenseReport.expenses[expenseCounter].voucherGiven == true"
                        @click="showVoucher(expenseCounter)">View </v-btn>
                </v-col>
                <v-col md="1" class="text-center font-weight-bold ">

                    <v-btn prepend-icon="mdi-plus" class="bg-blue-darken-2" size="x-small"
                        @click="addExpense(expenseCounter)"></v-btn>
                    <v-btn class="bg-blue-lighten-4" prepend-icon="mdi-minus" size="x-small"
                        @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col>
                <!-- <v-col md="2" class="text-center font-weight-bold mt-3">
                     
                        <v-btn color="success" prepend-icon="mdi-plus" class="mr-2" size="small" @click="addExpense(expenseCounter)"></v-btn>
                        <v-btn class="" color="red" prepend-icon="mdi-minus" size="small" @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col> -->
            </v-row>

            <!-- <v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="showSendReportProceedDialog = true">Send Report</v-btn>
            </v-col>
</v-row> -->

        </v-container>

        <v-container class="  bg-white mt-10 report elevation-10 pa-10 " ref="report"
            v-else-if="expenseReport.submitted == true && expenseReport.travelManagerSubmitted == true">
            <v-row class="bg-white">
                <v-col md="11" class="text-center text-h2">
                    Travel Expense Report
                </v-col>
                <v-col>

                </v-col>
            </v-row>

            <v-row class="bg-white mb-1 mt-3 pa-5">
                <v-col md="4">
                    <v-text-field readonly label="Employee Name" variant="solo"
                        v-model="expenseReport.employeeName"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="Employee Id" variant="solo"
                        v-model="expenseReport.employeeId"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly class="" variant="solo" label="Department"
                        v-model="expenseReport.department"></v-text-field>
                </v-col>
            </v-row>


            <v-row class="border border-solid border-black bg-white ">
                <v-col md="4" class="text-center mt-5">
                    <span class="font-weight-bold text-h6 ">
                        Travel Period
                    </span>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="Start Date" variant="solo" type="date"
                        v-model="expenseReport.startDate"></v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field readonly label="End Date" variant="solo" type="date"
                        v-model="expenseReport.endDate"></v-text-field>
                </v-col>
            </v-row>


          /

            <v-row class="bg-white ">
                <v-col md="2" class="text-center font-weight-bold">
                    Date
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
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

            <v-row v-for="(expense, expenseCounter) in expenseReport.expenses" :key="expenseCounter" class="bg-white">
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="solo" readonly density="compact" type="date"
                        v-model="expenseReport.expenses[expenseCounter].date">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="solo" readonly density="compact" type="text"
                        v-model="expenseReport.expenses[expenseCounter].expenseType">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea variant="solo" readonly density="compact" rows="1" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].description">

                    </v-textarea>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-text-field variant="solo" readonly density="compact"
                        v-model="expenseReport.expenses[expenseCounter].amount">

                    </v-text-field>
                </v-col>
                <v-col md="2" class="text-center font-weight-bold">
                    <v-textarea variant="solo" readonly rows="1" density="compact" auto-grow
                        v-model="expenseReport.expenses[expenseCounter].notes">

                    </v-textarea>
                </v-col>
                <v-col md="2">
                    <v-file-input variant="outlined" density="compact" prepend-icon=""
                        @change="uploadVoucher($event, expenseCounter)"
                        v-if="expenseReport.expenses[expenseCounter].voucherGiven == false">Upload </v-file-input>
                    <v-btn class="bg-grey-darken-1" v-if="expenseReport.expenses[expenseCounter].voucherGiven == true"
                        @click="showVoucher(expenseCounter)">View </v-btn>
                </v-col>
                <!-- <v-col md="1" class="text-center font-weight-bold ">
                     
                     <v-btn  prepend-icon="mdi-plus" class="bg-blue-darken-2" size="x-small" @click="addExpense(expenseCounter)"></v-btn>
                     <v-btn class="bg-blue-lighten-4"  prepend-icon="mdi-minus" size="x-small" @click="deleteExpense(expenseCounter)"></v-btn>
             </v-col> -->
                <!-- <v-col md="2" class="text-center font-weight-bold mt-3">
                     
                        <v-btn color="success" prepend-icon="mdi-plus" class="mr-2" size="small" @click="addExpense(expenseCounter)"></v-btn>
                        <v-btn class="" color="red" prepend-icon="mdi-minus" size="small" @click="deleteExpense(expenseCounter)"></v-btn>
                </v-col> -->
            </v-row>

            <!-- <v-row align="end">
            <v-col offset="8" md="4">
                  <v-btn color="success" @click="showSendReportProceedDialog = true">Send Report</v-btn>
            </v-col>
</v-row> -->

        </v-container>


    </div>

    <div class="w-screen" v-if="expenseReport.disbursed == true">
        <v-container class="mt-10 text-body-1   mb-10  shadow-md shadow-black ">
            <v-row class="text-body-1 ">
               <v-col >
                <span class="text-body-1 font-weight-bold">Amount Disbursed:</span>
                <span class="text-body-1 ">{{ expenseReport.amountDisbursed }}</span>
               </v-col>
               <v-col >
                <span class="text-body-1 font-weight-bold">Account Holder's Name:</span>
                <span class="text-body-1 ">{{ expenseReport.bankAccountHolderName }}</span>
               </v-col>
               <v-col >
                <span class="text-body-1 font-weight-bold">Account Number:</span>
                <span class="text-body-1 ">{{ expenseReport.bankAccountNumber }}</span>
               </v-col>
            </v-row>
        </v-container>

    </div>


    <v-btn class="bg-grey-lighten-4 mt-10" @click="showTripInformation">View Trip Information</v-btn>

    <div class="w-screen">
        <v-container v-if="expenseReport" class="mt-4  m-10 shadow-md shadow-black">
            <v-row justify="center" align="center" class="text-h5 ">


                <v-col md="2" class="text-h5 bg-blue-darken-2">Approvals</v-col>
                <v-col md="10" justify="start" align="start"> <v-chip label
                        v-for="(approval, approvalCounter) in expenseReport.approvals" class="m-1" :key="approvalCounter">
                        {{ approval.empName }}
                    </v-chip></v-col>

            </v-row>


        </v-container>
    </div>

    <div v-if="expenseReport" class="mb-10">
        <v-container class="bg-blue-lighten-5">

            <v-row justify="center" align="center"
                v-if="(user.userType == 'admin' || expenseReport.currentHandlerId == user._id) && expenseReport.supervisorApproved == false && expenseReport.processed == false && expenseReport.travelManagerSubmitted == false && expenseReport.rejected == true">
                <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="resendExpenseReport">
                    Send Report
                </v-btn>

            </v-row>


            <v-row justify="center" align="center"
                v-if="(user.userType == 'admin' || expenseReport.currentHandlerId == user._id) && expenseReport.supervisorApproved == false && expenseReport.processed == false && expenseReport.travelManagerSubmitted == false && expenseReport.rejected == false">
                <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="travelManagerSubmitExpenseReport">
                    Submit
                </v-btn>
                <v-btn size="large" class="bg-grey-darken-1" @click="travelManagerRejectExpenseReport">
                    Sent Back
                </v-btn>
            </v-row>
            <v-row justify="center" align="center"
                v-if="(user.userType == 'admin' || expenseReport.currentHandlerId == user._id) && expenseReport.supervisorApproved == false && expenseReport.processed == false && expenseReport.travelManagerSubmitted == true">
                <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="expenseReportSupervisorApprove">
                    Approve
                </v-btn>
                <v-btn size="large" class="bg-grey-darken-1" @click="expenseReportSupervisorReject">
                    Reject
                </v-btn>
            </v-row>
            <v-row justify="center" align="center"
                v-if="(user.userType == 'admin' || expenseReport.currentHandlerId == user._id) && expenseReport.supervisorApproved == true && expenseReport.processed == false">
                
                <v-btn v-if="expenseReport.disbursed == false" class="mr-2 bg-purple-darken-2" size="large" @click="disburseDialog = true">
                    Disburse
                </v-btn>

                <v-btn class="mr-2 bg-blue-darken-2" size="large" @click="openExpenseReportForwardDialog">
                    Forward
                </v-btn>
                <v-btn size="large" class="bg-grey-darken-1 mr-2" @click="expenseReportBackWard">
                    Reject
                </v-btn>
                <v-btn size="large" class="bg-green-darken-1" @click="expenseReportProcessingComplete">
                    Complete Processing
                </v-btn>
            </v-row>
        </v-container>
    </div>

    <ExpenseReportForwardDialog />
    <ExpenseReportMoneyDisburse/>
  
</template>
    
   


<script setup>




import { useExpenseReportStore } from '../../stores/expenseReport';
import { useAuthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';
import { useRequestsStore } from '../../stores/request';
import ExpenseReportForwardDialog from '../../components/ExpenseReportForwardDialog.vue';
import ExpenseReportMoneyDisburse from '../../components/ExpenseReportMoneyDisburse.vue';


var { user, token } = storeToRefs(useAuthStore())
var { getExpenseReport, expenseReportSupervisorApprove,
    expenseReportSupervisorReject,
    expenseReportForward,
    expenseReportBackWard,
    expenseReportProcessingComplete,
    openExpenseReportForwardDialog,
    travelManagerSubmitExpenseReport,
    travelManagerRejectExpenseReport,
    resendExpenseReport,
    addExpense,
    deleteExpense,
    showVoucher,
    uploadVoucher,
    openDisburseDialog
} = useExpenseReportStore();



getExpenseReport()

var { expenseReport, disburseDialog } = storeToRefs(useExpenseReportStore())


var showTripInformation = () => {
    {
        // Specify the dimensions and position of the new window
        const width = 1000;
        const height = 600;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        var url = `http://localhost:5173/#/travel/tripInformation/${expenseReport.value.requestId}`
        // Open the new window
        window.open(url, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
    }
}





</script>