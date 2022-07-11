import React,{useEffect, useState} from 'react'

const UsersInfo = () => {
  const [users,setUsers] = useState([])
  const data = null
  useEffect(()=>{
  fetch("https://apibancoasenjopino.herokuapp.com/admin",{
  method:"GET",
  headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(data=>setUsers(data))
  console.log(users)
  },[])

  return (
    <>
    <h1>General Users Info </h1>
   {users.map((e)=>{
    return e.username
   })}
    </>
  )
}

export default UsersInfo