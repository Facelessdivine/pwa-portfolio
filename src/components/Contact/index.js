
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './index.scss'
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_v72ilbn', 'template_5oxnp8l', form.current, 'eRHmvexdbfoyN3KZu')
      .then(
        () => {
          alert('Message successfully sent!')
          navigate("/")
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contáctame
          </h1>
          <p>
            Soy una entusiasta desarrolladora en busca de un reto profesional
          </p>
          <p>
            Teléfono	(614)495-10-87 </p>
            <br/>
            <p>
            Dirección	Tomás García #600 Col. Deportistas
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Correo"
                    type="email"
                    name="email"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
