import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('O nome é obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('O celular é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'O celular inválido.', (value) => isValidPhone(value)),
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'O CPF/CNPJ é inválido.',
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    password: yup
      .string()
      .required('A senha é obrigatória.')
      .min(8, 'A senha deve conter pelo menos 8 caracteres.')
      .matches(/[a-zA-Z]/, 'A senha deve conter pelo menos uma letra.')
      .matches(/[0-9]/, 'A senha deve conter pelo menos um número.'),
    confirmPassword: yup
      .string()
      .required('Confirme sua senha.')
      .oneOf([yup.ref('password') || '', ''], 'As senhas não coincidem.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
