import * as esbuild from 'esbuild-wasm'
import React, { useState, useEffect, useRef } from 'react'

import { unpkgPathPlugin } from '../../plugins/unpkg-path-plugin'
import { fetchPlugin } from '../../plugins/fetch-plugin'

import 'react-notifications/lib/notifications.css'

const JBook: React.FC = () => {
  const outputRef = useRef<any>()
  const iframeRef = useRef<any>()

  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const startService = async () => {
    outputRef.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    })
  }
  useEffect(() => {
    startService()
  }, [])

  const onClick = async () => {
    if (!outputRef.current) {
      return
    }

    const result = await outputRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    })

    // setCode(result.outputFiles[0].text)
    iframeRef.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
  }

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event)=>{
        eval(event.data)}, false)
      </script>
    </body>
  </html>`

  return (
    <section>
      <h1>Compile</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
      <iframe
        // src="/test.html"
        // sandbox="allow-same-origin"
        ref={iframeRef}
        srcDoc={html}
        sandbox="allow-scripts"
        title="test"
        style={{
          display: 'block',
          width: '100%',
          outline: 'none',
          border: 'none',
          borderTop: '1px solid rgba(255, 255, 255, 0.6)',
          color: '#fff',
        }}
      ></iframe>
    </section>
  )
}

export default JBook
