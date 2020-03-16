let AdvancedCarousel = require('./AdvancedCarousel');

//Importing attribute Types
let showImageDescriptionConfig = require('advanced-carousel-component-neosme/attributeTypes/showImageDescription');
let showNavigatorConfig = require('advanced-carousel-component-neosme/attributeTypes/showNavigator');
let imageArrowConfig = require('advanced-carousel-component-neosme/attributeTypes/imageArrows');
let imageSwipeConfig = require('advanced-carousel-component-neosme/attributeTypes/imageSwipe');
let imageAutoPlayConfig = require('advanced-carousel-component-neosme/attributeTypes/imageAutoPlay');
let imageInfinityMoveConfig = require('advanced-carousel-component-neosme/attributeTypes/imageInfinityMove');
let showPreviewConfig = require('advanced-carousel-component-neosme/attributeTypes/showPreview');
let showPreviewArrowsConfig = require('advanced-carousel-component-neosme/attributeTypes/showPreviewArrows');
let enablePreviewSwipeConfig = require('advanced-carousel-component-neosme/attributeTypes/enablePreviewSwipe');
let pauseOnHoverConfig = require('advanced-carousel-component-neosme/attributeTypes/pauseOnHover');



module.exports = {
    components: {
        AdvancedCarousel
    },

     // Specifying attribute types  of the component
    attributeTypes: {
        'ShowImageDescription': new showImageDescriptionConfig(),
        'ShowNavigator': new showNavigatorConfig(),
        'ImageArrows': new imageArrowConfig(),
        'ImageSwipe': new imageSwipeConfig(),
        'ImageAutoPlay': new imageAutoPlayConfig(),
        'ImageInfinityMove': new imageInfinityMoveConfig(),
        'ShowPreview':new showPreviewConfig(),
        'ShowPreviewArrows': new showPreviewArrowsConfig(),
        'EnablePreviewSwipe': new enablePreviewSwipeConfig(),
        'PauseOnHover': new pauseOnHoverConfig()
    }
};
