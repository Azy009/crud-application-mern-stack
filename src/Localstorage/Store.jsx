
const tokenstore = (value)=>{
  localStorage.setItem('token',JSON.stringify(value))
}

const sohstore = (value)=>{
  localStorage.setItem('soh',JSON.stringify(value))
}

const getsoh = ()=>{
  let data = localStorage.getItem('soh')
  return JSON.parse(data)
}

const gettoken = ()=>{
  let data = localStorage.getItem('token')
  return JSON.parse(data)
}

const privateurl = (value)=>{
    localStorage.setItem('privatetoken',JSON.stringify(value))
  }
const getprivateurl = ()=>{
    let data = localStorage.getItem('privatetoken')
    return JSON.parse(data)
 }

 const removeToken = ()=>{
  localStorage.removeItem('token')
    }

  export { privateurl,getprivateurl,tokenstore,gettoken,removeToken,getsoh,sohstore }
