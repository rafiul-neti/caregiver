export const bookingInvoice = ({
  serviceName,
  location,
  totalPrice,
  startDate,
}) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        .invoice-box {
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }
        .invoice-header {
            background: #111827;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .invoice-header h1 { margin: 0; font-size: 24px; }
        .details-table {
            width: 100%;
            line-height: inherit;
            text-align: left;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .details-table td {
            padding: 12px;
            vertical-align: top;
            border-bottom: 1px solid #eee;
        }
        .label { font-weight: bold; color: #111827; width: 40%; }
        .total-row {
            background: #f9fafb;
            font-weight: bold;
            font-size: 18px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #9ca3af;
        }
        .brand-color { color: #570df8; } /* Matches your primary color */
    </style>
</head>
<body>
    <div class="invoice-box">
        <div class="invoice-header">
            <h1>Care<span class="brand-color">.xyz</span> Invoice</h1>
            <p>Booking Confirmation</p>
        </div>
        
        <table class="details-table">
            <tr>
                <td class="label">Service Booked</td>
                <td>${serviceName}</td>
            </tr>
            <tr>
                <td class="label">Start Date</td>
                <td>${startDate}</td>
            </tr>
            <tr>
                <td class="label">Location</td>
                <td>${location}</td>
            </tr>
            <tr class="total-row">
                <td class="label">Total Amount</td>
                <td class="brand-color">৳${totalPrice}</td>
            </tr>
        </table>

        <div class="footer">
            <p>Thank you for choosing Care.xyz. Our caregiver will contact you shortly.</p>
            <p>&copy; 2026 Care.xyz | Reliable Caregiving Services</p>
        </div>
    </div>
</body>
</html>`;
};
