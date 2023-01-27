
import { Plus, X } from 'phosphor-react';
import LogoImage from '../assets/Logo.svg';
import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { NewHabitForm } from './NewHabitForm';

export function Header() {


  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={LogoImage} alt='Habits'></img>

      <Dialog.Root>
        <Dialog.Trigger
          type='button'
          className='border transition-colors border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-3 items-center hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
        >
          <Plus size={20} className='text-violet-500' />
          Novo habito

        </Dialog.Trigger>

        {/* Feature do react que a gente exiba HTML em outros lugares na aplicação tambem. Joga o conteudo para fora da aplication.Ex:no body */}
        <Dialog.Portal>
          <Dialog.Overlay 
            className='w-screen h-screen bg-black/80 fixed inset-0'
          />

          <Dialog.Content
            className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >

            <Dialog.Close className='absolute right-6 top-6 bg-zinc-400 hover:text-zinc-200'>
              <X size={24} aria-label='Fechar'/>
            </Dialog.Close>
          
            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
              Criar hábito
            </Dialog.Title>
            <NewHabitForm></NewHabitForm>
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>




    </div>
  );
}