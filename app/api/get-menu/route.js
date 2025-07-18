import { NextResponse } from "next/server";
import { database } from "../../../lib/appwrite";

export async function GET() {
  try {
    const response = await database.listDocuments(
      "6879273f00076dcc755f",
      "687ad0500030fde04fda"
    );
    return NextResponse.json({ documents: response.documents });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
