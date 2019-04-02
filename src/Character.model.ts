export class Characters {
    results: Character[];
}
export class Episodes {
    resyults: Episode;
}

export class Episode {
    id: string;
    name: string;
    air_date: string;
    characters: string[];
}

export class Character {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: Location;
}

export class Location {
    name: string;
    url: string;
}