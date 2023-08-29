import Timer from './timer.js'
import { config } from './config.js'

export class Toast {
    constructor ({ type, msg, durations }, parent, unMountedApp) {
        this.config = config;
        this.$parent = parent;
        this.$type = type || 'success';
        this.$msg = msg || this.config.messages[this.$type];
        this.$durations = durations || this.config['durations'];
        this.unMountedApp = unMountedApp;

        this.init();
    }

    init () {
        this.createElement(this.$type, this.$msg, this.$durations);
        this.insert();
    }

    insert() {
        this.beforeInsert(this.$parent)
        this.renderParent()
        this.afterInsert()
    }

    beforeInsert(parent) {
        if (parent.childElementCount >= this.config.maxNotifications) {
            let elements = Array.from(parent.getElementsByClassName('toast')).reverse();
            this.delete(elements.find(e => !this.isDeleted(e)))
        }
    }

    afterInsert() {
        this.timer = new Timer(() => this.delete(), this.$durations)
        for (const e of ["mouseenter", "mouseleave"]) {
            this.$el.addEventListener(e, () => {
                if (this.isDeleted()) return
                this.timer.toggle()
            })
        }
    }

    beforeDelete(el) {
        return new Promise(resolve => {
            setTimeout(() => {
                el.classList.add('hiding')

                setTimeout(resolve, this.config.animationDuration);
            }, 0)
        })
    }
    delete(el = this.$el) {
        this.beforeDelete(el).then(() => {
            el.remove()
            this.afterDelete()
        })
    }

    afterDelete(notification = this.$parent) {
        if (notification.childNodes.length <= 0) {
            this.unMountedApp()
        }
    }

    isDeleted(el = this.$el) {
        return el.classList.contains('hiding')
    }

    renderParent (el = this.$el, parent = this.$parent) {
        const child = Array.from(parent.childNodes).filter(node => {
            return node.nodeType === 1;
        })[0];

        if (child){
            parent.insertBefore(el, child);
        }else {
            parent.appendChild(el);
        }
    }

    createElement(type, msg, durations) {
        this.$el = document.createElement('div');
        const icon = this.getIcon(type)
        this.$el.classList.add('toast', type);
        this.$el.innerHTML = `
            <div class="toast-icon ${type}">
                ${ icon }
            </div>
            <div class="toast-content">${ msg }</div>
        `
    }

    getIcon (type) {
        switch (type) {
            case 'info':
                return `
                    <svg t="1624242937335" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17848" width="10" height="10">
                        <path d="M847 733.1l-77.5-154.8c-0.8-1.7-1.3-3.5-1.3-5.4l-0.2-171.4c-0.1-96.7-65.6-178.1-154.5-202.4v-0.1c0-55.6-45.1-100.7-100.7-100.7-55.5 0-100.5 44.9-100.7 100.4C322.2 222.6 255.9 304.6 256 402l0.2 171.4c0 1.9-0.4 3.7-1.3 5.4l-77.4 154.6c-22.6 45.2 10.3 98.5 60.9 98.4l547.9-0.4c50.5 0.1 83.4-53.1 60.7-98.3zM421.5 860.8c-10.1 0-15.6 11.7-9.3 19.6 23.4 29.2 59.4 47.9 99.7 47.9 40.4 0 76.4-18.7 99.9-48 6.3-7.9 0.8-19.6-9.3-19.5h-181z" p-id="17849" fill="#ffffff"></path>
                    </svg>
                `
            case 'success':
                return `
                    <svg t="1609781242911" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1807">
                        <path d="M455.42 731.04c-8.85 0-17.75-3.05-24.99-9.27L235.14 553.91c-16.06-13.81-17.89-38.03-4.09-54.09 13.81-16.06 38.03-17.89 54.09-4.09l195.29 167.86c16.06 13.81 17.89 38.03 4.09 54.09-7.58 8.83-18.31 13.36-29.1 13.36z" p-id="1808" fill="#ffffff"></path>
                        <path d="M469.89 731.04c-8.51 0-17.07-2.82-24.18-8.6-16.43-13.37-18.92-37.53-5.55-53.96L734.1 307.11c13.37-16.44 37.53-18.92 53.96-5.55 16.43 13.37 18.92 37.53 5.55 53.96L499.67 716.89c-7.58 9.31-18.64 14.15-29.78 14.15z" p-id="1809" fill="#ffffff"></path>
                    </svg>
                `
            case 'warning':
                return `
                   <svg t="1609776406944" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18912">
                        <path d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z" p-id="18913" fill="#ffffff"></path>
                    </svg>
                `
            case 'error':
                return `
                    <svg t="1609810716933" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5514">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z" p-id="5515" fill="#ffffff"></path>
                    </svg> 
                `
            default:
                return `
                    <div class="dream-msg_loading">
                        <svg class="dream-msg-circular" viewBox="25 25 50 50">
                            <circle class="dream-msg-path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                `
        }
    }
}