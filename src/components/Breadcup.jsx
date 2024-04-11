import React from 'react'

const Breadcup = ({name, second}) => {
  if(second){
    return (
      <div style={{width:'100%'}}>
       Dashboard &nbsp;  &gt;  &nbsp;{second} &nbsp;  &gt;  &nbsp; {name}
      </div>
    )
  }else{
    return (
      <div style={{width:'100%'}}>
       Dashboard &nbsp;  &gt;  &nbsp; {name}
      </div>
    )
  }
}

export default Breadcup