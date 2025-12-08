const { NextResponse } = require("next/server");

export function sendSuccessResponse(data, message = "Success") {
  return NextResponse.json({ status: 200, success: true, message, data });
}