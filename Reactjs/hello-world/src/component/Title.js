import React from 'react'

// useCallback Hook - https://www.youtube.com/watch?v=IL82CzlaCys
//Please check also ParentComponentOne.js,Count.js,Button.js

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}

//React.memo is higher order component that will prevent functional component from being re-rendered it it's props or state do not change.
export default React.memo(Title)