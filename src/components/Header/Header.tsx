import './Header.css'
import type { HeaderProps } from './HeaderProps.tsx'

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

function getPeriod(now: Date) {
  const hour = now.getHours()
  if (hour < 6) return 'Madrugada'
  if (hour < 12) return 'Manhã'
  if (hour < 18) return 'Tarde'
  return 'Noite'
}

export function Header({
  isBlurred,
  isCompact,
  now,
}: HeaderProps) {
  const period = getPeriod(now)

  return (
    <header className={isBlurred ? 'borrado' : ''} id="topBar">
      <div id="informacoes">
        <div id="diaSem">{weekdays[now.getDay()]}</div>
        <div id="dia">
          {isCompact
            ? `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
            : `Dia: ${now.getDate()} | Mês: ${months[now.getMonth()]} | Ano: ${now.getFullYear()}`}
        </div>
        <div id="periodo">{isCompact ? period : `Período atual: ${period}`}</div>
        <div id="hora">
          {isCompact ? '' : 'Horário atual: '}
          {now.toLocaleTimeString('pt-BR')}
        </div>
      </div>
      <div className="titulo">
        <img alt="Fatreon" id="tituloImg" src="/assets/images/tituloFatreonGrande.png" />
      </div>
    </header>
  )
}