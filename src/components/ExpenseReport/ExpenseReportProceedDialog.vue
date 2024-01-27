<template>
<v-dialog v-model="showSendReportProceedDialog" width="50vw">

<v-container class="bg-white pa-3">
<v-row justify="center">
    <v-col md="12" class="text-center font-weight-bold">Select Whom to Send From Accounts</v-col>
</v-row>

<v-row justify="center">
    <v-combobox
  label="User Email"
  :items="userEmails"
  v-model="emailRecipient"
></v-combobox>

</v-row>
<v-row>
    
<v-spacer></v-spacer>
    
    <v-col md="4">
          <v-btn color="blue-darken-2" @click="sendExpenseReport()">
              Yes
          </v-btn>
          <v-btn color="gray-lighten-2" @click="showSendReportProceedDialog = false">
             Cancel
          </v-btn>
    </v-col>
</v-row>




</v-container>






</v-dialog>

</template>


<script setup>
import {ref, defineProps, inject} from 'vue';
import { useRequestsStore } from '../../stores/request';
import {useUserStore} from '../../stores/users';
import { storeToRefs } from 'pinia';

var {showSendReportProceedDialog, emailRecipient} = storeToRefs(useRequestsStore())

var {sendExpenseReport} = useRequestsStore();

var {getUserEmails} = useUserStore()

getUserEmails()


var {userEmails} = storeToRefs(useUserStore());








</script>