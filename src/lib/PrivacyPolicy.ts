import jsPDF from "jspdf"

export const downloadPrivacyAsPDF = (content: HTMLDivElement | null) => {
    if (!content) return
  
    const pdf = new jsPDF()
    const text = content.innerText
    const splitText = pdf.splitTextToSize(text, 180)
  
    let y = 10
    splitText.forEach((line: string) => {
      if (y > 280) {
        pdf.addPage()
        y = 10
      }
      pdf.text(line, 10, y)
      y += 7
    })
  
    pdf.save("Privacy policy.pdf");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
}