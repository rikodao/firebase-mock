var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());
const UIConfig = {
  signInSuccessUrl: "",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
ui.start("#firebaseui-auth-container", UIConfig);
