<template>

    <tr v-if="editCheck == false" class="hover:cursor-pointer hover:bg-gray-200 " >
            <td class="p-3">{{ item.location.locationName }}</td>

            <td class="hover:bg-blue-500 hover:text-white" @click="setEditCheck(true)">
    
            Edit
      
            </td>
            <td class="hover:bg-red-500 hover:text-white" @click="remove()">
               Delete
              </td>                                                                        
              <td class="hover:bg-green-500 hover:text-white hover:cursor-pointer" @click="router.push(`/travel/hotelsForBrand/hotels/${route.params.id}/${route.params.brand}/${item.location._id}/${item.location.locationName}`)">
           View Hotels

</td>
            
    </tr>

    <tr v-else class="">
      <td class="text-center p-1"><input class="w-full bg-yellow-100 p-3 h-full text-center border border-solid border-black" v-model="name" /></td>

      <td class="hover:bg-blue-500 hover:text-white hover:cursor-pointer" @click="save()">
        Save
     </td>
     <td class="hover:bg-red-500 hover:text-white hover:cursor-pointer" @click="setEditCheck(false)">
           Cancel

</td>

    </tr>


</template>



<script setup>
import { defineProps, ref } from 'vue';
import { storeToRefs } from 'pinia';
import axios from "axios";
import { useGlobalStore } from '../../../stores/global';
import { useHotelsForBrandStore } from '../../../stores/hotelsForBrand';
import { useRouter, useRoute } from 'vue-router';

var router = useRouter()
var route = useRoute()
var {locations} = storeToRefs(useHotelsForBrandStore())
var item = defineProps(["location"])
var emit = defineEmits(["edit", "delete"])
var globalStore = useGlobalStore()

var editCheck = ref(false)
var name = ref(item.location.locationName)



function setEditCheck(newValue){
  editCheck.value = newValue
}

async function save(){
  var data = new FormData()
  var location = {
    _id:item.location._id,
    locationName:name.value,
    hotelForBrandsId:parseInt(route.params.id)
  }
  debugger
  data.append("location", JSON.stringify(location))
  try {
    var result = await axios.post(globalStore.globalUrl + "updateHotelLocation", data)
    locations.value = locations.value.map((x)=>{
      if(x._id == location._id){
        return location
      }else{
        return x
      }
    })
    setEditCheck(false)
  } catch (error) {
    console.log(error)
  }  
}


async function remove(){
  var data = new FormData()
  data.append("id", item.location._id)
  
  try {
    var result = await axios.post(globalStore.globalUrl + "deleteHotelLocation", data)
    locations.value = locations.value.filter((x)=>x._id != item.location._id)
  } catch (error) {
    console.log(error)
  }  
  
}
</script>