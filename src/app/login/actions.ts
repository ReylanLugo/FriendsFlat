"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import prisma from "@/utils/prisma";

export async function login(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const dataForm = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error, data } = await supabase.auth.signUp(dataForm);
  if (error) {
    redirect("/error?message=" + error.message);
  }
  const newuser = await prisma.users.create({
    data: {
      id: data.user?.id,
      image: "/defaultProfileImg.png",
    },
  });
  revalidatePath("/", "layout");
  redirect("/");
}
