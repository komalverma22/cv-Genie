"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

// Extend the Window interface to include downloadResume
declare global {
  interface Window {
    downloadResume?: () => Promise<void>
  }
}

export default function Navbar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadClick = async () => {
    if (status === "loading") return

    if (!session) {
      // User not signed in - redirect to sign in with download flag
      localStorage.setItem("shouldDownload", "true")
      router.push("/signin")
      return
    }

    // User is signed in
    if (pathname === "/create-resume") {
      // Already on create-resume page - try direct download
      if (typeof window !== "undefined" && window.downloadResume) {
        setIsDownloading(true)
        try {
          await window.downloadResume()
        } catch (error) {
          console.error("Download failed:", error)
        } finally {
          setIsDownloading(false)
        }
      } else {
        // Download function not available yet - set flag and refresh
        localStorage.setItem("shouldDownload", "true")
        window.location.reload()
      }
    } else {
      // Not on create-resume page - navigate there with download flag
      localStorage.setItem("shouldDownload", "true")
      router.push("/create-resume")
    }
  }

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-5xl px-2 sm:px-3 py-2 sm:py-3 rounded-sm shadow-md flex justify-between items-center my-2 sm:my-4 border border-black/30 backdrop-blur-sm">
      <div className="w-20 sm:w-[120px] h-8 sm:h-12 flex items-center justify-center">
        <img src="/cvGenie-logo.png" alt="CVGenie Logo" className="h-8 sm:h-12 w-24 sm:w-40 text-black" />
      </div>
      <div className="space-x-2 sm:space-x-4 hidden md:flex gap-3 sm:gap-6 text-base sm:text-xl title-font">
        <Link href="/">Home</Link>
        <Link href="/create-resume" prefetch={false}>
          Create
        </Link>
        {!session ? (
          <Link href="/signin">Sign In</Link>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-sm">Hi, {session.user?.name || session.user?.email}!</span>
            <button onClick={() => signOut()} className="hover:underline text-red-600 text-base">
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={handleDownloadClick}
          disabled={isDownloading || status === "loading"}
          className={`flex animated-hover-btn items-center gap-1 text-black/80 px-4 py-1.5 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 font-semibold text-lg title-font hover:scale-101 border border-black bubbles-effect relative ${
            isDownloading || status === "loading"
              ? "bg-gray-400/50 cursor-not-allowed"
              : session
                ? "bg-green-500/50 hover:bg-green-600/50"
                : "bg-blue-500/50 hover:bg-blue-600/50"
          }`}
        >
          {isDownloading ? (
            <>
              <span>Downloading...</span>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : status === "loading" ? (
            <>
              <span>Loading...</span>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : session ? (
            <>
              <span>{pathname === "/create-resume" ? "Download" : "Create & Download"}</span>
              <img src="/download.png" alt="download" className="w-6 h-6 object-contain" />
            </>
          ) : (
            <>
              <span>Sign in to Download</span>
              <img src="/download.png" alt="download" className="w-6 h-6 object-contain opacity-70" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
