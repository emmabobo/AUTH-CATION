import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" }) // Redirect after sign out
      }}
    >
      <Button type="submit" variant="destructive">
        Sign out
      </Button>
    </form>
  )
}
