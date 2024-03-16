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
                    v-model="trip.amountDisbursedTickets"
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
                    v-model="trip.ticketsAccountHolderName"
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
                    v-model="trip.ticketsAccountNumber"
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
    import { useTicketQuotationsStore } from '../stores/ticketQuotationStore';
    import { useAuthStore } from '../stores/auth';
    import { useGlobalStore } from '../stores/global';
    import {storeToRefs} from "pinia"
    import { useToast } from 'vue-toast-notification';
    import axios from 'axios'
import { useTripStore } from '../stores/trips';
    
    var toast = useToast()
    var {globalUrl} = storeToRefs(useGlobalStore())
    
    var {ticketQuotations, disburseDialog} = storeToRefs(useTicketQuotationsStore())
    var {trip} = storeToRefs(useTripStore())
    var {user} = storeToRefs(useAuthStore())
    var authStore = useAuthStore()
    
    
    
    
    
    
    
    var disburse = () => {
        debugger
        toast.info("Disbursing Amount Please Wait...")
        var data = new FormData()
        data.append("ticketQuotations", JSON.stringify(trip.value))
        data.append("user", JSON.stringify(user.value))
        data.append("token", authStore.token)
    
        axios.post(globalUrl.value + "ticketQuotationsMoneyDisburse", data).then((result) =>{
            ticketQuotations.value = result.data
            disburseDialog.value = false
            toast.clear()    
            toast.success("Amount Disbursed Successfully")

          
        
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