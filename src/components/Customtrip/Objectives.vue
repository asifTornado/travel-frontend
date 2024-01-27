<template>
<v-container class="mt-10 mb-10 elevation-5">
      <v-row>
               <v-col align=center justify="center" md="12" class="font-weight-bold">
                  Objectives
               </v-col>

        </v-row>
               <v-row justify="center" align="center" v-for="(objective, objectiveCounter) in objectives" :key="objectiveCounter">
                <v-col md="10">
                     <v-textarea rows="1" :label="'Objective ' + (objectiveCounter + 1)" v-model="objectives[objectiveCounter]">
                                                  
                     </v-textarea>
                </v-col>
                <v-col md="2">
                     <v-btn color="success" @click="add(objectiveCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                     <v-btn color="red" @click="remove(objectiveCounter)" ><v-icon>mdi-minus</v-icon></v-btn>
                </v-col>
               </v-row>
          
    
    
    
</v-container>


</template>



<script setup>
  import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
   
  var {objectives} = storeToRefs(useCustomStore())

var add = (counter) => {
    var newObjective = ""
    objectives.value.splice(counter+1, 0, newObjective)
};


var remove = (counter) => {
  objectives.value.splice(counter, 1)
}

</script>





<style scoped>
.v-textarea input, .v-textarea label{
    font-size: small
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