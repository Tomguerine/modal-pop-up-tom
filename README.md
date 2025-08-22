# modal-popup

## Prérequis

- Node.js ≥ 18
- Éditeur recommandé : [Visual Studio Code](https://code.visualstudio.com/)
- Dépendances :
  - react ^19.1.1
  - react-dom ^19.1.1
  - @radix-ui/react-dialog ^1.0.0
  - react-datepicker
  - react-redux
  - react-router-dom
  - redux-persist

## Installation

```bash
npm install modal-popup
# installer les peerDependencies
npm install react@^19.1.1 react-dom@^19.1.1 @radix-ui/react-dialog react-datepicker react-redux react-router-dom redux-persist
```

## Utilisation

```tsx
import { useState } from 'react'
import Modal from 'modal-popup'

// Utilisation non contrôlée (ouverture gérée en interne)
function UncontrolledExample() {
  return (
    <Modal
      trigger={<button>Ouvrir</button>}
      title="Titre de la modale"
      firstName="Jean"
      lastName="Dupont"
    >
      Contenu de la modale
    </Modal>
  )
}

// Utilisation contrôlée sans données nominatives
function ControlledExample() {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<button>Ouvrir</button>}
      title="Titre de la modale"
    >
      Contenu de la modale
    </Modal>
  )
}
```

### Props

- `firstName` et `lastName` (facultatifs) : affichent le nom complet dans le contenu s'ils sont fournis. Le composant peut être utilisé sans ces données.
- Le déclencheur (`trigger`) est toujours visible même lorsque la boîte de dialogue est fermée.

## Page du paquet

[https://www.npmjs.com/package/modal-popup](https://www.npmjs.com/package/modal-popup)

