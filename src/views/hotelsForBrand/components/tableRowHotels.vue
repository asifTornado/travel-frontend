<template>

    <tr  class="hover:cursor-pointer hover:bg-gray-200 " >
            <td class="p-3">{{ item.hotel.hotelName }}</td>
            <td class="p-3">{{ item.hotel.hotelAddress }}</td>

            <td class="hover:bg-blue-500 hover:text-white" @click="router.push(`/travel/hotelsForBrand/editHotel/${route.params.brandId}/${route.params.brand}/${route.params.locationId}/${route.params.location}/${item.hotel._id}`)">
    
            Edit
      
            </td>
            <td class="hover:bg-red-500 hover:text-white" @click="remove()">
               Delete
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
var {hotels} = storeToRefs(useHotelsForBrandStore())
var item = defineProps(["hotel"])
var emit = defineEmits(["edit", "delete"])
var globalStore = useGlobalStore()








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
  data.append("id", item.hotel._id)
  
  try {
    var result = await axios.post(globalStore.globalUrl + "deleteHotel", data)
    hotels.value = hotels.value.filter((x)=>x._id != item.hotel._id)
  } catch (error) {
    console.log(error)
  }  
  
}
</script>