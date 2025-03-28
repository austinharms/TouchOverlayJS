const overlay = {};
overlay.inject = function() {
  alert("Load V0");
  const canvas_wrapper = document.getElementById("bgreplay");
  canvas_wrapper.addEventListener("touchstart", (e) => {
    alert("Touch Start");
  });
  canvas_wrapper.addEventListener("click", (e) => {
    alert("Click Start");
  });
  canvas_wrapper.addEventListener("mousedown", (e) => {
    alert("Mount Down");
  });
};

return overlay;
