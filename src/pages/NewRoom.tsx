import { Link } from 'react-router-dom'
import { useContext } from 'react'

import '../styles/auth.scss'

import { Button } from '../components/Button'

import { AuthContext } from '../contexts/AuthContext'

import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function NewRoom() {
  //const { user } = useContext(AuthContext)

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo da Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form >
            <input
              type="text"
              placeholder="Nome da Sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}