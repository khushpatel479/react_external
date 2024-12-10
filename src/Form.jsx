import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
const[name , setname]=useState("")
const[email , setemail]=useState("")
const[pass, setpass]=useState("")

const[e1 , sete1] = useState("")
const[e2 , sete2] = useState("")
const[e3 , sete3] = useState("")


const[c1,setc1] = useState(1)
const[c2,setc2] = useState(1)
const[c3,setc3] = useState(1)
useEffect(()=>
{
    sete1(<p style={{color:"red"}}>NAME IS EMPTY</p>)
    sete2(<p style={{color:"red"}}>EMAIL IS EMPTY</p>)
    sete3(<p style={{color:"red"}}>PASSWORD IS EMPTY</p>)
},[])


useEffect(()=>
{
    let s1 = document.querySelector("#s1")
    let s2 = document.querySelector("#s2")
    
    let store = [
        {"INDIA":["GUJARAT","MAHARASHTRA","UTTAR-PRADESH"],
        "AFRICA":["NIGERIA","KONGO","BORKINA-FASSO"]}
    ]
    let curr = 0
    let obj = store[curr]
    
    function load()
    {
        let km = Object.keys(obj)
       s1.innerHTML=""
        km.forEach((item)=>
        {
            let op = document.createElement("option")
            op.innerText = item
            op.value = item
            s1.appendChild(op)
        })
    }
    load()

s1.addEventListener("click" , (e)=>
{
    let val = e.target.value
    let ym = obj[val]
    s2.innerHTML=""
    ym.forEach((item)=>
    {
        let op = document.createElement("option")
        op.innerText=item
        s2.appendChild(op)
    })
})
},[])


function onname(e)
{
    let val = e.target.value
    setname(val)
    if(val.length>0 && val.length<=10)
    {
        sete1(<p style={{color:"green"}}>NAME IS LOOKING GOOD</p>)
        setc1(0)
    }
    else
    {
        sete1(<p style={{color:"red"}}>NAME IS NOT CORRECT</p>)
        setc1(1)
    }
}
function onemail(e)
{
    let val = e.target.value
    setemail(val)
    let ref = /^[^\s@]+@[^\s@]+$/
    if(ref.test(val))
    {
        sete2(<p style={{color:"green"}}> EMAIL IS VALID</p>)
        setc2(0)
    }
    else
    {
        sete2(<p style={{color : "red"}}> EMAIL IS NOT VALID</p>)
        setc2(1)
    }
}
function onpass(e)
{
    let val = e.target.value
    setpass(val)
    if(val.length>0 && val.length<=10)
    {
        sete3(<p style={{color:"green"}}> PASSWORD IS LOOKING GOOD</p>)
        setc3(0)
    }
    else
    {
        sete3(<p style={{color:"red"}}>PASWORD IS NOT CORRECT</p>)
        setc3(1)
    }
}
let nm = useNavigate()
function sub()
{
    if(c1===0&&c2===0&&c3===0)
    {
        nm("/sub",{state:{name,email,pass}})
        alert("ok")
        localStorage.setItem(`uname--${name}`,JSON.stringify({pass}))
    }
    else
    {
        alert("not")
    }
}


  return (
    <>
    ENTER THE NAME      :  <input type='text' placeholder='ENTER THE NAME' onChange={onname}/>
    <br/><p>{e1}</p>
    ENTER THE EMAIL     :  <input type='text' placeholder='ENTER THE EMAIL' onChange={onemail}/>
    <br/><p>{e2}</p>
    ENTER THE PASSWORD  :  <input type='text' placeholder='ENTER THE PASSWORD' onChange={onpass}/>
    <br/><p>{e3}</p>
    <br/>
    <select id='s1'></select>
    <select id='s2'></select>

    <input type='submit' value="SUBMIT" onClick={sub}/>
    </>
  )
}

export default Form