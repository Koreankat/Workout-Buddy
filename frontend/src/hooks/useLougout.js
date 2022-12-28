import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove user from localstorage
    localStorage.removeItem("user");

    //dispatch lougout action
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };
  return { logout };
};
