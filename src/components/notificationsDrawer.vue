<template>
  <v-navigation-drawer 
    v-if="notificationCheck"
    app
    right
    width="500"
    
    clipped
  >
    <div class="d-flex flex-row justify-between align-center pa-3 border-bottom border-1 border-black">
      <label class="text-h5 font-weight-bold d-flex flex-row align-center justify-center w-100">Notifications</label>
      <v-icon large @click="notificationCheck = false">mdi-close</v-icon>
    </div>
    <div 
      v-for="(notification, notificationCounter) in notifications"
      :key="notificationCounter"
      class="d-flex flex-column pa-3 border border-solid border-black hover:bg-gray-300 text-black hover:text-white border-bottom border-1 border-grey lighten-3"
    >
      <div v-if="notification.type === 'chat'" @click="getToSource($event, notification)" class="d-flex flex-column hover:cursor-pointer pa-3">
        <div>You have received a message from {{ notification.from.empName }}:</div>
        <div class="font-weight-bold">{{ notification.message }}</div>
        <div class="d-flex flex-row justify-end text-caption pt-2">{{ notification.time }}</div>
      </div>
      <div v-else-if="notification.type === 'mention'" @click="getToSource($event, notification)" class="d-flex flex-column hover:cursor-pointer pa-3">
        <div>You have been mentioned by {{ notification.from.empName }} in a comment</div>
        <div class="d-flex flex-row justify-end text-caption pt-2">{{ notification.time }}</div>
      </div>
      <div v-else @click="getToSource($event, notification)" class="d-flex flex-column hover:cursor-pointer pa-3">
        <div>{{ notification.message }}</div>
        <div class="d-flex flex-row justify-end text-caption pt-2">{{ notification.time }}</div>
      </div>
    
      <div class="w-full flex flex-row justify-end items-center ">

        <div class="w-auto h-auto hover:cursor-pointer bg-red-500 hover:bg-red-800 hover:size-75 p-2 border border-solid border-black text-white"
         @click="deleteNotification(notification)">Delete</div>
      </div>
    </div>
  </v-navigation-drawer>
</template>


<script setup>
import { useGlobalStore } from '../stores/global';
import axios from "axios";
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '../stores/notification';



var router = useRouter();

var {notificationCheck, notifications} = storeToRefs(useNotificationStore())
var {getToSource, deleteNotification} = useNotificationStore()
var globalStore = useGlobalStore();






</script>