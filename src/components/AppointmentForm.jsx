import { useState } from "react";

function AppointmentForm({ selectedDate, addAppointment }) {

  const [patient,setPatient]=useState("");
  const [doctor,setDoctor]=useState("");
  const [time,setTime]=useState("");
  const [purpose,setPurpose]=useState("");

  const [errors,setErrors]=useState({});

  const sanitize=(text)=>{

    return text.replace(/<[^>]*>?/gm,"");

  };

  const submit=(e)=>{

    e.preventDefault();

    let newErrors={};

    if(!patient.trim())
      newErrors.patient=true;

    if(!doctor.trim())
      newErrors.doctor=true;

    if(!time)
      newErrors.time=true;

    if(!purpose.trim())
      newErrors.purpose=true;

    setErrors(newErrors);

    if(Object.keys(newErrors).length>0)
      return;

    addAppointment({

      id:Date.now(),

      patient:sanitize(patient),

      doctor:sanitize(doctor),

      time,

      purpose:sanitize(purpose),

      date:selectedDate.toDateString()

    });

    setPatient("");
    setDoctor("");
    setTime("");
    setPurpose("");
    setErrors({});

  };

  return(

<div className="form-container">

<h2>Add Appointment</h2>

<p className="selected-date">

Selected :

<strong>

{selectedDate.toDateString()}

</strong>

</p>

<form onSubmit={submit}>

<input
className={errors.patient?"error":""}
placeholder="Patient Name"
value={patient}
onChange={(e)=>setPatient(e.target.value)}
aria-label="Patient Name"
/>

<input
className={errors.doctor?"error":""}
placeholder="Doctor Name"
value={doctor}
onChange={(e)=>setDoctor(e.target.value)}
aria-label="Doctor Name"
/>

<input
type="time"
className={errors.time?"error":""}
value={time}
onChange={(e)=>setTime(e.target.value)}
aria-label="Appointment Time"
/>

<textarea
className={errors.purpose?"error":""}
placeholder="Treatment / Notes"
value={purpose}
onChange={(e)=>setPurpose(e.target.value)}
aria-label="Treatment"
/>

<button>

Save Appointment

</button>

</form>

</div>

);

}

export default AppointmentForm;