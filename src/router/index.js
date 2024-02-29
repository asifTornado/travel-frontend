import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'




const routes = [
  {
    path:'/travel',
    name:'travel',
    component: () => import('../views/main.vue'),
    children:[

      {
       path: "email/unapproved-request/:token/:id",
       name: "emailUnapprovedRequest",
       component: () => import('../views/unapprovedRequest.vue')
      },

      {
        path:"email/request/:token/:id",
        name: "emailRequest",
        component: () => import('../views/unapprovedRequest.vue')
      },

      {
        path:'unapproved-request/:id',
        name:'unapprovedRequest',
        component: () => import('../views/unapprovedRequest.vue')
      },

      {
        path:"unapproved-requests",
        name:"unapprovedRequests",
        component: () => import('../views/unapprovedRequests.vue')
      },

      {
        path:'trips',
        name:'trips',
        component: () => import('../views/trips.vue')
      },

      {
         path:'trip/:id',
         name:'trip',
         component: () => import('../views/trip.vue')
      },

      {
        path:'analytics',
        name:'analytics',
        component: () => import('../views/analytics.vue')
      },


      {
        path: 'users',
        name: 'users',
        component: () => import('../views/users/main.vue')
      
      },


      {
        path: 'updateuser/:id',
        name: 'updateuser',
        component: () => import('../views/users/update.vue')
      
      },


     {
      path: 'adduser',
        name: 'adduser',
        component: () => import('../views/users/add.vue')
      
      },

      {
        path: 'newRequest',
        name: 'newRequest',
        component: () => import('../views/newRequest.vue')
      
      },

      {
        path: 'newRequestUpper',
        name: 'newRequestUpper',
        component: () => import('../views/newRequestUpper.vue')
      
      },
      {
        path: 'myRequests',
        name: 'myRequests',
        component: () => import('../views/myRequests.vue')
      },

      {
        path: 'showRequest/:id',
        name: 'showRequest',
        component: () => import('../views/request.vue')
      },

      {
        path: 'tripInformation/:id',
        name: 'tripInformation',
        component: () => import('../views/request.vue')
      },

      {
        path: 'agents',
        name: 'agents',
        component: () => import('../views/agent.vue')
      },
      {
        path: 'requestsForMe',
        name: 'requestsForMe',
        component: () => import('../views/requestsForMe.vue')
      },

      {
        path: 'quotation/:id/:agentId',
        name: 'quotation',
        component: () => import('../views/quotation.vue')
      },


      {
        path: 'confirm/:id/:agentId',
        name: 'confirm',
        component: () => import('../views/confirm.vue')
      },


      {
        path: 'requestsProcessedByMe',
        name: 'processed',
        component: () => import('../views/processed.vue')
      },


      
      {
        path: 'requests',
        name: 'requests',
        component: () => import('../views/requests.vue')
      },


        
      {
        path: 'budget',
        name: 'budget',
        component: () => import('../views/budgets/main.vue')
      },

      {
        path: 'addBudget',
        name: 'addBudget',
        component: () => import('../views/budgets/add.vue')
      },
      
      // {
      //   path: 'hotels',
      //   name: 'hotels',
      //   component: () => import('../views/hotel.vue')
      // },
      
      {
        path: 'updateBudget/:id',
        name: 'updateBudget',
        component: () => import('../views/budgets/update.vue')
      },

      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/profile.vue')
      },

      {
        path: 'custom-trips',
        name:'customTrips',
        component: () => import('../views/customRequests.vue')
      },

      {
        path:'custom-trip/:id',
        name:'customTrip',
        component: () => import('../views/customRequest.vue')
      },

      {
        path: 'hotelsForBrand',
        name: 'hotelsForBrand',
        component: () => import('../views/hotelsForBrand/main.vue')
      },

      {
        path: 'hotelsForBrand/add',
        name: 'hotelsForBrandAdd',
        component: () => import('../views/hotelsForBrand/add.vue')
      },

      {
        path: 'hotelsForBrand/update/:id',
        name: 'hotelsForBrandUpdate',
        component: () => import('../views/hotelsForBrand/update.vue')
      },


      {
        path: 'email/:id/:token',
        name: 'emailRequest',
        component: () => import('../views/request.vue')
      },


      
      {
        path: 'allTicketQuotations',
        name: 'allTicketQuotations',
        component: () => import('../views/ticketQuotations/allTicketQuotations.vue')
      },


      {
        path: 'ticketQuotationsForMe',
        name: 'ticketQuotationsForMe',
        component: () => import('../views/ticketQuotations/ticketQuotationsForMe.vue')
      },


      
      {
        path: 'ticketQuotationsApprovedByMe',
        name: 'ticketQuotationsApprovedByMe',
        component: () => import('../views/ticketQuotations/ticketQuotationsApprovedByMe.vue')
      },



      
      {
        path: 'ticketQuotations/:id',
        name: 'ticketQuotations',
        component: () => import('../views/ticketQuotations/ticketQuotations.vue')
      },

// money receipts start from here

{
  path: 'allMoneyReceipts',
  name: 'allMoneyReceipts',
  component: () => import('../views/moneyReceipts/allMoneyReceipts.vue')
},

{
  path: 'myMoneyReceipts',
  name: 'myMoneyReceipts',
  component: () => import('../views/moneyReceipts/myMoneyReceipts.vue')
},

{
  path: 'moneyReceiptsProcessedByMe',
  name: 'moneyReceiptsProcessedByMe',
  component: () => import('../views/moneyReceipts/moneyReceiptsProcessedByMe.vue')
},

{
  path: 'moneyReceiptsForMe',
  name: 'moneyReceiptsForMe',
  component: () => import('../views/moneyReceipts/moneyReceiptsForMe.vue')
},


{
  path: 'moneyReceipt/:id',
  name: 'moneyReceipt',
  component: () => import('../views/moneyReceipts/moneyReceipt.vue')
},

//expense reports


{
  path: 'allExpenseReports',
  name: 'allExpenseReports',
  component: () => import('../views/expenseReports/allExpenseReports.vue')
},

{
  path: 'myExpenseReports',
  name: 'myExpenseReports',
  component: () => import('../views/expenseReports/myExpenseReports.vue')
},

{
  path: 'expenseReportsApprovedByMe',
  name: 'expenseReportsApprovedByMe',
  component: () => import('../views/expenseReports/expenseReportsApprovedByMe.vue')
},

{
  path: 'expenseReportsForMe',
  name: 'expenseReportsForMe',
  component: () => import('../views/expenseReports/expenseReportsForMe.vue')
},


{
  path: 'expenseReport/:id',
  name: 'expenseReport',
  component: () => import('../views/expenseReports/expenseReport.vue')
},



{
  path: 'roles',
  name: 'roles',
  component: () => import('../views/roles.vue')
},







    ]

  },

  {
    path: '/login',
    name:'login',
    component: () => import("../views/login.vue")
  },
  {
    path: '/register',
    name:'register',
    component:() => import("../views/register.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})




router.beforeEach(async (to, from, next) => {
  
  var authStore = useAuthStore()

  debugger
 

  if(to.name == 'travel' || to.name == 'register'){
    if(to.name == 'travel'){
      next('/login')
    }else{
      
      next()
    }
  }else if(to.name == 'emailUnapprovedRequest' || to.name == 'emailRequest'){
     var token = to.params.token;
     var result = await authStore.authenticateToken(token);
     if(result == true){
      next()
     }else{
      return next(false)
     }
    
  }else if(to.name == 'login'){
    next()
  }else if(to.path == '/'){
    next('/login')
}else{
    if(authStore.user && authStore.user._id != null){
      next()
    }else{
       next(false)
    }
    // next()
  }
    
  }
)

export default router