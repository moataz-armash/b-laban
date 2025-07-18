import { database } from "../../../lib/appwrite";

export async function POST(req) {
  const body = await req.json();

  try {
    const result = await database.createDocument(
      "6879273f00076dcc755f",
      "68792775003a8eebeb15",
      "unique()",
      {
        title: body.title,
        content: body.content,
      }
    );
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
