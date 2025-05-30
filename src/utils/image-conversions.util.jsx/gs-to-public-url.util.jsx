/**
 * Turn `gs://my-bucket/path/to/file.jpg`
 * into `https://firebasestorage.googleapis.com/v0/b/my-bucket/o/path%2Fto%2Ffile.jpg?alt=media`
 */
export function gsToPublicUrl(gsUrl) {
  const [, bucket, objectPath] = gsUrl.match(/^gs:\/\/([^/]+)\/(.+)$/) || [];
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
    objectPath
  )}?alt=media`;
}
