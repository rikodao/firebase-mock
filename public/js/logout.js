document.getElementById("logout").onclick = function () {
  alert('logoutbtn')
  firebase.auth().signOut()
  .then(res=>{
    alert('ログアウト完了')
  })
};