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
                v-model="moneyReceipt.amountDisbursed"
                >
           <template v-slot:label>
               <span class="text-caption" style="color:black">Disburse Amount</span>
           </template>
          </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
              
                label="Account Holder's Name"
                id="id"
                variant="outlined"
                v-model="moneyReceipt.bankAccountHolderName"
            >
            <template v-slot:label>
               <span class="text-caption" style="color:black">Account Holder's Name</span>
           </template>
        
        </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
             
                label="Account Number"
             
                variant="outlined"
                v-model="moneyReceipt.bankAccountNumber"
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
import { useMoneyReceiptStore } from '../stores/moneyReceiptStore';
import { useGlobalStore } from '../stores/global';
import {storeToRefs} from "pinia"
import { useToast } from 'vue-toast-notification';
import { useAuthStore } from '../stores/auth';
import axios from 'axios'

var toast = useToast()
var {globalUrl} = storeToRefs(useGlobalStore())
var authStore = useAuthStore()
var {moneyReceipt, disburseDialog} = storeToRefs(useMoneyReceiptStore())








var disburse = () => {
    debugger
    toast.info("Disbursing Amount Please Wait...")
    var data = new FormData()
    data.append("moneyReceipt", JSON.stringify(moneyReceipt.value))
    data.append("user", JSON.stringify(authStore.user))
    data.append("serial", moneyReceipt.serialNo)

    axios.post(globalUrl.value + "moneyReceiptMoneyDisburse", data).then((result) =>{
        moneyReceipt.value = result.data
        toast.clear()    
        toast.success("Amount Disbursed Successfully")
        disburseDialog.value = false
    
    }).catch((error)=>{
        toast.clear()
        toast.warning(error)
    })
}



</script>


<style scoped>

.v-text-field label{
    font-size: 10px;
}




</style>