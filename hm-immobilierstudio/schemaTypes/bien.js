export default {
  name: 'bien',
  title: 'Biens immobiliers',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre du bien',
      type: 'string',
    },
    {
      name: 'ville',
      title: 'Ville',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type de bien',
      type: 'string',
      options: {
        list: ['Maison', 'Appartement', 'Terrain'],
      },
    },
    {
      name: 'prix',
      title: 'Prix',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'galerie',
      title: 'Galerie photos',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    }
  ]
}
