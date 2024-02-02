import ftDnaProjects from '../data/ftdna-projects.json';

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

interface FilterParams {
  myMembership: boolean
}

export function filterFTDNAprojects({ myMembership }: FilterParams) {
  return ftDnaProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}

// TBD
export function useProjectsData() {
  const myFtdnaProjects = filterFTDNAprojects({ myMembership: true });
  const otherFtdnaProjects = filterFTDNAprojects({ myMembership: false });
  // Improve maybe by using .pop()
  return [myFtdnaProjects, otherFtdnaProjects];
}
