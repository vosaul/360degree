function onVrViewLoad() {
  var vrView = new VRView.Player("#vrview", {
    //video: 'link/to/video.mp4',
    image: "//storage.googleapis.com/vrview/examples/coral.jpg",
    preview: "//storage.googleapis.com/vrview/examples/coral-preview.jpg",
    is_stereo: true,
    is_debug: true,
    is_vr_off: false,
    is_autopan_off: false,
    width: "auto",
    heigh: "auto",
    //default_yaw: "",
    is_yaw_only: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('click', onVRViewClick);
  vrView.on('modechange', onModeChange);
  vrView.on('error', onVRViewError);
  
  vrView.on('enter-fullscreen', onVRViewError);
  
}

function onVRViewReady(e) {
  console.log('onVRViewReady', e);
}

function onVRViewClick(e) {
  console.log('onVRViewClick', e);
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

window.addEventListener("load", onVrViewLoad);