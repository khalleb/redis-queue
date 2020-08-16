import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
  },
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: 'Redis Queue <teste@redisqueue.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas de teste :D`
    })

  }
}