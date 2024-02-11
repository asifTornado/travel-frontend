<template>

<v-dialog
v-model="dialog"
width="auto"
persistent
>
<v-card>
  <v-card-text>
   Is this the best refundable economy rate ?
  </v-card-text>
  <v-card-actions class="justify-end">
    <v-btn color="primary"  @click="book('Yes')">Yes</v-btn>
    <v-btn color="primary"  @click="book('No')">No</v-btn>
  </v-card-actions>

</v-card>
</v-dialog>

</template>


<script setup>

import { useRequestsStore } from '../stores/request';
import { storeToRefs } from 'pinia';



var {dialog, request} = storeToRefs(useRequestsStore())

var {book} = useRequestsStore()










</script>

