import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';


import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'



export const useAgentStore = defineStore("agent", () => {
   
   
var agents = ref([])
var addAgentCheck = ref(false)
var editCheck = ref(false)
var {globalUrl} = storeToRefs(useGlobalStore())
var editAgent = ref({
    _id:'',
    name:'',
    email:'',
    phone:''
   })


var newAgent = ref({
    name:'',
    email:'',
    phone:''
   })


function triggerAddAgent(){
    addAgentCheck.value = true
   }


function editAgentTrigger(agent){
    editCheck.value = true;
    editAgent.value._id = agent._id
    editAgent.value.name = agent.name
    editAgent.value.email = agent.email
    editAgent.value.phone = agent.phone
}



function getAgents(){
    axios.get(globalUrl.value + "getProfessionalAgents").then((results)=>{
        agents.value = results.data
    })
}



function cancelAddAgent(){
    addAgentCheck.value = false;
  
  }


function proceedAddAgent(){
    var data = new FormData();
    data.append("agent", JSON.stringify(newAgent.value))
    console.log("this is the agent")
    console.log(newAgent.value)

  axios.post(globalUrl.value + "createAgent", data).then((results)=>{
      agents.value = [...agents.value, results.data]
      addAgentCheck.value = false
    }).catch((error)=>console.log(error))
}


function cancelEditAgent(){
    editCheck.value = false
    editAgent.value = {
    _id:'',
    name:'',
    email:'',
    phone:''
  }
  
  }
  
  
function proceedEditAgent(){
    editCheck.value = false;
    var data = new FormData();
    
      data.append("agent", JSON.stringify(editAgent.value))
    
      console.log("this is the agent")
      console.log(editAgent.value)
  debugger
    axios.post(globalUrl.value + "editAgent", data).then((results)=>{
        editAgent.value = {
    _id:'',
    name:'',
    email:'',
    phone:''
  }

  debugger
        var newAgents = agents.value.filter((agent)=> agent._id != results.data._id)
        
  
        agents.value = [...newAgents, results.data]
  
      
        
      }).catch((error)=>console.log(error))
  }
    
  
  
  function deleteAgent(agent){
   
    var data = new FormData();
    data.append("id", agent._id)
  
    axios.post(globalUrl.value + "deleteAgent", data).then((result)=>{
      if(result.data == true){
        var newAgents = agents.value.filter((a)=> a._id != agent._id)
        agents.value = newAgents;
      }
    }).catch((error)=>console.log(error))
  
  }





  return {
    agents, addAgentCheck, editCheck, editAgent, newAgent, 
    triggerAddAgent, editAgentTrigger, getAgents, cancelAddAgent, cancelEditAgent, 
    proceedEditAgent, deleteAgent, proceedAddAgent
  }




  



  






})