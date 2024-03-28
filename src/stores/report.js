import { defineStore, storeToRefs } from 'pinia'
import {Events, eventsMap} from './events'
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';
import {useRoute, useRouter} from "vue-router";


import { useAuthStore } from './auth';
import { useGlobalStore } from './global';
import { useHelperStore } from './helper';
import Fuse from "fuse.js"


import axios from 'axios';





export const useReportStore = defineStore("report", () => {

    var options = ref({
        includeScore: false,

          keys: [{name:'_id', weight:0.2},
         
          {name:'subject', weight:0.2},
          {name:'destination', weight:0.2},
          {name:'departure_date', weight:0.1},
          {name:'arrival_date', weight:0.1},
          {name:'numderOfTravelers', weight:0.1},
          {name:'budget', weight:0.1},
         
       
        
        ]
        })
     
    var searchTerm = ref("")
    var helperStore = useHelperStore()
    var filteredReports = ref([])
    var reports = ref([])
    var requestReportsBudget = ref([])
    var requestReportsActual = ref([])
    var report  = ref()
    var globalStore = useGlobalStore()
    var authStore = useAuthStore()
    var toast = useToast()
    var router = useRouter()
    var route = useRoute()
    var fuse = ref(null)
    var actualCost = ref(0)
    var difference = computed(()=>{
       return report.value.totalTripBudget - actualCost.value
    })
    

    var getReport = () => {
        toast.info("Getting report please wait")
        var id = route.params.id;

        var data = new FormData();
        data.append("id", id)

        axios.post(globalStore.globalUrl + "getReport", data).then((result)=>{
             
             report.value = result.data
           
             toast.clear()
             toast.success("Got Report Successfully")
        })
    }


    var getReports = () =>{
        toast.info("getting reports please wait...")
        var data = new FormData()
        data.append("user", JSON.stringify(authStore.user))
        data.append("token", authStore.token)

        axios.post(globalStore.globalUrl + "getReports", data).then((result)=>{
          
       
            reports.value = result.data
            filteredReports.value = result.data
            fuse.value = new Fuse(result.data, options.value)
            toast.clear()
            toast.success("Success")
        })
    }


    var getActualCost = computed(() => {
        if(report.value){
            var expenses = 0;
            for(var request of report.value.requests){
                for(var expense of request.expenseReport.expenses){
                    expenses += parseFloat(expense.amount)
                }
            }
    
            actualCost.value = expenses

        }
       return actualCost.value
    })


    var getRequestReports = (budget) =>{
        for(var request of budget.requests){
                 var requestReportBudget = {}
                 var requestReportActual = {}

                
              for(var breakdown of request.requestBudget.breakdown){
                        debugger
                        requestReportBudget[breakdown.expenseType] = (requestReportBudget[breakdown.expenseType] ?? 0) + parseInt(breakdown.total)
                   
                 }

                 for(var expense of request.expenseReport.expenses){
                    requestReportActual[expense.expenseType] = (requestReportActual[expense.expenseType] ?? 0) + parseInt(expense.amount)

                 }

                 debugger
                 requestReportsBudget.value.push(requestReportBudget)
                 requestReportsActual.value.push(requestReportActual)

        }

    }


    var search = () => {

         
  
    if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
        filteredReports.value = requests.value
    return
    }
    var result = fuse.value.search(searchTerm.value);
  
    filteredReports.value = result.map(result => result.item);

    }


    

    var showReport = (id) => {

        router.push("/travel/report/" + id)

    }
   





    return {
     fuse,
     reports,
     report,
     actualCost,
     difference,
     getActualCost,
     requestReportsBudget,
     requestReportsActual,
     searchTerm,
     search,
     filteredReports,
     showReport,
     getReport,
     getReports,
     getRequestReports
    }
})