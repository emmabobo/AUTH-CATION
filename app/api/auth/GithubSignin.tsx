import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
 
export default function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn('github',{redirectTo: "/home2"})
      }}
    >
      <Button type="submit">Sign in with Github</Button>
    </form>
  )
}