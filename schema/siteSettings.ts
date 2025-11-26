import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Nettstedinnstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Nettstedets Tittel',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Hovedlogo for nettsiden',
    }),
    defineField({
      name: 'footerText',
      title: 'Tekst i bunnteksten (Footer)',
      type: 'string',
    }),
  ],
});