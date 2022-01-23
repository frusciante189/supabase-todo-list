import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignWithGoogle = ({ type }) => {
  return (
    <Link href="/">
      <a
        href="/"
        className="text-zinc-800 font-semibold py-4 px-8 bg-zinc-200 w-full flex items-center justify-center rounded-xl border border-transparent 
              hover:bg-zinc-300 hover:text-zinc-700 transition-colors duration-200 ease-in-out transform"
      >
        <FcGoogle className="mr-4" size={22} />
        Sign{" "}
        {type === "Sign In" ? (
          <span className="mx-1">in</span>
        ) : (
          <span className="mx-1">up</span>
        )}
        with Github
      </a>
    </Link>
  );
};

export default SignWithGoogle;
