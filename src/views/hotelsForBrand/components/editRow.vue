<template>

    <tr v-if="item" class="hover:cursor-pointer h-10   hover:border-2 hover:border-solid hover:border-black " >
     <td ><input v-bind="brand" /></td>
     <td><input v-bind="address"/></td>
     
   
     <td class="hover:bg-blue-500 hover:text-white " @click="edit(item.hotelForBrand._id)">

     Check
       <!-- <v-icon
        @click="updateBudget(budget.id)"
       icon="mdi-border-color"
     ></v-icon>
     -->
     </td>
     <td class="hover:bg-red-500 hover:text-white" @click="emit('cancel')">

     
<!-- <v-icon
@click="deleteBudget(budget.id)"
icon="mdi-delete"
></v-icon> -->
Delete

</td>
     
</tr>


</template>



<script setup>
import { defineProps, ref } from 'vue';
import axios from "axios";

var item = defineProps(["hotelForBrand"])
var emit = defineEmits(["edit", "cancel"])

var brand = ref(item.hotelForBrand.brand)
var adddress = ref(item.hotelForBrand.brandOfficeAddress)

function edit(id){
    return null
}


</script>