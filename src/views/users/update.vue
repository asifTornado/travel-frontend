<template>

    <div style="height: 100vh; width:100vw; overflow-y: scroll;" class="mt-15 "> 
  
     <v-divider></v-divider>

     <v-form @submit.prevent="updateUser" ref="form">
      <v-container class="bg-blue-lighten-5 font-weight-bold">
      <v-row >
        Fields with * are mandatory
      </v-row>
     </v-container>
     <v-container v-if="user" class="elevation-4 pa-10 ">
            <v-row><v-col cols="12" class="text-h4">User Information</v-col></v-row>
            <v-row>
              <v-col
                cols="12"
                md="3"
             
              >
              
              <v-text-field 
                name="name"
                label="Name*"
                id="name"
                type="text"
                v-model="user.empName"
                :rules="exist"
              ></v-text-field>
              </v-col>
      
              <v-col
                cols="12"
                md="3"
              >
              <v-text-field 
                name="email"
                label="Email*"
                id="email"
                type="text"
                v-model="user.mailAddress"
                :rules="exist"
              ></v-text-field>
              </v-col>


        
      
              <v-col
                cols="12"
                md="3"
              >
              <v-text-field 
                name="department"
                label="Department*"
                id="department"
                type="text"
                v-model="user.department"
                :rules="exist"
              ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
             
              >
              
              <v-text-field 
                name="designation"
                label="Designation*"
                id="designation"
                type="text"
                v-model="user.designation"
                :rules="exist"
              ></v-text-field>
              </v-col>
            </v-row>


            <v-row>

                <v-col
                cols="12"
                md="3"
              >
              <v-text-field 
                name="section"
                label="Section"
                id="section"
                type="text"
                v-model="user.section"
             
              ></v-text-field>
              </v-col>

            <v-col
                cols="12"
                md="3"
              >
              <v-text-field 
                name="unit"
                label="Unit"
                id="unit"
                type="text"
                v-model="user.unit"
                :rules="exist"
              ></v-text-field>
              </v-col>


              <v-col
                cols="12"
                md="3"
             
              >
              
              <v-text-field 
                name="location"
                label="Location*"
                id="location"
                type="text"
                v-model="user.location"
                :rules="exist"
              ></v-text-field>
              </v-col>


              <v-col
                cols="12"
                md="3"
             
              >
              
              <v-text-field 
                name="phone number"
                label="Phone Number*"
                id="phone number"
                type="text"
                v-model="user.mobileNo"
                :rules="exist"
              ></v-text-field>
              </v-col>
            </v-row>

        
              
            <v-row>

               <v-col
               cols="12"
               md="3"
               >
               <v-text-field 
               name="extention number"
               label="Extension number"
               id="extention number"
               type="text"
               v-model="user.extension"
               :rules="exist"
               ></v-text-field>
               </v-col>
               
               <v-col
               cols="12"
               md="3"
               >
               <v-text-field 
               name="passport number"
               label="Passport number"
               id="passwort number"
               type="text"
               v-model="user.passportNo"
            
               ></v-text-field>
               </v-col>
               

               <v-col
               cols="12"
               md="3"
               
               >

               <v-autocomplete
                name="userType"
                label="User Type*"
                id="userType"
                v-model="user.userType"
                :rules="exist"
                :items="userTypes"
               ></v-autocomplete>
      
               </v-col>
               
               <v-col
               cols="12"
               md="3"
               
               >

               <v-select :items="['Yes', 'No']" label="Has Frequent Flyer Numbers" v-model="user.hasFrequentFlyerNo" @update:modelValue="addFlyer"></v-select>
      
               </v-col>
               
         
            </v-row>

            <v-row v-for="(flyer, flyerCounter) in user.flyerNos" class="flex flex-row justify-center items-center border border-solid  border-black">
              <v-col md="3">
                <v-text-field
                name="airline"
                :label="'Airline ' + (flyerCounter + 1) + '*'"
                id="airline"
                type="text"
                v-model="user.flyerNos[flyerCounter].airline"
                :rules="exist"
                >

                </v-text-field>

              </v-col>
              <v-col md="3">
                        
                <v-text-field  
               name="frequest flyer number"
               :label="'Frequent Flyer Number' + ' ' + (flyerCounter + 1) + '*'"
               id="frequesnt flyer number"
               type="text"
               v-model="user.flyerNos[flyerCounter].number"
               :rules="exist"
               ></v-text-field>
            
              </v-col>

              <v-col md="6" class="flex flex-row justify-start items-center mb-4" >
                <v-btn  class="bg-blue-darken-4 mr-4" @click="insertFlyer(flyerCounter)">
                <v-icon>mdi-plus</v-icon>
                </v-btn>
        
                <v-btn class="bg-blue-lighten-2 text-white"  @click="removeFlyer(flyerCounter)">
                <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-col>
            </v-row>

    
          </v-container >


          <v-container class="elevation-4 pa-10 mt-10">
            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User Supervisor*"   :rules="exist" :items="mappedUsers" v-model="user.superVisor.empName" v-if="user.superVisor"></v-autocomplete>
                 <!-- <v-autocomplete label="User Supervisor" :items="mappedUsers" v-model="user.superVisor" v-else></v-autocomplete> -->
                </v-col>
            </v-row>


            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User's Zonal Head*"   :rules="exist"  :items="mappedUsers" v-model="user.zonalHead.empName" v-if="user.zonalHead"></v-autocomplete>
                 <!-- <v-autocomplete label="User's Zonal Head" :items="mappedUsers" v-model="user.zonalHead" v-else></v-autocomplete> -->
              </v-col>
            </v-row>


<!-- 
            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User's Travel Handler*"   :rules="exist" :items="mappedUsers" v-model="user.travelHandler.empName" v-if="user.travelHandler"></v-autocomplete>
                 <v-autocomplete label="User's Zonal Head" :items="mappedUsers" v-model="user.zonalHead" v-else></v-autocomplete> -->
              <!-- </v-col>
            </v-row> --> 
          </v-container>
    
    
          <v-divider></v-divider>

<v-container class="elevation-4 mt-10">
    
    
              <div class="w-full p-2 font-bold text-h4 justify-center flex flex-row pa-2 mb-2 ">Travel Preferences</div>
                
              <Editor @textChanged="setText" :content="user.preferences" v-if="user"/>
        
</v-container>
          <v-divider></v-divider>
     <v-container style="margin-bottom:20vh" class="mt-5 bg-blue-lighten-5">
       

         
    

       <v-btn size="large" color="indigo-darken-3" type="submit">Update</v-btn>
          </v-container>

        </v-form>
          
      
    
    </div>
    


   

     

 </template>
   
   
   
<script setup>
   
import {ref} from 'vue'

import { useGlobalStore } from '../../stores/global';
import {useToast} from 'vue-toast-notification';
import {useHelperStore} from "../../stores/helper";
import axios from "axios";
import {useRouter, useRoute} from 'vue-router';
import Editor from '../../components/editor.vue'
import { useUserStore } from '../../stores/users';
import { storeToRefs } from 'pinia';


var {getAllUsers, updateUser, getUser, addFlyer, insertFlyer, removeFlyer, setText} = useUserStore()



getUser()
getAllUsers()


var {user, mappedUsers, form, exist} = storeToRefs(useUserStore())

var {userTypes} = storeToRefs(useHelperStore())








   
   
</script>


