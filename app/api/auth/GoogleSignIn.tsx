import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
 
export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn('google',{redirectTo: "/home1"})
      }}
    >
      <Button type="submit">Sign in with Google</Button>
    </form>
  )
}