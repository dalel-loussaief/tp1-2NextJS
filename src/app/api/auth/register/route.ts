import bcrypt from "bcryptjs";
import User from "../../../../../models/User";
import { dbConnect } from "../../../../../lib/mongodb";
export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password }: { email: string; password: string } =
      await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
