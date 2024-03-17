<template>

<v-col md="2" class="mt-5 mr-15" v-if="user && (user.userType == 'admin' || user.userType == 'manager')">
      <v-autocomplete
        name="name"
        label="Code"
        id="id"
        type="search"
        density="compact"
        variant="outlined"
        v-model="code"
        :items="adminCodes"
        @keyup.enter="open"
        
        
        item-title="code"
              item-value="code"
        append-icon="mdi-arrow-right-bold-outline"
        @click:append="open()"
      >
      <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                
                  :title="item.raw.code"
                  :subtitle="item.raw.description"
                ></v-list-item>
              </template>
    
    
    </v-autocomplete>

    </v-col>

    <v-col md="2" class="mt-5 mr-15" v-if="user && (user.userType == 'normal' || user.userType == 'support' || user.userType == 'auditor')">
      <v-autocomplete
        name="name"
        label="Code"
        id="id"
        type="search"
        density="compact"
        variant="outlined"
        v-model="code"
        :items="normalCodes"
        item-title="code"
              item-value="code"
        append-icon="mdi-arrow-right-bold-outline"
        @click:append="open"
        @keyup.enter="open"
      >
      <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                
                  :title="item.raw.code"
                  :subtitle="item.raw.description"
                ></v-list-item>
              </template>
    
    
    </v-autocomplete>

    </v-col>



</template>


<script setup>
import {ref, onMounted} from "vue"
import {useCodeStore} from '../stores/codes'
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

onMounted(()=>{
  var elements = document.querySelectorAll("input")
  for(var element of elements){
    element.setAttribute("autocomplete", "off")
  }
})


var {user} = storeToRefs(useAuthStore())
var {adminCodes, normalCodes, maps} = storeToRefs(useCodeStore())

var code = ref("")
var router = useRouter()

var open = () =>{
  debugger
  var codeProcessed = code.value.toUpperCase()
  var url = maps.value[codeProcessed]
  router.push(url)
}


</script>


