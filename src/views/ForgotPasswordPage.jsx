"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send a request to your backend
        console.log("Password reset requested for:", email);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail("");
        }, 3000);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                            <svg
                                className="w-10 h-10 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        Forgot Password
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Enter your registered email address and we'll send you a<br />
                        One-Time Password (OTP) to reset your password.
                    </p>
                </div>

                {/* Form */}
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email Id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-[#029a7c] transition-all transform hover:scale-[1.01] active:scale-[0.99] text-[15px] uppercase tracking-wide shadow-lg shadow-primary/20"
                        >
                            SUBMIT
                        </button>

                        <Link
                            href="/login"
                            className="w-full text-gray-600 font-medium py-3 text-[14px] hover:text-primary transition-colors flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to login
                        </Link>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Email Sent!
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Please check your email for password reset instructions.
                        </p>
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
