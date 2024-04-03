import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: { name: 'mlx的作业板' }
  },
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: 'mxz94/mxz_back',
    branchPrefix: 'master'
  },
  collections: {
    posts: collection({
      columns: ['title', 'pubDatetime'],
      label: '朝花夕拾',
      slugField: 'title',
      path: 'src/content/blog/朝花夕拾/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '标题' } }),
        slug: fields.text({ label: 'slug',  description:"加入文档中的slug", validation: {isRequired:true} }),
        pubDatetime: fields.date({ label: '发布时间', defaultValue: {
            kind: "today"
            } }),
        tags: fields.multiselect({
          label: 'Tag',
          options: [
              { label: '朝花夕拾', value: '朝花夕拾' }
          ],
          defaultValue: ['朝花夕拾'],
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/img/zhxs',
            publicPath: '../../../../public/img/zhxs',
          },
        }),
      },
    })
  },
});
