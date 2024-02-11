<template>


<BudgetSearchBar/>

<div class="mx-10 pl-[50px] ">

<v-table fixed-header max-height="60vh" class=" elevation-4  max-h-[80vh]" density="compact">
    <thead class=" bg-blue-lighten-1 ">
      <tr>
      
        
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Destination
        </th> 
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Purpose
        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Departure Date
        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Arrival Date
        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Estimated Total Cost
        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >
          Initiated
        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >

        </th>
        <th class="text-center text-xl text-white bg-blue-lighten-2" >

        </th>
      
   
      
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(budget, budgetCounter) in filteredBudgets" 
        :key="budgetCounter" class="hover:cursor-pointer hover:border-b-2 hover:border-t-2 hover:font-bold  hover:border-solid hover:border-black " 
      >
        
        
        <td >{{ budget.destination }}</td>
        <td >{{ budget.subject }}</td>
        <td> {{ budget.departure_date }}</td>
        <td> {{ budget.arrival_date }}</td>
        <td> {{ budget.totalTripBudget }}</td>
        <td> {{ budget.initiated }}</td>
        <td class="hover:bg-blue-500 hover:text-white" @click="updateBudget(budget._id)">

        Check
          <!-- <v-icon
           @click="updateBudget(budget._id)"
          icon="mdi-border-color"
        ></v-icon>
        -->
        </td>
        <td class="hover:bg-red-500 hover:text-white" @click="deleteBudget(budget._id)">

        
<!-- <v-icon
@click="deleteBudget(budget._id)"
icon="mdi-delete"
></v-icon> -->
Delete

</td>
        
      </tr>
    </tbody>
  </v-table>


<div class="flex flex-row justify-end w-full items-end fixed bottom-5 pr-[70px]">
  <div class=" bg-emerald-500 bottom-10 right-3 p-2 mr-[20px]  border-2 border-solid border-black font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
Upload Excel
</div>

<input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />

<div class=" bg-blue-500 bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer border-2 border-solid border-black hover:bg-blue-600" @click="addBudget">
Add Budget
</div>
</div>
</div>

</template>


<script setup>
import {ref} from 'vue'
import axios from "axios"
import { useGlobalStore } from '../../stores/global';
import {useRoute, useRouter} from 'vue-router'
import { useBudgetStore } from '../../stores/budget'
import { storeToRefs } from 'pinia';
import BudgetSearchBar from '../../components/budgetSearchBar.vue';



debugger

var {budget, budgets, fileInput, filteredBudgets} = storeToRefs(useBudgetStore())

var {resetBudget, addBudget, getBudgets, deleteBudget, uploadExcel} = useBudgetStore()



getBudgets()

var router = useRouter()
var route = useRoute()




var addBudget = () => {
    router.push("/travel/addBudget")
}


var updateBudget = (_id) => {
    router.push("/travel/updateBudget/" + _id)
}




</script>