<?php 
wp_enqueue_style('dashboard_styles', get_template_directory_uri() . '/inc/assets/style/dashboard.css', array(), false, false);
add_action( 'wp_enqueue_scripts', 'dashboard_styles' );
echo <<<HTML
        <style>
            .flex {
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
            }
            .intro, .about-wordpress {
                flex: 0 1 40%;
            }


            .about-wordpress h1{ font-size: 2rem; }

            .title {
                display: flex;
                flex-wrap: no-wrap;
                justify-content: left;
                align-items: center;
            }
            .title h1 {
                font-size: clamp(32px, calc( 2vw + 1rem), 3rem);
                margin: 0;
            }
            

        </style>
        <div class="title">
            <div class="icn">
                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="128" viewBox="0 0 20 20">
                    <path fill="dodgerblue"
                        d="M15 5H5L2 8l8 8l8-8l-3-3zm-3.3 6.9L10 11l-1.7.9l.3-1.9l-1.4-1.4l1.9-.3l.9-1.7l.9 1.8l1.9.3l-1.4 1.3l.3 1.9z" />
                    </svg>
            </div>
            <h1>
                Administração de conteúdo e Gerenciamento do site.
            </h1>
        </div>
        <div class="flex">
            <div class="intro">

            </div>
            <div class="about-wordpress">
                <h1>Sobre o Wordpress</h1>
                <p>O WordPress é um sistema de gerenciamento de conteúdo (CMS) gratuito e de código aberto que alimenta
                    mais de 40% dos sites na internet. Foi lançado pela primeira vez em 2003 e desde então se tornou uma
                    das plataformas de CMS mais populares, oferecendo uma ampla variedade de recursos e funcionalidades
                    para criar e gerenciar sites, blogs e lojas online.</p>
                <p><strong>Algumas das características que tornam o WordPress tão popular, incluem:</strong></p>
                <ul>
                    <li>
                        <p>Fácil de usar: o WordPress é fácil de usar, mesmo para iniciantes. Sua interface amigável
                            permite criar e gerenciar conteúdo, adicionar plugins e personalizar o seu site sem a
                            necessidade de habilidades de programação.</p>
                    </li>
                    <li>
                        <p>Customizável: o WordPress oferece uma ampla variedade de temas e plugins que permitem
                            personalizar o design e a funcionalidade do seu site de acordo com suas preferências. Você
                            também pode criar temas e plugins personalizados para atender às suas necessidades
                            específicas.</p>
                    </li>
                    <li>
                        <p>Amigável para SEO: o WordPress é amigável para SEO, o que significa que o seu site será
                            otimizado para os mecanismos de busca. Você também pode usar plugins como o Yoast SEO para
                            melhorar ainda mais o SEO do seu site.</p>
                    </li>
                    <li>
                        <p>Responsivo a dispositivos móveis: os temas do WordPress são responsivos a dispositivos
                            móveis, o que significa que o seu site ficará ótimo em todos os dispositivos, incluindo
                            smartphones e tablets.</p>
                    </li>
                    <li>
                        <p>Grande comunidade: o WordPress tem uma grande comunidade de usuários e desenvolvedores que
                            contribuem para o seu desenvolvimento, suporte e manutenção. Isso significa que você pode
                            obter ajuda e suporte facilmente da comunidade.</p>
                    </li>
                </ul>
                <p>Atualmente, escolher o WordPress como motor de um website tem várias vantagens, incluindo:</p>
                <ul>
                    <li>
                        <p>Desenvolvimento ágil: o WordPress é uma plataforma de desenvolvimento ágil que permite criar
                            sites rapidamente e iterar facilmente conforme necessário.</p>
                    </li>
                    <li>
                        <p>Open source: o WordPress é de código aberto, o que significa que o seu código-fonte está
                            disponível gratuitamente para uso e personalização.</p>
                    </li>
                    <li>
                        <p>React: o WordPress usa a biblioteca React do Facebook para criar interfaces de usuário
                            interativas e responsivas.</p>
                    </li>
                </ul>
                <p><strong> Algumas estatísticas interessantes sobre o WordPress incluem: </strong></p>
                <p>O WordPress alimenta mais de 40% dos sites da internet, incluindo algumas das maiores marcas do
                    mundo, como Forbes, Sony e The New Yorker.</p>
                <p>O WordPress tem mais de 60 milhões de sites usando sua plataforma, incluindo mais de 500 sites no
                    Alexa Top 1000.</p>
                <p>O WordPress tem mais de 58.000 plugins disponíveis em seu repositório, que foram baixados mais de 1,5
                    bilhão de vezes.</p>
                <p>O WordPress está disponível em mais de 200 idiomas, tornando-o acessível para pessoas de todo o
                    mundo.</p>
                <p>Em resumo, o WordPress é uma ótima escolha para construir e gerenciar sites, blogs e lojas online.
                    Sua facilidade de uso, opções de personalização, amigabilidade para SEO, responsividade a
                    dispositivos móveis e grande comunidade o tornam uma escolha popular entre empresas, blogueiros e
                    indivíduos. </p>
            </div>
        </div>
        HTML;
?>