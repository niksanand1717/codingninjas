document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".add");
  const container = document.querySelector(".box");
  let boxCount = 0;

  function createTimerBox() {
    boxCount++;
    const timerBox = document.createElement("div");
    timerBox.classList.add("timer-box");
    timerBox.innerHTML = `
        <h1>Event Timer ${boxCount}</h1>
        <div class="inp-grp">
          <label>Event Name</label>
          <input type="text" class="inpName" name="ename" placeholder="Enter event name" />
        </div>
        <div class="inp-grp">
          <label>Event Time (seconds)</label>
          <input type="number" class="inpTime" name="etime" placeholder="Enter time in seconds" min="1" />
        </div>
        <h6 class="msg"></h6>
        <div class="btns">
          <button type="button" class="srt-btn">Start</button>
          <button type="button" class="del-btn">Delete</button>
        </div>
      `;

    container.appendChild(timerBox);

    const startBtn = timerBox.querySelector(".srt-btn");
    const deleteBtn = timerBox.querySelector(".del-btn");

    startBtn.addEventListener("click", () => startTimer(timerBox));
    deleteBtn.addEventListener("click", () => timerBox.remove());
  }

  function startTimer(timerBox) {
    const inpName = timerBox.querySelector(".inpName");
    const inpTime = timerBox.querySelector(".inpTime");
    const msg = timerBox.querySelector(".msg");

    const name = inpName.value;
    let time = parseInt(inpTime.value);

    if (!name || isNaN(time) || time <= 0) {
      alert("Please enter a valid event name and time.");
      return;
    }

    let requiredCount = time;
    msg.innerHTML = requiredCount;

    const result = setInterval(() => {
      requiredCount--;
      msg.innerHTML = `Coding Ninjas: remaining time: ${requiredCount}`;

      if (requiredCount <= 0) {
        alert(`${name} is to be executed`);
        clearInterval(result);
        msg.innerHTML = "";
      }
    }, 1000);
  }

  createTimerBox();
  addBtn.addEventListener("click", createTimerBox);
});
