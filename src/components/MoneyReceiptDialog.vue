<template>


<v-dialog
    v-model="moneyReceiptDialog"
    width="80vw"
    persistent
    >
    <v-card>
      <v-card-text>
     <v-container> 
        <v-row  class="text-h4" no-gutters >Money Requisition</v-row>
        <v-row no-gutters  >
            <!-- <v-col md="4">
         
                <v-text-field
                    name="name"
                    label="No:"
                    v-model="moneyReceipt.no"
                    class="inline-block"
                    variant="underlined"
                    density="compact"
                ></v-text-field>
            </v-col> -->
            <v-col md="4" offset="8">
         
         <v-text-field
            name="name"
            label="Date"
            v-model="moneyReceipt.date"
            class="inline-block"
            variant="underlined"
            density="compact"
            type="date"
         ></v-text-field>
     </v-col>
        </v-row>




        <v-row no-gutters align="center" justify="center" >
            <v-col md="4">
         
                <v-text-field
                    name="name"
                    label="UNIT"
                     v-model="moneyReceipt.unit"
                    class=""
                    variant="underlined"
                    density="compact"
                ></v-text-field>
            </v-col>
            <v-col md="4" offset="4" >
         
         <v-text-field
             name="name"
             label="Advance Money In Hand"
             v-model="moneyReceipt.advanceMoneyInHand"
             class="inline-block"
             variant="underlined"
                    density="compact"
         ></v-text-field>
     </v-col>
        </v-row>


        <v-row no-gutters   align="center" justify="center">
            <v-col md="1" justify="center" items="center" align="center">
                    <span class="text-h5">I</span>
            </v-col>
            <v-col md="4">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.i"
                    class="inline-block"
                    variant="underlined"
                    density="compact"
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
                    variant="underlined"
                    density="compact"
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
                    variant="underlined"
                    density="compact"
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
                    variant="underlined"
                    density="compact"
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
                    variant="underlined"
                    density="compact"
                    rows="1"
                ></v-textarea>
            </v-col>

        
          
          
        </v-row>


        <!-- <v-row  no-gutters  align="center">
            <v-col md="7" justify="center" items="center" align="center">
                    <span class="text-body-1">These Purposes are Entered in Movement Register at Serial No:</span>
            </v-col>
            <v-col md="3">
         
                <v-text-field
                    name="name"
                   
                    v-model="moneyReceipt.serialNo"
                    variant="underlined"
                    density="compact"
                    class="inline-block"
                ></v-text-field>
            </v-col>
            <v-col md=2>
                <span class="text-body-1 ml-2">to-day</span>
            </v-col>

        
          
          
        </v-row> -->

     </v-container>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="submitReceipt">Submit</v-btn>
        <v-btn color="primary"  @click="moneyReceiptDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>




</template>




<script setup>
import {useMoneyReceiptStore} from "../stores/moneyReceiptStore"
import { storeToRefs } from "pinia";


var {moneyReceiptDialog, moneyReceipt} = storeToRefs(useMoneyReceiptStore())
var {submitReceipt} = useMoneyReceiptStore()








</script>


<style scoped>

.v-text-field{
    display: inline;
}


.v-row{
    margin:0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

</style>