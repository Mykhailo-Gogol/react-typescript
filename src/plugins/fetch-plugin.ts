import * as esbuild from 'esbuild-wasm'

import axios from 'axios'

import localForage from 'localforage'

const fileCache = localForage.createInstance({ name: 'filecache' })

export const fetchPlugin = (inputValue: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: inputValue,
          }
        }

        // Check if we have fetched this file and if it's in the cache

        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        )

        const { data, request } = await axios.get(args.path)

        // Check
        if (cachedResult) {
          return cachedResult
        }

        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        }

        // Store response in cache
        await fileCache.setItem(args.path, result)

        return result
      })
    },
  }
}
