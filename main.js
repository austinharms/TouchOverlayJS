const overlay = {};
overlay.inject = function() {
  alert("Script Inject");
  const canvas_wrapper = document.getElementById("bgreplay");
  canvas_wrapper.addEventListener("touchstart", (e) => {
    alert("Touch Start");
  });
};

return overlay;
