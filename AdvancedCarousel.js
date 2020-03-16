// import attribute and advanced component
"use strict";
let AdvancedComponent = require("@jatahworx/bhive-toolkits").AdvancedComponent;
let Attribute = require("@jatahworx/bhive-toolkits").Attribute;

module.exports = class AdvancedCarousel extends AdvancedComponent {
  constructor() {
    const name = "advanced-carousel-neosme";
    const designerTemplate = `
    <advanced-carousel-neosme class="ad-element view">
            <div>
                <div class="inline-block container">
                   <div class="imagecontainer">
                        <p class="leftArrow"><</p>                        
                        <div class=\"ad-image-component ad-image\ image">
                        <span class="imageLabel">Image </span>
                        </div>    
                        <p class="rightArrow">></p>
                    </div>
                </div>
                <p class="secondSlideLabel">Second slide label</p>
                <p class="loremIpsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <div class="underlineContainer"></div>
            </div>  
    </advanced-carousel-neosme>`;
    const paletteTemplate = "Carousel";
    const componentLabel = '';
    const templateUrl = "https://www.npmjs.com/package/ngx-gallery";

    super(
      {
        name,
        designerTemplate,
        paletteTemplate,
        componentLabel,
        templateUrl
      }
    );
    super.setType(AdvancedComponent.COMPONENT_TYPE_TITLES.LAYOUT.val);

    // Adding attributes here
    super.addAttribute(
      new Attribute({
        key: 'Width',
        value: '',
        type: 'a'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'Height',
        value: '',
        type: 'a'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'Images',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'StartIndex',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PreviewLeftArrow',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PreviewRightArrow',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'CarouselLeftArrow',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'CarouselRightArrow',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'Change',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PreviewOpen',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PreviewClose',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PreviewChange',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ImageAutoPlayInterval',
        value: '',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ShowImageDescription',
        value: 'false',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ShowNavigator',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ImageArrows',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ImageSwipe',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ImageAutoPlay',
        value: 'false',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ImageInfinityMove',
        value: 'false',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ShowPreview',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'ShowPreviewArrows',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'EnablePreviewSwipe',
        value: 'true',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'PauseOnHover',
        value: 'false',
        type: 'kv',
        complexity:"advanced"
      })
    );
    super.composeTemplate({
      styles: `
      :host {
        display: flex;
        padding-top: 2em;
        padding-bottom: 1em;
        min-width: 20em;
        flex-direction: column;
        align-self: start;
        max-height: 100%;
      }`
    });
  }

  get template() {
    let componentAttribute = this.getHtmlAttributes(this.htmlAttributes);
    let change = componentAttribute.Change['_value']
    let previewChange = componentAttribute.PreviewChange['_value']
    let previewOpen = componentAttribute.PreviewOpen['_value']
    let previewClose = componentAttribute.PreviewClose['_value'];
    let imageArray = componentAttribute.Images['_value'];

    // Ngx-gallery
    let template = '';
    let galleryOptionsValue = {
        width: componentAttribute.Width['_value'] ? componentAttribute.Width['_value'] : '600px',
        height: componentAttribute.Height['_value'] ? componentAttribute.Height['_value'] : '400px',
        thumbnailsColumns: 4,
        imageAnimation: 'Slide',
        startIndex: componentAttribute.StartIndex['_value'] ? parseInt(componentAttribute.StartIndex['_value']) : 0,
        imageDescription: componentAttribute.ShowImageDescription['_value'] === 'true' ? true : false,

        imageArrows: componentAttribute.ImageArrows['_value'] === 'true' ? true : false,
        thumbnailsArrows: true,
        previewArrows: componentAttribute.ShowPreviewArrows['_value'] === 'true' ? true : false,

        imageSwipe: componentAttribute.ImageSwipe['_value'] === 'true' ? true : false,
        thumbnailsSwipe: true,
        previewSwipe: componentAttribute.EnablePreviewSwipe['_value'] === 'true' ? true : false,

        imageAutoPlay: componentAttribute.ImageAutoPlay['_value'] === 'true' ? true : false,
        imageAutoPlayInterval: componentAttribute.ImageAutoPlayInterval['_value'] ? parseInt(componentAttribute.ImageAutoPlayInterval['_value']) : 2000,
        imageAutoPlayPauseOnHover: componentAttribute.PauseOnHover['_value'] === 'true' ? true : false,
        imageInfinityMove: componentAttribute.ImageInfinityMove['_value'] === 'true' ? true : false,

        preview: componentAttribute.ShowPreview['_value'] === 'true' ? true : false,

        arrowPrevIcon: componentAttribute.PreviewLeftArrow['_value'] ? componentAttribute.PreviewLeftArrow['_value'] : "arrow_back_ios", 
        arrowNextIcon: componentAttribute.PreviewRightArrow['_value'] ? componentAttribute.PreviewRightArrow['_value'] : "arrow_forward_ios", 

        previewPrevIcon: componentAttribute.CarouselLeftArrow['_value'] ? componentAttribute.CarouselLeftArrow['_value'] : "arrow_back_ios", 
        previewNextIcon: componentAttribute.CarouselRightArrow['_value'] ? componentAttribute.CarouselRightArrow['_value'] : "arrow_forward_ios",

        thumbnails: componentAttribute.ShowNavigator['_value'] === 'true' ? true :  false,
      };

      
    template = `ngx-gallery  %style%  %class% [widthOption] = "'${galleryOptionsValue.width}'"
    [heightOption] = "'${galleryOptionsValue.height}'"
    [thumbnailsOption] = "${galleryOptionsValue.thumbnails}"
    [thumbnailsColumnsOption] = "${galleryOptionsValue.thumbnailsColumns}"
    [startIndexOption] = "${galleryOptionsValue.startIndex}"
    [imageDescriptionOption] = "${galleryOptionsValue.imageDescription}"
    [imageArrowsOption] = "${galleryOptionsValue.imageArrows}"
    [thumbnailsArrowsOption] =  "${galleryOptionsValue.thumbnailsArrows}"
    [previewArrowsOption] = "${galleryOptionsValue.previewArrows}"
    [imageSwipeOption] =  "${galleryOptionsValue.imageSwipe}"
    [thumbnailsSwipeOption] =  "${galleryOptionsValue.thumbnailsSwipe}"
    [previewSwipeOption] =  "${galleryOptionsValue.previewSwipe}"
    [imageAutoPlayOption] =  "${galleryOptionsValue.imageAutoPlay}"
    [imageAutoPlayIntervalOption] =  "${galleryOptionsValue.imageAutoPlayInterval}"
    [imageAutoPlayPauseOnHoverOption] =  "${galleryOptionsValue.imageAutoPlayPauseOnHover}"
    [imageInfinityMoveOption] =  "${galleryOptionsValue.imageInfinityMove}"
    [previewOption] =  "${galleryOptionsValue.preview}"
    [arrowPrevIconOption] =  "'${galleryOptionsValue.arrowPrevIcon}'"
    [arrowNextIconOption] =  "'${galleryOptionsValue.arrowNextIcon}'"
    [previewPrevIconOption] =  "'${galleryOptionsValue.previewPrevIcon}'"
    [previewNextIconOption] =  "'${galleryOptionsValue.previewNextIcon}'" [images]="${imageArray}"`;
    if (change !== "") {
      template = template + `(change)="${change}"`
    }
    if(previewChange !== ""){
      template = template + `(previewChange)="${previewChange}"`
    }
    if(previewOpen !== ""){
      template = template + `(previewOpen)="${previewOpen}"`
    }
    if(previewClose !== ""){
      template = template + `(previewClose)="${previewClose}"`
    }
    template = "<" + template + "></ngx-gallery>";
    return template;

  }
  set template(templateString) { }
};
