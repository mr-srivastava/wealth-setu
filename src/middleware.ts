import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(
      {
        role: "org:admin",
      },
      {
        unauthorizedUrl: new URL("/forbidden", req.url).toString(),
      }
    );
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
