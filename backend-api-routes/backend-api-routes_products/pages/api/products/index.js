import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  response.status(200).json(getAllProducts());
  //   response.status(200).json("All working well");
  response.end("ALl products arr fetched");
}
