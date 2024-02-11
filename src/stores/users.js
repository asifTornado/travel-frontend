import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import Fuse from "fuse.js"


import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'
import { VSlideYReverseTransition } from 'vuetify/lib/components/index.mjs';
import { useAuthStore } from './auth';




export const useUserStore = defineStore("users", () => {
    var user = ref({
        empName:'',
        mailAddress:'',
        designation:'',
        department:'',
        extension:'',
        phoneNo:'',
        unit:'',
        section:'',
        preferences:'',
        superVisor:'',
        zonalHead:'',
        travelHandler:'',
        flyerNos:[]
    })
    var users = ref([])
    var success = ref(false)
    var error2 = ref(null)
    var globalStore = useGlobalStore()
    var router = useRouter()
    var toast = useToast()
    var route = useRoute()
    var fileInput = ref(null)
    var {globalUrl} = storeToRefs(useGlobalStore())
    var userEmails = ref([])
    var searchTerm = ref('')
    var filteredUsers = ref([])

    


    var options = ref({
        includeScore: true,

          keys: [{name:'empName', weight:0.1},
         
          {name:'mailAddress', weight:0.1},
          {name:'department', weight:0.1},
          {name:'designation', weight:0.5},
          {name:'Location', weight:0.1},
          {name:'_id', weight:0.1}, 
        ]

        })


    var fuse = ref(null)
   
   
    var form = ref(null)

    var exist = ref([
       value => {
          if(value) return true
          return '* Field Required'
         }
      ])


   
    var mappedUsers = computed(()=>{
        var results = users.value.map((user)=>user.empName)
        return results
    })


    var mappedUserEmails = computed(()=>{
        var results = users.value.map((user)=>user.mailAddress)
        return results
    })

    
   function getUserEmails(){
    console.log("user emails called");
     axios.get(globalUrl.value + "getUserEmails").then((result)=>{
        userEmails.value = result.data
     }).catch((error)=> console.log(error));
   }

   function getAllUsers(){

    console.log("this is the globalUrl")
    console.log(globalUrl.value)
    
             axios.get(globalUrl.value + "getUsers").then((result)=>{
                 
                 users.value = result.data
                 filteredUsers.value = result.data
                 fuse.value = new Fuse(result.data, options.value)
             }).catch((error)=>console.log(error))
            
            
        } 
    
  function getUsersForSupervisor(AuthUser){
    var data = new FormData();
    debugger
    data.append("id", AuthUser.value._id)
    axios.post(globalUrl.value + "getUsersForSupervisor", data).then((result)=>{
        debugger
        users.value = result.data
        filteredUsers.value = result.data
        fuse.value = new Fuse(result.data, options.value)
    }).catch((error) => toast.warning(error))
  }


    function getUserByName(name){
           var newUser = users.value.filter((user)=>user.empName == name)[0]
           return newUser
    }




   async function addUser(){
        var validation = await form.value.validate();
        if(validation.valid){
        toast.info("Adding User....")
        
        var data = new FormData()
         
        var supervisor = users.value.filter((item)=>item.empName == user.value.superVisor)[0]
        var zonalHead = users.value.filter((item)=>item.empName == user.value.zonalHead)[0]
        var travelHandler = users.value.filter((item)=>item.empName == user.value.travelHandler)[0]

        user.value.superVisor = supervisor;
        user.value.zonalHead = zonalHead;
        user.value.travelHandler = travelHandler;
    
        var data = new FormData()
        data.append("user", JSON.stringify(user.value))
        axios.post(globalUrl.value + "insertUser", data).then((result)=>{
            toast.clear()
            router.push("/travel/users")
        }).catch((error)=>console.log(error))
    }

   }

        
    var deleteuser = (_id) => {
        
        var data = new FormData()
        console.log("this is the _id being sent")
        console.log(_id)
        data.append("id", _id)
        axios.post(globalUrl.value + "deleteUser", data).then((result)=>{
          users.value = users.value.filter((user)=> user._id != _id);
        }).catch((error) => console.log(error))
      }


    var uploadExcel = () =>{
        fileInput.value.click()
    }
    
    
    var adduserPage = () => {
        router.push("/travel/adduser")
    }
    
    
    var updateuserPage = (_id) => {
        router.push("/travel/updateuser/" + _id)
    }


function addFlyer(){
    if(user.value.hasFrequentFlyerNo == "Yes"){
        user.value.flyerNos.push({airline:'', number:''})
    }else{
        user.value.flyerNos = []
    }
     
}


function insertFlyer(counter){
    user.value.flyerNos.splice(counter + 1, 0, {airline:'', number:''})
}

function removeFlyer(counter){
    user.value.flyerNos.splice(counter, 1)
}
    
function getUser(){
  
    var _id = route.params.id
    var data = new FormData()
    data.append("id", _id)

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






var updateUser = async () => {
    var validation = await form.value.validate();
    if(validation.valid){
    toast.info("Updating User, please wait...")
    var data = new FormData()

    console.log("these are the users")
    console.log(users.value)

    

    var superVisor = users.value.filter((x)=>user.value.superVisor && x.empName == user.value.superVisor.empName)[0]
    var zonalHead = users.value.filter((x)=>user.value.zonalHead && x.empName == user.value.zonalHead.empName)[0]
    var travelHandler = users.value.filter((x)=>user.value.travelHandler && x.empName == user.value.travelHandler.empName)[0]
    
    user.value.superVisor = superVisor
    user.value.zonalHead = zonalHead
    user.value.travelHandler = travelHandler

    console.log("these are the preferences")
    console.log(user.value.preferences)

    console.log("this is the supervisor value and the zonal head value")
    console.log(user.value.superVisor)
    console.log(user.value.zonalHead)
    
    data.append("user", JSON.stringify(user.value))
    axios.post(globalUrl.value + "updateUserNormal", data).then((result)=>{
        toast.clear()
        toast.success("User Updated Successfully")
  
    }).catch((error)=>console.log(error))
    
}
}



function setText(value){
    console.log("set text called")
    console.log(value)
    user.value.preferences = value
  }



  function resetUser(){
    user.value = {
        empName:'',
        mailAddress:'',
        designation:'',
        department:'',
        extension:'',
        phoneNo:'',
        unit:'',
        section:'',
        preferences:'',
        superVisor:'',
        zonalHead:'',
        travelHandler:'',
    }
  }


  function getNumberOfDays() {
    // Parse the input strings into Date objects
    const startDate = new Date(st);
    const endDate = new Date(date2);
  
    // Calculate the time difference in millisecondsget
    const timeDifference = endDate - startDate;
  
    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }


  function getApiUsers(){
    axios.post(globalUrl.value + "getApiUsers").then((result)=>{
        users.value = result.data
    })
  }


  function search(){


    if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
        filteredUsers.value = users.value
        return
    }
    var result = fuse.value.search(searchTerm.value);
  
    filteredUsers.value = result.map(result => result.item);
  }





    

    return {
        user, searchTerm, filteredUsers,
        users, globalStore, mappedUsers,  error2, success, router, mappedUserEmails, fileInput, userEmails,
        form, exist,
       
         getAllUsers, getUserByName, addUser, getUser, setText, updateUser, resetUser, adduserPage, updateuserPage,
         uploadExcel, deleteuser, getUserEmails, getNumberOfDays, addFlyer, insertFlyer, removeFlyer,
         getApiUsers, search, getUserEmails,
         getUsersForSupervisor

    }

    
})