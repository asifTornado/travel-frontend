import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import { useUserStore } from './users';
import Fuse from "fuse.js"





import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'



export const useBudgetStore = defineStore("budget", ()=>{

var budget = ref({
    travellerName:'',
    travellerEmails:['',],
    destination:'',
    purpose:'',
    departure_date:'',
    arrival_date:'',
    estimated_total_cost:'',
    initiated:'No',
    travelMode:'',
    numberOfDays:0,
    travelers:[],
    numberOfTravelers:"1",
    airTicketBudget:'0',
    hotelBudget:'0',
    totalBookingCost:'0',
    transportExpense:'0',
    incidentalExpense:'0',
    totalTripBudget:'0',
    initiated:'No',




})


var form = ref(null)

var exist = ref([
    value => {
      if(value) return true
      return '* Field Required'
    }
  ])


function changeTotal(){
    
    debugger

    budget.value.totalBookingCost = (  parseInt(budget.value.airTicketBudget) + parseInt(budget.value.hotelBudget)).toString()
    budget.value.totalTripBudget =  ( parseInt(budget.value.totalBookingCost) + parseInt(budget.value.transportExpense) + parseInt(budget.value.incidentalExpense)).toString()
   
}
 

function addTraveler(counter){
    budget.value.travellerEmails.splice(counter + 1, 0, '')
    budget.value.numberOfTravelers = budget.value.travellerEmails.length.toString()

}


function deleteTraveler(counter){
    if(counter < 1){
        return
    }
    budget.value.travellerEmails.splice(counter, 1)
    budget.value.numberOfTravelers = budget.value.travellerEmails.length.toString()
}


function getNumberOfDays() {
    // Parse the input strings into Date objects
    const startDate2 = new Date(budget.value.departure_date);
    const endDate2 = new Date(budget.value.arrival_date);
  
    // Calculate the time difference in milliseconds
    const timeDifference = endDate2 - startDate2;
  
    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    budget.value.numberOfDays = daysDifference.toString()
  }



var fileInput = ref(null)

var route = useRoute()

var router = useRouter()

var budgets = ref([])


var filteredBudgets = ref([])

var {users} = storeToRefs(useUserStore()) 

var toast = useToast()

var {globalUrl} = storeToRefs(useGlobalStore())

var fuse = ref(null)
var searchTerm = ref('')


var name = ref('')
var destination = ref('')
var departure_date = ref('')
var arrival_date = ref('')
var overlay = ref(false)




var options = ref({
    includeScore: true,

      keys: [{name:'travellerName', weight:0.1},
     
      {name:'destination', weight:0.1},
      {name:'purpose', weight:0.1},
      {name:'departure_date', weight:0.5},
      {name:'arrival_date', weight:0.1},
      {name:'_id', weight:0.1}, 
    ]

    })





var getBudget = () => {
    var id = route.params.id
    var data = new FormData()
    data.append("id", id)

    axios.post(globalUrl.value + "getBudget", data).then((result)=>{
       budget.value = result.data
       budget.value.travellerEmails = result.data.travelers.map((traveler)=>traveler.mailAddress)
    }).catch((error)=>console.log(error))
}




function resetBudget(){
    budget.value = {
        // id:'',
        travellerName:'',
        travellerEmails:['',],
        destination:'',
        purpose:'',
        departure_date:'',
        arrival_date:'',
        estimated_total_cost:'',
        initiated:'No',
        travelMode:'',
        numberOfDays:0,
        travelers:[],
        numberOfTravelers:"1",
        airTicketBudget:'0',
        hotelBudget:'0',
        totalBookingCost:'0',
        transportExpense:'0',
        incidentalExpense:'0',
        totalTripBudget:'0',
        initiated:'No',
    
    
    }

}





var getBudgets = () => {
    axios.post(globalUrl.value + "getBudgets").then((result)=>{
        budgets.value = result.data
        filteredBudgets.value = result.data
        fuse.value = new Fuse(result.data, options.value)
    }).catch((error)=>console.log(error))
}


function addBudget(){
    toast.info("Adding to budget please wait.....")
    var data = new FormData()

    // var travellers = users.value.filter((user)=>user.mailAddress == budget.value.travellerEmail)[0]

    var travelers = [];

    budget.value.travellerEmails.forEach((email)=>{
      var newTraveler = users.value.filter((user)=>user.mailAddress == email)[0]
      travelers.push(newTraveler)  
    })

    budget.value.travelers = travelers
     
    debugger

    data.append("budget", JSON.stringify(budget.value))

    axios.post(globalUrl.value + "insertBudget", data).then((result)=>{
        toast.clear()
        toast.success("Added To Budget")
        toast.clear()
        router.push("/travel/budget")
    }).catch((error)=>console.log(error))
}


var uploadExcel = () =>{
    fileInput.value.click()
}




var deleteBudget = (id) => {
    var data = new FormData()
    debugger
    data.append("id", id)
    axios.post(globalUrl.value + "deleteBudget", data).then((result)=>{
        debugger
      budgets.value = budgets.value.filter((budget)=> budget._id != id);
      filteredBudgets.value = budgets.value
    }).catch((error) => console.log(error))
  }



var updateBudget =async () => {
    var validation = await form.value.validate()
    if(validation.valid){

    
    var data = new FormData()
    toast.info("Updating Budget Please Wait.....")

 

    var travelers = [];

    budget.value.travellerEmails.forEach((email)=>{
      var newTraveler = users.value.filter((user)=>user.mailAddress == email)[0]
      travelers.push(newTraveler)  
    })

    budget.value.travelers = travelers

    debugger
    data.append("budget", JSON.stringify(budget.value))
    axios.post(globalUrl.value + "updateBudget", data).then((result)=>{
          toast.clear()
          toast.success("Budget Updated Successfully")
    }).catch((error)=>console.log(error))
  }
}


var initiate = (budget) => {
    overlay.value = true
    var data = new FormData()
    data.append("budget", JSON.stringify(budget))

    console.log(budget)
    axios.post(globalUrl.value + "initiate", data).then((result)=>{
            overlay.value = false
            debugger
            budgets.value = budgets.value.map((item)=>{
              if(item._id == budget._id){
                item.initiated = "Yes"
                return item
              }else{
                return item
              }
            })
    }).catch((error)=>console.log(error))
}


function searchBudget(){
    var newSearch = {
        name: name.value,
        destination: destination.value,
        departure_date: departure_date.value,
        arrival_date: arrival_date.value
      }
      

      
    
      var data = new FormData()
      data.append("search", JSON.stringify(newSearch))
    
      console.log("these are the data being sent")
      console.log(newSearch)
      axios.post(globalUrl.value + "searchBudget", data).then((result)=>{
              budgets.value = result.data.value
             console.log("these are the returned values")
             console.log(result.data.value)
      }).catch((error)=>console.log(error))
}



function showRequest(request){
    var id = request._id;
  
    var url = "#/travel/updateBudget/" + id;
    window.open(url, '_blank');
  }



function search(){
    if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
        filteredBudgets.value = budgets.value
        return
    }
    var result = fuse.value.search(searchTerm.value);
  
    filteredBudgets.value = result.map(result => result.item);

}


return {
    budget, name, destination, arrival_date, departure_date, overlay,
    budgets,
    fileInput, 
    filteredBudgets,
    searchTerm,
    form,
    exist,
    search,
    resetBudget,
    addBudget,
    getBudgets,
    deleteBudget,
    uploadExcel,
    getBudget,
    updateBudget,
    initiate,
    searchBudget,
    showRequest,
    getNumberOfDays,
    addTraveler,
    deleteTraveler,
    changeTotal
}
},



)