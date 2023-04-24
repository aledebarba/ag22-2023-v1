import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import tw from 'twin.macro';

export function RichTextField({ value, onChange }) {
  
    const blockProps = useBlockProps();
    const editorRef = useRef();
    useEffect(()=>{
      // toggle fixedTollbar on editor focus
      const editor = editorRef.current;
      // add observer to editor focus
      editor.addEventListener('focusin', (e) => {
        const isVisible = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );
        if ( !isVisible ) {
          wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar' );
        }
      });
      
      return (()=>{
        editor.removeEventListener('focus');
        editor.removeEventListener('blur');
      })
      
    }, []);

  return (
    
        <RichText
            {...blockProps}
            ref={editorRef}
            tagName="span"
            value={value}
            onChange={onChange}
            placeholder="Digite o texto aqui..." 
            className="rich-text-field"           
        />     

  );
}