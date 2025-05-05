export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/mentorlab.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'MentorLab',
    image: {
      src: '/static/images/mentorlab.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintained`,
    title: 'Compiler Tech',
    image: {
      src: '/static/images/compilertech.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Task nest',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Global Konnect',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
