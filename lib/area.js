const basicConfig = {
  '@apostrophecms/image': {
    // This option will add these classes to any image
    className: 'img-fluid image-fit-center-center'
  },
  '@apostrophecms/video': {},
  '@apostrophecms/html': {},
  '@apostrophecms/rich-text': {
    toolbar: [
      'styles',
      '|',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'bulletList',
      'orderedList',
      '|',
      'blockquote',
      'codeBlock',
      '|',
      'horizontalRule',
      '|',
      'undo',
      'redo'
    ],
    styles: [
      {
        tag: 'p',
        label: 'Paragraph (P)'
      },
      {
        tag: 'h2',
        label: 'Heading 2 (H2)'
      },
      {
        tag: 'h2',
        label: 'Special underline',
        class: 'custom-underline display-6 ps-2'
      },
      {
        tag: 'h3',
        label: 'Heading 3 (H3)'
      },
      {
        tag: 'h4',
        label: 'Heading 4 (H4)'
      }
    ],
    insert: [
      'table',
      'image'
    ]
  }
};

const fullConfig = {
  ...basicConfig,
  deal: {},
  'all-reviews': {},
  review: {}
};

module.exports = {
  basicConfig,
  fullConfig
};
