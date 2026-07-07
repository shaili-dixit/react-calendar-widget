import { useState } from "react";

function AppointmentForm({ selectedDate }) {

const [patient,setPatient]=useState("");
const [doctor,setDoctor]=useState("");
const [time,setTime]=useState("");
const [purpose,setPurpose]=useState("");

const submit=(e)=>{

e.preventDefault();

if(!patient||!doctor||!time||!purpose){

alert("Please fill all fields");

return;

}

console.log("[Analytics] User interacted with React Calendar Widget");

alert("Appointment Saved");

setPatient("");
setDoctor("");
setTime("");
setPurpose("");

};

return(

<div className="form-container">

<h2>Add Appointment</h2>

<p className="selected-date">

Selected:

<strong>

{selectedDate.toDateString()}

</strong>

</p>

<form onSubmit={submit}>

<input
type="text"
placeholder="Patient Name"
value={patient}
onChange={(e)=>setPatient(e.target.value)}
aria-label="Patient Name"
/>

<input
type="text"
placeholder="Doctor Name"
value={doctor}
onChange={(e)=>setDoctor(e.target.value)}
aria-label="Doctor Name"
/>

<input
type="time"
value={time}
onChange={(e)=>setTime(e.target.value)}
aria-label="Appointment Time"
/>

<textarea
placeholder="Treatment / Notes"
value={purpose}
onChange={(e)=>setPurpose(e.target.value)}
aria-label="Purpose"
/>

<button>

Save Appointment

</button>

</form>

</div>

);

}

export default AppointmentForm;