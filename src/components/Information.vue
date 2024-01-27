<template>


<!-- activities  -->
    
<v-container class=" mb-2 elevation-5"> 
        
        <v-row class=" bg-blue-lighten-1">
            <v-col  md="12" class="font-weight-bold">
                Activites
            </v-col>
        </v-row>

        <v-row class="    font-weight-bold text-black">
            <v-col md="2">
                   Date
            </v-col>
            <v-col md="10">
                 Activity
            </v-col>
        </v-row>
        
        <v-row v-for="(activity, activityCounter) in request.activities" :key="activityCounter">
            <v-col md="2">
                  {{request.activities[activityCounter].date}}
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="10">
               {{request.activities[activityCounter].description}}
            </v-col>
        </v-row>
        
        
</v-container>
  
    <!-- meetings  -->
    <v-container class=" mb-2 elevation-5">
        <v-row class="bg-blue-darken-1">
                 <v-col align=center justify="center" md="12" class="font-weight-bold">
                    Meetings
                 </v-col>
    
    
        </v-row>

        <v-row class=" font-weight-bold">
            <v-col md="2">
                 Subject
            </v-col>
            <v-col md="5">
                Attendees
            </v-col>
            <v-col md="5">
                Agenda
            </v-col>
        </v-row>
    
    
                 <v-row justify="center" align="center" v-for="(meeting, meetingCounter) in request.meetings" :key="meetingCounter">
                  <v-col md="2">
                    {{request.meetings[meetingCounter].subject}}                                            
                  </v-col>
                  <v-col md="5">
                       <v-chip v-for="(attendee, attendeeCounter) in request.meetings[meetingCounter].attendees" :key="attendeeCounter">
                               {{ attendee}}                     
                       </v-chip>
                  </v-col>
                  <v-col md="5">
                   {{request.meetings[meetingCounter].agenda}}
                  </v-col>
            
                 </v-row>
            
      
      
</v-container>
  

<v-container class="mb-2 elevation-4">
  <v-row class="bg-blue-darken-2 pa-2">
    <v-col md="12">Objectives</v-col>
  </v-row>
  <v-row>
    <v-col md="12">
      <v-chip v-for="(objective, objectiveCounter) in request.objectives" :key="objectiveCounter">
      {{ objective }}
      </v-chip>
    </v-col>
  </v-row>
</v-container>


<v-container class="elevation-4 mb-2">
  <v-row class="bg-blue-darken-2 pa-2 ">
    <v-col md="12">Items Needed To Take</v-col>
  </v-row>
  <v-row>
    <v-col md="12">
      <v-chip v-for="(objective, objectiveCounter) in request.items" :key="objectiveCounter">
      {{ objective }}
      </v-chip>
    </v-col>
  </v-row>
</v-container>


<v-container class="elevation-4 mb-10">
  <v-row class="bg-blue-darken-2 pa-2 ">
    <v-col md="12">Help Required From</v-col>
  </v-row>
  <v-row>
    <v-col md="12">
      <v-chip v-for="(objective, objectiveCounter) in request.personnel" :key="objectiveCounter">
      {{ objective }}
      </v-chip>
    </v-col>
  </v-row>
</v-container>



<v-container class="elevation-4 mb-10">
  <v-row class="bg-blue-darken-2 pa-2">
        <v-col md="12">
            Allocated Budget
        </v-col>
  </v-row>
  <v-row>
    <v-col md="2">
           Total Daily Allowance
    </v-col>
    <v-col md="10">
         {{request.budget.totalDailyAllowance}}
    </v-col>
  </v-row>
  <v-row>
    <v-col md="2">
           Total Budget
    </v-col>
    <v-col md="10">
         {{request.budget.totalBudget}}
    </v-col>
  </v-row>
  <v-row>
    <v-col md="2">
           Notes
    </v-col>
    <v-col md="10">
        {{ request.budget.notes }}
    </v-col>
  </v-row>

  <v-row>
    <v-col md="12" class="border">
        <v-row>
          <v-col md="12" align="center" class="font-weight-bold text-h6">
                Budget Breakdown
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3">
               Item
          </v-col>
          <v-col md="3">
               Quantity
          </v-col>
          <v-col>
            Cost
          </v-col>
          <v-col>
            Total
          </v-col>
        </v-row>
        <v-row v-for="(breakdown, breakdownCounter) in request.budget.breakdown">
              <v-col md="3">
                {{ breakdown.item }}
              </v-col>
              <v-col md="3">
                   {{ breakdown.quantity }}
              </v-col>
              <v-col>
                {{ breakdown.cost }}
              </v-col>
              <v-col>
                {{ breakdown.total }}
              </v-col>
        </v-row>
    </v-col>
  </v-row>
</v-container>



</template>
<script setup>
import {defineProps} from "vue"
import { useCustomStore } from '../stores/custom';
import {storeToRefs} from 'pinia'

var {request} = storeToRefs(useCustomStore())




</script>