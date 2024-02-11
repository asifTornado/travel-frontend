<template>

<v-dialog v-model="moreInformationDialog" width="100vw" height="100vh"  persistent>
    <v-container class="overflow-y-scroll  mr-10 bg-blue-lighten-5 elevation-10 ">
        <v-row justify="end mb-1">
            <v-col justify="end" align="end">
                <v-icon color="red" size="large" @click="moreInformationDialog = false">
                    mdi-close
                </v-icon>
            </v-col>
        </v-row>
        <Information/>

    </v-container>

</v-dialog>







</template>


<script setup>
import {ref, onMounted, defineProps} from "vue";
import Information from "./Information.vue";
import {storeToRefs} from "pinia";
import { useRequestsStore } from "../stores/request";



var {moreInformationDialog} = storeToRefs(useRequestsStore());

onMounted(()=>{
    console.log("more information loaded")
})


</script>