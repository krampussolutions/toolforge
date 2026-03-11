"use client";
import ImageCompressor from "@/components/special/ImageCompressor";
import ImageResizer from "@/components/special/ImageResizer";
import ImageFormatConverter from "@/components/special/ImageFormatConverter";
import ImageCropper from "@/components/special/ImageCropper";
import ImageToPdf from "@/components/special/ImageToPdf";
import MergePdf from "@/components/special/MergePdf";
import SplitPdf from "@/components/special/SplitPdf";
export default function SpecialToolRenderer({ slug }: { slug: string }) {
  if (slug === "compress-image") return <ImageCompressor />;
  if (slug === "resize-image") return <ImageResizer />;
  if (slug === "jpg-to-png") return <ImageFormatConverter mime="image/png" />;
  if (slug === "png-to-jpg") return <ImageFormatConverter mime="image/jpeg" />;
  if (slug === "crop-image") return <ImageCropper />;
  if (slug === "image-to-pdf") return <ImageToPdf />;
  if (slug === "merge-pdf") return <MergePdf />;
  if (slug === "split-pdf") return <SplitPdf />;
  return null;
}
