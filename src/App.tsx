import { Fragment } from "react/jsx-runtime"

import Homepage from "./pages/Homepage"
import { MainNav } from "./components/MainNav"


function App() {
  
  return (
    <Fragment>
      <MainNav />
      <Homepage />
    </Fragment>
  )
}

export default App
