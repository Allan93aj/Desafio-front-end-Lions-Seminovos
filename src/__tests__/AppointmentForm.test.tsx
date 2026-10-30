import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppointmentForm from '../components/appointments/AppointmentForm'

describe('Formulário de agendamento', () => {
  it('deve exibir os campos principais', () => {
    render(
      <MemoryRouter>
        <AppointmentForm />
      </MemoryRouter>,
    )

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/veículo de interesse/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/data desejada/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/horário desejado/i)).toBeInTheDocument()
  })

  it('deve selecionar o veículo informado na URL', () => {
    render(
      <MemoryRouter initialEntries={['/agende-uma-visita?veiculo=1']}>
        <AppointmentForm />
      </MemoryRouter>,
    )

    expect(screen.getByLabelText(/veículo de interesse/i)).toHaveValue('1')
  })

  it('deve mostrar a confirmação após enviar o formulário válido', () => {
    render(
      <MemoryRouter>
        <AppointmentForm />
      </MemoryRouter>,
    )

    fireEvent.change(screen.getByLabelText(/nome completo/i), {
      target: { value: 'João da Silva' },
    })
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'joao@exemplo.com' },
    })
    fireEvent.change(screen.getByLabelText(/telefone/i), {
      target: { value: '(21) 99999-9999' },
    })
    fireEvent.change(screen.getByLabelText(/veículo de interesse/i), {
      target: { value: '1' },
    })
    fireEvent.change(screen.getByLabelText(/data desejada/i), {
      target: { value: '2099-10-20' },
    })
    fireEvent.change(screen.getByLabelText(/horário desejado/i), {
      target: { value: '10:00' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: /solicitar agendamento/i }),
    )

    expect(screen.getByRole('heading', { name: /solicitação registrada/i }))
      .toBeInTheDocument()
  })
})