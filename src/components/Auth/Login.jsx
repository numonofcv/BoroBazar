"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-[24px] font-bold text-[#212121]">Login to your account</h2>
                </div>

                <form className="space-y-5">
                    <div>
                        <input
                            type="email"
                            placeholder="Email Id"
                            className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-[15px]"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-[15px]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors cursor-pointer"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-[#029a7c] transition-all transform hover:scale-[1.01] active:scale-[0.99] text-[15px] uppercase tracking-wide shadow-lg shadow-primary/20"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-[14px] text-gray-500">
                        Not Registered?{" "}
                        <Link href="/register" className="text-primary font-bold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div className="mt-8 relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center text-[13px] uppercase">
                        <span className="bg-white px-4 text-gray-400 font-medium">Or continue with social account</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full flex items-center justify-center gap-3 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#212121] font-bold py-3.5 rounded-lg transition-all text-[14px] uppercase tracking-tight">
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        LOGIN WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
}
