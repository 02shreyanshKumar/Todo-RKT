import { Provider } from "react-redux"
import { Store } from "./App/Store"


import TodoApp from "./Components/TodoApp"
function App() {
  
  return (
    <Provider store={Store}>
      <TodoApp/>
    </Provider>
  )
}


export default App
