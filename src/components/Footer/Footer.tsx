import './Footer.css'
import type { FooterProps } from './FooterProps.tsx'

export function Footer({ isBlurred }: FooterProps) {
  return (
    <footer className={isBlurred ? 'borrado' : ''} id="footer">
      &copy; Todos os direitos reservados ao site Fatreon (de Krs95xz) &copy;
    </footer>
  )
}