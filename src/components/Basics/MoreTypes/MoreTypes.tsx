import './index.css'

import React from 'react'

import Title from './Title/Title'
import Counter from './Counter/Counter'
import CounterClass from './Counter/CounterClass'

import TypedEvents from './TypedEvents/TypedEvents'
import TypeOfElements from './TypeOfElements/TypeOfElements'

import Portal from './ContextPortal/Portal'
import Context from './ContextPortal/Context'

const MoreTypes: React.FC = () => {
  return (
    <div>
      <Title title="Hello There" />
      <Counter title="FuncCounter" />
      <CounterClass title="ClassCounter" />

      <TypedEvents />
      <TypeOfElements />

      <Portal />
      <Context />
    </div>
  )
}

export default MoreTypes
