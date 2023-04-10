export function disableScroll(){
    // Create a style sheet we will only use to disable scrolling :
    const scroll_style_element = document.createElement('style');
    scroll_style_element.id = 'disable-scrolling-scroll-style';

    document.head.appendChild(scroll_style_element);
    const scroll_style_sheet = scroll_style_element.sheet;
    scroll_style_sheet.insertRule('html{height:100%;overflow-y:hidden;}', scroll_style_sheet.cssRules.length);
  }
  
  export function enableScroll() {
    const el = document.getElementById("disable-scrolling-scroll-style");
    if ( el ) {
      document.head.removeChild(el);
    }
  }

  export function newArray( length, value ) {
    if ( value ) {
      return [...Array( parseInt( length ) ).keys()].map( i => value );
    }    
    return [...Array( parseInt( length ) ).keys()].map( i => i );
  }

  //get a random number between min and max
  export function minMaxRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  //get an unique random number to use as id
  export function uid() {
    const currentDate = new Date();
    const randomNum = Math.floor(Math.random() * (999999999 - 100000) + 100000);
    return currentDate.getTime().toString() + randomNum.toString();
  }