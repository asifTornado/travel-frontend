import { defineStore } from 'pinia'
import { useGlobalStore } from './global';
import { useAuthStore } from './auth';
import {ref, computed, reactive} from "vue"
import Fuse from "fuse.js"
import axios from 'axios';
import {useRouter, useRoute} from 'vue-router'
import { useToast } from 'vue-toast-notification';

import { storeToRefs } from 'pinia';
import { toastInjectionKey } from 'vue-toastification';





export const useHotelsForBrandStore = defineStore("hotelsForBrand", () => {
    
    var selectedHotels = ref([])

    var hotelsForBrands = ref([])

    var hotelsForBrand = ref({
        // _id:'',
        brand:'',
        locations:[
            {
                locationName:'',
                hotels:[
                    {
                        hotelName:'',
                        hotelAddress:'',
                        rooms:[{
                        type:'',
                        average_rate:'',
                        actual_rate:''
                        }
                        ]
                        
                    }
                ]
            }
        
        ]
    })

  


 

    var form = ref(null)
    var brand = ref('')
    var location = ref('')


    var router = useRouter()

    var route = useRoute()


    var toast = useToast()


    var {globalUrl} = storeToRefs(useGlobalStore())
    var {user, token} = storeToRefs(useAuthStore())



    var exist = ref([
        value => {
          if(value) return true
          return '* Field Required'
        }
      ])


    function getHotelsForBrands(){
                       
        var data = new FormData();

        data.append("token", token)

        axios.post(globalUrl.value + "getHotelsForBrandsAll", data).then((result)=>{
            console.log("these are the hotels For brands")
            console.log(result.data)
            hotelsForBrands.value = result.data
        }).catch((error)=>console.log(error))
 

    }


    function resetHotelsForBrand(){

       hotelsForBrand.value = {
        // _id:'',
        brand:'',
        locations:[
            {
                locationName:'',
                hotels:[
                    {
                        hotelName:'',
                        hotelAddress:'',
                        rooms:[{
                        type:'',
                        average_rate:'',
                        actual_rate:''
                        }
                        ]
                        
                    }
                ]
            }
        
        ]
    }

    }


    function searchHotelsForBrands(){
        var data = new FormData()
        data.append("brand", brand.value)
        data.append("location", location.value)

        axios.post(globalUrl.value + "searchHotelsForBrands", data).then((result)=>{
            hotelsForBrands.value = result.data.value
            console.log("this is the result")
            console.log(result.data)
        }).catch((error)=>console.log(error))


    }



    function getHotelsForBrand(){
        var data = new FormData()
        var id = route.params.id
        data.append("id", id)

        axios.post(globalUrl.value + "getHotelsForBrand", data).then((result)=>{
            console.log("this is the result")
            console.log(result.data)
            hotelsForBrand.value = result.data

            console.log(hotelsForBrand.value)
        }).catch((error)=>console.log(error))
    }



    async function updateHotelsForBrand(){
        var validation = await form.value.validate()

        if(validation.valid){

            var data = new FormData();
        
            toast.info("Updating Hotels. Please wait...")
    
            console.log('called update hotels for brand')
    
            data.append("token", token)
            data.append("hotelsForBrand", JSON.stringify(hotelsForBrand.value))
    
            debugger
    
            axios.post(globalUrl.value + "editHotelForBrand", data).then((result)=>{
                toast.clear()
                toast.success("Hotels Updated Successfully")
                hotelsForBrands.value = hotelsForBrands.value.map((x)=>{
                    if(x._id == result.data){
                        return hotelsForBrand.value
                    }else{
                        return x
                    }
                })
    
                console.log("these are the hotelsForBrands")
                console.log(hotelsForBrands)
            }).catch((error)=>console.log(error))
     



        }
        

    }



    function deleteHotelsForBrand(id){
        console.log("from inside delete hotels for brand")
        var data = new FormData()
        data.append("id", id)

        axios.post(globalUrl.value + "deleteHotelsForBrand", data).then((result)=>{
             hotelsForBrands.value = hotelsForBrands.value.filter((x)=> x._id != id)
        }).catch((error)=>console.log(error))
    }



    // function getHotelsForBrand(id){
    //     hotelsForBrand = hotelsForBrands.value.filter((x)=> x.id == id)[0]
    // }



    function addHotelsForBrand(){
             router.push("/travel/hotelsForBrand/add")
    }


    function updateHotelsForBrandPage(id){
       console.log("this is the id")
       console.log(id)
       console.log("these are the hotels for brands")
       console.log(hotelsForBrands.value)
       hotelsForBrand.value  = hotelsForBrands.value.filter((x)=> x._id == id)
       console.log("this is the hotels for brand")
       console.log(hotelsForBrand.value)

       router.push("/travel/hotelsForBrand/update/" + id)
 

    }


    function addLocation(index){
        console.log("location adder called")
        hotelsForBrand.value.locations.splice(index + 1, 0, {
                locationName:'',
                hotels:[
                    {
                        hotelName:'',
                        hotelAddress:'',
                        rooms:[{
                        type:'',
                        average_rate:'',
                        actual_rate:''
                        }
                        ]
                        
                    }
                ]
            
        })
    }


    function deleteLocation(index){
        if(hotelsForBrand.value.locations.length < 2){
            return
        }else{
            
            hotelsForBrand.value.locations.splice(index, 1)
        }
    }


    function deleteLocationBackEnd(location){
        var data = new FormData()
        data.append("location", JSON.stringify(location))

        axios.post(globalUrl.value + "deleteLocation", data).then((result)=>{

        }).catch((error)=>console.log(error))
    }



    function addHotel(hotelIndex, locationIndex){

        if(hotelsForBrand.value.locations[locationIndex]){
            
            hotelsForBrand.value.locations[locationIndex].hotels.splice(
                hotelIndex + 1,
                0,
                {
                    hotelName:'',
                    hotelAddress:'',
                    rooms:[{
                    type:'',
                    average_rate:'',
                    actual_rate:''
                    }
                    ]
                    
                }
            )
        }
    }



    function deleteHotel(hotelIndex, locationIndex){

        console.log(hotelsForBrand.value.locations[locationIndex].hotels)

        if(hotelsForBrand.value.locations[locationIndex].hotels.length < 2){
            return
        }else{
            hotelsForBrand.value.locations[locationIndex].hotels.splice(
                hotelIndex,
                1
            )

        }
    

        
    }


    function addRoom(roomIndex, hotelIndex, locationIndex){
            hotelsForBrand.value.locations[locationIndex].hotels[hotelIndex].rooms.splice(
                roomIndex + 1,
                0,
                {
                    type:'',
                    average_rate:'',
                    actual_rate:''
                }
            )
        
    }


    function deleteRoom(roomIndex, hotelIndex, locationIndex){
        if(hotelsForBrand.value.locations[locationIndex].hotels[hotelIndex].rooms.length < 2){
            return
        }else{
            hotelsForBrand.value.locations[locationIndex].hotels[hotelIndex].rooms.splice(roomIndex, 1)
        }
    }


    function deleteHotelBackEnd(hotel){
        var data = new FormData()
        data.append("hotel", JSON.stringify(hotel))

        axios.post(globalUrl.value + "deleteHotel", data).then((result)=>{
            console.log("this is the result")
            console.log(result.data)
        }).catch((error)=>console.log(error))
    }



    async function insertHotelsForBrand(){
        debugger
        var validation = await form.value.validate();
        if(validation.valid){
       
            toast.info("Adding Hotels. Please wait...")
            var data = new FormData()
            data.append("token", token.value)
            console.log("this is the hotelsForBrand.value")
            console.log(hotelsForBrand.value)
            data.append("hotelsForBrand", JSON.stringify(hotelsForBrand.value))
    
            axios.post(globalUrl.value + "createHotelForBrand", data).then((result)=>{
                toast.clear()
                toast.success("Hotels Added Successfully")
                hotelsForBrands.value.push(result.data)
            }).catch((error)=>console.log(error));

        }
     
    }



    







    return {
        hotelsForBrand, brand, location, form, exist, hotelsForBrands, selectedHotels,
         
        addRoom, deleteRoom,
        searchHotelsForBrands, resetHotelsForBrand, deleteHotelBackEnd, deleteLocationBackEnd,
        getHotelsForBrands, updateHotelsForBrand, deleteHotelsForBrand, getHotelsForBrand, addHotelsForBrand,
        updateHotelsForBrandPage, addLocation, deleteLocation, addHotel, deleteHotel, insertHotelsForBrand
    }




})