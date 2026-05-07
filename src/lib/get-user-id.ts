import { cookies } from "next/headers"
import jwt from "jsonwebtoken";


export const getUserId = async (): Promise<string> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("Não autenticado");

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: string;
      };
    return decoded.userId;
}