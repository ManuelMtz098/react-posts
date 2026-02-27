interface Props {
    error:string
}

export const MensajeError = ({error}:Props) => {
  return (
    <div className="alert alert-danger text-center">
      {error}
    </div>
  )
}
