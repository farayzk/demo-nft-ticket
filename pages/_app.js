import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
export default function App({ Component, pageProps }) {
  const activeChainId = ChainId.Goerli;
  return (
    <ThirdwebProvider desireChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
   
}
