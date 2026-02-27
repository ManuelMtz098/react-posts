import type { Orden } from "../types"

interface Props {
    orden: Orden,
    cambiarOrden: () => void
}

export const BotonOrdenar = ({orden, cambiarOrden}:Props) => {
  return (
    <button
        onClick={cambiarOrden}
        className="btn btn-outline-primary"
    >
        {orden === 'asc' ? 'Z-A' : 'A-Z'}
    </button>
  )
}
