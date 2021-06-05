import React, { useState } from 'react'

interface IState {
  inputText: string
  textareaText: string
  selectText: string
  stringshowData: {
    name: string
    text: string
    position: string
  }
}

type TPosition = {
  id: string
  value: string
  title: string
}

const POSITIONS: Array<TPosition> = [
  { id: 'fd', value: 'Front-end Developer', title: 'Front-end Developer' },
  { id: 'bd', value: 'Back-end Developer', title: 'Back-end Developer' },
  { id: 'dd', value: 'Designer', title: 'Designer' },
]

const DEFAULT_SELECT_VALUE = POSITIONS[0].value

const innitialState = {
  inputText: '',
  textareaText: '',
  selectText: DEFAULT_SELECT_VALUE,
  stringshowData: {
    name: '',
    text: '',
    position: '',
  },
}

type TShowText = {
  name: string
  descr: string
  position: string
}

const innitialShowText = {
  name: '',
  descr: '',
  position: '',
}

const styles: React.CSSProperties = { paddingBottom: '10px' }

const TypeOfElements = () => {
  const [state, setState] = useState<IState>(innitialState)
  const [showText, setShowText] = useState<TShowText>(innitialShowText)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputText },
    } = event

    setState((state) => ({ ...state, inputText }))
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { value: textareaText },
    } = event

    setState((state) => ({ ...state, textareaText }))
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value: selectText },
    } = event

    setState((state) => ({ ...state, selectText }))
  }

  const handleShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const { inputText, textareaText, selectText } = state

    setShowText({ name: inputText, descr: textareaText, position: selectText })
  }

  return (
    <section style={styles}>
      <form action="">
        <label htmlFor="">
          <span>Name:</span>
          <input
            value={state.inputText}
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="">
          <span>Text:</span>
          <textarea
            value={state.textareaText}
            name=""
            // id=""
            cols={25}
            rows={15}
            onChange={handleTextareaChange}
            placeholder="start typing...."
          />
        </label>
        <label htmlFor="">
          <span>Select:</span>
          <select
            name=""
            // id=""
            value={state.selectText}
            onChange={handleSelectChange}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option key={title} value={value}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={handleShow}>
          Submit
        </button>
      </form>

      <h2>{showText.name}</h2>
      <p>{showText.descr}</p>
      <p>{showText.position}</p>
    </section>
  )
}

export default TypeOfElements

// Working
