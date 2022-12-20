import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'link',
  title: 'Lien des boutons',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'lien',
      title: 'Lien du bouton',
      type: 'string',
      description: 'Entrez l\'URL de redirection de votre bouton',
    }),
    defineField({
      name: 'texte',
      title: 'Texte du bouton',
      type: 'string',
      description: 'Entrez le texte à afficher sur le bouton',
    }),
  ],
  preview: {
    select: {subtitle: 'lien', title: 'texte'},
  },
})