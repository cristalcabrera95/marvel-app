export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Image;
    resourceURI: string;
    comics: ComicList;
    series: ComicList;
    stories: StoryList;
    events: ComicList;
    urls: URL[];
}

export interface ComicList {
    available: number;
    collectionURI: string;
    items: ComicSummary[];
    returned: number;
}

export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface StoryList {
    available: number;
    collectionURI: string;
    items: StorySummary[];
    returned: number;
}

export interface StorySummary {
    resourceURI: string;
    name: string;
    type: ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export interface Image {
    path: string;
    extension: Extension;
}

export enum Extension {
    GIF = "gif",
    Jpg = "jpg",
}

export interface URL {
    type: URLType;
    url: string;
}

export enum URLType {
    Comiclink = "comiclink",
    Detail = "detail",
    Wiki = "wiki",
}
