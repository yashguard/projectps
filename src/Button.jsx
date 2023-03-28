import React from 'react';

function Button(props) {
  return (
    <>
      <button onClick={()=>props.clearValue()}>clear</button>
    </>
  )
}

export default Button
