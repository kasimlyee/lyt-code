import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Zap,
  Share2,
  Cloud,
  Terminal,
  GitBranch,
  Settings,
} from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";
import { CollaborationIndicator } from "./CollaborationIndicator";
import { NotificationsButton } from "./NotificationsButton";
import { SearchButton } from "./SearchButton";
import { StatusIndicator } from "./StatusIndicator";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <div className="relative z-50">
      {/* Top Row - Primary Navigation */}
      <div className="bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Side - Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <Terminal className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                LytCode
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Cloud-Powered Coding
              </span>
            </div>
          </Link>

          {/* Center - Main Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>

            <Link
              href="/projects"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-purple-500/10 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <GitBranch className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Projects
              </span>
            </Link>

            <Link
              href="/templates"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-green-500/10 border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <Cloud className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Templates
              </span>
            </Link>
          </nav>

          {/* Right Side - User Controls */}
          <div className="flex items-center gap-3">
            {!convexUser?.isPro && (
              <Link
                href="/pricing"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
                <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                  Upgrade
                </span>
              </Link>
            )}
            <div className="flex items-center gap-2 pl-2 border-l border-gray-800/50">
              <HeaderProfileBtn />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Editor Controls */}
      <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-gray-800/30">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Side - Status Indicators */}
          <div className="flex items-center gap-4">
            <StatusIndicator />
            <CollaborationIndicator />
            <SearchButton />
          </div>

          {/* Center - Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/snippets"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-800/30 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-gray-800/30 transition-colors"
            >
              <GitBranch className="w-4 h-4" />
            </Link>
            <Link
              href="/templates"
              className="p-2 rounded-lg text-gray-400 hover:text-green-400 hover:bg-gray-800/30 transition-colors"
            >
              <Cloud className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side - Editor Tools */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <ThemeSelector />
              <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
            </div>

            <div className="flex items-center gap-2 border-l border-gray-800/30 pl-3">
              <SignedIn>
                <RunButton />
              </SignedIn>
              <button className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-800/30 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <NotificationsButton />
              <button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-gray-800/30 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
