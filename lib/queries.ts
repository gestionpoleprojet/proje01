const postFields = ` 
  _id,
  title,
  slug,
  overview,
  valorisation,
  poster,
  releaseDate,
`;

const testiFields = ` 
  _id,
  title,
  role,
  content,
  poster,
`;

// <-- enregistre comme 'movie' dans la base de données
export const indexQuery = `
*[_type == "movie"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const indexQueryTestimonial = `
*[_type == "testimonial"] | order(date desc, _updatedAt desc) {
  ${testiFields}
}`;
