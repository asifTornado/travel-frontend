
const Events = {
    GiveInfo:"Essential information submitted by traveler",
    PermanentlyRejected:"Permanently rejected a request",
    TripRejected:"Your trip was rejected by your supervisor",
    DepartmentHeadReject:"Trip rejected by department head",
    DepartmentHeadApprove:"Trip approved by department head",
    DepartmentHeadPermanentlyReject:"Trip permanently rejected by department head",
    SupervisorApprovalTrip:"Seeking Supervisor Approval For Trip",
    SeekingTravelerInfo:"Seeking Information From Traveler",
    SeekingDepartMentHeadApproval:"Seeking Approval From Department Head",

    
    

}

 var eventsMap = []

for(var e in Events){
eventsMap.push(Events[e])
}


export {eventsMap, Events};





