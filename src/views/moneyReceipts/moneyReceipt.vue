<template>
<div class="h-screen w-screen" >
     <v-container v-if="moneyReceipt" class="mt-10 mb-14   shadow-md shadow-black ">
        <v-row align="center" no-gutters justify="center">Money Requisition</v-row>
        <v-row no-gutters >
            <v-col md="4">
         
                <v-text-field
                    name="name"
                    label="No:"
                    v-model="moneyReceipt.no"
                    class="inline-block"
                ></v-text-field>
            </v-col>
            <v-col md="4" offset="4">
         
         <v-text-field
             name="name"
             label="Date"
            v-model="moneyReceipt.date"
             class="inline-block"
         ></v-text-field>
     </v-col>
        </v-row>




        <v-row no-gutters >
            <v-col md="4">
         
                <v-text-field
                    name="name"
                    label="UNIT"
                     v-model="moneyReceipt.unit"
                    class="inline-block"
                ></v-text-field>
            </v-col>
            <v-col md="4" >
         
         <v-text-field
             name="name"
             label="Advance Money In Hand"
             v-model="moneyReceipt.advanceMoneyInHand"
             class="inline-block"
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
                    class="inline-block"
                ></v-text-field>
            </v-col>

            <v-col md="2" justify="center" items="center" align="center">
                    <span class="text-body-1">Designation</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.designation"
                    class="inline-block"
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
                    class="inline-block"
                ></v-text-field>
            </v-col>

            <v-col md="2" justify="center" items="center" align="center">
                    <span class="text-body-1">(Taka)</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.taka"
                    class="inline-block"
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
                   
                    v-model="moneyReceipt.asAdvanceAgainst"
                    class="inline-block"
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
                   
                    v-model="moneyReceipt.serialNo"
                    class="inline-block"
                ></v-text-field>
            </v-col>
            <v-col md=2>
                <span class="text-body-1">to-day</span>
            </v-col>

        
          
          
        </v-row>

     </v-container>




    
    </div>

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
            <v-row justify="center" align="center" v-if="moneyReceipt.currentHandlerId == user._id && moneyReceipt.supervisorApproved == false && moneyReceipt.processed == false">
                <v-btn class="mr-2 bg-blue-darken-2"  size="large" @click="moneyReceiptSupervisorApprove">
                     Approve
                </v-btn>
                <v-btn size="large"  class="bg-grey-darken-1" @click="moneyReceiptSupervisorReject">
                    Reject
                </v-btn>
            </v-row>
            <v-row justify="center" align="center" v-if="moneyReceipt.currentHandlerId == user._id && moneyReceipt.supervisorApproved == true && moneyReceipt.processed == false">
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
</template>


<script setup>


    

import { useMoneyReceiptStore } from '../../stores/moneyReceiptStore';
    import { useAuthStore } from '../../stores/auth';
    import { storeToRefs } from 'pinia';
    import MoneyReceiptForwardDialog from '../../components/moneyReceiptForwardDialog.vue';

    
    var {user, token} = storeToRefs(useAuthStore())
    var {getMoneyReceipt, moneyReceiptSupervisorApprove,
 moneyReceiptSupervisorReject,
 moneyReceiptForward,
 moneyReceiptBackWard,
 moneyReceiptProcessingComplete,
openMoneyReceiptForwardDialog} = useMoneyReceiptStore();
    
     getMoneyReceipt()
    
    var {moneyReceipt} = storeToRefs(useMoneyReceiptStore())
    
    
    



</script>