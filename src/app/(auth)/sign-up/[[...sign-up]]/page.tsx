import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="w-full h-screen grid place-content-center">
            <SignUp />
        </div>
    )
}