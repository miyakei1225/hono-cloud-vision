import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient();

/**
 * imageUrl から画像解析を行い、ラベル情報を返す
 * @param imageUrl 解析対象の画像 URL
 * @returns
 */
export const analyzeImage = async (imageUrl: string): Promise<string> => {
  const [result] = await client.documentTextDetection(imageUrl);
  console.log(result.fullTextAnnotation?.text);

  if (!result.fullTextAnnotation) {
    throw new Error("No text found in the image");
  }

  if (!result.fullTextAnnotation.text) {
    throw new Error("No text found in the image");
  }

  return result.fullTextAnnotation.text;
};
