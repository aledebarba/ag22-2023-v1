export const scrollStop = (delay) => {
    var timer = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function() {
            return( true )
        }, delay || 150);
    }, false);

}