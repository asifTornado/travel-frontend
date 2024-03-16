<template>
    <v-dialog
    v-model="revokeDialogue"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to revoke this quotation?
      </v-card-text>
      <v-card-actions class="justify-end text-h5">
        <v-btn color="primary"  @click="revoke">Yes</v-btn>
        <v-btn color="primary"  @click="revokeDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>





</template>









<script setup>
import { useRequestsStore } from '../stores/request';
import { storeToRefs } from 'pinia';


var {revokeDialogue} = storeToRefs(useRequestsStore())

var {revoke} = useRequestsStore()




</script>