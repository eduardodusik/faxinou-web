'use client';

import {useSupabase} from '@/app/supabase-provider';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import {getURL} from "@/lib/utils";

export default function AuthUI() {
  const {supabase} = useSupabase();
  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={['google']}
        redirectTo={`${getURL()}/customer`}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#52525b',
                brandAccent: '#52525b'
              }
            }
          }
        }}

        localization={{
          variables: {
            sign_in: {
              email_label: 'E-mail',
              password_label: 'Senha',
              password_input_placeholder: 'Sua senha',
              social_provider_text: 'Entre com o Google',
              button_label: 'Entrar',
              email_input_placeholder: 'Seu e-mail',
              link_text: 'Já tem conta? Entre aqui'
            },
            magic_link: {
              link_text: 'Entrar com link mágico',
            },
            forgotten_password: {
              link_text: 'Esqueceu sua senha?',
            },
            sign_up: {
              link_text: 'Não tem uma conta? Cadastre-se',
              email_input_placeholder: 'Seu e-mail',
              password_input_placeholder: 'Sua senha',
              email_label: 'E-mail',
              password_label: 'Senha',
              button_label: 'Cadastrar',
              social_provider_text: 'Cadastre-se com o Google',

            }
          }
        }}
        theme="dark"
      />
    </div>
  );
}