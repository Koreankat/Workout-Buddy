import { createContext, useReducer } from "react"

export const AutContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }

    case "LOGOUT":
      return { user: null }
    default:
      return state
  }
}
export const AutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })
  console.log("AuthContext state:", state)
  return (
    <AutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AutContext.Provider>
  )
}
