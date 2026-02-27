import { usePosts } from "./hooks/usePosts";
import { usePostFiltrados } from "./hooks/usePostFiltrados";
import {
  ListaPosts,
  BarraBusqueda,
  BotonOrdenar,
  MensajeError,
} from "./components";

function App() {
  const { posts, loading, error } = usePosts();
  const { postFiltrados, texto, cambiarTexto, orden, cambiarOrden } =
    usePostFiltrados(posts);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Lista de Posts</h1>

      <div className="input-group mb-4 gap-2">
        <BarraBusqueda texto={texto} cambiarTexto={cambiarTexto} />
        <BotonOrdenar orden={orden} cambiarOrden={cambiarOrden} />
      </div>

      {loading && <p className="mt-2">Cargando posts...</p>}
      {error && <MensajeError error={error} />}
      {!loading && !error && <ListaPosts posts={postFiltrados} />}
    </div>
  );
}

export default App;
