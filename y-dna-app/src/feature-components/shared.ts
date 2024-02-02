export const FTDNA_GROUP = 'https://www.familytreedna.com/groups';
export const FTDNA_PUBLIC = 'https://www.familytreedna.com/public';
export const FTDNA_DISCOVER = 'https://discover.familytreedna.com/groups';
export const FTDNA_DISCOVER_Y_DNA = 'https://discover.familytreedna.com/y-dna';
export const FTDNA_DISCOVER_Y_DNA_SECTIONS = [
  "story",
  "frequency",
  "notable",
  "migration",
  "globetrekker",
  "ancient",
  "tree",
  "path",
  "projects",
  "scientific",
  "compare"
];
export const YFULL_URL = 'https://www.yfull.com/tree';

export function parseSNP_data(element: any) {
  let SNP = '', people = [];

  if (typeof element === 'string') {
    SNP = element;
  } else {
    SNP = element.snp;
    people = element.people;
  }

  return {
    SNP,
    people
  }
}
