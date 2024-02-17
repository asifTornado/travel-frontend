<template>

    <v-dialog
    v-model="addRoleCheck"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
     
<v-text-field label="New Role" v-model="role.value" >

</v-text-field>
  
 
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="confirm">Confirm</v-btn>
        <v-btn color="primary"  @click="addRoleCheck = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    

    import { storeToRefs } from 'pinia';
    import {useRoleStore} from "../stores/roles";
    
    
    var {addRoleCheck, role} = storeToRefs(useRoleStore())


    var {confirm} = useRoleStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    