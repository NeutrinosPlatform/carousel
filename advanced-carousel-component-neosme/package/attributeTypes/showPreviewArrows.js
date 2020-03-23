let showPreviewArrowsLabelInstance = null;
module.exports = class showPreviewArrows {

    constructor() {
        if (!showPreviewArrowsLabelInstance) {
            showPreviewArrowsLabelInstance = this;
            //set all other default values

            this.displayAs = 'ShowPreviewArrows';
            this.value = '[showPreviewArrows]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return showPreviewArrowsLabelInstance;
    }
}