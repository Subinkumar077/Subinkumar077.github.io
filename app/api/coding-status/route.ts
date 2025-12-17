import { NextResponse } from "next/server";

// WakaTime Status API endpoint
// You need to set WAKATIME_API_KEY in your .env.local file
// Get your API key from: https://wakatime.com/settings/api-key

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;
  const username = process.env.WAKATIME_USERNAME || "mdharish72";

  if (!apiKey) {
    // Return mock data if no API key is configured
    return NextResponse.json({
      is_coding_activity_visible: true,
      data: {
        categories: [],
        editors: [{ name: "Cursor", text: "" }],
        grand_total: { text: "" },
      },
    });
  }

  try {
    // Fetch current status from WakaTime (today's summary)
    const response = await fetch(
      `https://wakatime.com/api/v1/users/${username}/status_bar/today`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error("WakaTime API error");
    }

    const data = await response.json();
    
    // The status_bar/today endpoint returns data with:
    // - data.categories: array of {name, text} for coding categories
    // - data.editors: array of {name, text} for editors used
    // - data.grand_total: {text} total time coded today
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("WakaTime API error:", error);
    return NextResponse.json(
      {
        is_coding_activity_visible: false,
        data: {
          categories: [],
          editors: [{ name: "Cursor", text: "" }],
          grand_total: { text: "" },
        },
      },
      { status: 500 }
    );
  }
}
