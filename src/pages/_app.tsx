import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TodoListProvider from "../provider/TodoListProvider";
import { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

  return (
      <TodoListProvider>
          <CssBaseline />
          <Component {...pageProps} />
      </TodoListProvider>
  )
}

export default MyApp
