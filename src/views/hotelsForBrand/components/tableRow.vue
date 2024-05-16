<template>

    <tr v-if="editCheck == false" class="hover:cursor-pointer hover:bg-gray-200 " >
            <td class="p-3">{{ item.hotelForBrand.brand }}</td>
            <td>{{ item.hotelForBrand.brandOfficeAddress }}</td>
            <td class="hover:bg-blue-500 hover:text-white" @click="setEditCheck(true)">
    
            Edit
      
            </td>
            <td class="hover:bg-red-500 hover:text-white" @click="deleteBrand()">
               Delete
              </td>
              <td class="hover:bg-green-500 hover:text-white hover:cursor-pointer" @click="router.push(`/travel/hotelsForBrand/locations/${item.hotelForBrand._id}/${item.hotelForBrand.brand}`)">
           View Locations

</td>
            
    </tr>

    <tr v-else class="">
      <td class="text-center p-1"><input class="w-full bg-yellow-100 p-3 h-full text-center border border-solid border-black" v-model="brand" /></td>
      <td class="text-center p-1"><input class="w-full p-3 h-full bg-yellow-100 text-center border-left-0 border border-solid border-black" v-model="address"/></td>
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
import { useRouter } from 'vue-router';

var router = useRouter()
var {hotelsForBrands} = storeToRefs(useHotelsForBrandStore())
var item = defineProps(["hotelForBrand"])
var emit = defineEmits(["edit", "delete"])
var globalStore = useGlobalStore()

var editCheck = ref(false)
var brand = ref(item.hotelForBrand.brand)
var address = ref(item.hotelForBrand.brandOfficeAddress)

brand.value = item.hotelForBrand.brand

function setEditCheck(newValue){
  editCheck.value = newValue
}

async function save(){
  var data = new FormData()
  var brandData = {
    brand:brand.value,
    brandOfficeAddress:address.value,
    _id:item.hotelForBrand._id
  }
  data.append("brand", JSON.stringify(brandData))
  try {
    var result = await axios.post(globalStore.globalUrl + "updateBrand", data)
    hotelsForBrands.value = hotelsForBrands.value.map((x)=>{
      if(x._id == brandData._id){
        return brandData
      }else{
        return x
      }
    })
    setEditCheck(false)
  } catch (error) {
    console.log(error)
  }  
}


async function deleteBrand(){
  var data = new FormData()
  
  data.append("id", item.hotelForBrand._id)
  try {
    var result = await axios.post(globalStore.globalUrl + "deleteHotelsForBrand", data)
    hotelsForBrands.value = hotelsForBrands.value.filter((x)=>x._id != item.hotelForBrand._id)
  } catch (error) {
    console.log(error)
  }  
  
}
</script>