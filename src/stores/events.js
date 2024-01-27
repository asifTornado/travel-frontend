
const Events = {
    GiveInfo:"Essential information submitted by traveler",
    PermanentlyRejected:"Permanently rejected a request",
    TripRejected:"Your trip was rejected by your supervisor",
    DepartmentHeadReject:"Trip rejected by department head",
    DepartmentHeadApprove:"Trip approved by department head",
    DepartmentHeadPermanentlyReject:"Trip permanently rejected by department head",
    SupervisorApprovalTrip:"Supervisor Approval For Trip",

}

 var eventsMap = []

for(var e in Events){
eventsMap.push(Events[e])
}


export {eventsMap, Events};





