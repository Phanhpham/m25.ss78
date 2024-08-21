import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Đình Dương",
    address: "HN",
    age: "20",
  },
  {
    id: 2,
    name: "Đình Dương",
    address: "DN",
    age: "40",
  },
  {
    id: 3,
    name: "Đình Dương",
    address: "HCM",
    age: "100",
  },
];
export async function GET() {
  return NextResponse.json({ data: users });
}

export async function POST(request: any) {
  const data = await request.json();

  return NextResponse.json({
    massage: "thêm mới thông tin người dùng thành công",
    users: data,
  });
}