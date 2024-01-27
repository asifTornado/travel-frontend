<template>

<v-container class="mt-10 mb-10 elevation-5">
      
      <v-row>
               <v-col align=center justify="center" md="12" class="font-weight-bold">
                  Personnel Required
               </v-col>
    
    
      </v-row>
               <v-row justify="center" align="center" v-for="(person, personnelCounter) in personnel" :key="personnelCounter">
                <v-col md="10">
                     <v-textarea rows="1" label="Object" v-model="personnel[personnelCounter]">
                                                  
                     </v-textarea>
                </v-col>
                <v-col md="2">
                     <v-btn color="success" @click="add(personnelCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                     <v-btn color="red" @click="remove(personnelCounter)" ><v-icon>mdi-minus</v-icon></v-btn>
                </v-col>
               </v-row>
         
    
    
</v-container>



</template>



<script setup>
  import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
   
  var {personnel} = storeToRefs(useCustomStore())

var add = (counter) => {
    var newObjective = ""
    personnel.value.splice(counter+1, 0, newObjective)
};


var remove = (counter) => {
  personnel.value.splice(counter, 1)
}

</script>



<style scoped>
.v-textarea input, .v-textarea label{
    font-size: 1px;

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