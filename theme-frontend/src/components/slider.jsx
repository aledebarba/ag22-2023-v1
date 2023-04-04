import tw from 'twin.macro';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import { Container } from './containers';

export const Slider = ( { slides } ) => {

  const _plugins = [new Arrow()];

  return (
    <Container center css={`
        z-index: 10;
        margin-top: -15vh;
        padding: 0 2rem;
        .flicking-arrow-next.is-circle, .flicking-arrow-prev.is-circle {
            ${tw`bg-primary`};
            border-radius: 50%;
        }
    `}>
    
      <Flicking 
          panelsPerView={1}
          circular={true}
          plugins={_plugins}
      >
          { slides.map( ( item, index ) => {
            
            let isImage = item.url.match(/\.(jpeg|jpg|gif|png)$/) != null;
            let isVideo = item.url.match(/\.(mp4|mov|webm)$/) != null;
            if (isImage) { 
              return <div tw="px-2">
                <div key={index} 
                    className="card-panel" 
                    tw="w-[80%] pt-[50%] mx-[10%] bg-cover bg-center rounded-2xl shadow-2xl" 
                    style={{ backgroundImage: `url(${item.url})` }}>
                </div>
              </div> }
            if (isVideo) { 
              return <div tw="px-2" key={index} className="card-panel">
                      <div  tw="relative w-[80%] pt-[46.25%] mx-[10%] rounded-2xl shadow-2xl overflow-hidden" >
                          <video tw="absolute top-0 w-full h-full object-cover" autoPlay muted loop src={item.url} />
                      </div>
                </div>
            }
          })}

          <ViewportSlot>
            <span className="flicking-arrow-prev is-circle"></span>
            <span className="flicking-arrow-next is-circle"></span>
          </ViewportSlot>
        </Flicking>

      </Container>
  )}