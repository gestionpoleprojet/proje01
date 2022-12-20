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

  export type Testimonial = {
    _id: string;
    title: string;
    content: string;
    poster: any;
    role: string;
  };