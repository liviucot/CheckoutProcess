function CustomAlert() {
   this.performCustomAlert = function (dialog) {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = windowHeight + "px";
      dialogbox.style.display = "block";
   }
   this.ok = function () {
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
   }
}

var newAlert = new CustomAlert();