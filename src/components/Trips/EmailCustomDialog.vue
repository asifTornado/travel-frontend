<template>

    <v-dialog
    v-model="emailDialogCustom"
    width="500px"
    >
    <v-card>
      <v-card-text>
       Chose email recipient 
       <span v-if="whom=='accounts'">from accounts</span>

       <v-container>
              <v-row>
                <v-col md="12">
                  <v-combobox :items="userEmails" label="Email Recipient" v-model="emailRecipient"></v-combobox>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12">
                  <v-autocomplete :items="['air-ticket', 'hotel', 'all']" label="Send What?" v-model="type"></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="emailRequestCustom()">Email</v-btn>
        <v-btn color="primary"  @click="emailDialogCustom = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../../stores/users";
    
    
    var {getUserEmails} = useUserStore()
    
    getUserEmails()

    var {userEmails} = storeToRefs(useUserStore())


    var {emailDialogCustom, emailRecipient, type} = storeToRefs(useTripStore())

    var {emailRequestCustom} = useTripStore()
    
    var {book} = useTripStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    