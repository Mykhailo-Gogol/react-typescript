import React from 'react'

const Dragable: React.FC = () => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {}
  return (
    <div draggable onDragStart={onDragStart}>
      Drag me!
    </div>
  )
}

export default Dragable
