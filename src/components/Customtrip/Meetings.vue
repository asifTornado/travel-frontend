<template>
<v-container class="mt-10 mb-10 elevation-5">
        <v-row>
                 <v-col align=center justify="center" md="12" class="font-weight-bold">
                    Meetings
                 </v-col>
    
    
        </v-row>

        <v-row>
            <v-col md="3">
                 Subject
            </v-col>
            <v-col md="4">
                Attendees
            </v-col>
            <v-col md="3">
                Agenda
            </v-col>
        </v-row>
    
    
                 <v-row  v-for="(meeting, meetingCounter) in meetings" :key="meetingCounter">
                  <v-col md="4" class="">
                       <v-textarea      variant="outlined"  density="compact" rows="1" v-model="meetings[meetingCounter].subject">
                                                    
                       </v-textarea>
                  </v-col>
                  <v-col md="3" class="">
                    <v-combobox
                        chips
                        multiple
                        clearable
                        label
                        variant="outlined"
                        filter-mode="every"
                        density="compact"
                        v-model="meetings[meetingCounter].attendees"
                        :items="meetings[meetingCounter].attendees">
                       
                    </v-combobox>
                    
                  </v-col>
                  <v-col md="3" class="">
                    <v-textarea       variant="outlined" density="compact" rows="1" v-model="meetings[meetingCounter].agenda">
                                                    
                        </v-textarea>
                  </v-col>
                  <v-col md="2">
                       <v-btn class="bg-blue-lighten-1" @click="add(meetingCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                       <v-btn class="bg-blue-darken-4" @click="remove(meetingCounter)" ><v-icon>mdi-minus</v-icon></v-btn>
                  </v-col>
                 </v-row>
            
      
      
</v-container>
  
  
  
  </template>
  
  
  
  <script setup>
   import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
   
  var {meetings} = storeToRefs(useCustomStore())
  
  var add = (counter) => {
      var newObjective = {agenda:'', attendees:[], subject:''}
      meetings.value.splice(counter+1, 0, newObjective)
  };
  
  
  var remove = (counter) => {
    if(counter < 1){
        return
    }
    meetings.value.splice(counter, 1)
  }
  
  </script>





<style scoped>
.v-textarea input, .v-textarea label{
    font-size: 1000px

}

.v-row {
    margin: 0px;
    padding: 0px;
}


.v-col {
    margin: 0px;
    padding: 0px;
}


.v-btn input, .v-btn label, .v-btn{
   margin:0px;
   padding:0px;
   margin-right: 2px;
}




</style>