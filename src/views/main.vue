






  <template>
   
  

    <v-layout class="">
      <v-navigation-drawer   
      :width="300"
        theme="light" class=" d-print-none bg-blue-darken-2" v-if="route.path.split('/')[2] != 'quotation' && route.path.split('/')[2] != 'confirm'"
        expand-on-hover
        rail
        style="z-index: 99999999999999999999;"
      >
        <v-list>
          <v-list-item
          
            :title="user.empName"
            :subtitle="user.mailAddress"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav class="text-left" v-if="user">
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-wallet-travel" title="Trips" value="Trips" @click="router.push('/travel/trips')"></v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-briefcase-edit" title="Custom Trips" value="Custom Trips" @click="router.push('/travel/custom-trips')"></v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'" prepend-icon="mdi-airplane" title="New Request (Normal)" value="myfiles" @click="router.push('/travel/newRequest')"> </v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'" prepend-icon="mdi-airplane-alert" title="New Request (Custom)" value="myfiles 2" @click="router.push('/travel/newRequestUpper')"> </v-list-item>

          <v-list-item  prepend-icon="mdi-account-multiple" title="My Requests" value="myRequests" @click="router.push('/travel/myRequests')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-account-multiple" title="Unapproved Requests" value="Unapproved Requests" @click="router.push('/travel/unapproved-requests')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-file-check" title="Requests For Me" value="requestsForMe" @click="router.push('/travel/requestsForMe')">   </v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'" prepend-icon="mdi-file-account" title="Requests Processed By Me" value="requestsProcessedByMe" @click="router.push('/travel/requestsProcessedByMe')">   </v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-bed" title="Hotels" value="hotels" @click="router.push('/travel/hotelsForBrand')">   </v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-file-multiple" title="Requests" value="requests" @click="router.push('/travel/requests')">   </v-list-item>
          <!-- <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-angular" title="Agents" value="shared" @click="router.push('/travel/agents')">   </v-list-item> -->
          <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-cash-plus" title="Budgets" value="budgets" @click="router.push('/travel/budget')">   </v-list-item>
          <v-list-item v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-account-multiple" title="Users" value="users" @click="router.push('/travel/users')">   </v-list-item>
          <!-- <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-poll" title="Analytics" value="analytics" @click="router.push('/travel/analytics')">   </v-list-item> -->
        </v-list>
      </v-navigation-drawer>

      <v-main style=" width:100vw;  padding: 0%;"  class="bg-grey-lighten-3 pa-5">
        <v-app-bar class="d-print-none " :elevation="2" > 
          
          <template v-slot:prepend>
            <img src="../assets/logo.png" style="width:70px; height:40px" alt="">
        </template>
          <v-app-bar-title class="font-weight-bold" >Travel Management App</v-app-bar-title>
        
      

       <notifications @click="showNotifications" v-if="route.path.split('/')[2] != 'quotation'"  class="mr-[20px]"/>

        <template v-slot:append>
        

          <v-menu open-on-hover v-if="route.path.split('/')[2] != 'quotation'">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item prepend-icon="mdi-logout" class="hover:cursor-pointer" @click="logout">Logout </v-list-item>
        <v-list-item prepend-icon="mdi-face-man-profile" class="hover:cursor-pointer" @click="router.push('/travel/profile')">Profile</v-list-item>
       
        
      </v-list>
    </v-menu>
       
        </template>
        </v-app-bar>
      <router-view ></router-view>
      
      </v-main>
      <NotificationsDrawer/>
    </v-layout>

</template>



<script setup>
import axios from "axios";
import {useGlobalStore} from '../stores/global.js';
import {useRouter, useRoute} from "vue-router";
import NotificationsDrawer from '../components/notificationsDrawer.vue';
import notifications from "../components/notifications.vue";
import {useNotificationStore} from "../stores/notification.js"
import {storeToRefs} from "pinia"
import {useAuthStore} from "../stores/auth.js"



var route = useRoute()
var router = useRouter()

var {user} = storeToRefs(useAuthStore())
var {logout} = useAuthStore()
var {showNotifications} = storeToRefs(useNotificationStore())




















</script>

<style scoped>



/* .topBar{
  width: 94.7vw;
  height: 10vh;
  background-color:red;
  display:flex;
  position: fixed;
  top:0;
  right:0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 10px;
}

.main{
  width:100vw;
  min-height: 90vh;
  background-color:green;

} */
</style>
