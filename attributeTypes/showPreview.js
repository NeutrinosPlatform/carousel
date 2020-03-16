let showPreviewLabelInstance = null;
module.exports = class showPreview {

    constructor() {
        if (!showPreviewLabelInstance) {
            showPreviewLabelInstance = this;
            //set all other default values

            this.displayAs = 'ShowPreview';
            this.value = '[showPreview]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return showPreviewLabelInstance;
    }
}