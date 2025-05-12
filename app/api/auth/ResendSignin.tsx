

import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
 
export default function ResendSignIn() {
  return (
    <form 
      action={async (formData) => {
        "use server"
        await signIn('resend',formData ,{redirectTo: "/home1"})
      }}
      className="flex flex-col gap-4 w-full max-w-sm"
    >
    <input type="text" name="email" placeholder="Email" required />
      <Button className="hover:translate-y-1" type="submit">Sign in Resend (magic-link)</Button>
    </form>
  )
}