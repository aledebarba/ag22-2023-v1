import tw from 'twin.macro';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";

export const Slider = ( { slides } ) => {

  const _plugins = [new Arrow()];

  return (
    <Flicking circular={true} plugins={_plugins} tw="mt-16">
        { slides.map( ( item, index ) => <div tw="px-2">
          <div key={index} className="card-panel" tw="w-[40vw] h-[30vw] bg-cover bg-center rounded-2xl shadow-2xl" style={{ backgroundImage: `url(${item.url})` }}></div>
        </div> ) }
        <ViewportSlot>
          <span className="flicking-arrow-prev is-circle"></span>
          <span className="flicking-arrow-next is-circle"></span>
        </ViewportSlot>
      </Flicking>
  )}