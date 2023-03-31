import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import tw from 'twin.macro';

export function RichTextField({ value, onChange }) {
  
    const blockProps = useBlockProps();
    const editorRef = useRef();

  return (
    
        <RichText
            {...blockProps}
            ref={editorRef}
            tagName="span"
            value={value}
            onChange={onChange}
            placeholder="Digite o texto aqui..."            
        />     

  );
}