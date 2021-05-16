import React, { useState, useEffect, useRef } from 'react'

import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from '../../plugins/unpkg-path-plugin'

const JBook: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [code, setCode] = useState<string>('')

  const ref = useRef<any>()

  useEffect((): void => {
    startService()
  }, [])

  const onSubmit = async () => {
    if (!ref.current) return

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    })

    setCode(result.outputFiles[0].text)
  }

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    })
  }

  return (
    <div>
      <h1>Hello</h1>
      <textarea
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInputValue(e.target.value)
        }
        cols={50}
        rows={10}
      ></textarea>
      <div>
        <button onClick={onSubmit}>Submit</button>
        <pre>{code}</pre>
      </div>
    </div>
  )
}

export default JBook
