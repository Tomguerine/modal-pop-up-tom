# modal-pop-up-tom

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
npm install modal-pop-up-tom
# installer les peerDependencies
npm install react@^19.1.1 react-dom@^19.1.1 @radix-ui/react-dialog react-datepicker react-redux react-router-dom redux-persist
```

## Utilisation

```tsx
import Modal from 'modal-pop-up-tom'


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

// Utilisation contrôlée
function ControlledExample() {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<button>Ouvrir</button>}
      title="Titre de la modale"
      firstName="Jean"
      lastName="Dupont"
    >
      Contenu de la modale
    </Modal>
  )
}
```

### Props

- `firstName` et `lastName` (facultatifs) : affichent le nom complet dans le contenu. Si l'un des deux manque, la modale ne s'affiche pas.
- Le déclencheur (`trigger`) est toujours visible même lorsque la boîte de dialogue est fermée.

## Page du paquet

[https://www.npmjs.com/package/modal-pop-up-tom](https://www.npmjs.com/package/modal-pop-up-tom)

