import { defineStore, storeToRefs } from 'pinia'
import {Events, eventsMap} from './events'
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';
import {useRoute, useRouter} from "vue-router";

import { useAuthStore } from './auth';
import { useGlobalStore } from './global';


import axios from 'axios';





export const useReportStore = defineStore("report", () => {
     

    var reports = ref([])
    var report  = ref()
    var globalStore = useGlobalStore()
    var authStore = useAuthStore()
    var toast = useToast()
    var router = useRouter()
    var route = useRoute()

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
            toast.clear()
            toast.success("Success")
        })
    }

    var showReport = (id) => {

        router.push("/travel/report/" + id)

    }
   





    return {
     reports,
     report,
     showReport,
     getReport,
     getReports  
    }
})