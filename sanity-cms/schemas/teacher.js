import {defineField, defineType} from 'sanity'
import {MdPersonPin as icon} from 'react-icons/md'

export default defineType({
  name: 'teacher', // <-- enregistre comme 'teacher' dans la base de donnee
  title: 'Teacher',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Lien du profil',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profilePicture',
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
