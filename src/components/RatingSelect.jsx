import React from 'react'
import {useState} from 'react'

function RatingSelect() {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(e.currentTarget.value)
  }
  return (
    <div>RatingSelect</div>
  )
}

export default RatingSelect