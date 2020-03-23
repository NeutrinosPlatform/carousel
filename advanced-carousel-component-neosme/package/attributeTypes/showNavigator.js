let ShowNavigatorLabelInstance = null;
module.exports = class showNavigator {

    constructor() {
        if (!ShowNavigatorLabelInstance) {
            ShowNavigatorLabelInstance = this;
            //set all other default values

            this.displayAs = 'ShowNavigator';
            this.value = '[showNavigator]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return ShowNavigatorLabelInstance;
    }
}