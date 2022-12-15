const postFields = ` 
  _id,
  title,
  slug,
  overview,
  valorisation,
  poster,
  releaseDate,
`;

// <-- enregistre comme 'movie' dans la base de données
export const indexQuery = `
*[_type == "movie"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;
