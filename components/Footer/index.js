import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiYoutube,
  FiGitlab,
  FiLinkedin,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";

export default function Footer() {
  return (
    <div className="mt-12 relative h-fit w-full border-t-[1px] border-white/10 contain-paint px-8 md:px-32">
      <h1 className="h-fit w-fit max-w-full absolute m-auto top-0 left-0 right-0 bottom-0 text-center text-border-thick text-[24vw] md:text-[14vw] opacity-5 text-white">
        Frisby
      </h1>
      <div className="relative max-w-screen-xl w-full mx-auto mt-10">
        <div className="">
          <div className="">
            <p className="text-white text-base leading-10">
              Feel free to
            </p>
            <h1 className="text-white text-5xl mt-2">Reach out</h1>
            <p className="text-white text-xl leading-10 mt-4">
              if you want to collaborate, have work, or are in need of anyone with a diverse tech skillset between penetration testing, web and mobile app development, and Python automation scripts. Also open to just networking with other people that have similiar passions.
            </p>
            <div className="flex justify-start items-center gap-6 h-fit mt-6">
              <Link href="https://brendanfrisby.vercel.app/contact">
                <a
                  className={`inline-block w-full md:w-fit text-center md:text-left px-8 py-2 text-white text-xl border-white border-2 rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                >
                  Contact
                </a>
              </Link>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://github.com/bfrisbyh92"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://linkedin.com/in/brendan-frisby"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              {/* <a
                className="text-white text-3xl w-fit inline "
                href="https://www.youtube.com/c/TheCoders"
                target="_blank"
                rel="noreferrer"
              >
                <FiYoutube />
              </a> */}
              {/* <a
                className="text-white text-3xl w-fit inline "
                href="https://twitter.com/xJaagrav"
                target="_blank"
                rel="noreferrer"
              >
                <FiTwitter />
              </a> */}
              <a
                className="text-white text-3xl w-fit inline "
                href="mailto:contact@bfrisbyh92@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://brendanfrisby.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white/10 mt-12 mb-6"></div>
        <div className="text-white text-lg text-center pb-6">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/bfrisbyh92/My-Blog"
            target="_blank"
            className="transition text-pink-400 hover:underline underline-offset-8 text-lg"
            rel="noreferrer"
          >
            Brendan Frisby
          </a>
          .. Yesir.
        </div>
      </div>
    </div>
  );
}
