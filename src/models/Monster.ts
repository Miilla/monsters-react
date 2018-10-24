export default class Monster {
    name: string;
    slug: string;
    statistics: Statistics;
    images: Images;
    description: string;
}

class Images {
    thumb: string;
    big: string;
}

class Statistics {
    power: string;
    danger: string;
    frequency: string;
}