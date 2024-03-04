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
import { useTripStore } from './trips';






export const useTicketQuotationsStore = defineStore("ticketQuotations", () => {
      
    var {globalUrl} = storeToRefs(useGlobalStore())
    var ticketQuotations = ref([])
    var filteredTicketQuotations = ref([])
    var authStore = useAuthStore()
    var router = useRouter();
    var {users} = storeToRefs(useUserStore())
    var {getAllUsers} = useUserStore()
    var ticketQuotationsForwardDialog = ref(false);
    var selectedUserEmail = ref("")
    var {trip} = storeToRefs(useTripStore())
    var toast = useToast()
    var disburseDialog = ref(false)

    
     
     var showTicketQuotations = (id) => {
    router.push("/travel/ticketQuotations/" + id)
    }
 

    var getAllTicketQuotations = () => {
        var data = new FormData();
        data.append("token", authStore.token)
        axios.post(globalUrl.value + "getAllTicketQuotations", data).then((result)=>{
            ticketQuotations.value = result.data;
            filteredTicketQuotations.value = result.data;
        }).catch((error)=> console.log(error))
    }
    

    var getTicketQuotationsApprovedByMe = () => {
        var data = new FormData()
        data.append("token", authStore.token)
        data.append("user", JSON.stringify(authStore.user))
        axios.post(globalUrl.value + "getTicketQuotationsApprovedByMe", data).then((result)=>{
            ticketQuotations.value = result.data;
            filteredTicketQuotations.value = result.data
        }).catch((error) => console.log(error))
    }


    var getTicketQuotationsForMe = () => {

        var data = new FormData()
        data.append("user", JSON.stringify(authStore.user))
        data.append("token", authStore.token)
        axios.post(globalUrl.value + "getTicketQuotationsForMe", data).then((result)=>{
            ticketQuotations.value = result.data;
            filteredTicketQuotations.value = result.data
        }).catch((error) => console.log(error))

    }


    var ticketQuotationsForward = () => {
        toast.info("Forwarding Ticket Quotations Please Wait...")
        var data = new FormData();
        data.append("user", JSON.stringify(authStore.user))
        data.append("id", trip.value._id)
        data.append("token", authStore.token)
        var next = users.value.filter((x)=> x.mailAddress == selectedUserEmail.value)[0]
        data.append("next", next._id)
    
        axios.post(globalUrl.value + "ticketQuotationForward", data).then((result)=>{
            trip.value.currentHandlerId = result.data.Id
            trip.value.ticketApprovals = result.data.ticketApprovals
            ticketQuotationsForwardDialog.value = false
            toast.clear()
            toast.success("Ticket Quotations Forwarded")
            
        }).catch((error)=>console.log(error))
    }
    
    
    var ticketQuotationsBackward = () => {
        toast.info("Rejecting Ticket Quotations. Please Wait...")
        var data = new FormData();
        data.append("user", JSON.stringify(authStore.user))
        data.append("id", trip.value._id)
        data.append("token", authStore.token)
    
    
        axios.post(globalUrl.value + "ticketQuotationBackward", data).then((result)=>{
            trip.value = result.data
         
            toast.clear()
            toast.success("Ticket Quotations Rejected")
    
        }).catch((error)=>console.log(error))
    }
    
    
    var ticketQuotationsProcessingComplete = () => {
        toast.info("Completing Ticket Quotations Payment Process. Please Wait...")
        var data = new FormData();
        data.append("user", JSON.stringify(authStore.user))
        data.append("id", trip.value._id)
        data.append("token", authStore.token)
    
    
        axios.post(globalUrl.value + "ticketQuotationsProcessingComplete", data).then((result)=>{
            trip.value.currentHandlerId = result.data;
            trip.value.ticketsApprovedByAccounts = true;

            toast.clear()
            toast.success("Ticket Quotations Payment Process Completed")
        }).catch((error)=>console.log(error))
    }
    
    
    
    var openTicketQuotationsForwardDialog = () =>{
        getAllUsers()
        ticketQuotationsForwardDialog.value = true
    
    
    }

    return {
       disburseDialog,
       ticketQuotations,
       filteredTicketQuotations,
       ticketQuotationsForwardDialog,
       selectedUserEmail,
       getAllTicketQuotations,
       getTicketQuotationsApprovedByMe,
       getTicketQuotationsForMe,
       showTicketQuotations,
       ticketQuotationsForward,
       ticketQuotationsBackward,
       ticketQuotationsProcessingComplete,
       openTicketQuotationsForwardDialog
       
    }

    
})