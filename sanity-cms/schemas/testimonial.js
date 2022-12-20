import {defineField, defineType} from 'sanity'
import {MdPersonPin as icon} from 'react-icons/md'

export default defineType({
  name: 'testimonial', // <-- enregistre comme 'movie' dans la base de données
  title: 'Témoignages',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Contenu du témoignage',
      type: 'blockContent',
    }),
    defineField({
      name: 'poster',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
