import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const response = await sql`
      SELECT * FROM drivers;
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
