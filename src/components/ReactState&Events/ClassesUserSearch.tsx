import React, { Component } from 'react'

interface IUser {
  name: string
  age: number
}

// interface UserSearchProps {
//   users: IUser[]
// }

interface UserSearchState {
  name: string
  user: IUser | null
}

const users: IUser[] = [
  { name: 'Misha', age: 20 },
  { name: 'George', age: 25 },
  { name: 'Sarah', age: 30 },
]

// <UserSearchProps>
class ClassesUserSearch extends Component {
  state: UserSearchState = {
    name: '',
    user: null,
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value })
  }

  hadleSearch = (): void => {
    const foundUser = users.find((user) => user.name === this.state.name)
    this.setState({ user: foundUser })
  }

  render() {
    const { name, user } = this.state
    return (
      <div>
        <h3>With classes</h3>
        <input type="text" value={name} onChange={this.handleInputChange} />
        <button onClick={this.hadleSearch}>Search</button>
        <p>
          {user ? <span>{`${user.name}, ${user.age}`}</span> : 'Search guest'}
        </p>
        <p></p>
      </div>
    )
  }
}

export default ClassesUserSearch
