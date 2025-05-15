import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

    /**
   * 콜백함수에서 함수의 인자가 같은 경우 생략 가능
   * () => login()
   * (user) => setUser(user)
   * -------------사용 방법-------------------
   * login, setUser
   */

  useEffect(() => {
    onUserStateChange(user => {
      setIsLoading(false);
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}