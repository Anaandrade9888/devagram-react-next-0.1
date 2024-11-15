import Avatar from "@/componentes/avatar";
import Botao from "@/componentes/botao";
import { UploadImagem } from "@/componentes/uploadImagem";
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react'

export default function Home() {
  const [imagem, setImagem] = useState(null);

  console.log(imagem);

  return (
    <>
    <h1> Ola mundo! </h1>
    <UploadImagem setImagem={setImagem}/>
    <div style={{width: 200}}>
      <Avatar/>
    <Botao texto={'Login'} cor='invertido' manipularClick={() =>console.log('botao clicado')} />
    </div>
    </>
  )
}
