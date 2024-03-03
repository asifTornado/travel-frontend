import { defineStore } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed} from "vue"
import Fuse from "fuse.js"
import axios from 'axios';
import {useRouter, useRoute} from 'vue-router'
import {useAuthStore} from "./auth"
import { storeToRefs } from 'pinia';
import { useToast } from 'vue-toast-notification';
import { useUserStore } from './users';
import html2pdf from 'html2pdf.js';






export const useRequestsStore = defineStore("requests", () => {
    var requests = ref([])
    var myRequests = ref([])
    var request = ref()
    var requestsProcessedByMe = ref([])
    var {user, token} = storeToRefs(useAuthStore())
    var {globalUrl} = storeToRefs(useGlobalStore())
    var error = ref(null)
    var filteredRequests = ref([])
    var fuse = ref(null)
    var searchTerm = ref('')
    var router = useRouter()
    var route = useRoute()
    var customQuoteContent = ref('')
    var customQuoteGiver = ref('')
    var customHotelQuoteGiver = ref("")
    var hotelOverlay = ref(false)
    var dialog = ref(false)
    var hotelDialogue = ref(false)
    var unbookDialogue = ref(false)
    var overlay = ref(false)
    var quotation = ref({})
    var revokeDialogue = ref(false);
    var hotelunbookDialogue = ref(false);
    var ticketConfirmDialog = ref(false);
    var hotelConfirmDialogue = ref(false);
    var hotelRevokeDialogue = ref(false);
    var emailDialogue = ref(false)
    var emailRecipient = ref('')
    var customHotelOverlay = ref(false);
    var what = ref('')
    var approval = ref('')
    var superVisorApproveDialogue = ref(false)
    var departmentHeadApproveDialogue = ref(false)
    var message = ref('') 
    var toast = useToast()
    var showExpenseReportDialog = ref(false);
    var shareDialogue = ref(false)
    var shareRecipient = ref('')
    var whom = ref('')
    var sendExpenseReportDialog = ref(false);
    var {users} = storeToRefs(useUserStore())
    var expenseReport = ref({})
    var expenses = ref([{date:"", expenseType:"", description:"", amount:"", notes:"", invoice:"", voucherGiven:false}])
    var showSendReportProceedDialog = ref(false);
    var customRequests = ref([])
    var customFilteredRequests = ref([])
    var supervisorRequestApprovalDialog = ref(false);
    const report = ref(null);
    var moreInformationDialog = ref(false);





    
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
   
   function supervisorRequestApprove(){
    toast.info("Seeking approval please wait")
    toast.clear()
      var data = new FormData();
  
      data.append("user", JSON.stringify(user.value))
      data.append("request", JSON.stringify(request.value))
    
      data.append("approval", approval.value)
      data.append("message", message.value)

      data.append("token", token.value)
   
      axios.post(globalUrl.value + "supervisorApproveTrip", data).then((result)=>{
         if(result.data == true){
           supervisorRequestApprovalDialog.value = false
            router.push("/travel/requestsForMe")
         }
      }).catch((error)=>console.log(error))
   }


   function getCustomRequests(){

   
    var data = new FormData();
    data.append("id", user.value._id)
    data.append("token", token.value)


 


    axios.post(globalUrl.value + "getCustomRequests", data).then((result)=>{
      customRequests.value = result.data;
      customFilteredRequests.value = result.data;
      fuse.value = new Fuse(result.data, options.value)

    }).catch((error)=>console.log(error))


   }

   function getCustomRequest(){
    var id = route.params.id;
    var data = new FormData();
    data.append("id", id)
    data.append("token", token.value)

    axios.post(globalUrl.value + "getCustomRequest", data).then((result)=>{
        console.log("this is the result")
        console.log(result.data)
        request.value = result.data

                  
    }).catch((error)=>{
        console.log(error)
    })
}

   

   function openTicketConfirmDialog(quotation2){
      quotation.value = quotation2
      ticketConfirmDialog.value = true
   }

   function openCustomHotelDialogue(quotation2){
        customHotelOverlay.value = true;
        quotation.value = quotation2
   }

   function openEmailDialogue(whomFromComponent){
       whom.value = whomFromComponent;
       emailDialogue.value = true
   }


   function addExpense(counter){
    var newExpense = {date:"", expenseType:"", description:"", amount:"", notes:"", invoice:"", voucherGiven:false}

     expenses.value.splice(counter + 1, 0, newExpense)

   }

   function deleteExpense(counter){
    if(counter == 0){
      return
    }else{
      expenses.value.splice(counter, 1)
      
    }
   }


   function emailRequest(whomFromEmailDialog){
      toast.info("Sending email please wait....")
    
      var data = new FormData()
      data.append("request",  JSON.stringify(request.value));
      data.append("recipient", emailRecipient.value);
      data.append("user", JSON.stringify(user.value));
      data.append("whom", whomFromEmailDialog);
      data.append("token", token.value)

      axios.post(globalUrl.value + "emailRequest", data).then((result)=>{
   
         toast.clear()
         toast.success("Request Emailed")
         request.value.status = result.data;
          emailDialogue.value = false
      }).catch((error)=>console.log(error))

   }
    

   function getMyRequests(){
       
       var data = new FormData()
       data.append("id", user.value._id)
       data.append("token", token.value)

    
          axios.post(globalUrl.value + "getMyRequests", data).then((result)=>{
            
            requests.value = result.data
            filteredRequests.value = result.data;
            fuse.value = new Fuse(result.data, options.value)

          }).catch((error)=>console.log(error))
   
     

   }



   function getAllRequests(){
     
     
   
    console.log("This is the user id")
    console.log(user.value._id)
    var data = new FormData();
    data.append("id", user.value._id)
    data.append("token", token.value)


 


    axios.post(globalUrl.value + "getAllRequests", data).then((result)=>{
      requests.value = result.data;
      filteredRequests.value = result.data;
      fuse.value = new Fuse(result.data, options.value)

    }).catch((error)=>console.log(error))



}


   async function getRequestsForMe(){

    var data = new FormData()
 
    data.append("user", JSON.stringify(user.value))
    data.append("token", token.value)
    console.log("from get requests for me")
    
    axios.post(globalUrl.value + "getRequestsForMe", data).then((results)=>{

      requests.value = results.data
      filteredRequests.value = results.data
      fuse.value = new Fuse(results.data, options.value)
      console.log("these are the results")
      console.log(results.data)



    }).catch((error)=>console.log(error))
     
  
   }



   function search(){
   
    
  
    if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
        filteredRequests.value = requests.value
        return
    }
    var result = fuse.value.search(searchTerm.value);
  
    filteredRequests.value = result.map(result => result.item);
  
    }




function getRequest(){
    var id = route.params.id;
    var data = new FormData();
    data.append("id", id)
    data.append("token", token.value)

    axios.post(globalUrl.value + "getRequest", data).then((result)=>{
        console.log("this is the result")
        console.log(result.data)
        request.value = result.data

                  
    }).catch((error)=>{
        console.log(error)
    })
}





function book(condition){

   
    toast.info("Booking please wait...")
    var data = new FormData();

    console.log("this is the quotation from the book function")
    console.log(quotation.value)
  
   
    
   
    data.append("user", JSON.stringify(user.value))
    data.append("quotation", JSON.stringify(quotation.value))
    data.append("token", token.value)

    
    data.append("request", JSON.stringify(request.value))
    
    data.append("best", condition)

    console.log(quotation.value)

    console.log("this is the quotation")
    console.log("this is the request")
    console.log(request.value)
    console.log(condition)

    axios.post(globalUrl.value + "bookQuotation", data).then((result)=>{
     
     if(result.data){
      toast.clear()
      toast.success("Successfully booked")
        dialog.value = false;      
       request.value = result.data
     }  
    }).catch((error)=>console.log(error))
}






  function showRequest(request){
    debugger
    var id = request._id;
    var url;

    if(request.supervisorApproved == false ||  request.departmentHeadApproved == false){
      url = "/travel/unapproved-request/" + id;
    }else{
      url = "/travel/showRequest/" + id;
    }
  
    router.push(url)
  }


  function showUnapprovedRequest(request){
    var id = request._id;
  
    var url = "/travel/unapproved-request/" + id;
    router.push(url)
  }



  function showCustomRequest(request){
    var id = request._id;
    var url = "/travel/custom-trip/" + id;
    router.push(url)
  }

  function hover(counter){
    if(user.value.userType == 'admin'){
        
        request.value.quotations[counter].hovered = true
    }
 }
 
 
 function moveout(counter){

    if(user.value.userType == 'admin'){
        
        request.value.quotations[counter].hovered = false
    }
 }


 function hotelHover(counter){
   if(user.value.userType == "admin"){
      request.value.hotelQuotations[counter].hovered = true
   }
 }


 function hotelMoveout(counter){
   if(user.value.userType == "admin"){
      request.value.hotelQuotations[counter].hovered = false
   }
 }




 function supervisorApprove(){
     toast.info("Seeking approval please wait")
     toast.clear()
    var data = new FormData();


    data.append("user", JSON.stringify(user.value))
    data.append("request", JSON.stringify(request.value))
    data.append("what", what.value)
    data.append("approval", approval.value)
    data.append("message", message.value)
    data.append("token", token.value)


    console.log("these are the data being sent")
    console.log(request.value)
    console.log(what.value)
    console.log(approval.value)
    console.log(message.value)
 
    axios.post(globalUrl.value + "supervisorApprove", data).then((result)=>{
       if(result.data == true){
          superVisorApproveDialogue.value = false;
          router.push("/travel/requestsForMe")
       }
    }).catch((error)=>console.log(error))
 }


 
 function departmentHeadApprove(){
  toast.info("Seeking approval please wait")
  toast.clear()


    var data = new FormData();

    data.append("user", JSON.stringify(user.value))
    data.append("request", JSON.stringify(request.value))
    data.append("what", what.value)
    data.append("approval", approval.value)
    data.append("message", message.value)
    data.append("token", token.value)
    
 
    axios.post(globalUrl.value + "departmentHeadApprove", data).then((result)=>{
       if(result.data == true){
         departmentHeadApproveDialogue.value = false
          router.push("/travel/requestsForMe")
       }
    }).catch((error)=>console.log(error))
 
 }
 
 
 
 function confirm(){
  toast.info("Confirming please wait")
  

    var data = new FormData();

    data.append("user", JSON.stringify(user.value))
    data.append("request", JSON.stringify(request.value))
    data.append("quotation", JSON.stringify(quotation.value))
    data.append("token", token.value)
    axios.post(globalUrl.value + "confirm", data).then((result)=>{
           if(result.data){
             request.value = result.data
             ticketConfirmDialog.value = false
             toast.clear()
             toast.success("Quotation confirmed")
           }
    }).catch((error)=>console.log(error))
 }
 
 
 

 function getInvoice(url){
    var path = globalUrl.value + "uploads/" + url
    window.open(path, '_blank')
 }
 
 


 function complete(){
  toast.info("Completing please wait")
    var data = new FormData();

    
    data.append("user", JSON.stringify(user.value))
    data.append("id", request.value._id)
    data.append("request", JSON.stringify(request))
    data.append("token", token.value)
 
    axios.post(globalUrl.value + "processed", data).then((result)=>{

       toast.clear()
       toast.success("Status Updated")
        request.value.status = result.data
    }).catch((error)=>console.log(error))
 }



 
 function addCustomQuote(what){
      toast.info("Adding custom quote please wait")
       var data = new FormData()
       
       data.append("quotation", customQuoteContent.value)
       data.append("quoteGiver", customQuoteGiver.value)
       data.append("id", request.value._id)
       data.append("what", what)
       data.append("token", token.value)
       
       data.append("user", JSON.stringify(user.value))
       axios.post(globalUrl.value + "addCustomQuote", data).then((result)=>{
        if(what == "hotel"){
          request.value = result.data
          customHotelOverlay.value = false
        }else if(what == "ticket"){
          console.log("this is the result")
          console.log(result.data)
          request.value = result.data
          overlay.value = false
        }
          
           
       }).catch((error)=>console.log(error))
 }
 


 function addCustomHotelQuote(hotelQuotation, what){
  toast.info("Adding custom quote please wait")
   var data = new FormData()

   data.append("token", token.value)

   var quoteString = `
   <div class='flex flex-col justify-start items-center'>
     <h2><span class='font-bold'>Location:</span> ${hotelQuotation.location}</h2>
     <h3><span class='font-bold'> Hotel: </span> ${hotelQuotation.hotel}</h3>
     <p><span class='font-bold'> Rate: </span> ${hotelQuotation.actual_rate}</p>
   </div>
   `

   
   data.append("quotation", quoteString)
   data.append("quoteGiver", user.value.empName)
   data.append("id", request.value._id)
   
   data.append("user", JSON.stringify(user.value))
   axios.post(globalUrl.value + "addCustomHotelQuote", data).then((result)=>{
       request.value.hotelQuotations.push(result.data)
       hotelOverlay.value = false
       
   }).catch((error)=>console.log(error))
}
 


 function openBookDialogue(quotation2){
   dialog.value = true
   console.log("this is the quotation")
   console.log(quotation2)
   quotation.value = quotation2
   
 }


 function openunbookDialogue(quotation2){
   unbookDialogue.value = true
   console.log("this is the quotation")
   console.log(quotation2)
   quotation.value = quotation2
 }


 function unbook(){
   toast.info("unbooking please wait")
   
   var data = new FormData()

   data.append("quotation", JSON.stringify(quotation.value))
   data.append("id", request.value._id)
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)


   console.log("this is the request and the id")
   console.log(request.value)
   console.log(quotation.value)
   
   axios.post(globalUrl.value + "unBook", data).then((result)=>{
      if(result.data){
      toast.clear()
      toast.success("Successfully unbooked")
         request.value = result.data;
          unbookDialogue.value = false
       }  
   }).catch((error)=>console.log(error))
 }
 
 


 function openRevokeDialogue(quotation2){
  quotation.value = quotation2
  revokeDialogue.value = true
 }

 function revoke(){
   toast.info("Revoking please wait ")
   var data = new FormData();
   data.append("request", JSON.stringify(request.value))
   data.append("quotation", JSON.stringify(quotation.value))
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)
   axios.post(globalUrl.value + "revoke", data).then((result)=>{
 
          if(result.data){
            request.value = result.data
            revokeDialogue.value = false
            toast.clear()
            toast.success("Successfully revoked quotation")
            
          }
   }).catch((error)=>console.log(error))

 }



 function openHotelBookDialogue(quotation2){
   console.log("called hotel book dialogue")
   quotation.value = quotation2
   hotelDialogue.value = true
 }



 function bookHotel(condition){
  toast.info("Booking hotel please wait...")
   var data = new FormData();

   console.log("this is the quotation from the book function")
   console.log(quotation.value)

   data.append("quotation", JSON.stringify(quotation.value))
   data.append("request", JSON.stringify(request.value))
   data.append("best", condition)
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)

 

   console.log(quotation.value)
   console.log(request.value)
   console.log(condition)

   axios.post(globalUrl.value + "bookHotelQuotation", data).then((result)=>{
  
    if(result.data){
      hotelDialogue.value = false
      request.value = result.data;
      toast.clear()
      toast.success("Successfully booked hotel")
    }  
   }).catch((error)=>console.log(error))
 }


 function bookHotelDirect(condition, quotation2){

  toast.info("Booking hotel please wait...")
  var data = new FormData();

  console.log("this is the quotation from the book function")
  console.log(quotation2.value)

  data.append("quotation", JSON.stringify(quotation2))
  data.append("request", JSON.stringify(request.value))
  data.append("best", condition)
  data.append("user", JSON.stringify(user.value))
  data.append("token", token.value)



  console.log(quotation.value)
  console.log(request.value)
  console.log(condition)

  axios.post(globalUrl.value + "bookHotelQuotation", data).then((result)=>{

   if(result.data){
    
    request.value = result.data;
    toast.clear()
    toast.success("Successfully booked hotel")
   }  
  }).catch((error)=>console.log(error))
      

 }



 function hotelunbook(){
  toast.info("Unbooking hotel please wait")
   var data = new FormData()

   data.append("quotation", JSON.stringify(quotation.value))
   data.append("id", request.value._id)
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)


   console.log("this is the request and the id")
   console.log(request.value)
   console.log(quotation.value)
   
   axios.post(globalUrl.value + "hotelunbook", data).then((result)=>{

      if(result.data){
        hotelunbookDialogue.value = false;
        request.value = result.data;
        toast.clear()
        toast.success("Successfully unbooked hotel")
       }  
   }).catch((error)=>console.log(error))


 }


 function openHotelunbookDialogue(quotation2){
   
   quotation.value = quotation2
   hotelunbookDialogue.value = true
 }


 function openHotelConfirmDialogue(quotation2){
   quotation.value = quotation2
   hotelConfirmDialogue.value = true
 }


 function hotelConfirm(){
  toast.info("confirming hotel please wait")
   var data = new FormData();
   data.append("id", request.value._id)
   data.append("quotation", JSON.stringify(quotation.value))
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)

   axios.post(globalUrl.value + "hotelconfirm", data).then((result)=>{
 
          if(result.data){
            hotelConfirmDialogue.value = false
            request.value = result.data;
            toast.clear()
            toast.success("Successfully confirmed hotel")
          }
   }).catch((error)=>console.log(error))

 }



 function openHotelRevokeDialogue(quotation2){
   hotelRevokeDialogue.value = true
   quotation.value = quotation2
 }


 function hotelRevoke(){
  toast.info("Revoking please wait...")
   var data = new FormData();
   data.append("request", JSON.stringify(request.value))
   data.append("quotation", JSON.stringify(quotation.value))
   data.append("user", JSON.stringify(user.value))
   data.append("token", token.value)

   axios.post(globalUrl.value + "hotelRevoke", data).then((result)=>{
 
          if(result.data){
            hotelRevokeDialogue.value = false
            request.value = result.data;
            toast.clear()
            toast.success("Successfully revoked hotel")
          }
   }).catch((error)=>console.log(error))


 }




 var uploadFile = (event, what, quotation) => {
  var data = new FormData();
  data.append("what", what)
  data.append("quotation", JSON.stringify(quotation)) 
  data.append("file", event.target.files[0])
  data.append("userId", user.value._id)
  data.append("token", token.value)

  axios.post(globalUrl.value + "TUploadTicketFile", data).then((result) => {
         request.value.quotations = trip.value.quotations.map((x)=>{ 
                 
          if(x._id == quotation._id){
              var newQuotation = x
              newQuotation.invoices.push(result.data)
              return newQuotation
          }else{
              return x
          }
         })
  }).catch((error)=>console.log(error))

}


var uploadHotelFile = (event, what, quotation) => {
  var data = new FormData();
  data.append("what", what)
  data.append("quotation", JSON.stringify(quotation)) 
  data.append("file", event.target.files[0])
  data.append("userId", user.value._id)
  data.append("token", token.value)

  axios.post(globalUrl.value + "TUploadHotelFile", data).then((result) => {
      request.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
        if(x._id == quotation._id){
            var newQuotation = x
            newQuotation.invoices.push(result.data)
            return newQuotation

      }else{
          return x
      }
  })
  }).catch((error)=>console.log(error))

}



 function openApprovalDialogue(approver, what2, approval2){

   approval.value = approval2
   what.value = what2

   if(approver == "departmentHead"){
      departmentHeadApproveDialogue.value = true
   }else if(approver == "superVisor"){
      superVisorApproveDialogue.value = true
   }

 }


 function getEmailRequest(){
  
  var userId = route.params.userId
  var requestId = route.params.requestId

  var data = new FormData();
  data.append("userId", userId)
  data.append("requestId", requestId)
  data.append("user", JSON.stringify(user.value))
  data.append("token", token.value)

  axios.post(globalUrl + "getEmailRequest", data).then((result) =>{
    user.value = result.data.user
    request.value = result.data.request
  }).catch((error)=>toast.warning(error))
 }



 function share(){
  toast.info("sharing please wait")
  console.log("share called")
  var data = new FormData()
  var shareRecipient2 = users.value.filter((x)=>x.mailAddress == shareRecipient.value)[0]
  data.append("sharer", JSON.stringify(user.value))
  data.append("recipient", JSON.stringify(shareRecipient2))
  data.append("request", JSON.stringify(request.value))
  data.append("token", token.value)

  axios.post(globalUrl.value + "share", data).then((result)=>{
    toast.clear()
    toast.success("Request Shared")
    shareDialogue.value = false
  }).catch((error)=>{
    toast.clear()
    toast.warning("error")
  })
 }

 function generatePdf(element) {
  return new Promise((resolve, reject) => {
    html2pdf(element, {
      output: 'dataurl',
      margin: 10,
      filename: 'generated.pdf',
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }).then(pdfData => {
      resolve(pdfData);
    }).catch(error => {
      reject(error);
    });
  });
}

 async function sendExpenseReport(){

   toast.info("Sending Report Please Wait...")
 
   var data = new FormData();
   debugger



   var newReport = {};
   var traveler = user
   newReport.employeeName = traveler.value.empName;
   newReport.employeeId = traveler.value._id;
   newReport.department = traveler.value.department;
   newReport.expenses = expenses.value
   newReport.startDate = request.value.startDate;
   newReport.endDate = request.value.endDate;

   data.append("expenseReport", JSON.stringify(newReport))
   data.append("requestId", request.value._id);
   data.append("token", token.value)
   

   axios.post(globalUrl.value + "sendExpenseReport", data).then((result)=>{
       
      request.value.expenseReportGiven = true; 
      toast.clear()
      showSendReportProceedDialog.value = false;
      sendExpenseReportDialog.value = false;
      toast.success("Report Sent")

   }).catch((error)=> toast.warning(error))


 }


 function getExpenseReport(){
  toast.info("Getting Expense Report")

  var data = new FormData()
  data.append("id", request.value._id);
  data.append("token", token.value)

  axios.post(globalUrl.value + "getExpenseReport", data).then((result)=>{
    expenseReport.value = result.data
 
    toast.clear();
    toast.success("Got Expense Report")
  })

 }


function openShowExpenseReportDialog(){
  getExpenseReport()
  showExpenseReportDialog.value = true
}



function openSupervisorRequestApprovalDialog(approval2){
  approval.value = approval2
  supervisorRequestApprovalDialog.value = true

}


var uploadFile = (event, what, quotation) => {
  var data = new FormData();
  data.append("what", what)
  data.append("quotation", JSON.stringify(quotation)) 
  data.append("file", event.target.files[0])
  data.append("userId", user.value._id)
  data.append("token", token.value)

  axios.post(globalUrl.value + "TUploadTicketFile", data).then((result) => {
         request.value.quotations = request.value.quotations.map((x)=>{ 
                 
          if(x._id == quotation._id){
              var newQuotation = x
              newQuotation.invoices.push(result.data)
              return newQuotation
          }else{
              return x
          }
         })
  }).catch((error)=>console.log(error))

}


var uploadHotelFile = (event, what, quotation) => {
  var data = new FormData();
  data.append("what", what)
  data.append("quotation", JSON.stringify(quotation)) 
  data.append("file", event.target.files[0])
  data.append("userId", user.value._id)
  data.append("token", token.value)

  axios.post(globalUrl.value + "TUploadHotelFile", data).then((result) => {
      request.value.hotelQuotations = request.value.hotelQuotations.map((x)=>{
        if(x._id == quotation._id){
            var newQuotation = x
            newQuotation.invoices.push(result.data)
            return newQuotation

      }else{
          return x
      }
  })
  }).catch((error)=>console.log(error))

}


var getUnapprovedRequests = () => {
  var data = new FormData();
  data.append("id", user.value._id)
  data.append("token", token.value)
  axios.post(globalUrl.value + "getUnapprovedRequests", data).then((result)=>{
  
    requests.value = result.data;
    filteredRequests.value = result.data;
    fuse.value = new Fuse(result.data, options.value)

  }).catch((error)=> toast.warning(error))
}

    
var uploadVoucher = (event, counter) => {
  var data = new FormData();
  debugger
  data.append("file", event.target.files[0])
  data.append("token", token.value)
  

  axios.post(globalUrl.value + "uploadVoucher", data).then((result)=>{
        expenses.value[counter].voucherGiven = true
        expenses.value[counter].invoice = result.data
  }).catch((error)=> console.log(error))
}

var showVoucher = (counter, type="send") => {
  debugger
  var filePath;

  if(type == "send"){
    filePath = expenses.value[counter].invoice
  }else{
    filePath = expenseReport.value.expenses[counter].invoice
  }
 

  var path = globalUrl.value + "uploads/" + filePath
  window.open(path, '_blank')
 
  
}

    return {
        customQuoteContent, overlay, dialog, quotation, unbookDialogue, customQuoteGiver, emailRecipient, emailDialogue,
        requests, myRequests, request, requestsProcessedByMe,  error, searchTerm, fuse, filteredRequests,  shareDialogue,
        customHotelOverlay, what, message, superVisorApproveDialogue, departmentHeadApproveDialogue, approval, shareRecipient,
        revokeDialogue, customHotelQuoteGiver, hotelOverlay,hotelDialogue, hotelunbookDialogue, hotelConfirmDialogue, hotelRevokeDialogue,
        whom, ticketConfirmDialog, showExpenseReportDialog, sendExpenseReportDialog, expenseReport, expenses,
        showSendReportProceedDialog, report, customRequests, customFilteredRequests, supervisorRequestApprovalDialog,
        moreInformationDialog,
        uploadVoucher, showVoucher,
        uploadHotelFile, openSupervisorRequestApprovalDialog, supervisorRequestApprove, 
        getUnapprovedRequests, showUnapprovedRequest,
        openShowExpenseReportDialog, getCustomRequest, getCustomRequests, showCustomRequest,
        openCustomHotelDialogue, openApprovalDialogue,  getEmailRequest, share, getExpenseReport,
        getMyRequests, getRequestsForMe, search, showRequest, unbook, revoke, openRevokeDialogue, emailRequest, 
        getRequest, book, hover, moveout, supervisorApprove, departmentHeadApprove, hotelHover, hotelMoveout,
        confirm, getInvoice, complete, addCustomQuote, getAllRequests, openBookDialogue, openunbookDialogue,
        addCustomHotelQuote, openHotelBookDialogue, bookHotel, hotelunbook, uploadFile, openEmailDialogue,
        openHotelunbookDialogue, openHotelConfirmDialogue, hotelConfirm, openHotelRevokeDialogue, hotelRevoke,
        bookHotelDirect, openTicketConfirmDialog, addExpense, deleteExpense, sendExpenseReport, generatePdf
    }

    
})