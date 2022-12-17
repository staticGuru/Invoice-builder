import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { BiPaperPlane, BiCloudDownload } from 'react-icons/bi';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("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");
// function sendMail() {
//   const msg = {
//     name: 'test email',
//     email: 'guruvignesh.274m@gmail.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js'
//   };
//   console.log('sendMail');
//   // fetch('http://localhost:5000/send', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true' },
//   //   body: JSON.stringify(msg)
//   // })
//   //   .then((res) =>console.log(res.json()))
//   //   .then((data) => {
//   //     console.log(data);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
//   // try{
//   //   sgMail.send(msg).then(res=>console.log("res,",res)).catch(err => {
//   //     console.log(err);
//   //   });
//   // }catch(err){
//   //   console.log(err)
//   // }
// }
function GenerateInvoice() {
  html2canvas(document.querySelector('#invoiceCapture')).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [612, 792]
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    console.log("pdff",pdf,imgData);
    pdf.save('invoice.pdf');
  });
}

class InvoiceModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.closeModal} size="lg" centered>
          <div id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2">{this.props.info.billFrom || 'John Uberbacher'}</h4>
                <h6 className="fw-bold text-secondary mb-1">
                  Invoice #: {this.props.info.invoiceNumber || ''}
                </h6>
              </div>
              <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary">
                  {' '}
                  {this.props.currency} {this.props.total}
                </h5>
              </div>
            </div>
            <div className="p-4">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">Billed to:</div>
                  <div>{this.props.info.billTo || ''}</div>
                  <div>{this.props.info.billToAddress || ''}</div>
                  <div>{this.props.info.billToEmail || ''}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Billed From:</div>
                  <div>{this.props.info.billFrom || ''}</div>
                  <div>{this.props.info.billFromAddress || ''}</div>
                  <div>{this.props.info.billFromEmail || ''}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>{this.props.info.dateOfIssue || ''}</div>
                </Col>
              </Row>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>DESCRIPTION</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.items.map((item, i) => {
                    return (
                      <tr id={i} key={i}>
                        <td style={{ width: '70px' }}>{item.quantity}</td>
                        <td>
                          {item.name} - {item.description}
                        </td>
                        <td className="text-end" style={{ width: '100px' }}>
                          {this.props.currency} {item.price}
                        </td>
                        <td className="text-end" style={{ width: '100px' }}>
                          {this.props.currency} {item.price * item.quantity}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Table>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: '100px' }}>
                      SUBTOTAL
                    </td>
                    <td className="text-end" style={{ width: '100px' }}>
                      {this.props.currency} {this.props.subTotal}
                    </td>
                  </tr>
                  {this.props.taxAmmount != 0.0 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: '100px' }}>
                        TAX
                      </td>
                      <td className="text-end" style={{ width: '100px' }}>
                        {this.props.currency} {this.props.taxAmmount}
                      </td>
                    </tr>
                  )}
                  {this.props.discountAmmount != 0.0 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: '100px' }}>
                        DISCOUNT
                      </td>
                      <td className="text-end" style={{ width: '100px' }}>
                        {this.props.currency} {this.props.discountAmmount}
                      </td>
                    </tr>
                  )}
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: '100px' }}>
                      TOTAL
                    </td>
                    <td className="text-end" style={{ width: '100px' }}>
                      {this.props.currency} {this.props.total}
                    </td>
                  </tr>
                </tbody>
              </Table>
              {this.props.info.notes && (
                <div className="bg-light py-3 px-4 rounded">{this.props.info.notes}</div>
              )}
            </div>
          </div>
          <div className="pb-4 px-4">
            <Row>
              <Col md={6}>
                {/*<Button variant="primary" className="d-block w-100" onClick={GenerateInvoice}>
                  <BiPaperPlane
                    style={{ width: '15px', height: '15px', marginTop: '-3px' }}
                    className="me-2"
                  />
                  Send Invoice
              </Button>*/}
              </Col>
              <Col md={6}>
                <Button
                  variant="outline-primary"
                  className="d-block w-100 mt-3 mt-md-0"
                  onClick={GenerateInvoice}>
                  <BiCloudDownload
                    style={{ width: '16px', height: '16px', marginTop: '-3px' }}
                    className="me-2"
                  />
                  Download Copy
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>
        <hr className="mt-4 mb-3" />
      </div>
    );
  }
}

export default InvoiceModal;
