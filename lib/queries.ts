const postFields = ` 
  _id,
  title,
  lien,
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

const linkFields = ` 
  _id,
  lien,
  texte,
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

export const indexQueryTestimonialFablab = `
*[_type == "testimonialfablab"] | order(date desc, _updatedAt desc) {
  ${testiFields}
}`;

export const indexQueryLink = `
*[_type == "link"] | order(date desc, _updatedAt desc) {
  ${linkFields}
}`;
