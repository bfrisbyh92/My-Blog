const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_SECRET);

export default function handler(req, res) {
  const { userEmailID } = req.body;

  if (req.method === "PUT") {
    const data = {
      contacts: [{ email: `${userEmailID}` }],
      list_ids: [process.env.SENDGRID_MAILING_ID],
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data,
    };

    client
      .request(request)
      .then(([response, body]) => {
        // console.log(response.body.response.body);
        res.status(200).send({
          message:
            "Your email has been succesfully added to the mailing list. Welcome 👋",
          success: true,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({
          message:
            "Oups, there was a problem with your subscription, please try again or contact us",
          success: false,
        });
      });
  }
}
