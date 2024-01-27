<template>

    <v-container class="mt-10 mb-10 elevation-5"> 
        
        <v-row class="mb-2">
            <v-col  md="12" class="font-weight-bold">
                Activites
            </v-col>
        </v-row>

        <v-row class="mb-2 text-h5 bg-blue-lighten-1 pa-2 font-weight-bold text-white">
            <v-col md="2">
                   Date
            </v-col>
            <v-col md="7">
                 Activity
            </v-col>
        </v-row>
        
        <v-row v-for="(activity, activityCounter) in activities" :key="activityCounter">
            <v-col md="2">
                   <v-text-field type="date" v-model="activities[activityCounter].date" />

                  
            </v-col>
            <v-spacer></v-spacer>
            <v-col md=7>
                <v-textarea rows="1" auto-grow v-model="activities[activityCounter].description" />

                </v-col>

                <v-col md="2">
                      <v-btn color="success"  @click="add(activityCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                      <v-btn color="red" @click="remove(activityCounter)"><v-icon >mdi-minus</v-icon></v-btn>
                </v-col>
        </v-row>
        
        
    </v-container>
  
  
  
  
  </template>
  
  
  
  <script setup>
  import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
   
  var {activities} = storeToRefs(useCustomStore())
  
  var add = (counter) => {

      var newActivity = {date:'', description:''}
      activities.value.splice(counter+1, 0, newActivity)
  };
  
  
  var remove = (counter) => {
    activities.value.splice(counter, 1)
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


.v-container {
    border:2px solid grey;
}

</style>