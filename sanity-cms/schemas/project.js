import {defineField, defineType} from 'sanity'
import {MdLightbulb as icon} from 'react-icons/md'

export default defineType({
  name: 'movie', // <-- enregistre comme 'movie' dans la base de données
  title: 'Projets',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du projet',
      type: 'string',
    }),
    defineField({
      name: 'valorisation',
      title: 'Valorisation',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'crewMembers',
      title: 'Membres de l\'équipe',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'lien',
      title: 'Lien web',
      type: 'string',
      description: 'Entrez l\'URL du site ou de la video', 

    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'crewMembers.0.name',
      castName1: 'crewMembers.1.name',
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
