import imagemLogo from "../../public/imagens/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Botao from "@/componentes/botao";
import InputPublico from "@/componentes/inputPublico";

import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";




export default function Cadastro() {
    return (
        <section className={`paginaCadastro paginaPublica`}>
        <div className="logoContainer desktop">
                <Image
                src={imagemLogo}
                alt="logotipo"
                layout="fill"
                className="logo"
               />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                <InputPublico
                 imagem={imagemUsuarioAtivo}
                 texto="Nome Completo"
                 tipo="text"
                 aoAlterarValor={e => console.log(e.target.value)}
                 //valor={senha}
                />

                <InputPublico
                imagem={imagemEnvelope}
                texto="E-mail"
                tipo="email"
                aoAlterarValor={e => console.log(e.target.value)}
                />

              <InputPublico
                imagem={imagemChave}
                texto="Senha"
                tipo="password"
                aoAlterarValor={e => console.log(e.target.value)}
                />

              <InputPublico
                imagem={imagemChave}
                texto="Confirmar Senha"
                tipo="password"
                aoAlterarValor={e => console.log(e.target.value)}
                />
                
                <Botao
                    texto="Cadastrar"
                    tipo="submit"
                    desabilitado={false}
                />
                </form>
            <div className="rodapePaginaPublica">
                    <p>Já possui uma conta?</p>
                    <Link href="/" >Faça seu login agora!</Link>
                </div>
         </div>
        </section>
    );
}