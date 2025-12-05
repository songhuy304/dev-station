import html2pdf from 'html2pdf.js'

type Html2PdfImage = {
  type?: 'jpeg' | 'png' | 'webp'
  quality?: number
}

type Html2CanvasOptions = {
  scale?: number
}

type JsPDFOptions = {
  unit?: 'pt' | 'mm' | 'cm' | 'in'
  format?: string | number[]
  orientation?: 'portrait' | 'landscape'
}

interface Html2PdfOptions {
  margin?: number | number[]
  filename?: string
  image?: Html2PdfImage
  html2canvas?: Html2CanvasOptions
  jsPDF?: JsPDFOptions
}

export const exportResumeToPdf = (element: HTMLElement, fileName = 'resume.pdf') => {
  if (!element) return

  const options: Html2PdfOptions = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
  }

  return (html2pdf() as any).set(options).from(element).save()
}
