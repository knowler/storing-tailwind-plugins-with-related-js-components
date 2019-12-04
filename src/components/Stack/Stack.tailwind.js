/**
 * Stack layout primitive
 *
 * Inspired by Every Layout, Braid Design System, and many others.
 */
module.exports = ({addComponents, theme}) => {
  const stackComponent = Object.entries(theme('spacing')).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`.stack--space-${key} > * + *`]: {
        marginTop: value,
      },
    }),
    {
      '.stack': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '.stack > *': {
        marginTop: 0,
        marginBottom: 0,
      },
      '.stack--fill > *': {
        justifyContent: 'stretch',
      },
    },
  );

  addComponents(stackComponent);
};
