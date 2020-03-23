let ShowImageDescriptionLabelInstance = null;
module.exports = class showImageDescription {

    constructor() {
        if (!ShowImageDescriptionLabelInstance) {
            ShowImageDescriptionLabelInstance = this;
            //set all other default values

            this.displayAs = 'ShowImageDescription';
            this.value = '[showImageDescription]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return ShowImageDescriptionLabelInstance;
    }
}