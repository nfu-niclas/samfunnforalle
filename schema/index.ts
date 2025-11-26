// Legg til import av alle de nye skjemaene
import post from './post';
import author from './author';
import category from './category';
import siteSettings from './SiteSettings';

export const schemaTypes = [
    // List opp alle skjemaene her
    post, 
    author, 
    category,
    siteSettings
];