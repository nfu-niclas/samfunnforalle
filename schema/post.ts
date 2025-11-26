import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Hovedartikkel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Forfatter',
      type: 'reference', // Kobler til Forfatter-skjemaet
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'image',
      options: {
        hotspot: true, // Gjør at du kan beskjære bildet
      },
    }),
    defineField({
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }], // Kobler til Kategori-skjemaet
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publisert dato',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kort oppsummering / Teaser',
      type: 'text',
      rows: 3,
      description: 'Brukes på forsiden og i søkeresultater',
    }),
    defineField({
      name: 'body',
      title: 'Artikkelinnhold',
      type: 'array',
      of: [
        { type: 'block' }, // Standard rik-tekst blokk
        { type: 'image' }, // For å legge inn bilder i teksten
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author, title, media } = selection;
      return {
        title: title,
        subtitle: author ? `Av ${author}` : 'Ingen forfatter',
        media: media,
      };
    },
  },
});