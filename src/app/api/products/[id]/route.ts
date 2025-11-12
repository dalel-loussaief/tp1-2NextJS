import { dbConnect } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";
import { IProduct } from "../../../../../models/Product";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await dbConnect();
  const product: IProduct | null = await Product.findById(id);
  return Response.json(product);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await dbConnect();
  const data = await req.json();
  const product: IProduct | null = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return Response.json(product);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await dbConnect();
  await Product.findByIdAndDelete(id);
  return Response.json({ message: "Produit supprimé ✅" });
}
