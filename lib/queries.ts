const postFields = `
  _id,
  title,
  slug,
  overview,
  poster,
  releaseDate,
`;

export const indexQuery = `
*[_type == "movie"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;