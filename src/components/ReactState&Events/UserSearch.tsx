import React, { useState, useEffect, useRef } from 'react'

const guests = [
  { name: 'Misha', age: 20 },
  { name: 'George', age: 25 },
  { name: 'Sarah', age: 30 },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // if (!inputRef.current) return

    inputRef.current?.focus()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const hadleSearch = (): void => {
    const foundUser = guests.find((user) => user.name === name)
    setUser(foundUser)
  }

  return (
    <div>
      <h3>With func</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={hadleSearch}>Search</button>
      <p>
        {user ? <span>{`${user.name}, ${user.age}`}</span> : 'Search guest'}
      </p>
      <p></p>
    </div>
  )
}

export default UserSearch
