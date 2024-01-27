import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import { useUserStore } from './users';
import Fuse from "fuse.js"






import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'
import { useAuthStore } from './auth';



export const useTripStore = defineStore("trip", ()=>{
var trips = ref([])
debugger
var {user} = storeToRefs(useAuthStore())
var best = ref();
var ticketRevokeDialog = ref(false)
var ticketBookDialog = ref(false)
var hotelBookDialog = ref(false)
var ticketUnBookDialog = ref(false) 
var quotation = ref({})
var customQuote = ref('')
var customHotelQuote = ref('')
var filteredTrips = ref([])
var quoteGiver = ref('')
var ticketQuotationSelection = ref([])
var overlay = ref(false)
var customHotelOverlay = ref(false)
var bookSelection = ref([])
var trip = ref()
var toast = useToast()
var {globalUrl} = storeToRefs(useGlobalStore())
var requests = ref([])
var route = useRoute()
var router = useRouter()
var customHotelOverlay = ref(false)
var quotationToEdit = ref({})
var ticketConfirmDialog = ref(false)
var EditQuotationDialog = ref(false)
var hotelQuotationDialog = ref(false)
var proceedHotelQuotationDialog = ref(false)
var hotelQuoteSelection = ref([])
var hotelUnBookDialog = ref(false);
var hotelConfirmDialog = ref(false);
var hotelRevokeDialog = ref(false)
var emailDialogAccounts = ref(false);
var emailDialogCustom = ref(false);
var emailRecipient = ref('');
var showLogs = ref(false);
var request = ref();
var type = ref("");
var travelerCosts = ref([]);





var addTraveler = (request2) =>{
    debugger
    var newTraveler = {id:request2.requester._id, name:request2.requester.empName, totalcost:''}
    var exist = travelerCosts.value.find(x => x.id == request2.requester._id)
    if(exist != null){
        return
    }else{
        travelerCosts.value.push(newTraveler)
    }
}

var removeTraveler = (request2) => {
    debugger
    travelerCosts.value = travelerCosts.value.filter(x => x.id != request2.requester._id)
}


var addOrRemoveTraveler = (event, request2) => {
    debugger
    if(event.target.checked == true){
        addTraveler(request2)
    }else{
        removeTraveler(request2)
    }
}

var checkAllBeingProcessed = () => {
    var notBeingProcessed = trip.value.requests.filter((request)=> request.beingProcessed == false)

    if(notBeingProcessed.length != 0){
        return false
    }else{
        return true
    }
}





var openEmailDialogAccounts = (request2) => {
    request.value = request2
    emailDialogAccounts.value = true;



}


var emailRequestCustom = () => {
    var data = new FormData();
    data.append("recipient", emailRecipient.value)
    data.append("user", JSON.stringify(user.value))
    data.append("request", JSON.stringify(request.value))
    data.append("userId", user.value._id)
    data.append("whom", "custom")
    data.append("type", type.value)

    axios.post(globalUrl.value + "emailRequest", data).then((result)=>{
        location.reload()
    }).catch((error)=> toast.warning(error))
}



var emailRequest = () => {
    var data = new FormData();
    data.append("recipient", emailRecipient.value)
    data.append("user", JSON.stringify(user.value))
    data.append("request", JSON.stringify(request.value))
    data.append("userId", user.value._id)
    data.append("whom", "accounts")
    data.append("type", type.value)

    axios.post(globalUrl.value + "emailRequest", data).then((result)=>{
        location.reload()
    }).catch((error)=> toast.warning(error))


}



var openEmailDialogCustom = (request2) => {
    request.value = request2
    emailDialogCustom.value = true

}



var complete = (request2) => {
   var data = new FormData();
   data.append("request", JSON.stringify(request2))
   data.append("userId", user.value._id)

   axios.post(globalUrl.value + "processed", data).then((result)=>{
       location.reload()
    }).catch((error)=>console.log(error))
}



var openHotelConfirmDialog = (quotation2) => {
    quotation.value = quotation2
    hotelConfirmDialog.value = true;

}


var openHotelRevokeDialog = (quotation2) => {
   quotation.value = quotation2
   hotelRevokeDialog.value = true;

}


var uploadFile = (event, what, quotation) => {
    var data = new FormData();
    data.append("what", what)
    data.append("quotation", JSON.stringify(quotation)) 
    data.append("file", event.target.files[0])
    data.append("userId", user.value._id)

    axios.post(globalUrl.value + "TUploadTicketFile", data).then((result) => {
           trip.value.quotations = trip.value.quotations.map((x)=>{ 
                   
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

    axios.post(globalUrl.value + "TUploadHotelFile", data).then((result) => {
        trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
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




var THotelConfirm = () => {

    toast.info("Confirming please wait")
  
    
    var data = new FormData();
    data.append("userId", user.value._id)

  //   data.append("user", JSON.stringify(user.value))

    data.append("quotation", JSON.stringify(quotation.value))
    axios.post(globalUrl.value + "THotelConfirm", data).then((result)=>{
           if(result.data){
           
             toast.success("Quotation Confirmed")
             location.reload()
           }
    }).catch((error)=>console.log(error))

      
}


var THotelRevoke = () => {

    toast.info("Revoking please wait")
  
    
    var data = new FormData();
    data.append("userId", user.value._id)

  //   data.append("user", JSON.stringify(user.value))

    data.append("quotation", JSON.stringify(quotation.value))
    axios.post(globalUrl.value + "THotelRevoke", data).then((result)=>{
           if(result.data){
           
             toast.success("Quotation Revoked")
             location.reload()
           }
    }).catch((error)=>console.log(error))

}


var openProceedHotelQuotationDialog = (quotation2) => {
 
    hotelQuotationDialog.value = false;
    proceedHotelQuotationDialog.value = true;
    customQuote.value = quotation2



}



var openHotelQuotationDialog = () => {
 
    console.log("function called")

    
    hotelQuotationDialog.value = true   


}


var TAddHotelQuote = () => {
    toast.info("Adding custom quote please wait")
    var data = new FormData()
    data.append("userId", user.value._id)
    data.append("travelerCosts", JSON.stringify(travelerCosts.value))
 
    var quoteString = `
    <div class='flex flex-col justify-start items-center'>
    <h2><span class='font-bold'>Location:</span> ${customQuote.value.location}</h2>
      <h3><span class='font-bold'> Hotel: </span> ${customQuote.value.hotel}</h3>
      <p><span class='font-bold'> Rate: </span> ${customQuote.value.actual_rate}</p>
    </div>
    `
 
    
    data.append("quoteString", quoteString)
    data.append("quoteGiver", user.value.empName)
    data.append("tripId", trip.value._id)
    data.append("requestIds", JSON.stringify(ticketQuotationSelection.value))

    
    data.append("user", JSON.stringify(user.value))


    axios.post(globalUrl.value + "TAddHotelQuote", data).then((result)=>{
        location.reload()
        
    }).catch((error)=>console.log(error))
}

var openTicketRevokeDialog = (quotation2) => {
    
  quotation.value = quotation2
  ticketRevokeDialog.value = true


}


var openEditQuotation = (quotation2) => {
 
  quotation.value = quotation2
  EditQuotationDialog.value = true

}


var THotelUnBook = () => {
 
    toast.info("unbooking please wait")
   
   var data = new FormData()

   data.append("quotation", JSON.stringify(quotation.value))
   data.append("userId", user.value._id)
  

   
   axios.post(globalUrl.value + "THotelUnBook", data).then((result)=>{
      if(result.data){
      toast.clear()
      toast.success("Successfully unbooked")
         
      hotelUnBookDialog.value = false;
      location.reload();
       }  
   }).catch((error)=>console.log(error))

}


var TTicketRevoke = () => {

    toast.info("Revoking please wait ")
    var data = new FormData();
  
    data.append("quotation", JSON.stringify(quotation.value))
    data.append("userId", user.value._id)

    axios.post(globalUrl.value + "TTicketRevoke", data).then((result)=>{
  
           if(result.data){
             
             toast.clear()
             toast.success("Successfully revoked quotation")
             location.reload()
             
           }
    }).catch((error)=>console.log(error))

}


var openTicketConfirmDialog = (quotation2) => {

         quotation.value = quotation2
         ticketConfirmDialog.value = true   

}


var TTicketConfirm = () => {
    toast.info("Confirming please wait")
  
      
      var data = new FormData();
      data.append("userId", user.value._id)
  
    //   data.append("user", JSON.stringify(user.value))
  
      data.append("quotation", JSON.stringify(quotation.value))
      axios.post(globalUrl.value + "TTicketConfirm", data).then((result)=>{
             if(result.data){
             
               toast.success("Quotation confirmed")
               location.reload()
             }
      }).catch((error)=>console.log(error))
}



var getAllTrips = () => {
    axios.post(globalUrl.value + "getAllTrips").then((result) =>{
        
        trips.value = result.data
        filteredTrips.value = result.data
  
    }).catch((error)=> console.log(error))
}





var getTrip = () => {
    var data = new FormData();
    data.append("id", route.params.id)
    axios.post(globalUrl.value + "getTrip", data).then((result)=>{
        trip.value = result.data
    }).catch((error)=> console.log(error))
    
}


var showTrip = (id) => {
   router.push("/travel/trip/" + id)
}


var TAddCustomQuote = (what) => {
    toast.info("Adding custom quote please wait")
    var data = new FormData()
    
    data.append("quotation", customQuote.value)
    data.append("quoteGiver", quoteGiver.value)
    data.append("tripId", trip.value._id)
    data.append("requestIds", JSON.stringify(ticketQuotationSelection.value))
    data.append("userId", user.value._id)
    data.append("travelerCosts", JSON.stringify(travelerCosts))
    
    data.append("what", what)
    
    
    axios.post(globalUrl.value + "TAddCustomQuote", data).then((result)=>{
     
        travelerCosts.value = [];

        if(what == "ticket"){
            trip.value.quotations.push(result.data) 
        }else if(what == "hotel"){
            trip.value.hotelQuotations.push(result.data)
        }

        overlay.value = false;
        toast.info("Success")
       
        
    }).catch((error)=>console.log(error))

}


var ticketQuotationAll = (event) => {
    console.log("initial")
console.log(ticketQuotationSelection.value)
if(event.target.checked == true){
    ticketQuotationSelection.value = [];
    trip.value.requests.forEach((request)=>{
        addTraveler(request)
        ticketQuotationSelection.value.push(request._id)
    })
console.log(ticketQuotationSelection.value)
}else if(event.target.checked == false){
    ticketQuotationSelection.value = []
    travelerCosts.value = []

}

}


var hotelQuotationAll = (event) => {
    console.log("initial")
    console.log(hotelQuoteSelection.value)
    if(event.target.checked == true){
        hotelQuoteSelection.value = [];
        trip.value.requests.forEach((request)=>{
            
            hotelQuoteSelection.value.push(request._id)
        })
    console.log(hotelQuoteSelection.value)
    }else if(event.target.checked == false){
        hotelQuoteSelection.value = []
    
    }



}


var openBookDialog  = (quotation2) => {
    
    
 
    var booked = checkBookedElseWhere(quotation2.requestIds, 'ticket')
    if(booked == true){
        toast.info("One of the users here have already been booked")
        return
    }
    ;
    ticketBookDialog.value = true
    quotation.value = quotation2
    
  }

  var checkBooked = (what) => {
    if(what == 'ticket'){

        var notBooked = trip.value.requests.filter((request)=> request.booked == false)
        if(notBooked.length == 0){
            return true;
        }else{
            return false;
        }


    }else{
        var notBooked = trip.value.requests.filter((request)=> request.hotelBooked == false)
        if(notBooked.length == 0){
            return true;
        }else{
            return false
        }
    }
    
  }

var checkBookedElseWhere = (requestIds, what) => {
       if(what == 'ticket'){
        var notBooked = trip.value.requests.filter((request)=> requestIds.includes(request._id) && request.booked == true)
        if(notBooked.length != 0){
            return true;
        }

       }else{
        var notBooked = trip.value.requests.filter((request)=> requestIds.includes(request._id) && request.hotelBooked == true)
        if(notBooked.length != 0){
            return true;
        }
       }


}



  var openHotelBookDialog = (quotation2) => {

    var booked = checkBookedElseWhere(quotation2.requestIds, 'hotel')

    if(booked == true){
        toast.info("One of the users here have already been booked")
        return
    }

    hotelBookDialog.value = true
    quotation.value = quotation2

  }

var openTicketUnBookDialog = (quotation2) => {
    console.log("called")
     quotation.value = quotation2
     ticketUnBookDialog.value = true


}


var bookSelectionAll = (event) => {

    if(event.target.checked == true){
       ticketQuotationSelection.value = [];
        trip.value.requests.forEach((request)=>{
            
            bookSelection.value.push(request._id)
        })
   
    }else if(event.target.checked == false){
        bookSelection.value = []
    
    }
  

}


var TTicketBook = (condition) => {
     var data = new FormData();


     data.append("quotation", JSON.stringify(quotation.value)) 
     data.append("condition", condition)
     data.append("userId", user.value._id)
   


     axios.post(globalUrl.value + "TTicketBook", data).then((result)=>{
        debugger
         toast.success("Ticket Booked check")
         ticketBookDialog.value = false
         trip.value.quotations = trip.value.quotations.map((x)=>{
            if(x._id == result.data._id){
                return result.data
            }else{
                return x
            }
         })
     }).catch((error)=>console.log(error))

}


var THotelBook = (condition) => {
  var data = new FormData();


  data.append("quotation", JSON.stringify(quotation.value)) 
  data.append("condition", condition)
  data.append("userId", user.value._id)



  axios.post(globalUrl.value + "THotelBook", data).then((result)=>{
      toast.success("Hotel Booked")
      hotelBookDialog.value = false
      trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
        if(x._id == result.data._id){
            return result.data
        }else{
            return x
        }
      })
  }).catch((error)=>console.log(error))



}


var getUserName = (id) => {
    
    var userName = trip.value.requests.find((request)=> request._id == id).requester.empName
    return userName
}


var unBook = () => {
    toast.info("unbooking please wait")
   
   var data = new FormData()

   data.append("quotation", JSON.stringify(quotation.value))
   data.append("requests", JSON.stringify(trip.value.requests))
   data.append("userId", user.value._id)

   
   axios.post(globalUrl.value + "TUnBook", data).then((result)=>{
      if(result.data){
      toast.clear()
      toast.success("Successfully unbooked")
         
      ticketUnBookDialog.value = false;
      location.reload();
       }  
   }).catch((error)=>console.log(error))
}






var checkConfirmation = (what) => {
    if(what == 'ticket'){
        var notConfirmed = trip.value.requests.filter((request)=> request.confirmed == false)
        if(notConfirmed.length == 0){
            return true;
        }else{
            return false
        }
    }else{
       var notConfirmed = trip.value.requests.filter((request)=> request.hotelConfirmed == false)
       if(notConfirmed.length == 0){
           return true;
       }else{
        return false;
       }
    }
}


var checkAllConfirmation = () => {
    debugger
    var notConfirmedTickets = trip.value.requests.filter((request)=> request.confirmed == false)
    var notConfirmedHotels =  trip.value.requests.filter((request)=> request.hotelConfirmed == false)

    if(notConfirmedTickets.length != 0 || notConfirmedHotels.length != 0){
                   return false;
        }else{
                   return true
     }

}

var  openHotelUnBookDialog = (quotation2) => {

  quotation.value = quotation2
  hotelUnBookDialog.value = true;

}


return {
    getAllTrips,
    getTrip,
    showTrip,
    TAddCustomQuote,
    ticketQuotationAll,
    openBookDialog,
    bookSelectionAll,
    TTicketBook,
    getUserName,
    openTicketUnBookDialog, 
    unBook,
    openTicketConfirmDialog,
    TTicketConfirm,
    openTicketRevokeDialog,
    TTicketRevoke,
    checkConfirmation,
    openEditQuotation,
    openHotelQuotationDialog,
    TAddHotelQuote,
    openProceedHotelQuotationDialog,
    hotelQuotationAll,
    openHotelBookDialog,
    THotelBook,
    openHotelUnBookDialog,
    THotelUnBook,
    THotelConfirm,
    THotelRevoke,
    openHotelConfirmDialog,
    openHotelRevokeDialog,
    uploadFile,
    uploadHotelFile,
    checkBooked,
    checkBookedElseWhere,
    checkAllConfirmation,
    complete,
    openEmailDialogAccounts,
    openEmailDialogCustom,
    emailRequest,
    checkAllBeingProcessed,
    emailRequestCustom,
    addTraveler,
    removeTraveler,
    addOrRemoveTraveler,
    request,
    emailRecipient,
    emailDialogAccounts,
    emailDialogCustom,
    hotelConfirmDialog,
    hotelRevokeDialog,
    hotelUnBookDialog,
    hotelBookDialog,
    customHotelOverlay,
    hotelQuoteSelection,
    hotelQuotationDialog,
    EditQuotationDialog,
    ticketRevokeDialog,
    ticketConfirmDialog,
    best,
    bookSelection,
    quoteGiver,
    ticketQuotationSelection,
    overlay,
    filteredTrips,    
    trips,
    trip,
    customQuote,
    customHotelQuote,
    ticketBookDialog,
    hotelBookDialog,
    ticketUnBookDialog,
    proceedHotelQuotationDialog,
    showLogs,
    type,
    travelerCosts,
    


}

},





)

