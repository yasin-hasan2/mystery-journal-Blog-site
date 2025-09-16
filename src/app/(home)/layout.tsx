import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (user) {
    const loggedInUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!loggedInUser) {
      await prisma.user.create({
        data: {
          name: user.fullName ?? "Anonymous",
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
        },
      });
    }
  }

  // Always render children, logged in or not
  return <div>{children}</div>;
};

export default Layout;
