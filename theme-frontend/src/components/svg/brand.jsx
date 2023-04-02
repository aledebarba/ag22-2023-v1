import tw from 'twin.macro';
import {ReactComponent as BrandDefault} from "./brand/default.svg?url";
import {ReactComponent as BrandInverse} from "./brand/white-inverse.svg?url";

const Brand = ( props ) => {
    
    const { width, height, symbol, icon, inverse, menu, footer, ...rest } = {...props};

    const w = width || '100%'
    const h = height || '100%'


    return <>
      { menu && <BrandDefault viewBox="0 0 442 261" width="5rem" height="5rem" {...rest} ></BrandDefault> }
      { footer && <BrandInverse viewBox="0 0 442 261" width={w} height={h} {...rest} ></BrandInverse> }
      { !menu && !footer &&
        <BrandDefault viewBox="0 0 442 261" width="100%" height="100%"></BrandDefault> 
      }
    </>
}

export default Brand;