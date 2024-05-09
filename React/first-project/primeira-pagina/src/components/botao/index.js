function Botao(props) {
  return (
    <div>
      <button>
        {props.descricao} e {props.nome}
      </button>
    </div>
  );
}

export default Botao;
