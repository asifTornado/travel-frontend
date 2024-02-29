<template>
<div class=" w-screen " >
     <v-container v-if="moneyReceipt" class="mt-10   mb-10  shadow-md shadow-black ">
        <v-row align="center" no-gutters justify="center" class="text-h5">Money Requisition</v-row>
        <v-row no-gutters>
            <v-col md="4" >
         
                <v-text-field
                    name="name"
                    label="No:"
                    v-bind:readonly="checkIfEditable()"
                    v-model="moneyReceipt._id"
                    class="inline-block"
                    density="compact"
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                >
            
            </v-text-field>
            
        </v-col>
            <v-col md="4" offset="4">
         
         <v-text-field
             name="name"
             label="Date"
            v-model="moneyReceipt.date"
            v-bind:readonly="checkIfEditable()"
             class="inline-block"
             density="compact"
           
            v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
         ></v-text-field>
     </v-col>
        </v-row>




        <v-row no-gutters >
            <v-col md="4" offset="1">
         
                <v-text-field
                    name="name"
                    label="UNIT"
                     v-model="moneyReceipt.unit"
                     v-bind:readonly="checkIfEditable()"
                    class="inline-block"
                    density="compact"
                
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-text-field>
            </v-col>
            <v-col md="4" offset="1">
         
         <v-text-field
             name="name"
             label="Advance Money In Hand"
             v-model="moneyReceipt.advanceMoneyInHand"
             v-bind:readonly="checkIfEditable()"
             class="inline-block"
             density="compact"
             
             v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
         ></v-text-field>
     </v-col>
        </v-row>


        <v-row no-gutters   align="center">
            <v-col md="1" justify="center" items="center" align="center">
                    <span class="text-h5">I</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.i"
                    v-bind:readonly="checkIfEditable()"
                    class="inline-block"
                    density="compact"
                    
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-text-field>
            </v-col>

            <v-col md="2" justify="center" items="center" align="center">
                    <span class="text-body-1">Designation</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.designation"
                    v-bind:readonly="checkIfEditable()"
                    class="inline-block"
                    density="compact"
                    
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-text-field>
            </v-col>
          
          
        </v-row>


     
        <v-row no-gutters   align="center">
            <v-col md="3" justify="center" items="center" align="center">
                    <span class="text-body-1">Required Taka</span>
            </v-col>
            <v-col md="3">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.requiredTK"
                    v-bind:readonly="checkIfEditable()"
                    class="inline-block"
                    density="compact"
                    
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-text-field>
            </v-col>

            <v-col md="2" justify="center" items="center" align="center">
                    <span class="text-body-1">(Taka)</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.taka"
                    v-bind:readonly="checkIfEditable()"
                    class="inline-block"
                    density="compact"
                    
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-text-field>
            </v-col>
          
          
        </v-row>


        
        <v-row  no-gutters  align="center">
            <v-col md="3" justify="center" items="center" align="center">
                    <span class="text-body-1">As Advance Against</span>
            </v-col>
            <v-col md="7">
         
                <v-textarea
                    name="name"
                    v-bind:readonly="checkIfEditable()"
                    v-model="moneyReceipt.asAdvanceAgainst"
                    density="compact"
                    
                    class="inline-block"
                    rows="1"
                    v-bind:variant="checkIfEditable() ? 'solo':'underlined'"
                ></v-textarea>
            </v-col>

        
          
          
        </v-row>


        <v-row  no-gutters  align="center">
            <v-col md="7" justify="center" items="center" align="center">
                    <span class="text-body-1">These Purposes are Entered in Movement Register at Serial No:</span>
            </v-col>
            <v-col md="3">
         
                <v-text-field
                    name="name"
                    v-bind:readonly="checkIfAccounts() ? false : true"
                    
                    density="compact"
                    v-model="moneyReceipt.serialNo"
                    class="inline-block"
                    v-bind:variant="checkIfAccounts() ? 'outlined':'solo'"
                ></v-text-field>
            </v-col>
            <v-col md=2>
                <span class="text-body-1">to-day</span>
            </v-col>

        
          
          
        </v-row>

     </v-container>




    
    </div>


    <div class="w-screen" v-if="moneyReceipt.disbursed == true">
        <v-container class="mt-10 text-body-1   mb-10  shadow-md shadow-black ">
            <v-row class="text-body-1 ">
               <v-col >
                <span class="text-body-1 font-weight-bold">Amount Disbursed:</span>
                <span class="text-body-1 ">{{ moneyReceipt.amountDisbursed }}</span>
               </v-col>
               <v-col >
                <span class="text-body-1 font-weight-bold">Account Holder's Name:</span>
                <span class="text-body-1 ">{{ moneyReceipt.bankAccountHolderName }}</span>
               </v-col>
               <v-col >
                <span class="text-body-1 font-weight-bold">Account Number:</span>
                <span class="text-body-1 ">{{ moneyReceipt.bankAccountNumber }}</span>
               </v-col>
            </v-row>
        </v-container>

    </div>

    <v-btn class="bg-grey-lighten-4"  @click="showTripInformation">View Trip Information</v-btn>

    <div class="w-screen">
    <v-container v-if="moneyReceipt" class="mt-4  m-10 shadow-md shadow-black">
        <v-row justify="center" align="center" class="text-h5 ">
            
            
        <v-col md="2" class="text-h5 bg-blue-darken-2">Approvals</v-col>    
        <v-col md="10" justify="start" align="start">     <v-chip label v-for="(approval, approvalCounter) in moneyReceipt.approvals" class="m-1" :key="approvalCounter">
                {{ approval.empName }}
            </v-chip></v-col>
        
        </v-row>
      

     </v-container>
    </div>

    <div v-if="moneyReceipt" class="mb-10">
        <v-containr>
            <v-row justify="center" align="center" v-if="moneyReceipt.currentHandlerId == user._id && moneyReceipt.supervisorApproved == false && moneyReceipt.processed == false && moneyReceipt.rejected == true">
                <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="moneyReceiptResend">
                    Resend
                </v-btn>
            
            </v-row>
            <v-row justify="center" align="center" v-if="moneyReceipt.currentHandlerId == user._id && moneyReceipt.supervisorApproved == false && moneyReceipt.processed == false && moneyReceipt.rejected == false">
                <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="moneyReceiptSupervisorApprove">
                     Approve
                </v-btn>
                <v-btn size="large"  class="bg-grey-darken-1" @click="moneyReceiptSupervisorReject">
                    Reject
                </v-btn>
            </v-row>
            <v-row justify="center" align="center" v-if="moneyReceipt.currentHandlerId == user._id && moneyReceipt.supervisorApproved == true && moneyReceipt.processed == false">
                <v-btn class="mr-2 bg-purple-darken-2" v-if="moneyReceipt.disbursed == false"  size="large" @click="disburseDialog = true">
                     Disburse Money
                </v-btn>
                <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="openMoneyReceiptForwardDialog">
                     Forward
                </v-btn>
                <v-btn size="large"  class="bg-grey-darken-1 mr-2" @click="moneyReceiptBackWard">
                    Reject
                </v-btn>
                <v-btn size="large" class="bg-green-darken-1" @click="moneyReceiptProcessingComplete">
                   Complete Processing
                </v-btn>
            </v-row>
        </v-containr>
    </div>

    <MoneyReceiptForwardDialog/>
    <MoneyReceiptMoneyDisburse/>
</template>


<script setup>


    

import { useMoneyReceiptStore } from '../../stores/moneyReceiptStore';
import { useAuthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';
import MoneyReceiptForwardDialog from '../../components/moneyReceiptForwardDialog.vue';
import MoneyReceiptMoneyDisburse from '../../components/MoneyReceiptMoneyDisburse.vue';

    
    var {user, token} = storeToRefs(useAuthStore())
    var {
         getMoneyReceipt, 
         moneyReceiptSupervisorApprove,
         moneyReceiptSupervisorReject,
         moneyReceiptForward,
         moneyReceiptBackWard,
         moneyReceiptProcessingComplete,
         openMoneyReceiptForwardDialog,
         checkIfEditable,
         moneyReceiptResend
        } = useMoneyReceiptStore();


    
     getMoneyReceipt()
    
    var {moneyReceipt, disburseDialog} = storeToRefs(useMoneyReceiptStore())
    var checkIfAccounts = () => moneyReceipt.value.currentHandlerId == user.value._id && moneyReceipt.value.supervisorApproved == true && moneyReceipt.value.processed == false
    

    var showTripInformation = () => {
        {
      // Specify the dimensions and position of the new window
      const width = 1000;
      const height = 600;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      var url = `http://localhost:5173/#/travel/tripInformation/${moneyReceipt.value.requestId}`
      // Open the new window
      window.open(url, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
    }
    }
    



</script>