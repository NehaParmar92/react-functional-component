import React, { useState } from 'react'

const Home = (props) => {
    const [fullName,setFullName]=useState({
        fName:"",
        lName:"",
        email:""
    });


    const inputChangeFn=(event)=>{
        console.log(event.target.value,'clicked');
        const { name, value}=event.target;
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        })

    }
    return (
        <div>
            <h1>My home page is {fullName.fName} {fullName.lName} {fullName.email}</h1>
            <form >
           <label>First Name</label> <input type='text' name="fName" onChange={inputChangeFn} value={fullName.fName} /><br />
           <label>Last Name</label>  <input type='text' name="lName" onChange={inputChangeFn} value={fullName.lName}  /><br />
           <label>Email</label> <input type='text' name="email" onChange={inputChangeFn} value={fullName.email} />
            <button>Change</button>
            </form>
            
        </div>
    )
}

export default Home
