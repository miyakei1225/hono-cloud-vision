import vision from "@google-cloud/vision";

// Cloud Vision API クライアントの初期化
const client = new vision.ImageAnnotatorClient();

/**
 * imageUrl から画像解析を行い、ラベル情報を返す
 * @param imageUrl 解析対象の画像 URL
 */
export async function analyzeImage(imageUrl: string) {
  // labelDetection を例として利用
  const [result] = await client.labelDetection(imageUrl);
  return result.labelAnnotations;
}
