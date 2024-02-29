






  <template>
   
  

    <v-layout class="">
      <v-navigation-drawer   
      :width="300"
        theme="light" class=" d-print-none bg-blue-darken-2" v-if="route.path.split('/')[2] != 'quotation' && route.path.split('/')[2] != 'confirm' && route.name != 'tripInformation'"
        expand-on-hover
        rail
        
        style="z-index: 9;"
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
          <!-- <v-list-item   prepend-icon="mdi-briefcase-edit" title="Custom Trips" value="Custom Trips" @click="router.push('/travel/custom-trips')"></v-list-item> -->

          <v-menu
      v-model="newRequest"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-airplane"
          value="New Request"
        >
          New Request
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item  v-if="user.userType == 'admin' || user.userType == 'manager'"  prepend-icon="mdi-airplane" title="New Request (Normal)" value="myfiles" @click="router.push('/travel/newRequest')"> </v-list-item>
          <v-list-item   prepend-icon="mdi-airplane-alert" title="New Request (Custom)" value="myfiles 2" @click="router.push('/travel/newRequestUpper')"> </v-list-item>
        
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="newRequest = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>





          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-bed" title="Hotels" value="hotels" @click="router.push('/travel/hotelsForBrand')">   </v-list-item>

          <!-- <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-angular" title="Agents" value="shared" @click="router.push('/travel/agents')">   </v-list-item> -->

         
          <!-- <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-poll" title="Analytics" value="analytics" @click="router.push('/travel/analytics')">   </v-list-item> -->
          <v-list-item v-if="user.userType == 'admin'" prepend-icon="mdi-google-analytics"  value="analytics" @click=""> Analytics </v-list-item>

        

          <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-file"
          value="requests"
        >
          Requests
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-file-multiple" title="All Requests" value="All Requests" @click="router.push('/travel/requests')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-account-multiple" title="My Requests" value="myRequests" @click="router.push('/travel/myRequests')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-account-multiple" title="Unapproved Requests" value="Unapproved Requests" @click="router.push('/travel/unapproved-requests')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-file-check" title="Requests For Me" value="requestsForMe" @click="router.push('/travel/requestsForMe')">   </v-list-item>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'" prepend-icon="mdi-file-account" title="Requests Processed By Me" value="requestsProcessedByMe" @click="router.push('/travel/requestsProcessedByMe')">   </v-list-item>
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="menu = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>


<v-menu
      v-model="moneyReceipt"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-cash-multiple"
          value="Money Receipts"
        >
          Money Receipts
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-file-multiple" title="All Money Receipts" value="All Money Receipts" @click="router.push('/travel/allMoneyReceipts')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-file-account-outline" title="My Money Receipts" value="My Money Receipts" @click="router.push('/travel/myMoneyReceipts')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-file-import" title="Money Receipts Processed By me" value="Money Receipts Processed By Me" @click="router.push('/travel/moneyReceiptsProcessedByMe')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-file-check" title="Money Receipts For Me" value="Money Receipts For Me" @click="router.push('/travel/moneyReceiptsForMe')">   </v-list-item>
         
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="moneyReceipt = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>
<!-- roles  -->
     
<!-- expense reports -->
<v-menu
      v-model="expenses"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-file"
          value="expense Reports"
        >
          Expense Reports
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item  v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-file-multiple" title="All Expense Reports" value="All Expense Reports" @click="router.push('/travel/allExpenseReports')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-account-multiple" title="My Expense Reports" value="My Expense Reports" @click="router.push('/travel/myExpenseReports')">   </v-list-item>
          <v-list-item  prepend-icon="mdi-account-multiple" title="Expense Reports For Me" value="Expense Reports For Me" @click="router.push('/travel/expenseReportsForMe')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-file-check" title="Expense Reports Approved By Me" value="Expense Reports Approved By Me" @click="router.push('/travel/expenseReportsApprovedByMe')">   </v-list-item>
        
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="expenses = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>




    <v-menu
      v-model="setup"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-cogs"
          value="Setup"
        >
          Setup
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item v-if="user.userType == 'admin'"  prepend-icon="mdi-cash-plus" title="Budgets" value="budgets" @click="router.push('/travel/budget')">   </v-list-item>
        <v-list-item v-if="user.userType=='admin' || user.userType == 'manager'"  prepend-icon="mdi-account-multiple" title="Users" value="users" @click="router.push('/travel/users')">   </v-list-item>
          <v-list-item v-if="user.userType == 'admin'" prepend-icon="mdi-account-badge-outline" title="Roles"  value="roles" @click="router.push('/travel/roles')"> </v-list-item>
        
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="setup = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>





    
    <v-menu
      v-model="tickets"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          color="indigo"
          v-bind="props"
          prepend-icon="mdi-ticket-outline"
          value="tickets"
        >
         Air-Ticket Quotations
      </v-list-item>
      </template>

      <v-card min-width="300" style="z-index: 99999999999999;">
        <v-list>
          <v-list-item   prepend-icon="mdi-ticket-account" title="Ticket Quotations For Me" value="budgets" @click="router.push('/travel/ticketQuotationsForMe')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-ticket" title="Ticket Quotations Approved By Me" value="users" @click="router.push('/travel/ticketQuotationsApprovedByMe')">   </v-list-item>
          <v-list-item   prepend-icon="mdi-ticket-confirmation" title="All Ticket Quotations"  value="roles" @click="router.push('/travel/allTicketQuotations')"> </v-list-item>
        
        </v-list>

        <v-divider></v-divider>

       

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="tickets = false"
          >
            Cancel
          </v-btn>
       
        </v-card-actions>
      </v-card>
    </v-menu>


        </v-list>
      </v-navigation-drawer>


      <v-main style=" width:100vw;  padding: 0%;"  class="bg-blue-lighten-5 pa-5">
        <v-app-bar class="d-print-none " :elevation="2" style="z-index: 1;"  v-if="route.name != 'tripInformation'"> 
          
          <template v-slot:prepend>
            <img src="../assets/logo.png" style="width:70px; height:40px" alt="">
        </template>
          <v-app-bar-title class="font-weight-bold" >Travel Management App</v-app-bar-title>
        

       <CodeSearch/>

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

       

<router-view class="bg-blue-lighten-5"></router-view>

        

     
      
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
import CodeSearch from "../components/CodeSearch.vue";
import { ref } from "vue";



var route = useRoute()
var router = useRouter()


var {user} = storeToRefs(useAuthStore())
var {logout} = useAuthStore()
var {showNotifications} = storeToRefs(useNotificationStore())

var expenses = ref(false)
var newRequest = ref(false)

var setup = ref(false)
var tickets = ref(false)
var menu = ref(false)
var moneyReceipt = ref(false)














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
