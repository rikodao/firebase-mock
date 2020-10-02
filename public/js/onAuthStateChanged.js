firebaseApp.auth().onAuthStateChanged(function (user) {
  if (user) {
    alert("認証中だよ");
    document.getElementById("firebaseui-auth-container").style.display = 'none'
    document.getElementById("myform").style.display = 'block'
  } else {
    alert("認証してないよ");
    document.getElementById("firebaseui-auth-container").style.display = 'block'
    document.getElementById("myform").style.display = 'none'
  }
});