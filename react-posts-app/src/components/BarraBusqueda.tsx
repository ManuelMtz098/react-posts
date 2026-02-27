interface Props {
    texto:string
    cambiarTexto: (nuevoTexto:string) => void
}

export const BarraBusqueda = ({ texto, cambiarTexto }: Props) => {
  return (
    <input
      type="text"
      className="form-control"
      value={texto}
      placeholder="Busca por título o contenido..."
      onChange={(e) => cambiarTexto(e.target.value)}
    />
  );
};
