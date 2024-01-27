<template>


<!-- Add Agent  -->


<v-dialog v-model="addAgentCheck" width="auto">
    
    <div  class="  bg-white min-w-[300px]  w-auto h-auto border-2 border-solid border-black p-[10px]">
    <div class="flex flex-col justify-center items-end w-full">
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="name"
        label="name"
        v-model="newAgent.name"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="email"
        label="email"
        v-model="newAgent.email"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="phone"
        label="phone"
        v-model="newAgent.phone"
        >
    
    </v-text-field>
    
    </div>
    
    
    
    
    <div class="flex flex-row w-full justify-end">  
    
    <div class=" bg-blue-500 p-2 mr-2 font-bold text-white hover:cursor-pointer border-2 border-solid border-black hover:bg-blue-600" @click="proceedAddAgent">
    Proceed
    </div>
    
    
    <div class=" bg-gray-500 p-2 font-bold text-white hover:cursor-pointer border-2 border-solid border-black hover:bg-gray-600" @click="cancelAddAgent">
    Cancel
    </div>
    
    </div>
    
    
    
    
    </div>
    
    </div>
</v-dialog>

<!-- add agent end  -->




<!-- update agent  -->
<v-dialog v-model="editCheck" width="auto">

  <div  class="bg-white  min-w-[300px]  w-auto h-auto border-2 border-solid border-black p-[10px]">
    <div class="flex flex-col justify-center items-end w-full">
      
      
      <div class="flex flex-row w-full">  
        <v-text-field
        name="name"
        label="name"
        v-model="editAgent.name"
        >
        
      </v-text-field>
      
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
      name="email"
      label="email"
      v-model="editAgent.email"
      >
      
    </v-text-field>
    
  </div>
  
  
  <div class="flex flex-row w-full">  
    <v-text-field
    name="phone"
    label="phone"
    v-model="editAgent.phone"
    >
    
  </v-text-field>
  
</div>




<div class="flex flex-row w-full justify-end">  
  
  <div class=" bg-blue-500  border-2 border-solid border-black p-2 mr-2 font-bold text-white hover:cursor-pointer hover:bg-blue-600" @click="proceedEditAgent">
    Proceed
  </div>
  
  
  <div class=" bg-gray-500 border-2 border-solid border-black p-2 font-bold text-white hover:cursor-pointer hover:bg-gray-600" @click="cancelEditAgent">
    Cancel
  </div>
  
</div>




</div>

</div>
</v-dialog>

<!-- update agent end  -->




<v-table class="mx-[100px] mr-10  border-2 border-solid border-black  mt-12 elevation-4">
    <thead class="border-b-2 border-b-solid border-b-black bg-blue-lighten-1 ">
      <tr>
        <th class="text-center text-xl  text-white " style="padding: 8px;">
          Agent Name
        </th>
        <th class="text-center text-xl   text-white" style="padding: 8px;">
          Email
        </th>
        <th class="text-center text-xl  text-white " style="padding: 8px;">
          Phone
        </th>
        <th class="text-center text-xl  text-white " style="padding: 8px;">

        </th>
        <th class="text-center text-xl  text-white " style="padding: 8px;"   >

        </th>
      
   
      
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(agent, agentCounter) in agents" 
        :key="agentCounter" class="hover:cursor-pointer hover:border-2 hover:border-black hover:border-solid  hover:font-bold" 
      >
        <td >{{ agent.name }}</td>
        <td >{{ agent.email }}</td>
        <td >{{ agent.phone }}</td>
        <td class="hover:cursor-pointer hover:bg-blue-500 hover:text-white" @click="editAgentTrigger(agent)">

        
          Edit
       
        </td>
        <td class="hover:cursor-pointer hover:bg-red-500 hover:text-white" @click="deleteAgent(agent)">

        
          Delete

</td>
        
      </tr>
    </tbody>
  </v-table>




<div class="fixed border-2 border-solid border-black bg-emerald-500 bottom-10 right-3 p-2 font-bold text-white hover:cursor-pointer hover:bg-emerald-600 mr-[80px]" @click="triggerAddAgent">
Add Agent
</div>
</template>



<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useAgentStore } from '../stores/agents';
import { storeToRefs } from 'pinia';




var { triggerAddAgent, editAgentTrigger, getAgents, cancelAddAgent, cancelEditAgent, 
    proceedEditAgent, deleteAgent, proceedAddAgent, editAgentTrigger} = useAgentStore()

getAgents();


var {agents, addAgentCheck, editCheck, editAgent, newAgent,} = storeToRefs(useAgentStore())



</script>