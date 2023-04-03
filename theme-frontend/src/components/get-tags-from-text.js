export function getTagsFromText(text) {
	if( !text ) return [ [], '' ]
	let textArray = text.split(' ');
	let tagsArray = [];
	let textMain = '';
	textArray.forEach( (word) => {
		if( word[0] == '#' ) {
			tagsArray.push( word )
		} else if( word[0] !== '#' && word[0] !== ' ' ) {
			textMain += word + ' '
		}
	})
	return [tagsArray, textMain]
}
