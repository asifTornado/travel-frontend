<template>

    <v-dialog
    v-model="emailDialogue"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
       Chose email recipient 
       <span v-if="whom=='accounts'">from accounts</span>

       <v-combobox :items="userEmails" v-model="emailRecipient"></v-combobox>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="emailRequest(whom)">Email</v-btn>
        <v-btn color="primary"  @click="emailDialogue = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../stores/users";
    
    
    var {getUserEmails} = useUserStore()
    
    getUserEmails()

    var {userEmails} = storeToRefs(useUserStore())


    var {emailDialogue, emailRecipient, whom} = storeToRefs(useRequestsStore())

    var {emailRequest} = useRequestsStore()
    
    var {book} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    