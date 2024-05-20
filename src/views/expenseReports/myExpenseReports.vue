<template>
    <SearchBarGlobal :store="useExpenseReportStore"/> 
  
      <div class="mx-16     ">
  
      
        <div class="h-[70vh] pl-[2vw] overflow-y-auto">
      <v-table fixed-header max-height="60vh" class="elevation-4 " density="compact"   
     
      >
          <thead class="bg-blue-lighten-1 text-white  ">
            <tr>
              <th class="text-center text-white  bg-blue-lighten-1">
                Id
              </th>
            
              <th class="text-center text-white  bg-blue-lighten-1">
                Employee Name
              </th>
              <th class="text-center text-white  bg-blue-lighten-1">
                Department
              </th>
              <th class="text-center text-white  bg-blue-lighten-1">
                Travel Start Date
              </th>
            
              <th class="text-center text-white  bg-blue-lighten-1">
                Current Handler
              </th> 
              <th class="text-center text-white  bg-blue-lighten-1">
                 Status
              </th>   
          
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(expenseReport, expenseReportCounter) in filteredExpenseReports"
              :key="expenseReportCounter" class="hover:cursor-pointer hover:border-2 hover:border-solid hover:border-black hover:font-bold " @click="showExpenseReport(expenseReport)"
            >
              <td >{{ expenseReport._id }}      </td>
       
              <td> {{ expenseReport.employeeName }}      </td>
              <td >{{ expenseReport.department }}     </td>
          
        
              <td >{{ expenseReport.startDate }}   </td>
              <td v-if="expenseReport.currentHandler.empName">{{ expenseReport.currentHandler.empName }}</td>
              <td v-else>Not Assigned</td>
              <td>{{ expenseReport.status }}</td>
            </tr>
          </tbody>
        </v-table>
       </div>
      </div>
      
      
      </template>
      
      
      
      <script setup>
  
      import SearchBarGlobal from '../../components/SearchBarGlobal.vue';
    
      import { useExpenseReportStore } from '../../stores/expenseReport';
      import { storeToRefs } from 'pinia';
      
     
      var {getMyExpenseReports, showExpenseReport} = useExpenseReportStore();
      
       getMyExpenseReports()
      
      var {filteredExpenseReports} = storeToRefs(useExpenseReportStore())
      
      
      
      
     
      
  
      
      
      
      
      
      </script>
      
      
      <style scoped>
      .box{
          width:90vw;
          margin-left: 30px;
      }
      
      </style>