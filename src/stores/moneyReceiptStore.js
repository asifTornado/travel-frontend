import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import { useUserStore } from './users';
import { useAuthStore } from './auth';
import {useRouter, useRoute} from 'vue-router';
import {useRequestsStore} from "../stores/request"


import Fuse from "fuse.js"





import axios from 'axios';






export const useMoneyReceiptStore = defineStore("moneyReceipt", ()=>{

var {request} = storeToRefs(useRequestsStore())
var toast = useToast()
var {globalUrl} = storeToRefs(useGlobalStore())
var {getAllUsers} = useUserStore()
var {users} = storeToRefs(useUserStore())

var router = useRouter();
var route = useRoute();
var authStore = useAuthStore()
var disburseDialog = ref(false);

var fuse = ref(null)
var options = ref({
    includeScore: true,

      keys: [{name:'requester.empName', weight:0.1},
     
      {name:'requester.mailAddress', weight:0.1},
      {name:'requester.departmentHead.mailAddress', weight:0.1},
      {name:'requester.departmentHead.empName', weight:0.5},
      {name:'requester.superVisor.mailAddress', weight:0.1},
      {name:'requester.superVisor.empName', weight:0.1},
      {name:'purpose', weight:0.1},
      {name:'destination', weight:0.1},
      {name:'mode', weight:0.5},
      {name:'startDate', weight:0.5},
      {name:'endDate', weight:0.5},
      {name:'status', weight:0.1},
   
    
    ]
    })

var moneyReceiptDialog = ref(false)
var next = ref()
var selectedUserEmail = ref()
var moneyReceiptForwardDialog = ref(false)

var moneyReceipt = ref({
    no:'',
    date:'',
    taka:'',
    advanceMoneyInHand:'',
    unit:'',
    section:'',
    i:'',
    designation:'',
    requiredTK:'',
    asAdvanceAgainst:'',
    serialNo:'',
})


var moneyReceipts = ref([])
var filteredMoneyReceipts = ref([])

var submitReceipt = () =>{
    toast.info("Submitting Receipt. Please Wait....")
    var data = new FormData();
    data.append("request", JSON.stringify(request.value))
    data.append("moneyReceipt", JSON.stringify(moneyReceipt.value))
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "submitMoneyReceipt", data).then((result)=>{
        moneyReceiptDialog.value = false
        toast.clear()
        toast.success("Receipt Submitted")
    }).catch((error)=> toast.warning(error))
}


var moneyReceiptResend = () =>{
    toast.info("Resubmitting Receipt. Please Wait....")
    var data = new FormData();
    data.append("request", JSON.stringify(request.value))
    data.append("moneyReceipt", JSON.stringify(moneyReceipt.value))
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "moneyReceiptResend", data).then((result)=>{
        
        toast.clear()
        toast.success("Receipt Resubmitted")
    }).catch((error)=> toast.warning(error))
}



var getMyMoneyReceipts = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(authStore.user))
    data.append("token", authStore.token)

 
       axios.post(globalUrl.value + "getMyMoneyReceipts", data).then((result)=>{
         
         moneyReceipts.value = result.data
         filteredMoneyReceipts.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getAllMoneyReceipts = () => {
       
    var data = new FormData()
    data.append("token", authStore.token)
    
    

 
       axios.post(globalUrl.value + "getAllMoneyReceipts", data).then((result)=>{
         
         moneyReceipts.value = result.data
         filteredMoneyReceipts.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getMoneyReceiptsForMe = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(authStore.user))
    data.append("token", authStore.token)

 
       axios.post(globalUrl.value + "getMoneyReceiptsForMe", data).then((result)=>{
         
         moneyReceipts.value = result.data
         filteredMoneyReceipts.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getMoneyReceiptsProcessedByMe = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(authStore.user))
    data.append("token", authStore.token)

 
       axios.post(globalUrl.value + "getMoneyReceiptsProcessedByMe", data).then((result)=>{
         
         moneyReceipts.value = result.data
         filteredMoneyReceipts.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getMoneyReceipt = () => {
    var id = route.params.id;
    var data = new FormData()
    data.append("id", id)
    data.append("token", authStore.token)

 
       axios.post(globalUrl.value + "getMoneyReceipt", data).then((result)=>{
         
         moneyReceipt.value = result.data

       }).catch((error)=>console.log(error))

  

}


var showMoneyReceipt = (moneyReceipt)=> {
    debugger
    var id = moneyReceipt._id;
    var url;

   
      url = "/travel/moneyReceipt/" + id;
    
  
    router.push(url)
  }


var moneyReceiptSupervisorApprove = () => {
    toast.info("Approving Money Receipt. Please Wait....")
    var data = new FormData();
    data.append("user", JSON.stringify(authStore.user))
    data.append("id", moneyReceipt.value._id)
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "moneyReceiptSupervisorApprove", data).then((result)=>{
        moneyReceipt.value = result.data
        toast.clear()
        toast.success("Money Receipt Approved")
    }).catch((error)=>console.log(error))
}


var moneyReceiptSupervisorReject = () => {
    toast.info("Rejecting Money Receipt. Please Wait...")
    var data = new FormData();
    data.append("user", JSON.stringify(authStore.user))
    data.append("id", moneyReceipt.value._id)
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "moneyReceiptSupervisorReject", data).then((result)=>{
        moneyReceipt.value = result.data
        toast.clear()
        toast.success("Money Receipt Rejected")
    }).catch((error)=>console.log(error))
}


var moneyReceiptForward = () => {
    toast.info("Forwarding Money Receipt. Please Wait...")
    var data = new FormData();
    data.append("user", JSON.stringify(authStore.user))
    data.append("id", moneyReceipt.value._id)
    next.value = users.value.filter((x)=> x.mailAddress == selectedUserEmail.value)[0]
    data.append("next", next.value._id)
    data.append("token", authStore.token)
    data.append("serial", moneyReceipt.serialNo)

    axios.post(globalUrl.value + "moneyReceiptForward", data).then((result)=>{
        moneyReceipt.value = result.data
        moneyReceiptForwardDialog.value = false
        toast.clear()
        toast.success("Money Receipt Forwarded")
        
    }).catch((error)=>console.log(error))
}


var moneyReceiptBackWard = () => {
    toast.info("Rejecting Money Receipt. Please Wait...")
    var data = new FormData();
    data.append("user", JSON.stringify(authStore.user))
    data.append("id", moneyReceipt.value._id)
    data.append("token", authStore.token)
    data.append("serial", moneyReceipt.serialNo)


    axios.post(globalUrl.value + "moneyReceiptBackWard", data).then((result)=>{
        moneyReceipt.value = result.data
        moneyReceiptForwardDialog.value = false
        toast.clear()
        toast.success("Money Receipt Rejected")

    }).catch((error)=>console.log(error))
}


var moneyReceiptProcessingComplete = () => {
    toast.info("Completing Money Receipt Process. Please Wait...")
    var data = new FormData();
    data.append("user", JSON.stringify(authStore.user))
    data.append("id", moneyReceipt.value._id)
    data.append("token", authStore.token)
    data.append("serial", moneyReceipt.serialNo)


    axios.post(globalUrl.value + "moneyReceiptProcessingComplete", data).then((result)=>{
        moneyReceipt.value = result.data
        moneyReceiptForwardDialog.value = false
        toast.clear()
        toast.success("Money Receipt Process Completed")
    }).catch((error)=>console.log(error))
}



var openMoneyReceiptForwardDialog = () =>{
    getAllUsers()
    moneyReceiptForwardDialog.value = true


}


var checkIfEditable = () => {
    if(moneyReceipt.value.rejected == true && moneyReceipt.value.submitted == false && moneyReceipt.value.request.requesterId == moneyReceipt.value.currentHandlerId){
        return false
    }else{
        return true
    }
}





return {


 moneyReceiptDialog,
 moneyReceipt,
 fuse,
 filteredMoneyReceipts,
 moneyReceipts,
 next, 
 moneyReceiptForwardDialog,
 selectedUserEmail,
 disburseDialog,
 moneyReceiptResend,
 checkIfEditable,
 openMoneyReceiptForwardDialog,
 moneyReceiptSupervisorApprove,
 moneyReceiptSupervisorReject,
 moneyReceiptForward,
 moneyReceiptBackWard,
 moneyReceiptProcessingComplete,
 showMoneyReceipt,
 submitReceipt,
 getAllMoneyReceipts,
 getMoneyReceiptsForMe,
 getMoneyReceiptsProcessedByMe,
 getMyMoneyReceipts,
 getMoneyReceipt
}
},



)