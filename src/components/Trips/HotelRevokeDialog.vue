<template>
    <v-dialog
    v-model="hotelRevokeDialog"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to revoke this hotel quotation?
      </v-card-text>
      <v-card-actions class="justify-end text-h5">
        <v-btn color="primary"  @click="THotelRevoke">Yes</v-btn>
        <v-btn color="primary"  @click="hotelRevokeDialog = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>





</template>









<script setup>
import { useTripStore } from '../../stores/trips';
import { storeToRefs } from 'pinia';


var {hotelRevokeDialog} = storeToRefs(useTripStore())

var {THotelRevoke} = useTripStore()




</script>