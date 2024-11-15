import { useRef } from 'react';

export function UploadImagem({
className = '',
setImagem
}) {
    const referenciaInput = useRef(null);
    
    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click();
    }

    const aoAlterarImagem = () => {
        console.log('aoAlterarImagem');

        if(referenciaInput?.current?.files?.length) {
            return;
        }

        const arquivo = referenciaInput?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            console.log(fileReader.result);
        }
    } 

    return (
     <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
       <button>abrir seletor de arquivos</button>
        <input 
        type='file' 
        className='oculto' 
        accept="image/*"
        ref={referenciaInput}
        onChange={aoAlterarImagem}
        />
    </div>
    );
}