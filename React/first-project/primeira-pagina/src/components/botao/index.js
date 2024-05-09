function Botao(props) {
  return (
    <div>
      <button>
        {props.descricao}
        {props.nome}
      </button>
    </div>
  );
}

export default Botao;
