'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

type ModalProps = Dialog.DialogProps & {
  trigger: JSX.Element
  children: ReactNode
  contentClassName?: string
}

export function Modal({ trigger, children, contentClassName, ...rest }: ModalProps) {
  return (
    <>
      <Dialog.Root {...rest}>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 data-[state=open]:animate-overlayShow" />
          <Dialog.Content
            className={
              contentClassName
                ? contentClassName
                : 'fixed left-[50%] top-[50%] max-h-[85vh] w-[95vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-6 focus:outline-none data-[state=open]:animate-contentShow'
            }
          >
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
