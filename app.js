const notifications = 3;
const notificaitonNum = document.querySelector(`.notif-num`);
const dots = document.querySelectorAll(`i`);
const not = document.querySelectorAll(`.notify`);
notificaitonNum.textContent = notifications;
const markAsRead = function () {
  notificaitonNum.textContent = 0;
  for (const dot of dots) {
    dot.remove();
  }
  for (const noti of not) {
    noti.classList.add(`read`);
  }
};
document.querySelector(`.Mark`).addEventListener(`click`, markAsRead);
