export async function POST(req) {
    const body = await req.json();
  
    try {
      const res = await fetch("https://bodymagdy-api.lovestoblog.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      const result = await res.json();
  
      return Response.json(result);
    } catch (error) {
      return Response.json({ success: false, message: "Server error." }, { status: 500 });
    }
  }
  