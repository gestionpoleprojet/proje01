export type Project = {
    _id: string;
    valorisation: string;
   title: string;
   overview: any;
    releaseDate: string;
    poster: any;
    crewMembers: CrewMember[];
  };

  export type CrewMember = {
    _id: string;
    name: string;
    role: string;
    profilePicture: string;
  };
