/**
 * Cluster layout primitive
 *
 * Inspired by Every Layout, Braid Design System (Inline), and many others.
 */
module.exports = ({addComponents, theme}) => {
  const spacing = Object.entries(theme('spacing'));

  const clusterComponent = Object.entries(theme('spacing')).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`.cluster--space-${key}`]: {
        '> *': {
          margin: `-${value}`,
        },
        '> * > *': {
          margin: value,
        },
      },
    }),
    {
      '.cluster': {
        overflow: 'hidden',
      },
      '.cluster > *': {
        display: 'flex',
        flexWrap: 'wrap',
      },
    },
  );

  addComponents(clusterComponent);
};
