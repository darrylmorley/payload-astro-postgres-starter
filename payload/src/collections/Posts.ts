import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    // livePreview: {
    //   url: ({ data }) =>
    //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${data.slug !== 'home' ? data.slug : ''}`,
    // },
    // preview: (doc) => {
    //   return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
    //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${
    //       doc.slug !== 'home' ? (doc.slug as string) : ''
    //     }`,
    //   )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'publishedDate',
      admin: {
        position: 'sidebar',
      },
      type: 'date',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    // slugField(),
  ],
  // hooks: {
  //   afterChange: [revalidatePage],
  //   afterRead: [populateArchiveBlock],
  //   beforeChange: [populatePublishedDate],
  // },
  versions: {
    drafts: true,
  },
}
