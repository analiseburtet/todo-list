import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TodoListProvider from "../provider/TodoListProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <TodoListProvider>
        <Component {...pageProps} />
      </TodoListProvider>
  )
}

export default MyApp
