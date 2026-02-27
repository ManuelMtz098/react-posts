import { useMemo, useState } from "react";
import type { Orden, Post } from "../types";

export const usePostFiltrados = (posts: Post[]) => {
  const [texto, setTexto] = useState<string>("");
  const [orden, setOrden] = useState<Orden>("asc");

  const postFiltrados = useMemo(() => {
    const textoLimpio = texto.trim().toLowerCase();

    const postFiltrados = textoLimpio
      ? posts.filter(
          (p: any) =>
            p.title.toLowerCase().includes(textoLimpio) ||
            p.body.toLowerCase().includes(textoLimpio),
        )
      : posts;

    return [...postFiltrados].sort((a, b) => {
      if (orden === "asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
  }, [posts, texto, orden]);

  const cambiarOrden = () => setOrden((o) => (o === "asc" ? "desc" : "asc"));
  const cambiarTexto = (nuevoTexto: string) => setTexto(nuevoTexto);

  return { postFiltrados, texto, cambiarTexto, orden, cambiarOrden };
};
