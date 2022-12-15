import {sanityConfig} from "./sanity-config";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityConfig);

const imageUrlFor = (source) => imageBuilder.image(source);

export default imageUrlFor;