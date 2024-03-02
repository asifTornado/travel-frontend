import { defineStore } from 'pinia'
import { useGlobalStore } from './global';
import { storeToRefs } from 'pinia';
import {ref} from "vue";
import {useRouter} from "vue-router"
import { useToast } from 'vue-toast-notification';

import axios from 'axios';
import { useUserStore } from './users';



export const useAuthStore = defineStore("auth", ()=>{
 var user = ref({})
 var token = ref('')
 var email = ref('')
 var password = ref('')
 var {globalUrl} = storeToRefs(useGlobalStore())
 var router = useRouter()
 var toast = useToast()
 var {users} = storeToRefs(useUserStore())


 function addFlyer(){
  
  if(user.value.hasFrequentFlyerNo == "Yes"){
      user.value.flyerNos.push({number:'', airline:''})
  }else{
      user.value.flyerNos = []
  }
   
}


function insertFlyer(counter){
  user.value.flyerNos.splice(counter + 1, 0, {number:'', airline:''})
}

function removeFlyer(counter){
  user.value.flyerNos.splice(counter, 1)
}


 
 function login(){
  var router = useRouter()
  debugger
    toast.info("Loging in please wait.....")
    var data = new FormData();
    data.append("email", email.value);
    data.append("password", password.value);
   

    
  
    axios.post(globalUrl.value + "login", data).then((result) =>{
            if(result.data.success ==  true){   
              debugger
               toast.clear()
               toast.success("Success")
              console.log(result.data)
              user.value = result.data.result
              token.value = result.data.token
              console.log("this is the user")
              console.log(user.value)
                          
              location.href = "http://192.168.1.15:5173/#/travel/newRequest"
            
             
              
            }else{
                console.log("failed")
                console.log(result.data)
            }
    }).catch((error) => { console.log(error)})
}


function register(){


  toast.info("Registering please wait.....")
  var data = new FormData();
  data.append("email", email.value);
  data.append("password", password.value);
  var newUser = users.value.filter((user)=>user.mailAddress == email.value)[0]
  data.append("user", JSON.stringify(newUser))

  

  axios.post(globalUrl.value + "register", data).then((result) =>{
          if(result.data ==  true){   
             toast.clear()
             toast.success("Success")
            console.log(result.data)
            user.value = result.data.result
            console.log("this is the user")
            console.log(user.value)
                        
            location.href = "http://192.168.1.15:5173/#/register"
          
           
            
          }else{
              toast.warning("Failed to register")
              
          }
  }).catch((error) => { toast.warning(error)})

}
  
async function authenticateToken(token2){
  var data = new FormData()
  data.append("token", token2)
  debugger
  try {
    var result = await axios.post(globalUrl.value + "authenticateToken", data)
    user.value = result.data.result
    token.value = result.data.token
    return true
    
  } catch (error) {
    console.log(error)
     return false    
  }
 
}

function logout(){
    toast.info("Logging out")
    toast.clear()
    console.log("from logout")
    user.value = {}
    
    location.href = "http://192.168.1.15:5173/#/login"
}



function getUser2(id){
  var _id = id
  var data = new FormData()
  data.append("id", _id)
  debugger

  axios.post(globalUrl.value + "getUser", data).then((result)=>{
      console.log("this is the user")
      console.log(result.data)
      user.value = result.data

      if(!user.value.superVisor){
          user.value.superVisor = {}
      }

      if(!user.value.zonalHead){
          user.value.zonalHead = {}
      }

      if(!user.value.travelHandler){
          user.value.travelHandler = {}
      }

  }).catch((error)=>console.log(error))
}


function test(){
    console.log("test function")
}


 return {
  user, 
  token,
  email,
  password,
  login,
  test,
  logout,
  addFlyer, 
  removeFlyer,
  insertFlyer,
  register,
  getUser2,
  authenticateToken,
 }

}, {
  persist:true
})


