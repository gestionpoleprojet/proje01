export type Project = {
    _id: string;
    valorisation: string;
    title: string;
    overview: any;
    releaseDate: string;
    poster: any;
    crewMembers: String[];
    lien: string;
  };

  export type Teacher = {
    _id: string;
    name: string;
    role: string;
    profilePicture: string;
    link: string;
  };

  export type Testimonial = {
    _id: string;
    title: string;
    content: any;
    poster: any;
    role: string;
  };

  export type Links = {
    _id: string;
    lien: string;
    texte: string;
  };