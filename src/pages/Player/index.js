import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.length > 0) {
                    setVideo(dados[0]); // Pegue o primeiro item do array
                }
            })
            .catch(erro => {
                console.error("Erro ao buscar o vídeo:", erro);
            });
    }, [parametros.id]); // Adicione parametros.id aqui

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;
