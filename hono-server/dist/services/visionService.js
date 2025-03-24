"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeImage = void 0;
const vision_1 = __importDefault(require("@google-cloud/vision"));
const client = new vision_1.default.ImageAnnotatorClient();
/**
 * imageUrl から画像解析を行い、ラベル情報を返す
 * @param imageUrl 解析対象の画像 URL
 * @returns
 */
const analyzeImage = async (imageUrl) => {
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
exports.analyzeImage = analyzeImage;
