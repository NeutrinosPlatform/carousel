let pauseOnHoverLabelInstance = null;
module.exports = class pauseOnHover {

    constructor() {
        if (!pauseOnHoverLabelInstance) {
            pauseOnHoverLabelInstance = this;
            //set all other default values

            this.displayAs = 'PauseOnHover';
            this.value = '[pauseOnHover]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return pauseOnHoverLabelInstance;
    }
}