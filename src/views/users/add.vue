<template>

    <div style="height: 100vh; width:100vw; overflow-y: scroll;" class="mt-15"> 
  
     <v-divider></v-divider>
     <v-form @submit.prevent="addUser" ref="form">
     <v-container class="bg-grey-lighten-3 font-weight-bold">
      <v-row >
        Fields with * are mandatory
      </v-row>
     </v-container>
          <v-container class="elevation-4 pa-10">
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
               label="Extention number"
               id="extention number"
               type="text"
               v-model="user.extension"
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
               
               <v-select
               name="hasFrequentFlyerNo"
               label="Has Frequent Flyer Number*"
               id="hasFrequentFlyerNumber"
               :rules="exist"
               :items="['Yes', 'No']"
              
               v-model="user.hasFrequentFlyerNo"
               @update:modelValue="addFlyer"
               ></v-select>
               </v-col>
               
         
            </v-row>
            <v-row v-for="(flyer, flyerCounter) in user.flyerNos" class="flex flex-row justify-center items-center border border-solid  border-black">
              <v-col md="3">
                <v-text-field
                name="airline"
                :label="'Airline ' + (flyerCounter + 1) + '*'" 
                id="airline"
                type="text"
                :rules="exist"
                v-model="user.flyerNos[flyerCounter].airline"
                >

                </v-text-field>

              </v-col>
              <v-col md="3">
                        
                <v-text-field  
               name="frequest flyer number"
               :label="'Frequent Flyer Number' + ' ' + (flyerCounter + 1) + '*'"
               id="frequesnt flyer number"
               type="text"
               :rules="exist"
               v-model="user.flyerNos[flyerCounter].number"
               ></v-text-field>
            
              </v-col>

              <v-col md="6" class="flex flex-row justify-start items-center mb-4" >
                <v-btn  class="mr-4 bg-blue-darken-4" @click="insertFlyer(flyerCounter)">
                <v-icon>mdi-plus</v-icon>
                </v-btn>
        
                <v-btn class="bg-blue-lighten-2 text-white"  @click="removeFlyer(flyerCounter)">
                <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col  md="3">
                <v-select
                name="userType"
                label="User Type*"
                id="userType"
                :items="userTypes"
               
                v-model="user.userType"
                
                ></v-select>
              </v-col>

              <v-col  md="3">
                <v-text-field  
               name="Password"
               label="Password*"
               id="Password"
               type="text"
               :rules="exist"
               v-model="user.password"
               ></v-text-field>
              </v-col>
            </v-row>
          </v-container >


          <v-container class="elevation-4 pa-10 mt-10">
            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User Supervisor*" :items="mappedUsers"  :rules="exist" v-model="user.superVisor"></v-autocomplete>
              </v-col>
            </v-row>


            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User's Zonal Head*" :items="mappedUsers"  :rules="exist" v-model="user.zonalHead"></v-autocomplete>
              </v-col>
            </v-row>

            
            <v-row>
              <v-col cols="12" md="12">
                 <v-autocomplete label="User's Travel Manager*" :items="mappedUsers"  :rules="exist" v-model="user.travelHandler"></v-autocomplete>
              </v-col>
            </v-row>
          
          </v-container>
    
    
          <v-divider :thickness="30"> </v-divider>


<v-container class="elevation-4 mt-2 ">
    
              
              <div class="w-full p-2 font-bold text-h4  flex flex-row justify-center pa-2 mb-2 ">Travel Preferences</div>
                
              <div class=""><Editor @textChanged="setText"/></div>
                          
              
</v-container>
            <v-container style="margin-bottom:20vh" class="bg-grey-lighten-3 mt-5">
       
   
    
    
    
       <v-btn size="large" color="indigo-darken-3" type="submit">Add User</v-btn>
          </v-container>

        </v-form>
          
      
    
    </div>
    


   

     

 </template>
   
   
   
<script setup>
import Editor from '../../components/editor.vue'

import {useUserStore} from "../../stores/users"
import { useHelperStore } from '../../stores/helper';
import { storeToRefs } from 'pinia';




var {user, mappedUsers, exist, form} = storeToRefs(useUserStore())
var {userTypes} = storeToRefs(useHelperStore())
var {addUser, getAllUsers, resetUser, addFlyer, insertFlyer, removeFlyer} = useUserStore()

resetUser()

getAllUsers()




var setText = (value) =>{
  console.log("calling set text")
user.value.preferences = value
}










   
   
</script>


