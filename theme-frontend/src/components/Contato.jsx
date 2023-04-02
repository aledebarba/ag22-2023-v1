import { useState, useEffect, useRef } from "react";
import { H2Dash, H2superiordash } from "./headings";
import { BigRedCircle } from "./circles";
import { Container } from "./containers";
import { useRect } from "./utils";
import { Buttonx } from "./button";
import { Icon } from "@iconify/react";
import { _app } from "../utils/functions";
import apiFetch from "@wordpress/api-fetch";
import tw from "twin.macro";

export const Contato = ({
  email = "",
  endereco = "",
  cidade = "",
  estado = "",
  bairro = "",
  telefone = "",
}) => {
  
  const [contatos, setContatos] = useState([]);
  const options = _app.options();
  const [codigoInternacional, codigoArea, numeroTel] = telefone.split(" ");
  const infoRef = useRef();
  const infoRect = useRect(infoRef);

  useEffect(() => {
    apiFetch({ path: "database/v1/contatos" }).then((data) => {
      const inOrder = (data, order) =>
        order.map((item) => {
          let id = item.id;
          let found = data.find((item) => item.id === id);
          return found;
        });
      setContatos(inOrder(data, options.socialOnContact));
    });
  }, []);

  return (
    <Container fluid id="contato"
        tw={"py-20 bg-secondary-50 text-secondary"}
      >
      <BigRedCircle width="844px" height="844px" style={{ position: "absolute", top: "-25vh", left: infoRect?.right - 224, zIndex: 1 }} />
      <Container ref={infoRef} tw="z-10">
        <H2Dash>Contatos</H2Dash>
        <Container 
          tw="mt-12 
				      grid grid-rows-2 px-8 place-items-center justify-items-center
				      md:(mt-16 grid grid-cols-6 grid-rows-1 px-0 place-items-start justify-items-start gap-x-8)"
         >
         <div tw="h-fit md:(col-span-3 )">
            <H2superiordash>
              <span tw="block text-primary font-bold">
                {cidade}- {estado.toUpperCase()}
              </span>
            </H2superiordash>
            
            <div tw="flex flex-row items-end gap-2">
              <h5 tw={"text-primary-500 font-medium leading-10"}>
                {codigoInternacional}
              </h5>
              <h2 tw={"text-secondary font-extralight"}>
                {codigoArea}&nbsp;{numeroTel}
              </h2>
            </div>

            <h6 tw={"w-2/3 font-medium text-secondary-600"}
                css="font-stretch: 120%;"
              >
              {endereco}
              <br />
              {bairro}
            </h6>
          </div>
          <div tw="md:(col-span-3 justify-self-end)">
            { contatos &&
                contatos.map((contato) => {
                  return (
                    <div>
                      <a
                        href={contato.data.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Buttonx outline tertiary
                          style={{
                            width: "100%",
                            marginBottom: "1rem",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Icon icon={contato.data.icone} tw="mr-2 text-4xl" />
                          <span tw="text-left leading-tight">{contato.data.rotulo}</span>
                        </Buttonx>
                      </a>
                    </div>
                  );
                })}
          </div>
        </Container>
      </Container>
    </Container>
  );
};
