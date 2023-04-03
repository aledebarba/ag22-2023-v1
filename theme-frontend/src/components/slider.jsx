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
          bound={true}
          plugins={_plugins}
      >
          { slides.map( ( item, index ) => <div tw="px-2">
              <div key={index} 
                   className="card-panel" 
                   tw="w-[80%] pt-[50%] mx-[10%] bg-cover bg-center rounded-2xl shadow-2xl" 
                   style={{ backgroundImage: `url(${item.url})` }}>
              </div>
          </div> ) }

          <ViewportSlot>
            <span className="flicking-arrow-prev is-circle"></span>
            <span className="flicking-arrow-next is-circle"></span>
          </ViewportSlot>
        </Flicking>

      </Container>
  )}