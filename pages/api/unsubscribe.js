const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_SECRET);

async function getEmailIds(emails) {
  const data = {
    query: emails
      .map((email) => `email LIKE '${email}'`)
      .join(" OR ")
      .concat(` AND CONTAINS(list_ids, '${process.env.SENDGRID_MAILING_ID}')`),
  };

  console.log(data.query);

  const request = {
    url: `/v3/marketing/contacts/search`,
    method: "POST",
    body: data,
  };

  let responseArray = [];

  await client
    .request(request)
    .then(([response, body]) => {
      responseArray = response.body.result.map((contact) => contact.id);
    })
    .catch((error) => {
      console.error(error.response.body.errors);
    });

  return responseArray;
}

export default async function handler(req, res) {
  const { userEmailID } = req.body,
    userID = await getEmailIds([userEmailID]);
  console.log(userID);

  if (req.method === "DELETE") {
    const queryParams = {
      ids: userID.join(","),
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: "DELETE",
      qs: queryParams,
    };

    await client
      .request(request)
      .then(([response, body]) => {
        console.log("Unsubscribed successfully!!!");
        res.status(200).send(response.body);
      })
      .catch((error) => {
        res.status(503).send(error.body);
      });
  }
}
