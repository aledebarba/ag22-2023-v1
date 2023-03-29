import { useState, useEffect } from "react";
import { ContainerFluidH } from "./containers";
import { H2Dash, H2superiordash } from "./headings";
import { Buttonx } from "./button";
import apiFetch from "@wordpress/api-fetch";
import { Icon } from "@iconify/react";
import { _app } from "../utils/functions";

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
    <section
      className="contatos"
      tw={"py-20 bg-secondary-50 text-secondary"}
      id="contato"
    >
      <ContainerFluidH>
        <H2Dash>Contatos</H2Dash>
        <div
          tw="	mt-12 
				grid grid-rows-2 px-8 place-items-center justify-items-center
				md:(grid grid-cols-6 grid-rows-1 place-items-center)
		  	 "
         >
          <div tw="h-fit md:(col-span-3)">
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
            <h6
              tw={"w-2/3 font-medium text-secondary-600"}
              css={`
                font-stretch: 120%;
              `}
            >
              {endereco}
              <br />
              {bairro}
            </h6>
          </div>
          <div tw="md:(col-span-3)">
            {contatos &&
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
        </div>
      </ContainerFluidH>
    </section>
  );
};
