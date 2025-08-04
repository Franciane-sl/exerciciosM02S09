import style from './Post.module.css';

function Post({id, tipo, titulo, descricao, data, url, handleDelete }) {
  return (
    <section className={style.sectionPost}>
      <img src={url} alt={`Imagem do post ${titulo}`} />
      <div className={style.cardContent}>
        <span>{tipo}</span>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <p><strong>Data de publicação:</strong> {data}</p>
        <button type='button' onClick={() => 
        handleDelete(id)}>Excluir</button>
      </div>
    </section>
  );
}

export default Post;
