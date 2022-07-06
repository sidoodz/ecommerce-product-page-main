import path1 from "./images/image-product-1.jpg"
import path2 from "./images/image-product-2.jpg"
import path3 from "./images/image-product-3.jpg"
import path4 from "./images/image-product-4.jpg"

import thumbnail1 from "./images/image-product-1-thumbnail.jpg"
import thumbnail2 from "./images/image-product-2-thumbnail.jpg"
import thumbnail3 from "./images/image-product-3-thumbnail.jpg"
import thumbnail4 from "./images/image-product-4-thumbnail.jpg"

const data = {
  companyName: "Sneaker Company",
  shoes: {
    name: "Fall Limited Edition Sneakers",
    price: 250.0,
    discount: 50,
    images: {
      path: [path1, path2, path3, path4],
      path_thumbnail: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
    },
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  },
}

export default function getData() {
  return data
}