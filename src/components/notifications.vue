<template>
    
    <v-badge
                  
        color="red"
        :content="notifications.length"
        overlap
        :value="value"
        class="hover:cursor-pointer"
        @click="notificationCheck = !notificationCheck"
      >
        <v-icon     color="blue-darken-4">
          mdi-bell
        </v-icon>
      </v-badge>




</template>




<script setup>
import axios from 'axios'
import {useGlobalStore} from '../stores/global'
import {ref, onBeforeMount} from 'vue'
import {useNotificationStore} from '../stores/notification';
import { storeToRefs } from 'pinia';

var {getNotifications} = useNotificationStore()

getNotifications()


var {notifications, notificationCheck} = storeToRefs(useNotificationStore())

    

    





</script>