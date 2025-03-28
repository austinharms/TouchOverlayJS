const overlay = {};
overlay.inject = function() {
  alert("Script Inject");
  const canvas_wrapper = document.getElementById("bgreplay");
  const canvas = canvas_wrapper.querySelector("canvas")
  alert(canvas);
  canvas.addEventListener("touchstart", (e) => {
    alert("Touch Start");
  });
};

return overlay;
