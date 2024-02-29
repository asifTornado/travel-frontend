<template>

<v-dialog
    v-model="disburseDialog"
    width="50vw"
    persistent
    >
    <v-card>
      <v-card-text>
      <v-row>
        <v-col>
            <v-text-field
             
                variant="outlined"
                v-model="expenseReport.amountDisbursed"
                >
           <template v-slot:label>
               <span class="text-caption" style="color:black">Disburse Amount</span>
           </template>
          </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
              
          
                variant="outlined"
                v-model="expenseReport.bankAccountHolderName"
            >
            <template v-slot:label>
               <span class="text-caption" style="color:black">Account Holder's Name</span>
           </template>
        
        </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
             
              
             
                variant="outlined"
                v-model="expenseReport.bankAccountNumber"
            >
            <template v-slot:label>
               <span class="text-caption" style="color:black">Account Number</span>
           </template>
        
        </v-text-field>
        </v-col>
      </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="disburse">Disburse</v-btn>
        <v-btn color="primary"  @click="disburseDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>



</template>


<script setup>
import {useExpenseReportStore} from '../stores/expenseReport'
import { useGlobalStore } from '../stores/global';
import {storeToRefs} from "pinia"
import { useToast } from 'vue-toast-notification';
import axios from "axios";


var toast = useToast()
var {expenseReport, disburseDialog} = storeToRefs(useExpenseReportStore())
var {globalUrl} = storeToRefs(useGlobalStore())

var disburse = () => {
    debugger
    toast.info("Disbursing Amount Please Wait...")
    var data = new FormData()
    data.append("expenseReport", JSON.stringify(expenseReport.value))

    axios.post(globalUrl.value + "expenseReportMoneyDisburse", data).then((result) =>{
        expenseReport.value = result.data
        toast.clear()    
        toast.success("Amount Disbursed Successfully")
        disburseDialog.value = false
    
    }).catch((error)=>{
        toast.clear()
        toast.warning(error)
    })
}









</script>