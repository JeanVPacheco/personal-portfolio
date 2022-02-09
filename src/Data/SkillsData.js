import {
  javaLogo,
  htmlLogo,
  cssLogo,
  reactLogo,
  octopus,
  reduxLogo,
  nodejsLogo,
  mongodbLogo,
  mysqlLogo,
  gitLogo,
  dockerLogo,
  photoshopLogo,
  expressLogo,
  jwtLogo,
  sequelizeLogo
} from '../Images';

const feSkills = [
  {
    name: 'Javascript',
    level: 'Intermediate',
    logo: javaLogo
  },
  {
    name: 'HTML',
    level: 'Intermediate',
    logo: htmlLogo
  },
  {
    name: 'CSS',
    level: 'Beginner',
    logo: cssLogo
  },
  {
    name: 'React',
    level: 'Intermediate',
    logo: reactLogo
  },
  {
    name: 'ReactTestingLibrary',
    level: 'Beginner',
    logo: octopus
  },
  {
    name: 'Redux',
    level: 'Intermediate',
    logo: reduxLogo
  }
];

const beSkills = [
  {
    name: 'MySQL',
    level: 'Beginner',
    logo: mysqlLogo
  },
  {
    name: 'MongoDB',
    level: 'Beginner',
    logo: mongodbLogo
  },
  {
    name: 'NodeJS',
    level: 'Intermediate',
    logo: nodejsLogo
  },
  {
    name: 'ExpressJS',
    level: 'Beginner',
    logo: expressLogo
  },
  {
    name: 'JWT',
    level: 'Beginner',
    logo: jwtLogo
  },
  {
    name: 'Sequelize ORM',
    level: 'Beginner',
    logo: sequelizeLogo
  }
];

const otherSkills = [
  {
    name: 'GIT',
    level: 'Intermediate',
    logo: gitLogo
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    logo: dockerLogo
  },
  {
    name: 'Photoshop',
    level: 'Intermediate',
    logo: photoshopLogo
  }
];

export { feSkills, beSkills, otherSkills };
