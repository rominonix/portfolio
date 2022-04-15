import React from 'react';
import { useState, useEffect } from 'react';

const Loading = () => {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])

  return (
    loading && (
      <div>ajajajj</div>
    )

  )
}
export default Loading
// const Loading = () => {

//     const [loading, setLoading] = useState(false);

//     useEffect(()=>{
//       setLoading(true)
//       setTimeout(()=>{
//           setLoading(false)
//       }, 3000)
//     }, [])

// export default Loading;    


