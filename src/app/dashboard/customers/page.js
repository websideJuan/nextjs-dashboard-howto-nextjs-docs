export default function Page() {
  const clients = [
    {
      IDCliente: "0",
      clientName: "Empresa 1",
      registeredName: "Empresa de venta al por mayor.",
      currentStatus: true,
      lastTreeInvoces: ["f3c0-0", "f3c0-1", "f3c0-2"],
    },
    {
      IDCliente: "1",
      clientName: "Empresa 2",
      registeredName: "Empresa del area forestal.",
      currentStatus: false,
      lastTreeInvoces: ["f25c1-0", "f25c1-1", "f25c1-3"],
      lastInvoces: "f25c1-3",
    },
  ];

  const invoices = [
    {
      IDInvoice: "f25c1-3",
      IDClient: "1",
      totalPrice: "400",
    },
    {
      IDInvoice: "f25c1-1",
      IDClient: "1",
      totalPrice: "200",
    },
    {
      IDInvoice: "f25c1-0",
      IDClient: "1",
      totalPrice: "5500",
    },
    {
      IDInvoice: "f3c0-0",
      IDClient: "0",
      totalPrice: "6700",
    },
    {
      IDInvoice: "f3c0-1",
      IDClient: "0",
      totalPrice: "2300",
    },
    {
      IDInvoice: "f3c0-2",
      IDClient: "0",
      totalPrice: "4900",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {clients.map((client) => (
        <div
          key={client.IDCliente}
          style={{
            border: "1px solid gray",
            padding: "10px",
            maxWidth: "350px",
            borderRadius: '10px'
          }}
        >
          <h5 style={{ fontSize: "24px", marginBottom: "5px" }}>
            {client.clientName}
          </h5>
          <p style={{ marginBottom: "15px" }}>{client.registeredName}</p>
          <ul>
            <li>Ultimas 3 facturas:</li>
            {invoices
              .filter((invoce) => invoce.IDClient === client.IDCliente)
              .map((invoceClient) => (
                <li key={invoceClient.IDInvoice}>{invoceClient.IDInvoice}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
