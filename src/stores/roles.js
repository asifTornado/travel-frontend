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






export const useRoleStore = defineStore("roles", () => {
      
    var {globalUrl} = storeToRefs(useGlobalStore())
    var {user, token} = storeToRefs(useAuthStore())

    var roles = ref([])

    var role = ref({
        _id:0,
        value:'',
    })

    var addRoleCheck = ref(false)

    var roleValues = computed(()=>{
        var result = roles.value.map((x)=> x.value);
        return result
    })


    var getRoles = () => {

        var data = new FormData()
        data.append("token", token.value)
             axios.post(globalUrl.value + "getRoles", data).then((result)=>{
                roles.value = result.data
             }).catch((error)=>{
                console.log(error)
             })
    }

    var addRole = () => {
        addRoleCheck.value = true
    }


    var confirm = () => {
        debugger
        var data = new FormData()
        data.append("role", JSON.stringify(role.value))
        data.append("token", token.value)
        axios.post(globalUrl.value + "insertRole", data).then((result)=>{
            roles.value.push(result.data)
            addRoleCheck.value = false
        }).catch((error)=> console.log(error))
    }

    var deleteRole = (role2) => {

        var data = new FormData()
        data.append("role", JSON.stringify(role2))
        data.append("token", token.value)
        axios.post(globalUrl.value + "removeRole", data).then((result)=>{
            roles.value = roles.value.filter((x)=> x._id != role2._id)
        }).catch((error)=> console.log(error))

    }


    var updateRole = (role2) => {

        var data = new FormData()
        data.append("role", JSON.stringify(role2))
        data.append("token", token.value)
        axios.post(globalUrl.value + "updateRole", data).then((result)=>{
            roles.value = roles.value.map((x)=>{
                if(x._id == result.data._id){
                    return result.data
                }else{
                    return x
                }
            })
        }).catch((error)=> console.log(error))

    }

    return {
        roles,
        role,
        addRoleCheck,
        roleValues,
        getRoles,
        addRole, 
        confirm,
        deleteRole,
        updateRole,
       
    }

    
})