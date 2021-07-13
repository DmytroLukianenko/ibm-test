import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Timer = () => {
  const data = [
    { id: 10, weight: 10, color: 'red' },
    { id: 2, weight: 20, color: 'black' },
    { id: 3, weight: 15 },
  ]

  // filter out items having id > 2 // reduce the array to contain only id and color
  const result = data.filter(item => item.id > 2 && item.id && item.color)

  // ======================================     task 2  ====================
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  return (
    <>
      <h2>timer</h2>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  )
}
const mapStateToProps = (state, props) => ({})

export default connect(mapStateToProps)(Timer)
