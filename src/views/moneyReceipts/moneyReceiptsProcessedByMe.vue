<template>
    <SearchBar/> 
  
      <div class="mx-16    elevation-4  ">
  
      
  
      <v-table fixed-header max-height="60vh" class="elevation-4 " density="compact"   
     
      >
          <thead class="bg-blue-lighten-1 text-white  ">
            <tr>
              <th class="text-center text-white  bg-blue-lighten-1">
                Id
              </th>
            
              <th class="text-center text-white  bg-blue-lighten-1">
                Date
              </th>
              <th class="text-center text-white  bg-blue-lighten-1">
                Requester
              </th>
              <th class="text-center text-white  bg-blue-lighten-1">
                Required Amount
              </th>
            
              <th class="text-center text-white  bg-blue-lighten-1">
                Current Handler
              </th>    
          
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(moneyReceipt, moneyReceiptCounter) in filteredMoneyReceipts"
              :key="moneyReceiptCounter" class="hover:cursor-pointer hover:border-2 hover:border-solid hover:border-black hover:font-bold " @click="showMoneyReceipt(moneyReceipt)"
            >
              <td >{{ moneyReceipt._id }}      </td>
       
              <td> {{ moneyReceipt.date }}      </td>
              <td >{{ moneyReceipt.i }}     </td>
          
        
              <td >{{ moneyReceipt.requiredTK }}   </td>
              <td v-if="moneyReceipt.currentHandler.empName">{{ moneyReceipt.currentHandler.empName }}</td>
              <td v-else>Not Assigned</td>
            </tr>
          </tbody>
        </v-table>
      
      </div>
      
      
      </template>
      
      
      
      <script setup>
  
      import SearchBar from '../../components/searchBar.vue';
    
      import { useMoneyReceiptStore } from '../../stores/moneyReceiptStore';
      import { storeToRefs } from 'pinia';
      
     
      var {getMoneyReceiptsProcessedByMe, showMoneyReceipt} = useMoneyReceiptStore();
      
       getMoneyReceiptsProcessedByMe()
      
      var {filteredMoneyReceipts} = storeToRefs(useMoneyReceiptStore())
      
      
      
      
     
      
  
      
      
      
      
      
      </script>
      
      
      <style scoped>
      .box{
          width:90vw;
          margin-left: 30px;
      }
      
      </style>