import React, { Component } from 'react'

interface IContext {
  isAuth: Boolean
  toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
})

class Login extends Component {
  static contextType = AuthContext
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { isAuth, toggleAuth } = this.context
    return <button onClick={toggleAuth}>{!isAuth ? 'Login' : 'Logout'}</button>
  }
}

const Profile: React.FC = (): React.ReactElement => {
  return (
    <>
      <AuthContext.Consumer>
        {({ isAuth }: IContext) => (
          <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
        )}
      </AuthContext.Consumer>
    </>
  )
}

class Context extends Component {
  readonly state = {
    isAuth: false,
  }

  toggleAuth = () => {
    this.setState(({ isAuth }: { isAuth: boolean }) => ({
      isAuth: !isAuth,
    }))
  }

  render() {
    const { isAuth } = this.state
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth }

    return (
      <AuthContext.Provider value={context}>
        <section>
          <Profile />
          <Login />
        </section>
      </AuthContext.Provider>
    )
  }
}

export default Context
