import { FiRss, FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Newsletter() {
  const [mail, setMail] = useState(null),
    [loading, setLoading] = useState(false),
    [success, setSuccess] = useState(false);

  const subscribe = () => {
    setLoading(true);
    axios
      .put("./api/subscribe", {
        userEmailID: mail,
      })
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          setSuccess(true);
          localStorage.setItem("is-subscribed", mail);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("is-subscribed")) setSuccess(true);
    else setSuccess(false);
  }, []);

  return (
    <div className="bg-black/50 p-6 rounded-[3rem] mt-8">
      <div className="text-white text-4xl">
        Get new content notifications
      </div>
      <div className="text-2xl opacity-50 text-white mt-2">
        Subscribe to my newsletter and never miss any of my upcoming articles or projects
      </div>
      {!success && (
        <div className="grid grid-cols-[1fr_auto] mt-4 gap-4">
          <input
            type="email"
            className="outline-none p-4 rounded-[1.5rem] text-xl border-2 border-transparent focus:border-pink-400 bg-stone-700/50 text-white"
            placeholder="Enter email address"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            spellCheck={false}
          />
          <button
            className="px-12 bg-pink-400 rounded-[1.5rem] text-2xl relative"
            onClick={subscribe}
          >
            {!loading && <FiRss />}
            {loading && (
              <svg
                role="status"
                className="w-8 h-8 animate-spin text-black/25 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75 right-0 top-0 "></span>
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-white right-0 top-0 "></span>
          </button>
        </div>
      )}
      {success && (
        <div className="text-green-400 text-2xl mt-2 flex items-center gap-2">
          Thank you for signing up to my newsletter!{" "}
          <FiCheckCircle className="inline" />
        </div>
      )}
    </div>
  );
}
