document.getElementById("button01").onclick = function () {

  const input = document.getElementById("translate").value
  var helloWorld = firebaseApp.functions('asia-northeast1').httpsCallable("cloudbooster");
  helloWorld({ data: input }).then(function (result) {
    document.getElementById("translated").value = result.data
  });
};