import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider desireChainId={ChainId.goerli}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
   
}
