export function Footer({ isBlurred }: { isBlurred: boolean }) {
  return (
    <footer className={isBlurred ? 'borrado' : ''} id="footer">
      &copy; Todos os direitos reservados ao site Fatreon (de Krs95xz) &copy;
    </footer>
  )
}