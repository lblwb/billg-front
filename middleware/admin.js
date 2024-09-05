export default function ({ $auth, redirect }) {
  //   console.debug($auth.state.user);
  if ($auth.state && $auth.state.user && $auth.state.user.roles.superadmin) {
    // console.log($auth);
    console.debug("[middleware-admin] true.");
  } else {
    redirect("index");
  }
}
