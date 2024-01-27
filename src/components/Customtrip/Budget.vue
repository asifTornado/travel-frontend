<template>

<v-container v-if="requestBudget && request.supervisorApproved == false">
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
       ></v-text-field>
    </v-col>
    <v-col md="3">
       <v-text-field
        label="Total Budget"
        v-model="requestBudget.totalBudget"
       ></v-text-field>
    </v-col>
</v-row>
<v-row>
    <v-col md="12">
          <v-row v-for="(breakdown, breakdownCounter) in requestBudget.breakdown" :key="breakdownCounter">
               <v-col md="4">
                   <v-text-field
                    label="Item"
                    id="id"
                    v-model="requestBudget.breakdown[breakdownCounter].item"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Quantity"
                    id="id"
                    v-model="requestBudget.breakdown[breakdownCounter].quantity"
                    @change="getTotal(breakdownCounter)"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Cost"
                    id="id"
                    v-model="requestBudget.breakdown[breakdownCounter].cost"
                    @change="getTotal(breakdownCounter)"
                   ></v-text-field>
               </v-col>
               <v-col md="2">
                   <v-text-field
                    label="Total"
                    id="id"
                    v-model="requestBudget.breakdown[breakdownCounter].total"
                   ></v-text-field>
               </v-col>
               <v-col md="2" class="mt-2">
                       <v-btn color="success" class="mr-2" @click="add(breakdownCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                       <v-btn color="red" class="mr-2" @click="remove(breakdownCounter)"><v-icon>mdi-minus</v-icon></v-btn>
               </v-col>
          </v-row>
    </v-col>
</v-row>

</v-container>



</template>


<script setup>
   import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';


  var {request, requestBudget} = storeToRefs(useCustomStore())


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
    requestBudget.value.breakdown.splice(counter, 1)
  }


  var getTotal = (counter) => {
    requestBudget.value.breakdown[counter].total = requestBudget.value.breakdown[counter].quantity * requestBudget.value.breakdown[counter].cost
  }



</script>