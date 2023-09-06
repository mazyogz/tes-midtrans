yg diubah saat produksi pada be api

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "testing",
      clientKey: "testing",
    });

menjadi

    const snap = new midtransClient.Snap({
      isProduction: true,
      serverKey: "production",
      clientKey: "production",
    });