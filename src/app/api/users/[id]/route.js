import { mongoConnect } from "@/lib/mongooseConnect";
import { UserModel } from "@/lib/mongooseSchema";
import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  try {
    const id = context.params.id;
    await mongoConnect();
    const user = await UserModel.findById(id);

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

// export const PATCH = async (req, context) => {
//   try {
//     const id = context.params.id;
//     await mongoConnect();
//     const user = await UserModel.findByIdAndUpdate(id, { name: "Changed" });

//     if (!user) {
//       return NextResponse.json({ error: "user not found" }, { status: 404 });
//     }

//     return NextResponse.json(
//       { msg: "data updated successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching user:", error.message);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// };
