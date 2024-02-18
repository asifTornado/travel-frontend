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






export const useExpenseReportStore = defineStore("expenseReport", ()=>{

var {request} = storeToRefs(useRequestsStore())
var toast = useToast()
var {globalUrl} = storeToRefs(useGlobalStore())
var {getAllUsers} = useUserStore()
var {users} = storeToRefs(useUserStore())

var router = useRouter();
var route = useRoute();
var {user, token} = storeToRefs(useAuthStore());
var disburseAmount = ref("")
var disburseDialog = ref(false)

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

var expenseReportDialog = ref(false)
var next = ref()
var selectedUserEmail = ref()
var expenseReportForwardDialog = ref(false)

var expenseReport = ref({
   
})


var expenseReports = ref([])
var filteredExpenseReports = ref([])

var submitExpenseReport = () =>{
    var data = new FormData();
    data.append("request", JSON.stringify(request.value))
    data.append("expenseReport", JSON.stringify(expenseReport.value))

    axios.post(globalUrl.value + "submitExpenseReport", data).then((result)=>{
        expenseReportDialog.value = false
    }).catch((error)=> toast.warning(error))
}



var getMyExpenseReports = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(user.value))

 
       axios.post(globalUrl.value + "getMyExpenseReports", data).then((result)=>{
         
         expenseReports.value = result.data
         filteredExpenseReports.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getAllExpenseReports = () => {
       
    var data = new FormData()
    
    

 
       axios.post(globalUrl.value + "getAllExpenseReports").then((result)=>{
         
         expenseReports.value = result.data
         filteredExpenseReports.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getExpenseReportsForMe = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(user.value))

 
       axios.post(globalUrl.value + "getExpenseReportsForMe", data).then((result)=>{
         
         expenseReports.value = result.data
         filteredExpenseReports.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}


var getExpenseReportsApprovedByMe = () => {
       
    var data = new FormData()
    data.append("user", JSON.stringify(user.value))

 
       axios.post(globalUrl.value + "getExpenseReportsApprovedByMe", data).then((result)=>{
         
         expenseReports.value = result.data
         filteredExpenseReports.value = result.data;
         fuse.value = new Fuse(result.data, options.value)

       }).catch((error)=>console.log(error))

  

}






var getExpenseReport = () => {
    var id = route.params.id;
    var data = new FormData()
    data.append("id", id)

 
       axios.post(globalUrl.value + "getExpenseReportSolo", data).then((result)=>{
         
         expenseReport.value = result.data

       }).catch((error)=>console.log(error))

  

}


var showExpenseReport = (expenseReport)=> {
    debugger
    var id = expenseReport._id;
    var url;

   
      url = "/travel/expenseReport/" + id;
    
  
    router.push(url)
  }


var expenseReportSupervisorApprove = () => {
    var data = new FormData();
    debugger
    data.append("user", JSON.stringify(user.value))
    data.append("id", expenseReport.value._id)

    axios.post(globalUrl.value + "expenseReportSupervisorApprove", data).then((result)=>{
        expenseReport.value = result.data
    }).catch((error)=>console.log(error))
}


var expenseReportSupervisorReject = () => {
    var data = new FormData();
    data.append("user", JSON.stringify(user.value))
    data.append("id", expenseReport.value._id)

    axios.post(globalUrl.value + "expenseReportSupervisorReject", data).then((result)=>{
        expenseReport.value = result.data
    }).catch((error)=>console.log(error))
}


var expenseReportForward = () => {
    var data = new FormData();
    data.append("user", JSON.stringify(user.value))
    data.append("id", expenseReport.value._id)
    next.value = users.value.filter((x)=> x.mailAddress == selectedUserEmail.value)[0]
    data.append("next", next.value._id)

    axios.post(globalUrl.value + "expenseReportForward", data).then((result)=>{
        expenseReport.value = result.data
        expenseReportDialog.value = false;
        expenseReportForwardDialog.value = false;
    }).catch((error)=>console.log(error))
}


var expenseReportBackWard = () => {
    var data = new FormData();
    data.append("user", JSON.stringify(user.value))
    data.append("id", expenseReport.value._id)


    axios.post(globalUrl.value + "expenseReportBackWard", data).then((result)=>{
        expenseReport.value = result.data
    }).catch((error)=>console.log(error))
}


var travelManagerSubmitExpenseReport = () => { 
    var data = new FormData();
    data.append("expenseReport", JSON.stringify(expenseReport.value));
    axios.post(globalUrl.value + "travelManagerSubmitExpenseReport", data).then((result)=>{
        expenseReport.value = result.data;
    }).catch((error)=> toast.warning(error))
}



var travelManagerRejectExpenseReport = () =>{
    var data = new FormData();
    debugger
    data.append("id", JSON.stringify(expenseReport.value._id));
    data.append("requestId", expenseReport.value.requestId);
    axios.post(globalUrl.value + "travelManagerRejectExpenseReport", data).then((result)=>{
        expenseReport.value = result.data
    }).catch((error)=> toast.warning(error))
}


var expenseReportProcessingComplete = () => {
    var data = new FormData();
    data.append("user", JSON.stringify(user.value))
    data.append("id", expenseReport.value._id)


    axios.post(globalUrl.value + "expenseReportProcessingComplete", data).then((result)=>{
        expenseReport.value = result.data
    }).catch((error)=>console.log(error))
}



var openExpenseReportForwardDialog = () =>{
    debugger
    getAllUsers()
    expenseReportForwardDialog.value = true


}

var resendExpenseReport = ()=>{

    toast.info("Sending Report Please Wait...")
  
    var data = new FormData();
    debugger
 
 
 
    data.append("expenseReport", JSON.stringify(expenseReport.value))
    data.append("requestId", expenseReport.value.requestId);
    
 
    axios.post(globalUrl.value + "resendExpenseReport", data).then((result)=>{
        

       expenseReport.value = result.data 
       toast.clear()
       toast.success("Report Sent")
 
    }).catch((error)=> toast.warning(error))
 
 
  }


  
  function addExpense(counter){
    var newExpense = {date:"", expenseType:"", description:"", amount:"", notes:"", invoice:"", voucherGiven:false, source:'manager'}

     expenseReport.value.expenses.splice(counter + 1, 0, newExpense)

   }

   function deleteExpense(counter){
    if(counter == 0){
      return
    }else{
      expenseReport.value.expenses.splice(counter, 1)
      
    }
   }
 

 
var showVoucher = (counter) => {
  debugger
  var filePath = expenseReport.value.expenses[counter].invoice
 

  var path = globalUrl.value + "uploads/" + filePath
  window.open(path, '_blank')
 
  
}

    
var uploadVoucher = (event, counter) => {
  var data = new FormData();
  debugger
  data.append("file", event.target.files[0])
  

  axios.post(globalUrl.value + "uploadVoucher", data).then((result)=>{
        expenseReport.value.expenses[counter].voucherGiven = true
        expenseReport.value.expenses[counter].invoice = result.data
  }).catch((error)=> console.log(error))
}

var disburse = () => {
  toast.info("Disbursing Payment, please wait...")
  var data = new FormData();
  data.append("amount", disburseAmount.value);
  data.append("expenseReport", JSON.stringify(expenseReport.value));

  axios.post(globalUrl.value + "disburse", data).then((result)=>{
    toast.clear()
    toast.success("Payment cleared")
    expenseReport.value = result.data
  }).catch((error)=>toast.warning(error))

}

var openDisburseDialog = (event) => {
  debugger
  disburseAmount.value = event.target.value
  disburseDialog.value = true;

}


var cancelDisburse = () => {
  disburseDialog.value = false;
  disburseAmount.value = '';
}


return {
    expenseReportDialog,
    expenseReport,
    fuse,
    filteredExpenseReports,
    expenseReports,
    next, 
    expenseReportForwardDialog,
    selectedUserEmail,
    disburseDialog,
    disburseAmount,
    cancelDisburse,
    disburse,
    openDisburseDialog,
    uploadVoucher,
    showVoucher,
    addExpense,
    deleteExpense,
    resendExpenseReport,
    openExpenseReportForwardDialog,
    expenseReportSupervisorApprove,
    expenseReportSupervisorReject,
    expenseReportForward,
    expenseReportBackWard,
    expenseReportProcessingComplete,
    showExpenseReport,
    submitExpenseReport,
    getAllExpenseReports,
    getExpenseReportsForMe,
    getExpenseReportsApprovedByMe,
    getMyExpenseReports,
    getExpenseReport,
    travelManagerSubmitExpenseReport,
    travelManagerRejectExpenseReport,


}
},



)