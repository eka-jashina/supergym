const videoContainer = document.querySelector('.video__container');
const videoWrapper = document.querySelector('.video');
const videoButton = document.querySelector('.video__button');

function loadVideo() {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1&enablejsapi=1';
  Object.assign(iframe, {
    frameBorder: '0',
    allowFullscreen: true,
    width: '100%',
    height: '100%',
  });

  videoWrapper.classList.add('video--playing');
  videoWrapper.style.background = 'none';
  videoButton.remove();

  iframe.onload = () => {
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  };

  videoContainer.appendChild(iframe);
}

export { videoButton, loadVideo };
