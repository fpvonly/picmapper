import React from "react";
import { action, observable } from "mobx";

export default class LoginStore {
  @observable title = "Title";

  @observable user = {
    userId: 1,
    name: "A P",
    email: "hgjkgfhk@aaa.com",
  };

  @action
  setUser(user) {
    this.user = user;
  }

  @action
  updateUser(data) {
    this.user = { ...this.user, ...data };
  }

  @action
  clearUser() {
    this.user = undefined;
  }

  @action
  setTitle(title) {
    this.title = title;
  }
}
/* Store end */

/* Store helpers */
const StoreContext = React.createContext();

export const LoginStoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};
