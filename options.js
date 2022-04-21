navigator.mediaDevices.getUserMedia({ video: true }).then(stream => stream.getTracks().forEach(track => track.stop()))
