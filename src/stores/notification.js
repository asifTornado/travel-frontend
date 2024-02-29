import { defineStore, storeToRefs } from 'pinia'
import {Events, eventsMap} from './events'
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';

import { useAuthStore } from './auth';
import { useGlobalStore } from './global';


import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'



export const useNotificationStore = defineStore("notification", () => {
     

    var notificationCheck = ref(false)
    var notifications = ref([])
    var {user} = storeToRefs(useAuthStore())
    var {globalUrl} = storeToRefs(useGlobalStore())
    var router = useRouter()
   





    function getToSource(event, notification){
                 debugger
               console.log(notification.event)
               console.log(eventsMap)

               
               if(notification.type == "unapproved"){

                router.push("/travel/unapproved-request/" + notification.sourceId)

               }else if(notification.type == "moneyReceipt"){

                router.push("/travel/moneyReceipt/" + notification.sourceId)

               }else if(notification.type == "expenseReport"){

                router.push("/travel/expenseReport/" + notification.sourceId)

               }else{

                router.push("/travel/showRequest/" + notification.sourceId)

               }
                    
                     
      }


      function deleteNotification(notification){

           var id = notification._id;

           var data = new FormData();
           data.append("id", id)

           axios.post(globalUrl.value + "deleteNotification", data).then((result) =>{
            
            notifications.value = notifications.value.filter((notification) => notification._id != id)


           }).catch((error)=>console.log(error))

      }



      
      
      
      
      
      
      function getNotifications(){
                 
                 
                 var data = new FormData();
              
                 data.append("user", JSON.stringify(user.value))
                 console.log("from get notifications")
              
                 axios.post(globalUrl.value + 'getNotifications', data).then((result) =>{ 
               
                 console.log("these are the data");
                 console.log(result.data)
                 console.log("this are the notifications")
                 notifications.value = result.data
                  console.log(notifications)
             
             }).catch((error)=>console.log(error))
               };
      
    


        function showNotifications(){
                // console.log("from inside show notifications")
            getNotifications();
            notificationCheck.value = !notificationCheck.value
            }


    return {
        notificationCheck,
        notifications,
        showNotifications,
        getNotifications,
        getToSource,
        deleteNotification
    }
})