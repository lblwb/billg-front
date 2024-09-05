export default ({ app }, inject) => {
  inject("checkRole", (string) => {
    if (
      app.$auth &&
      app.$auth.state.user &&
      app.$auth.state.user.roles[string]
    ) {
      // console.log(app.$auth.state.user.roles[string]);
      return true;
    }
  });
};
