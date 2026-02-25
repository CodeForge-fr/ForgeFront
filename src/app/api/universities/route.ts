export async function GET(request: Request) {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=Armenia",
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return Response.json(
      { error: "Failed to fetch universities" },
      { status: 500 },
    );
  }
}
