import { html, render } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

window.jsPDF = window.jspdf.jsPDF;
const doc = new jsPDF({
  orientation: 'p',
  unit: 'px',
  format: [1920, 1080],
  hotfixes: ['px_scaling'],
});

const name = 'Manuel Márquez';
const htmlPage = html`
  <style>
    h1 {
      color: #212121;
      font-size: 40px;
      margin: 26px 0;
    }
    p {
      margin-bottom: 26px;
    }
    #pdf-content {
      font-family: Arial, sans-serif;
      width: 1040px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #212121;
      border-radius: 4px;
    }
  </style>
  <div id="pdf-content">
    <h1>PDF generado para ${name} en "lit-html" con "jspdf"</h1>
    <p>Djasmd  asia s sajas dj dejaiosd askondaksndoasodijapisdj pasjd pasijd apksjdp paijsdaoijsidj js. Joio sjadjs aahsd ajs.</p>
  </div>
`;

const pdfNode = document.body.querySelector('#pdfCanvas');
render(htmlPage, pdfNode);

document.querySelector('#download').addEventListener('click', generatePDF);

function generatePDF() {
  doc.html(pdfNode, {
    callback: function (doc) {
      doc.save('documento.pdf');
    },
    html2canvas: {
      scale: 1,
      windowWidth: '100%',
      windowHeight: '100%',
    },
    margin: [20, 20, 20, 20],
    // fontFaces: [
    //   {
    //     family: 'Roboto',
    //     src: ['https://fonts.googleapis.com/css2?family=Roboto&display=swap'],
    //     weight: 400,
    //   },
    // ],
  });
}
