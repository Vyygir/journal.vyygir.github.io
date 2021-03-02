import random from './MersenneTwister';

const options = [
    'Sometimes sober ramblings',
    'Offense intended',
    'Hail Satan',
    'Laughs in billable hours',
    'Mo\' metal, no problems',
];

const getRandomTitle = () => options[Math.floor(random() * options.length)];

export {
    getRandomTitle,
};
