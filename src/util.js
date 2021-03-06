//Media resize

// export const smallImage = (imagePath, size) => {
//   const image = imagePath.match(/media\/screenshots/)
//     ? imagePath.replace(
//         "media/screenshots",
//         `media/resize/${size}/-/screenshots`
//       )
//     : imagePath.replace("media/games/", `/media/resize/${size}/-/games/`);
//   return image;
// };

export const smallImage = (imageUrl, size) => {
  if (!imageUrl) return null;
  return imageUrl.match(/media\/(screenshots|games)/)
    ? imageUrl.replace("/media/", `/media/resize/${size}/-/`)
    : imageUrl;
};
