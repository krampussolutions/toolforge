"use client";

import ImageCompressor from "@/components/special/ImageCompressor";
import ImageResizer from "@/components/special/ImageResizer";
import ImageFormatConverter from "@/components/special/ImageFormatConverter";
import ImageCropper from "@/components/special/ImageCropper";
import ImageToPdf from "@/components/special/ImageToPdf";
import MergePdf from "@/components/special/MergePdf";
import SplitPdf from "@/components/special/SplitPdf";
import JsonFormatter from "@/components/special/JsonFormatter";
import Base64Encoder from "@/components/special/Base64Encoder";
import Base64Decoder from "@/components/special/Base64Decoder";
import UrlEncoder from "@/components/special/UrlEncoder";
import UrlDecoder from "@/components/special/UrlDecoder";
import UuidGenerator from "@/components/special/UuidGenerator";
import SlugGenerator from "@/components/special/SlugGenerator";
import RemoveLineBreaks from "@/components/special/RemoveLineBreaks";
import TextSorter from "@/components/special/TextSorter";
import DuplicateLineRemover from "@/components/special/DuplicateLineRemover";

export default function SpecialToolRenderer({ slug }: { slug: string }) {
  if (slug === "compress-image") return <ImageCompressor />;
  if (slug === "resize-image") return <ImageResizer />;
  if (slug === "jpg-to-png") return <ImageFormatConverter mime="image/png" />;
  if (slug === "png-to-jpg") return <ImageFormatConverter mime="image/jpeg" />;
  if (slug === "crop-image") return <ImageCropper />;
  if (slug === "image-to-pdf") return <ImageToPdf />;
  if (slug === "merge-pdf") return <MergePdf />;
  if (slug === "split-pdf") return <SplitPdf />;
  if (slug === "json-formatter") return <JsonFormatter />;
  if (slug === "base64-encoder") return <Base64Encoder />;
  if (slug === "base64-decoder") return <Base64Decoder />;
  if (slug === "url-encoder") return <UrlEncoder />;
  if (slug === "url-decoder") return <UrlDecoder />;
  if (slug === "uuid-generator") return <UuidGenerator />;
  if (slug === "slug-generator") return <SlugGenerator />;
  if (slug === "remove-line-breaks") return <RemoveLineBreaks />;
  if (slug === "text-sorter") return <TextSorter />;
  if (slug === "duplicate-line-remover") return <DuplicateLineRemover />;
  return null;
}