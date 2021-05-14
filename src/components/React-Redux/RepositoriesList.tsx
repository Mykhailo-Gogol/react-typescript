import React, { useState } from 'react'

// Redux
import { useAction } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('')

  const { searchRepositories } = useAction()

  const { data, loading, errorMessage } = useTypedSelector(
    (state) => state.repositories
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    searchRepositories(term)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <h3>{errorMessage}</h3>}
      {loading && <h3>...Loading...</h3>}
      <ul>
        {!errorMessage &&
          !loading &&
          data.map((repo) => (
            <li key={repo}>
              <p>{repo}</p>
            </li>
          ))}
      </ul>
    </>
  )
}

export default RepositoriesList
