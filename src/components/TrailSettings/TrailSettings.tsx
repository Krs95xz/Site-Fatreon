import type { CSSProperties } from 'react'
import type { TrailSettingsProps } from './TrailSettingsProps.tsx'
import './TrailSettings.css'

export function TrailSettings({
  colorBottom,
  colorTop,
  enabled,
  isOpen,
  onColorBottomChange,
  onColorTopChange,
  onEnabledChange,
  onOpenChange,
  onPauseChange,
  onSave,
  onSettingsChange,
  settings,
}: TrailSettingsProps) {
  return (
    <aside
      id="conteudo"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => {
        onOpenChange(false)
        onPauseChange(false)
      }}
    >
      <div id="secao">
        <button
          aria-label="Abrir configurações da trilha do cursor"
          className="tool-button"
          onClick={() => onOpenChange(!isOpen)}
          type="button"
        >
          <img alt="" className="topicFerramenta" src="/assets/icon/iconMouse.png" />
        </button>
      </div>
      <div className={`configuracoes${isOpen ? ' exibido visivel' : ''}`} id="configuracoesMouse">
        <div className="ativacao">
          <h4 className="insercao">Ativar trilha no cursor?</h4>
          <input
            checked={enabled}
            id="inputRastro"
            name="ativarConfig"
            onChange={(event) => onEnabledChange(event.target.checked)}
            type="checkbox"
          />
        </div>
        <div className={`bloco${enabled ? ' visivel' : ''}`}>
          <div className="dados" id="quantidade">
            <label className="insercao" htmlFor="qntRastro">
              Quantidade caracteres:
            </label>
            <input
              className="inputsMouse"
              id="qntRastro"
              max="100"
              min="0"
              onChange={(event) =>
                onSettingsChange({ ...settings, quantity: Math.max(0, Number(event.target.value)) })
              }
              placeholder="Quantidade de caracteres (trilha)"
              type="number"
              value={settings.quantity}
            />
          </div>
          <div className="dados" id="formatoCaixa">
            <label className="insercao" htmlFor="formato">
              Caracteres:
            </label>
            <input
              className="inputsMouse"
              id="formato"
              onChange={(event) => onSettingsChange({ ...settings, characters: event.target.value })}
              type="text"
              value={settings.characters}
            />
          </div>
          <div className="dadosCores" id="cores">
            <div className="boxColor">
              <label className="insercao" htmlFor="corRastro1">
                Cor acima:
              </label>
              <label
                className="blocoCores"
                id="cor1"
                style={{ '--cor-escolhida': colorTop } as CSSProperties}
              >
                <input
                  className="corOculta"
                  id="corRastro1"
                  onChange={(event) => onColorTopChange(event.target.value)}
                  type="color"
                  value={colorTop}
                />
              </label>
            </div>
            <div className="boxColor">
              <label className="insercao" htmlFor="corRastro2">
                Cor abaixo:
              </label>
              <label
                className="blocoCores"
                id="cor2"
                style={{ '--cor-escolhida': colorBottom } as CSSProperties}
              >
                <input
                  className="corOculta"
                  id="corRastro2"
                  onChange={(event) => onColorBottomChange(event.target.value)}
                  type="color"
                  value={colorBottom}
                />
              </label>
            </div>
          </div>
          <div id="buttonRastro">
            <button className="confirmacao" onClick={onSave} type="button">
              Salvar
            </button>
          </div>
          <p id="aviso">Colocar muitos caracteres pode deixar o site lento e pesado.</p>
        </div>
      </div>
    </aside>
  )
}