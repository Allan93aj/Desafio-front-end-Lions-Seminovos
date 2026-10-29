import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CalendarDays, CheckCircle2 } from 'lucide-react'
import { vehicles } from '../../data/vehicles'
import './AppointmentForm.css'

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length === 0) return ''

  if (digits.length <= 2) {
    return `(${digits}`
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function AppointmentForm() {
  const [searchParams] = useSearchParams()
  const selectedVehicleId = Number(searchParams.get('veiculo'))

  const selectedVehicle = vehicles.find(
    (vehicle) => vehicle.id === selectedVehicleId,
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [vehicleId, setVehicleId] = useState(
    selectedVehicle ? String(selectedVehicle.id) : '',
  )
  const [submitted, setSubmitted] = useState(false)

  const today = new Date()

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="appointment-success">
        <CheckCircle2 size={52} />

        <h1>Solicitação registrada!</h1>

        <p>
          Esta é uma confirmação demonstrativa. Nenhum agendamento real foi
          enviado à concessionária.
        </p>

        <Link to="/catalogo">Voltar ao catálogo</Link>
      </section>
    )
  }

  return (
    <section className="appointment-page">
      <div className="appointment-heading">
        <span className="appointment-eyebrow">LIONS SEMINOVOS</span>

        <h1>Agende sua visita</h1>

        <p>
          Preencha os dados abaixo para simular o agendamento de uma visita.
        </p>
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="appointment-field">
          <label htmlFor="name">Nome completo</label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome"
            required
            minLength={3}
          />
        </div>

        <div className="appointment-field">
          <label htmlFor="email">E-mail</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@exemplo.com"
            required
          />
        </div>

        <div className="appointment-field">
          <label htmlFor="phone">Telefone</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            placeholder="(21) 99999-9999"
            required
            minLength={14}
            maxLength={15}
          />
        </div>

        <div className="appointment-field">
          <label htmlFor="vehicle">Veículo de interesse</label>

          <select
            id="vehicle"
            name="vehicle"
            value={vehicleId}
            onChange={(event) => setVehicleId(event.target.value)}
            required
          >
            <option value="">Selecione um veículo</option>

            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.brand} {vehicle.model}
              </option>
            ))}
          </select>
        </div>

        <div className="appointment-field">
          <label htmlFor="date">Data desejada</label>

          <input
            id="date"
            name="date"
            type="date"
            min={minDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>

        <div className="appointment-field">
          <label htmlFor="time">Horário desejado</label>

          <select
            id="time"
            name="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          >
            <option value="">Selecione um horário</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
        </div>

        <button type="submit" className="appointment-submit">
          <CalendarDays size={19} />
          Solicitar agendamento
        </button>

        <p className="appointment-disclaimer">
          Projeto demonstrativo de portfólio. O formulário não envia dados para
          um servidor.
        </p>
      </form>
    </section>
  )
}