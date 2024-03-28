import { defineStore } from 'pinia'
import {ref} from "vue";
import { useGlobalStore } from './global';
import { useRequestsStore } from './request';
import { useToast } from 'vue-toast-notification';
import {storeToRefs} from "pinia";
import axios from 'axios';



export const useCodeStore = defineStore("code", ()=>{
    
    var adminCodes = ref(
        [
            {code:"N1", description:"New Request"},
            {code:"N2", description:"Unplanned Request"}, 
            {code:"H1", description:"All Hotels For Brands"}, 
            {code:"B1", description:"All Budgets"},
            {code:"E1", description:"All Expense Reports"},
            {code:"E2", description:"My Expense Reports"},
            {code:"E3", description:"Expense Reports For Me"},
            {code:"E4", description:"Expense Reports Processed By Me"},
            {code:"M1", description:"All Money Receipts"},
            {code:"M2", description:"My Money Receipts"},
            {code:"M3", description:"Money Receipts For Me"},
            {code:"M4", description:"Money Receipts Processed By Me"},
            {code:"U1", description:"All Users"},
            {code:"O1", description:"All Roles"},
            {code:"T1", description:"All Trips"},
            {code:"R1", description:"All Requests"},
            {code:"R2", description:"My Requests"},
            {code:"R3", description:"Requests For Me"},
            {code:"R4", description:"Requests Processed By Me"},
            {code:"R5", description:"All Unapproved Requests"},
            {code:"A1", description:"All Air Ticket Quotations"},
            {code:"A2", description:"Air Ticket Quotations Approved By Me"},
            {code:"A3", description:"Air Ticket Quotations For Me"},
            {code:"RE1", description:"Reports" }
            
            

    ])

    var normalCodes = ref(
    
    [
   
        {code:"E2", description:"My Expense Reports"},
        {code:"E3", description:"Expense Reports For Me"},
        {code:"E4", description:"Expense Reports Processed By Me"},  
        {code:"M2", description:"My Money Receipts"},
        {code:"M3", description:"Money Receipts For Me"},
        {code:"M4", description:"Money Receipts Processed By Me"},
        {code:"R2", description:"My Requests"},
        {code:"R3", description:"Requests For Me"},
        {code:"R4", description:"Requests Processed By Me"},
        {code:"A2", description:"Air Ticket Quotations Approved By Me"},
        {code:"A3", description:"Air Ticket Quotations For Me"}
  
    ]
    )

    var managerCodes = ref(

    )



    var maps = ref(
        {"N1":"/travel/newRequest", 
        "N2":"/travel/newRequestUpper",
        "H1" : "/travel/hotelsForBrand",
        "B1" : "/travel/budget",
        "E1" : "/travel/allExpenseReports",
        "E2" : "/travel/myExpenseReports",
        "E3" : "/travel/expenseReportsForMe",
        "E4" : "/travel/expenseReportsApprovedByMe",
        "M1" : "/travel/allMoneyReceipts",
        "M2" : "/travel/myMoneyReceipts",
        "M3" : "/travel/moneyReceiptsForMe",
        "M4" : "/travel/moneyReceiptsProcessedByMe",
        "U1" : "/travel/users",
        "O1" : "/travel/roles",
        "T1" : "/travel/trips",
        "R1" : "/travel/requests",
        "R2" : "/travel/myRequests",
        "R3" : "/travel/requestsForMe",
        "R4" : "/travel/requestsProcessedByMe",
        "R5" : "/travel/unapproved-requests",
        "A1" : "/travel/allTicketQuotations",
        "A2" : "/travel/ticketQuotationsForMe",
        "A3" : "/travel/ticketQuotationsApprovedByMe",
        "RE1": "/travel/reports"
        
    }
        
)

     
    return {
     adminCodes,
     normalCodes,
     maps
    }
}, {
 
})


