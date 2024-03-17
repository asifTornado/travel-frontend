<template >
    

    <div class="w-full  px-10 py-10 overflow-y-scroll ml-[30px] ">

 
    
<div class="flex flex-col  ">
    <div class=" bg-blue-lighten-1 text-white flex flex-row justify-center items-center  p-4 mb-10 shadow-md shadow-black">  <label class="text-white text-4xl font-bold">My Profile</label></div>
    
        <div class='flex flex-col w-full   pa-1  bg-white shadow-md shadow-black ' v-if="authStore.user">
        
            
                <div class=" mt-5 text-black  w-full flex flex-row ">
                    <div  class='w-44  mr-10 items-center flex flex-row ml-2 justify-start font-bold'>Name:</div>
                   
                     <div class='w-8/12 items-center flex flex-row justify-start rounded-md h-9  p-1'> {{ authStore.user.empName }}</div>


                     <div for="" class='w-44 items-center  mr-10 flex flex-row justify-center font-bold'>Official Email:</div>
                   
                     <div class='w-8/12  items-center flex flex-row justify-start rounded-md h-9  p-1'> {{ authStore.user.mailAddress }}</div>


                     <div for="" class='w-44   mr-10 flex flex-row items-center justify-center font-bold'>Department:</div>
                   
                     <div class='w-8/12 flex flex-row justify-start rounded-md h-9 items-center  p-1'> {{ authStore.user.department }}</div>

                     
                </div>
    
    
            
    
                <div class=" mt-5 text-black  w-full flex flex-row justify-start mt-10 ">
                    <div for="" class='w-44 items-center  mr-10 flex flex-row ml-2 justify-start font-bold'>Designation:</div>
                   
                     <div class='w-8/12 flex flex-row justify-start items-center rounded-md h-9  p-1'> {{ authStore.user.designation }}</div>


                     <div for="" class='w-44 items-center text-end mr-10 flex flex-col justify-center font-bold'>Section:</div>
                   
                     <div class='w-8/12 flex flex-row justify-start items-center rounded-md h-9  p-1'>{{ authStore.user.section }}</div>


                     <div for="" class='w-44  items-center text-end mr-10 flex flex-row justify-start font-bold'>Unit:</div>
                   
                     <div class='w-8/12 flex flex-row justify-start items-center rounded-md h-9  p-1'> {{ authStore.user.unit }}</div>
                </div>
    
    
            
    
    
             


                <div class=" mt-5 text-black  w-full flex flex-row mt-10">
                    <div for="" class='w-44 items-center  flex flex-row justify-start ml-2 font-bold'>Location:</div>
                   
                     <select class='w-8/12 rounded-md h-9  p-1 border border-solid border-black'  v-model="authStore.user.location" >
                    <option v-for="(location, locationCounter) in locations" :value="location.name">{{ location.name }}</option>
                    </select>

                    
                </div>
    
    
    
    
                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44  items-center flex flex-row justify-start ml-2 font-bold'>Phone Number:</div>
                   
                     <input class='w-8/12 rounded-md h-9  p-1 border border-solid border-black'  v-model="authStore.user.mobileNo" />
                </div>
    
    
                
                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44  items-center flex flex-row justify-start ml-2 font-bold'>Extension Number:</div>
                   
                    <input class='w-8/12 rounded-md h-9 border border-solid border-black p-1'  v-model="authStore.user.extension" />
                </div>


                      
                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44  items-center flex flex-row justify-start ml-2 font-bold'>Passport Number:</div>
                   
                    <input class='w-8/12 rounded-md h-9 border border-solid border-black p-1'  v-model="authStore.user.passportNo" />
                </div>


                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44 items-center   flex flex-row justify-start ml-2 font-bold'>Has Frequent Flyer Number:</div>
                   <select name="" id="" @change="addFlyer" v-model="authStore.user.hasFrequentFlyerNo" class='w-8/12 rounded-md h-9  p-1 border border-solid border-black'>
                      <option value="Yes">
                             Yes
                      </option>
                      <option value="No">
                             No
                      </option>
                   </select>
                   
                </div>
 

                <div class=" mt-5 border border-solid border-black p-3 text-black  w-full flex flex-row justify-center items-center" v-for="(flyer, flyerCounter) in authStore.user.flyerNos">
                    <div for="" class='w-1/6 text-end mr-10 flex flex-col justify-center font-bold'>Frequent Flyer Number:</div>
                   
                    <input class='w-2/6 rounded-md h-9 border border-solid border-black p-1'  v-model="authStore.user.flyerNos[flyerCounter].number"  />

                    <div for="" class='w-1/6 text-end mr-10 flex flex-col justify-center font-bold'>Airline:</div>
                   
                   <input class='w-2/6 rounded-md h-9 border border-solid border-black p-1'  v-model="authStore.user.flyerNos[flyerCounter].airline"  />
                    <v-icon class="ml-2" @click="insertFlyerToggle">mdi-plus</v-icon>
                    <v-icon class="ml-2" @click="removeFlyerToggle">mdi-minus</v-icon>
                </div>


                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44   flex flex-row justify-start items-center ml-2 font-bold'>User Type:</div>
                   
                     <div class="flex flex-row justify-start rounded-md h-9  p-2"> {{authStore.user.userType == "leader" ? "Ticket Manager" : authStore.user.userType }}</div>
                </div>
    
    
    
                <div class=" mt-5 text-black  w-full flex flex-row">
                    <div for="" class='w-44   flex flex-row justify-start ml-2 font-bold items-center'>Password:</div>
                   
                 <div class="flex flex-row justify-start  items-center w-8/12 rounded-md h-9  p-1">
                         <input v-model="authStore.user.password" type="password" class="border border-solid border-black p-2" id="password" /> <v-icon icon="mdi-eye" class="ml-2" @click="togglePassword()" id="eye"></v-icon>
                       
                 </div>



                 
                </div>



                <div class="w-full flex flex-col mt-10 items-center  ">
                                  <div class="w-full flex flex-row font-bold  mt-4 mb-2 justify-center items-center text-h4">Travel Preferences</div>

                                  <div class="image-uploader">
                                    <label for="">Image Upload:</label>
                                    <input @change="handleImageUpload" type="file"/>
                                  </div>

                                  <div class="image-viewer">
                                    <v-img
  width="50vw"
  aspect-ratio="16/9"
  cover
  :src="globalStore.globalUrl + 'uploads/' + authStore.user.preferenceImage"
></v-img>
                                  </div>
                                  <Editor @textChanged="preferencesChanged" :content="authStore.user.preferences"/>
 

                </div>



                
    
             
        
        
        
        
        
        
                
        
        
        
        
            
        
        
               
        
        
        
        
        
        
              
        
        
                
               
        
        
        
        

                
        
                 
        <hr class="border border-solid border-slate-300 "/>
              
            
        <div class="flex flex-row justify-center items-center  mb-10 mt-10">
            <div class=" bg-slate-300 h-auto w-auto text-black hover:cursor-pointer font-bold py-2 px-10 shadow shadow-black"  id="save" @click="makeChange">Save Changes</div>
            <div class="bg-slate-300 h-auto w-auto text-black font-bold py-2 px-10 shadow shadow-black ml-5 hover:cursor-pointer" @click="cancel">Cancel</div>
        </div>
        
           
        </div>

        
    
</div>
    
    </div>
    
    </template>
    
    
    <script setup>
    import axios from 'axios';
    import {ref, computed} from 'vue'
    import { useGlobalStore } from '../stores/global';
    import {useToast} from 'vue-toast-notification';
    import Editor from '../components/editor.vue'
    import { useRequestsStore } from '../stores/request';
    import { useAuthStore } from '../stores/auth';
    import {storeToRefs} from 'pinia'
    import {useRouter} from "vue-router"

   
    var requestStore = useRequestsStore()
    var globalStore = useGlobalStore()
   
    var {globalUrl} = storeToRefs(useGlobalStore())
    var {addFlyer, insertFlyer, removeFlyer, getUser2} = useAuthStore()

    

    var authStore = useAuthStore()

  
    var files = ref([]);

    var router = useRouter()
    
    var edit = ref(false);
    var eye = ref("fa-solid fa-eye");
    var save = ref(true);
    var locations = ref([]);
    var toast = useToast();

   var handleImageUpload = (event) => {
    debugger
    const file = event.target.files[0];
    var data = new FormData();
    data.append("file", file)
    data.append("id", authStore.user._id)

    axios.post(globalStore.globalUrl + "preferenceImageUpload", data).then((result)=>{

        if(result.data == false){
            toast.warning("Error Uploading Image")
        }else{
            authStore.user.preferenceImage = result.data
        }

    }).catch((error)=> toast.warning(error))

   }

    var preferencesChanged = (value) => {
        console.log("from preferences changed")
        console.log(value)
        authStore.user.preferences = value
        // toggleSave()
    }
    
      

    var availability = computed(()=>{
           if(authStore.user.available == true){
                    return "Available"
                }else{
                    return "Not Available"
                }
            })
   


// function toggleSave(){

// var vm = this;


// var save2 = document.getElementById('save');
// if(save2 && save2 != null){
// save2.classList.remove("bg-gray-200")
// save2.classList.remove("text-gray-400")
// save2.classList.add("bg-slate-300")
// save2.classList.add("text-black")
// save2.classList.add("hover:cursor-pointer")
// save.value=true

// }     
// };



    function cancel(){
            
            var userType = authStore.user.userType;

            switch(userType){
              case "admin":
                router.push("/ticketing/systemAdmin/manage");
                break;
              case "normal":
                 router.push("/ticketing/normal");
                 break;
              case "power":
                 router.push("/ticketing/power");
                 break;
              case "leader":
                 router.push("/ticketing/leader/manage");
                 break;
            
            }
        }



    function togglePassword(){
       
       var eye = document.getElementById('eye');
       var password = document.getElementById('password');

       console.log("this is the eye")
       console.log(eye.getAttribute("icon"))
       
                         
     if(eye.getAttribute("icon") =="mdi-eye"){
         eye.setAttribute("icon", "mdi-eye-off") 
         password.setAttribute('type', 'password')
      }else{
       eye.setAttribute("icon", "mdi-eye")
       password.setAttribute('type', 'text')
      }

       
   };


   function insertFlyerToggle(){
        //  toggleSave()
         insertFlyer()
   }


   function removeFlyerToggle(){
        //  toggleSave()
         removeFlyer()
   }



   function  makeChange(){
           toast.info("Saving Changes..")
                    
            var user2 = authStore.user;
            var token = authStore.token;
            debugger

      
             
            var data = new FormData()

        
            data.append("user", JSON.stringify(user2))
            data.append("token", token)

            axios.post(globalUrl.value + "updateUserNormal", data, {

}).then((result)=>{
             
                     toast.clear()
                     toast.success("Changes Saved")
                    
              
            }).catch((error)=>{
                    console.log(error)
            })
        };



    
   
    </script>

<style scoped>
.sun-editor .se-wrapper .se-wrapper-code {  
    overflow: auto !important;
  }

  .image-uploader{
    margin-bottom: 20px;
    margin-top: 20px;

  }

  .image-uploader label{
    margin-right: 10px;
    font-weight: bolder;
    font-size: 15px;
  }


  .image-viewer{
    margin-bottom: 20px;
  }
</style>
