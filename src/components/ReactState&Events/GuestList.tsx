import React, { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('')

  const [guestList, setGuestList] = useState<string[]>([])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value)
  }

  const hadleAddGuest = (): void => {
    setGuestList((prev) => [name, ...prev])
    setName('')
  }

  return (
    <div>
      <h3>GuestList</h3>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={hadleAddGuest}>Add guest</button>
      <ul>
        {guestList.map((guest) => {
          return <li>{guest}</li>
        })}
      </ul>
    </div>
  )
}

export default GuestList
