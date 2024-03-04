import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import { useUserStore } from './users';
import Fuse from "fuse.js"






import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'
import { useAuthStore } from './auth';
import { globalEventBus } from 'vue-toastification';



export const useTripStore = defineStore("trip", ()=>{
var trips = ref([])
debugger
var authStore = useAuthStore()

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
var selectedHotels = ref([]);





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
    toast.info("Mailing please wait....")
    debugger
    var data = new FormData();
    data.append("recipient", emailRecipient.value)
    data.append("user", JSON.stringify(authStore.user))
    data.append("request", JSON.stringify(request.value))
    data.append("userId", authStore.user._id)
    data.append("whom", "custom")
    data.append("type", type.value)
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "emailRequest", data).then((result)=>{
        trip.value.requests = trip.value.requests.map((r) => {
            if(r._id == result.data._id){
                return result.data
            }else{
                return r
            }
        })
        toast.clear();
        toast.success("Mailed Successfully")
    }).catch((error)=> toast.warning(error))
}



var emailRequest = () => {
    toast.info("Mailing please wait...")

    var data = new FormData();
    data.append("recipient", emailRecipient.value)
    data.append("user", JSON.stringify(authStore.user))
    data.append("request", JSON.stringify(request.value))
    data.append("userId", authStore.user._id)
    data.append("whom", "accounts")
    data.append("type", type.value)
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "emailRequest", data).then((result)=>{
        trip.value.requests = trip.value.requests.map((r)=>{
            if(r._id == result.data._id){
                return result.data
            }else{
                return r
            }
        })
        toast.clear()
        toast.success("Mailed Successfully")
    }).catch((error)=> toast.warning(error))


}



var openEmailDialogCustom = (request2) => {
    request.value = request2
    emailDialogCustom.value = true

}



var complete = (request2) => {
   var data = new FormData();
   data.append("token", authStore.token)
   data.append("request", JSON.stringify(request2))
   data.append("userId", authStore.user._id)
   data.append("token", authStore.token)

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
    debugger
    toast.info("Uploading File Please Wait")
    var data = new FormData();
    data.append("token", authStore.token)
    data.append("what", what)
    data.append("quotation", JSON.stringify(quotation)) 
    data.append("file", event.target.files[0])
    data.append("userId", authStore.user._id)
 

    axios.post(globalUrl.value + "TUploadTicketFile", data).then((result) => {
        toast.clear()
        toast.success("File Uploaded Successfully")
        debugger
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
    toast.info("Uploading File Please Wait")
    var data = new FormData();
    data.append("token", authStore.token)
    data.append("what", what)
    data.append("quotation", JSON.stringify(quotation)) 
    data.append("file", event.target.files[0])
    data.append("userId", authStore.user._id)
   

    axios.post(globalUrl.value + "TUploadHotelFile", data).then((result) => {
        toast.clear()
        toast.success("File Uploaded Successfully")
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
    data.append("token", authStore.token)
    data.append("userId", authStore.user._id)
    

  //   data.append("user", JSON.stringify(authStore.user))

    data.append("quotation", JSON.stringify(quotation.value))
    axios.post(globalUrl.value + "THotelConfirm", data).then((result)=>{
           if(result.data){

            trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
                if(x._id == result.data.quotation._id){
                    return result.data.quotation
                }else{
                    return x
                }
             })
        
             trip.value.requests = trip.value.requests.map((x) => {
                if(x._id == result.data.request._id){
                    return result.data.request
                }else{
                    return x
                }
             })

             hotelConfirmDialog.value = false
           
             toast.success("Quotation Confirmed")
             
           }
    }).catch((error)=>console.log(error))

      
}


var THotelRevoke = () => {

    toast.info("Revoking please wait")
  
    
    var data = new FormData();
    data.append("userId", authStore.user._id)
    data.append("token", authStore.token)
 

  //   data.append("user", JSON.stringify(authStore.user))

    data.append("quotation", JSON.stringify(quotation.value))
    axios.post(globalUrl.value + "THotelRevoke", data).then((result)=>{
           if(result.data){

            trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
                if(x._id == result.data.quotation._id){
                    return result.data.quotation
                }else{
                    return x
                }
             })
        
             trip.value.requests = trip.value.requests.map((x) => {
                if(x._id == result.data.request._id){
                    return result.data.request
                }else{
                    return x
                }
             })
           
            
            hotelRevokeDialog.value = false
            toast.success("Quotation Revoked")

             location.reload()
           }
    }).catch((error)=>console.log(error))

}


var openProceedHotelQuotationDialog = (selectedHotels2) => {
 
    hotelQuotationDialog.value = false;
    proceedHotelQuotationDialog.value = true;
    selectedHotels.value = selectedHotels2



}



var openHotelQuotationDialog = () => {
 
    console.log("function called")

    
    hotelQuotationDialog.value = true   


}


var generateCustomQuoteString = () => {
    
    debugger 

    var travelerInfoString = `
    `

    var totalCosts = 0;
    for(var request of travelerCosts.value){
        debugger

        var newString =  `
        <div>
        <span>${request.name}</span>
        <span>${request.totalcost} </span>
        </div>
        `;

        totalCosts += request.totalcost
        travelerInfoString = travelerInfoString.concat(newString);
    }
     
    var totalCostString = `
    <div>
    <span>Total Cost</span>
    <span>${totalCosts} </span>
    </div>
    `;

    customQuote.value = customQuote.value.concat(travelerInfoString)
    customQuote.value = customQuote.value.concat(totalCostString)
    
    var newQuote = customQuote.value
    return newQuote

}

var generateQuoteString = () => {
    var quoteString = ` `
    var grandTotal = 0;
    for(var hotel of selectedHotels.value){
        var total = hotel.numberOfRooms * hotel.actual_rate
        grandTotal += total;
        var string = `
        <div style="border:2px solid black; padding:10px; margin-bottom:10px">
        <div style="font-weight:bold"><span>Hotel</span> ${hotel.hotel}</div>      
        
        <div>
        <span style="font-weight:bold">Location:</span><span style="margin-right:4px">${hotel.location} </span>
        <span style="font-weight:bold">Room Type: </span><span>${hotel.type}</span>
        </div>
        <div >
        <span style=" font-weight:bold">Average Rate:</span><span style=" margin-right:4px">${hotel.average_rate}</span>
        <span style=" font-weight:bold">Actual Rate:</span><span style=" margin-right:4px">${hotel.actual_rate}</span>
        <span style=" font-weight:bold">Number of Rooms:</span><span style=" margin-right:4px">${hotel.numberOfRooms}</span>
        </div>
        </div>
        `;
        quoteString = quoteString.concat(string)
    }
   
   
    var grandTotalString = `<div>
    <div>  
 <span style=" font-weight:bold">Grand Total</span>
 <span>${grandTotal}</span>
    </div>
`

    quoteString = quoteString.concat(grandTotalString);
    var travelerInfoString = `
    `
    for(var request of travelerCosts.value){
        debugger
        var newString =  `
        <div>
        <span style=" font-weight:bold">${request.name}</span>
        <span>${request.totalcost} </span>
        </div>
        `;
        travelerInfoString = travelerInfoString.concat(newString);
    }
    
    quoteString = quoteString.concat(travelerInfoString);

    return quoteString;

}


var TAddHotelQuote = () => {
    toast.info("Adding custom quote please wait")
    var data = new FormData()
    data.append("token", authStore.token)
    data.append("userId", authStore.user._id)
    data.append("travelerCosts", JSON.stringify(travelerCosts.value))
    var quoteString = generateQuoteString();
    data.append("quoteString", quoteString)
    data.append("quoteGiver", authStore.user.empName)
    data.append("tripId", trip.value._id)
    data.append("requestIds", JSON.stringify(ticketQuotationSelection.value))

    
    data.append("user", JSON.stringify(authStore.user))


    axios.post(globalUrl.value + "TAddHotelQuote", data).then((result)=>{
         

         trip.value.hotelQuotations.push(result.data);

         
         toast.clear()
         toast.success("Hotel Quotation Added")

         customHotelOverlay.value = false;
         proceedHotelQuotationDialog.value = false;

         hotelQuoteSelection.value = []
        
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
   data.append("userId", authStore.user._id)
   data.append("token", authStore.token)
  

   
   axios.post(globalUrl.value + "THotelUnBook", data).then((result)=>{
      if(result.data){
      toast.clear()

      trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
        if(x._id == result.data.quotation._id){
            return result.data.quotation
        }else{
            return x
        }
     })

     trip.value.requests = trip.value.requests.map((x) => {
        if(x._id == result.data.request._id){
            return result.data.request
        }else{
            return x
        }
     })



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
    data.append("userId", authStore.user._id)
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "TTicketRevoke", data).then((result)=>{
  
           if(result.data){
             
             toast.clear()
             trip.value.quotations = trip.value.quotations.map((x)=>{
                if(x._id == result.data.quotation._id){
                    return result.data.quotation

                }else{
                    return x
                }
             })


             trip.value.requests = trip.value.requests.map((x) => {
                if(x._id == result.data.request._id){
                    return result.data.request
                }else{
                    return x
                }
             })
             ticketRevokeDialog.value = false
             toast.success("Successfully revoked quotation")
             
             
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
      data.append("userId", authStore.user._id)
      data.append("token", authStore.token)
  
    //   data.append("user", JSON.stringify(authStore.user))
  
      data.append("quotation", JSON.stringify(quotation.value))
      axios.post(globalUrl.value + "TTicketConfirm", data).then((result)=>{
             if(result.data){
                trip.value.quotations = trip.value.quotations.map((x)=>{
                    if(x._id == result.data.quotation._id){
                        return result.data.quotation
                    }else{
                        return x
                    }
                 })

                 trip.value.requests = trip.value.requests.map((x) => {
                    if(x._id == result.data.request._id){
                        return result.data.request
                    }else{
                        return x
                    }
                 })

                 ticketConfirmDialog.value = false
               toast.success("Quotation confirmed")
            
             }
      }).catch((error)=>console.log(error))
}



var getAllTrips = () => {
    var data = new FormData();
    data.append("token", authStore.token)
    axios.post(globalUrl.value + "getAllTrips", data).then((result) =>{
        
        trips.value = result.data
        filteredTrips.value = result.data
  
    }).catch((error)=> console.log(error))
}





var getTrip = () => {
    var data = new FormData();
    data.append("id", route.params.id)
    data.append("token", authStore.token)
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
    data.append("token", authStore.token)
    var newQuotation = generateCustomQuoteString()
    data.append("quotation", newQuotation)
    data.append("quoteGiver", quoteGiver.value)
    data.append("tripId", trip.value._id)
    data.append("requestIds", JSON.stringify(ticketQuotationSelection.value))
    data.append("userId", authStore.user._id)
    data.append("travelerCosts", JSON.stringify(travelerCosts.value))
    
    data.append("what", what)
    
    
    axios.post(globalUrl.value + "TAddCustomQuote", data).then((result)=>{
     
        travelerCosts.value = [];

        if(what == "ticket"){
            trip.value.quotations.push(result.data) 
        }else if(what == "hotel"){
            trip.value.hotelQuotations.push(result.data)
        }

        overlay.value = false;
        customHotelOverlay.value = false;
        ticketQuotationSelection.value = []
        hotelQuoteSelection.value = []
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
     data.append("userId", authStore.user._id)
     data.append("token", authStore.token)
   


     axios.post(globalUrl.value + "TTicketBook", data).then((result)=>{
        debugger
      
         ticketBookDialog.value = false
         trip.value.quotations = trip.value.quotations.map((x)=>{
            if(x._id == result.data.quotation._id){
                return result.data.quotation
            }else{
                return x
            }
         })

         trip.value.requests = trip.value.requests.map((x) => {
            if(x._id == result.data.request._id){
                return result.data.request
            }else{
                return x
            }
         })

         toast.success("Ticket Booked check")
     }).catch((error)=>console.log(error))

}


var THotelBook = (condition) => {
  var data = new FormData();


  data.append("quotation", JSON.stringify(quotation.value)) 
  data.append("condition", condition)
  data.append("userId", authStore.user._id)
  data.append("token", authStore.token)



  axios.post(globalUrl.value + "THotelBook", data).then((result)=>{
     
      hotelBookDialog.value = false
      trip.value.hotelQuotations = trip.value.hotelQuotations.map((x)=>{
        if(x._id == result.data.quotation._id){
            return result.data.quotation
        }else{
            return x
        }
     })

     trip.value.requests = trip.value.requests.map((x) => {
        if(x._id == result.data.request._id){
            return result.data.request
        }else{
            return x
        }
     })
     toast.success("Hotel Booked")

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
   data.append("userId", authStore.user._id)
   data.append("token", authStore.token)

   
   axios.post(globalUrl.value + "TUnBook", data).then((result)=>{
      if(result.data){
      toast.clear()
      
      trip.value.quotations = trip.value.quotations.map((x)=>{
          if(x._id == result.data.quotation._id){
              return result.data.quotation
            }else{
                return x
            }
        })
    
        trip.value.requests = trip.value.requests.map((x) => {
            if(x._id == result.data.request._id){
                return result.data.request
            }else{
                return x
            }
         })
        
      ticketUnBookDialog.value = false;

      toast.success("Successfully unbooked")
         
     
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


var sendToAccounts = () => {
    toast.info("Sending To Accounts Please Wait....")
    var data = new FormData();
    data.append("budget", JSON.stringify(trip.value))
    data.append("token", authStore.token)

    axios.post(globalUrl.value + "sendToAccounts", data).then((result)=>{
        if(result.data == true){
            toast.clear()
            toast.success("Sent To Accounts")
            trip.value.seekingAccountsApprovalForTickets = true
        }
    }).catch((error)=> toast.warning(error))
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
    generateQuoteString,
    generateCustomQuoteString,
    sendToAccounts,
    selectedHotels,
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

