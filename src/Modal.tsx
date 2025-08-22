// src/Modal.tsx (dans TON MODULE NPM)
import { ReactNode, useState, CSSProperties } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

type ModalProps = {
  trigger?: ReactNode
  title?: ReactNode
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  firstName?: string
  lastName?: string
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.5)',
  zIndex: 9998,
}

const contentStyle: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  padding: 16,
  borderRadius: 8,
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  zIndex: 9999,
  maxWidth: 560,
  width: 'calc(100% - 32px)',
}

function ModalPop({
  trigger,
  title,
  children,
  open,
  onOpenChange,
  firstName,
  lastName,
}: ModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [live, setLive] = useState('')
  const isControlled = open !== undefined
  const currentOpen = isControlled ? open : internalOpen

  if (!firstName || !lastName) {
    return (
      <div>
        {trigger}
        <p role="alert">First and last name are required.</p>
      </div>
    )
  }

  return (
    <Dialog.Root
      open={currentOpen}
      onOpenChange={(o) => {
        if (!isControlled) setInternalOpen(o)
        onOpenChange?.(o)
        setLive(o ? 'Dialog opened' : 'Dialog closed')
      }}
    >
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle} />
        <Dialog.Content
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={contentStyle}
        // optionnel: ne pas fermer au clic extérieur / ESC
        // onPointerDownOutside={(e) => e.preventDefault()}
        // onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {title && (
            <Dialog.Title id="modal-title" style={{ marginBottom: 8, fontWeight: 700 }}>
              {title}
            </Dialog.Title>
          )}
          {/* <div style={{ marginBottom: 8 }}>
            {firstName} {lastName}
          </div> */}
          <div>{children}</div>
          <Dialog.Close asChild>
            <button
              style={{
                marginTop: 16,
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #ddd',
                background: '#f9f9f9',
              }}
              aria-label="Close"
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>

      <div aria-live="assertive" className="sr-only">
        {live}
      </div>
    </Dialog.Root>
  )
}

export { ModalPop }
export default ModalPop
