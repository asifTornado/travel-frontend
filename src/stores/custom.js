import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed, watch} from "vue"
import {useToast} from 'vue-toast-notification';
import { useUserStore } from './users';
import { useAuthStore } from './auth';
import {useRouter, useRoute} from 'vue-router';

import Fuse from "fuse.js"





import axios from 'axios';






export const useCustomStore = defineStore("custom", ()=>{

var toast = useToast()
var {globalUrl} = storeToRefs(useGlobalStore())
var {getUserByName} = useUserStore();
var router = useRouter();
var route = useRoute();
var {user, token} = storeToRefs(useUserStore());


var form = ref(null)

var exist = ref([
    value => {
      if(value) return true
      return '* Field Required'
    }
  ])



var locations = ref([
    "Hong Kong",
    "New York"
 ])

 
var users = ref([])

var requestBudget = ref({
  travelSupervisor:'',
  totalDailyAllowance:'',
  totalBudget:'',
  approvalStatus:'',
  notes:'',
  breakdown:[{
    item:'',
    cost:'',
    quantity:'',
  total:''
  }]
})
var modes = ref(["plane", "bus", "train", "ship"])
var overnight = ref()
var numberOfNights = ref()

var costItems = ref([{numberOfItems:'1', item:'', itemCost:0, totalItemCost:0}])
var totalCost = ref();

var objectives = ref(['']);
var meetings = ref([{agenda:'', subject:'', attendees:[]}]);
var activities = ref([{date:'', activity:''}]);
var items = ref(['']);
var personnel = ref([''])





var destination = ref();

var mode = ref();
var accomodationRequired = ref();
var numberOfNights = ref();
var designation = ref();
var purpose = ref();
var startDate = ref();
var endDate = ref();
var requester = ref('');
var request = ref({});





function getNumberOfDays() {
    // Parse the input strings into Date objects
    const startDate2 = new Date(startDate.value);
    const endDate2 = new Date(endDate.value);
  
    // Calculate the time difference in milliseconds
    const timeDifference = endDate2 - startDate2;
  
    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    numberOfNights.value = daysDifference
  }



var addItem = (itemCounter) => {

 var newItem = {numberOfItems:'1', item:'', itemCost:0, totalItemCost:0}
 costItems.value.splice(itemCounter + 1, 0, newItem)
}


var removeItem = (itemCounter) => {
 costItems.value.splice(itemCounter, 1)
}


var getTotalCost = () => {

 var totalCost = 0

    costItems.value.forEach(element => {
         totalCost +=  parseInt(element.totalItemCost)
 });

 return totalCost;

}


var setCost = (itemCounter) => {
    costItems.value[itemCounter].totalItemCost = costItems.value[itemCounter].numberOfItems *  costItems.value[itemCounter].itemCost 
    return costItems.value[itemCounter].totalItemCost
    
} 


var submit = async () => {
  var validation = await form.value.validate()
  if(validation.valid){

    toast.info("Submitting Request Please Wait....")
    var date = new Date().toDateString();
    
    var request = {
 
   destination:destination.value,
   purpose:purpose.value,
   mode:mode.value,
   numberOfNights:numberOfNights.value,
   accomodationRequired:accomodationRequired.value,
   startDate:startDate.value,
   endDate:endDate.value,
   costItems:costItems.value,
   date,
   activities:activities.value,
   meetings:meetings.value,
   objectives:objectives.value,
   personnel:personnel.value,
   items:items.value
  }

  request.numberOfNights = request.numberOfNights.toString()
  
  
  var {user} = storeToRefs(useAuthStore());
  console.log("this is the user")
  debugger
  var requester2 = getUserByName(requester.value)
  var data = new FormData();
  data.append("request", JSON.stringify(request))
  data.append("user", JSON.stringify(user.value))
  data.append("token", token.value)
  
  console.log("these are the data being sent")
  console.log(data)
  
  axios.post(globalUrl.value + "submitRequest", data).then((result)=>{
    toast.clear();
    toast.success("Request Submitted Successfully")
    
    console.log("this is the result")
    console.log(result.data)
    
    
    overnight.value = null;
    numberOfNights.value = null;
    startDate.value = '';
    endDate.value = '';
    destination.value = '';
    totalCost.value = '';
    costItems.value = [{numberOfItems:'1', item:'', itemCost:0, totalItemCost:0}]
    mode.value = '';
    accomodationRequired = 'no';
    purpose.value = ''
    
    
    
    
    
  }).catch((error)=>console.log(error))
  
}
  
}


var getRequestForApproval = () => {
  debugger
  toast.info("Getting Request Please Wait....")
  var id = route.params.id;

  var data = new FormData();
  data.append("id", id)
  data.append("token", token.value)
  axios.post(globalUrl.value + "getRequestForApproval", data).then((result)=>{
    debugger
    request.value = result.data
    activities.value = request.value.activities
    objectives.value = request.value.objectives
    meetings.value = request.value.meetings
    items.value = request.value.items
    personnel.value = request.value.personnel
    requestBudget.value = request.value.requestBudget
    requestBudget.value.travelSupervisor = request.value.requester.superVisor.empName

    toast.clear();
    toast.success("Success")
  }).catch((error)=> toast.warning(error))
}


var giveInfo = () => {
  toast.info("Submitting Information Please Wait...")
  var data = new FormData();
  request.value.activities = activities.value;
  request.value.meetings = meetings.value;
  request.value.objectives = objectives.value;
  request.value.items = items.value;
  request.value.personnel = personnel.value;
  request.value.requestBudget = requestBudget.value;
  data.append("request", JSON.stringify(request.value))
  data.append("token", token.value)
  axios.post(globalUrl.value + "giveInfo", data).then((result)=>{
    request.value = result.data
    toast.clear();
    toast.success("Success")
  }).catch((error)=> toast.warning(error));
}


var permanentlyReject = () => {
  toast.info("Rejecting Permanently Please Wait...")
  var data = new FormData();
  data.append("request", JSON.stringify(request.value))
  data.append("token", token.value)
  axios.post(globalUrl.value + "permanentlyReject", data).then((result)=>{
    request.value = result.data
    toast.clear()
    toast.success("Success")
  }).catch((error)=> toast.warning(error))
}


var reject = () => {
  toast.info("Rejecting Please Wait...")
  var data = new FormData();
  data.append("request", JSON.stringify(request.value))
  data.append("token", token.value)
  axios.post(globalUrl.value + "reject", data).then((result)=>{
    request.value = result.data
    toast.clear()
    toast.success("Success")
  }).catch((error)=> toast.warning(error))

}



var approve = () => {
  debugger
  toast.info("Approving Please Wait...")
  var data = new FormData();
  request.value.activities = activities.value;
  request.value.meetings = meetings.value;
  request.value.objectives = objectives.value;
  request.value.items = items.value;
  request.value.personnel = personnel.value;
  request.value.requestBudget = requestBudget.value;
  data.append("request", JSON.stringify(request.value))
  data.append("token", token.value)
  axios.post(globalUrl.value + "approve", data).then((result)=>{
    request.value = result.data
    toast.clear()
    toast.success("Success")
  }).catch((error)=> toast.warning(error))

}


return {
  locations,
  users,
  modes,
  overnight,
  numberOfNights,
  costItems,
    totalCost,
    objectives,
    requestBudget,
    meetings,
    activities,
    items,
    personnel,
    destination,
    mode,
    accomodationRequired,
    numberOfNights,
    designation,
    purpose,
    startDate,
    endDate,
    requester,
    form,
    exist,
    request,
    permanentlyReject,
    reject,
    approve,
    giveInfo,
    getRequestForApproval,
    getNumberOfDays,
    addItem, 
    removeItem,
    getTotalCost,
    setCost,
    submit
 
}
},



)