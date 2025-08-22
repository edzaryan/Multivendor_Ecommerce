import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="w-full h-screen grid place-content-center">
            <SignIn />
        </div>
    )
}