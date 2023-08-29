import { Toast } from './toast.js'
import './index.scss'

let notificationBox = null;

export function notification (payload) {
    const toast = new Toast(payload, getNotificationBox(), unMountedApp)
}

function getNotificationBox () {
    if (notificationBox) {
        return notificationBox
    }else {
        notificationBox = document.createElement('div');
        notificationBox.classList.add('notification');
        document.body.appendChild(notificationBox);

        return notificationBox
    }
}

function unMountedApp () {
    notificationBox.remove();
    notificationBox = null;
}
