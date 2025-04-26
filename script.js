let [seconds, minutes, hours] = [0, 0, 0];
    let display = document.getElementById("display");
    let interval = null;

    function updateTime() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }

      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `${h}:${m}:${s}`;
    }

    function start() {
      if (interval !== null) return; // Prevent multiple intervals
      interval = setInterval(updateTime, 1000);
    }

    function stop() {
      clearInterval(interval);
      interval = null;
    }

    function reset() {
      stop();
      [seconds, minutes, hours] = [0, 0, 0];
      display.textContent = "00:00:00";
    }
