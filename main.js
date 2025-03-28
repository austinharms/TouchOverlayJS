const overlay = {};
overlay.inject = () => {
  alert("Script Inject");
};

document.overlay_api = overlay;
