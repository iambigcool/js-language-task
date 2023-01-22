// Write a function that creates a notification: <div class="notification">with the given content. The notification should automatically disappear after 1.5 seconds.
// The options are:
// // shows an element with the text "Hello" near the right-top of the window
// showNotification({
//   top: 10, // 10px from the top of the window (by default 0px)
//   right: 10, // 10px from the right edge of the window (by default 0px) html: "Hello!", // the HTML of notification
//   className: "welcome" // an additional class for the div (optional)
// });
// Use CSS positioning to show the element at given top/right coordinates. The source document has the necessary styles.
// https://plnkr.co/edit/EiI2BEo4NfYjBbnb?p=preview&preview
function showNotification({top = 0, right = 0, className, html}) {
  let notification = document.createElement('div');

  notification.classList.add('notification');

  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  document.body.append(notification);
  notification.innerHTML = html;

  setTimeout(() => notification.remove(), 1500);
}
