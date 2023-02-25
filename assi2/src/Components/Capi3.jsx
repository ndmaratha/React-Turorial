import React,{useContext} from 'react'
import { newContext } from '../App'
export default function Capi3() {
    const usecon=useContext(newContext)
  return (
    <div>
      <li>{usecon}</li>
    </div>
  )
}
