// api/new-meetup
function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, description, address } = data;
  }
}

export default handler;
