<template>

<v-container v-if="requestBudget && request.supervisorApproved == false" class="elevation-4">
<v-row class="border border-solid bg-blue-lighten-1 pa-2">
    <v-col md="3" align="end" class="font-weight-bold text-h6">
        Travel Supervisor:
    </v-col>
    <v-col md="9" align="start" class="font-weight-bold text-h6">
          {{ requestBudget.travelSupervisor }}
    </v-col>
</v-row>
<v-row>
    <v-col md="3">
       <v-text-field
        label="Total Daily Allowance"
        v-model="requestBudget.totalDailyAllowance"
        type="text"
        density="compact"
        variant="outlined"
        :rules="exist"
       ></v-text-field>
    </v-col>
    <v-col md="3">
       <v-text-field
        label="Emergency Fund"
        v-model="requestBudget.emergencyFund"
        type="text"
        density="compact"
        variant="outlined"
        :rules="exist"
       ></v-text-field>
    </v-col>
    <v-col md="3">
       <v-text-field
        label="Total Budget"
        v-model="requestBudget.totalBudget"
        type="text"
        density="compact"
        variant="outlined"
        :rules="exist"
       ></v-text-field>
    </v-col>
    <v-col md="3">
     <v-textarea
     label="Additional Notes"
     v-model="requestBudget.notes"
     density="compact"
     rows="1"
     variant="outlined"
     :rules="exist"
     
     />
      

    </v-col>
</v-row>

<v-row>
    <v-col md="12">
          <v-row v-for="(breakdown, breakdownCounter) in requestBudget.breakdown" :key="breakdownCounter">
               <v-col md="4">
                   <v-text-field
                    label="Item"
                    id="id"
                    density="compact"
                    type="text"
                    :rules="exist"
                    variant="outlined"
                    v-model="requestBudget.breakdown[breakdownCounter].item"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Quantity"
                    id="id"
                    type="text"
                    density="compact"
                    variant="outlined"
                    :rules="exist"
                    v-model="requestBudget.breakdown[breakdownCounter].quantity"
                    @change="getTotal(breakdownCounter)"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Cost"
                    id="id"
                    density="compact"
                    :rules="exist"
                    variant="outlined"
                    v-model="requestBudget.breakdown[breakdownCounter].cost"
                    type="text"
                    @change="getTotal(breakdownCounter)"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Total"
                    id="id"
                    type="text"
                    :rules="exist"
                    density="compact"
                    variant="outlined"
                    v-model="requestBudget.breakdown[breakdownCounter].total"
                   ></v-text-field>
               </v-col>
               <v-col md="2" class="mt-2">
                       <v-btn  class="bg-blue-darken-4 mr-2" @click="add(breakdownCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                       <v-btn  class="bg-blue-lighten-2 mr-2" @click="remove(breakdownCounter)"><v-icon>mdi-minus</v-icon></v-btn>
               </v-col>
          </v-row>
    </v-col>
</v-row>

</v-container>





</template>


<script setup>
   import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
  import {Events} from "../../stores/events";
  import { useAuthStore } from "../../stores/auth";



  var {request, requestBudget, exist} = storeToRefs(useCustomStore())
  var {approve, reject, permanentlyReject} =  useCustomStore()
  var {user} = storeToRefs(useAuthStore())


  var add = (counter) => {
    var newItem = {
    item:'',
    cost:'',
    quantity:'',
    total:''
   }

   requestBudget.value.breakdown.splice(counter + 1, 0 , newItem)
  }


  var remove = (counter) => {
    if(counter < 1){
        return
    }
    requestBudget.value.breakdown.splice(counter, 1)
  }


  var getTotal = (counter) => {
    requestBudget.value.breakdown[counter].total = (requestBudget.value.breakdown[counter].quantity * requestBudget.value.breakdown[counter].cost).toString()
  }



</script>