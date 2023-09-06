import express from "express";
import midtransClient from "midtrans-client";

const router = express.Router();

router.post("/process-transaction", (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-v4ZJdgQET4My17Ngk-pb6T1g",
      clientKey: "SB-Mid-client-HV7aOKK1G2a7GXBn",
    });

    const parameter = {
      transaction_details: {
        order_id: req.body.order_id,
        gross_amount: req.body.total,
      },
      customer_details: {
        first_name: req.body.name,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      const dataPayment = {
        response: JSON.stringify(transaction),
      };
      const token = transaction.token;

      res.status(200).json({ message: "berhasil", dataPayment, token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
