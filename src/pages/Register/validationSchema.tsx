import * as yup from 'yup'

export const registrationSchema = yup.object({
  fullName: yup
    .string()
    .required('O nome é obrigatório.')
    .min(3, 'O nome deve ter pelo menos 3 caracteres.')
    .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),

  cpf: yup
    .string()
    .required('O CPF é obrigatório.')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),

  number: yup
    .string()
    .required('O número de telefone é obrigatório.')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de telefone inválido'),

  email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),

  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(8, 'A senha deve ter pelo menos 8 caracteres.'),

  isPasswordConfirmed: yup
    .string()
    .required('A confirmação de senha é obrigatória.')
    .oneOf([yup.ref('password')], 'As senhas devem coincidir.'),
})

export type FieldValues = yup.InferType<typeof registrationSchema>
