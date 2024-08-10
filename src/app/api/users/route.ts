import { NextResponse } from "next/server";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  image: string;
};

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    maidenName: 'Smith',
    age: 25,
    gender: 'Male',
    email: 'john.doe@example.com',
    image: 'https://dummyjson.com/icon/john/128'
  },
  {
    id: 2,
    firstName: 'Emily',
    lastName: 'Johnson',
    maidenName: 'Smith',
    age: 30,
    gender: 'Female',
    email: 'emily.johnson@example.com',
    image: 'https://dummyjson.com/icon/emilys/128'
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Smith',
    maidenName: '',
    age: 28,
    gender: 'Male',
    email: 'michael.smith@example.com',
    image: 'https://dummyjson.com/icon/michael/128'
  }
];

// To handle a GET request to /api
export async function GET(request: any) {
  // Do whatever you want
  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(request: any) {
  try {
    // Simulate fetching data from an external API
    const data = await fetchExternalData();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

async function fetchExternalData(): Promise<User[]> {
  // Simulating fetching data from an external API
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000); // Simulating delay of 1 second
  });
}
