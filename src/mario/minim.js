/**
 * Minim-emulation code by Daniel Hodgin
 */

// wrap the P5 Minim sound library classes
function Minim() {
  this.loadFile = function (str) {
    return new AudioPlayer(str);
  };
}

// Browser Audio API
function AudioPlayer(str) {
  const audio = document.createElement('audio');
  let loaded = false;
  let looping = false;

  if (document.createElement('audio').canPlayType) {
    audio.addEventListener(
      'ended',
      async function () {
        if (looping) {
          this.currentTime = 0;
          await this.play();
        }
      },
      false,
    );
    audio.preload = 'auto';
    audio.autobuffer = true;
    if (canPlayOgg()) {
      audio.src = str.substring(0, str.lastIndexOf('.')) + '.ogg';
    } else if (canPlayMp3()) {
      audio.src = str;
    }
    loaded = true;
  }
  this.play = async function () {
    if (!loaded || audio.readyState === 0) {
      const local = this;
      setTimeout(function () {
        local.play();
      }, 50);
      return;
    }
    await audio.play();
  };
  this.loop = async function () {
    if (!loaded || audio.readyState === 0) {
      const local = this;
      setTimeout(function () {
        local.loop();
      }, 50);
      return;
    }
    //audio.loop = 'loop';
    looping = true;
    await audio.play();
  };
  this.pause = function () {
    if (!loaded) {
      return;
    }
    audio.pause();
  };
  this.rewind = function () {
    if (!loaded || audio.readyState === 0) {
      return;
    }
    // rewind the sound to start
    audio.currentTime = 0;
  };
}

function canPlayOgg() {
  const a = document.createElement('audio');
  return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
}

function canPlayMp3() {
  const a = document.createElement('audio');
  return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}
