import { useContext } from "react"
import { AuthContext } from "../Context/AuthProviderContext";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;