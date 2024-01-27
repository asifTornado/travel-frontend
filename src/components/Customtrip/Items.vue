<template>
    <v-container class="mt-10 mb-10 elevation-5">

        <v-row>
            <v-col  md="12" class="font-weight-bold">
                Items
            </v-col>
        </v-row>
            <v-row  v-for="(item, itemCounter) in items" :key="itemCounter">
                <v-col md="10">
                    <v-textarea :label="'Item ' + (itemCounter + 1)" rows="1" v-model="items[itemCounter]">
                        
                    </v-textarea>
                </v-col>
                <v-col md="2" >
                    <v-btn color="success" @click="add(itemCounter)"><v-icon>mdi-plus</v-icon></v-btn>
                    <v-btn color="red" @click="remove(itemCounter)" ><v-icon>mdi-minus</v-icon></v-btn>
                </v-col>
            </v-row>
      
        
    </v-container>
  
  
  
  
  </template>
  
  
  
  <script setup>
  import {storeToRefs} from "pinia"
  import { useCustomStore } from '../../stores/custom';
   
  var {items} = storeToRefs(useCustomStore())
  
  var add = (counter) => {
      var newObjective = ""
      items.value.splice(counter+1, 0, newObjective)
  };
  
  
  var remove = (counter) => {
    debugger
    items.value.splice(counter, 1)
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