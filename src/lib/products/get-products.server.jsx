import { gsToPublicUrl } from "@/utils/image-conversions.util.jsx/gs-to-public-url.util";
import { firestoreAdmin } from "../firebase/firebase.admin";
// This function retrieves products associated with a specific account and portal.
// It queries the Firestore database for products that match the given account slug
// and portal slug, returning an array of product objects with their IDs and data.
// lib/products/get-products.server.js

// export async function getProducts(accountSlug, portalSlug = null) {
//   console.log(
//     "Fetching products for account:",
//     accountSlug,
//     "and portal:",
//     portalSlug
//   );
//   let productsRef = firestoreAdmin.collection("products");
//   let query = productsRef.where("accountId", "==", accountSlug);

//   if (portalSlug) {
//     query = query.where("portalIds", "array-contains", portalSlug);
//   }

//   const snapshot = await query.get();

//   const products = [];
//   snapshot.forEach((doc) => {
//     const data = doc.data();

//     if (data.images) {
//       // images is assumed to be an object {thumb:'gs://…', hero:'gs://…'}
//       data.images = Object.fromEntries(
//         Object.entries(data.images).map(([k, v]) => [k, gsToPublicUrl(v)])
//       );
//     } else console.log("No images found for product:", doc.id);
//     products.push({ id: doc.id, ...doc.data() });
//   });

//   return products;
// }

export async function getProducts(accountSlug, portalSlug = null) {
  const productsRef = firestoreAdmin.collection("products");
  let query = productsRef.where("accountId", "==", accountSlug);
  if (portalSlug)
    query = query.where("portalIds", "array-contains", portalSlug);

  const snapshot = await query.get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    if (data.images) {
      data.images = Object.fromEntries(
        Object.entries(data.images).map(([k, v]) => [
          k,
          v && v.startsWith("gs://") ? gsToPublicUrl(v) : v,
        ])
      );
    }

    return { id: doc.id, ...data };
  });
}
