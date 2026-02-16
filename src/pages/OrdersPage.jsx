"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, MapPin, Heart, Package, LogOut, Eye, X, CreditCard, Camera } from "lucide-react";

export default function OrdersPage() {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const [orders] = useState([
        {
            id: "#3933",
            date: "March 14, 2023",
            status: "Pending",
            amount: "$648.00",
            items: 5,
            products: [
                { name: "Lay's Potato Chips", image: "/PopularProducts/lays.png" },
                { name: "Fortune Oil", image: "/FuturedProducts/futuredProduct1.png" }
            ],
            fullDetails: {
                items: [
                    {
                        id: 1,
                        name: "Fortune Sunlite Refined Sunflower Oil 1 L",
                        brand: "Fortune",
                        image: "/FuturedProducts/futuredProduct1.png",
                        price: "$25.99",
                        quantity: 2,
                        total: "$51.98"
                    },
                    {
                        id: 2,
                        name: "Lay's American Style Cream & Onion Potato Chips 82 g",
                        brand: "Lay's",
                        image: "/PopularProducts/lays.png",
                        price: "$3.50",
                        quantity: 5,
                        total: "$17.50"
                    },
                    {
                        id: 3,
                        name: "Gemini Refined Sunflower Oil 1 L",
                        brand: "Gemini",
                        image: "/LastProducts/lastProduct3.png",
                        price: "$24.99",
                        quantity: 3,
                        total: "$74.97"
                    }
                ],
                shippingAddress: {
                    name: "RINKU VERMA",
                    phone: "+91 98775-98202",
                    address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
                },
                paymentMethod: "Cash on Delivery",
                subtotal: "$144.45",
                shipping: "$5.00",
                tax: "$14.44",
                total: "$163.89",
                timeline: [
                    { status: "Order Placed", date: "March 14, 2023 10:30 AM", completed: true },
                    { status: "Processing", date: "March 14, 2023 11:15 AM", completed: false },
                    { status: "Shipped", date: "Expected March 15, 2023", completed: false },
                    { status: "Delivered", date: "Expected March 17, 2023", completed: false }
                ]
            }
        },
        {
            id: "#3924",
            date: "March 12, 2023",
            status: "Processing",
            amount: "$892.00",
            items: 3,
            products: [
                { name: "Gemini Oil", image: "/LastProducts/lastProduct3.png" },
                { name: "Breakfast Item", image: "/BreaksfastProducts/breaksfastProduct2.png" }
            ],
            fullDetails: {
                items: [
                    {
                        id: 1,
                        name: "Gemini Refined Sunflower Oil 1 L",
                        brand: "Gemini",
                        image: "/LastProducts/lastProduct3.png",
                        price: "$24.99",
                        quantity: 3,
                        total: "$74.97"
                    }
                ],
                shippingAddress: {
                    name: "RINKU VERMA",
                    phone: "+91 98775-98202",
                    address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
                },
                paymentMethod: "Cash on Delivery",
                subtotal: "$74.97",
                shipping: "$5.00",
                tax: "$7.50",
                total: "$87.47",
                timeline: [
                    { status: "Order Placed", date: "March 12, 2023 09:15 AM", completed: true },
                    { status: "Processing", date: "March 12, 2023 10:30 AM", completed: true },
                    { status: "Shipped", date: "Expected March 13, 2023", completed: false },
                    { status: "Delivered", date: "Expected March 15, 2023", completed: false }
                ]
            }
        },
        {
            id: "#3912",
            date: "March 08, 2023",
            status: "Delivered",
            amount: "$1,245.00",
            items: 8,
            products: [
                { name: "Fortune Oil", image: "/FuturedProducts/futuredProduct1.png" },
                { name: "Lay's Chips", image: "/PopularProducts/lays.png" }
            ],
            fullDetails: {
                items: [
                    {
                        id: 1,
                        name: "Fortune Sunlite Refined Sunflower Oil 1 L",
                        brand: "Fortune",
                        image: "/FuturedProducts/futuredProduct1.png",
                        price: "$25.99",
                        quantity: 8,
                        total: "$207.92"
                    }
                ],
                shippingAddress: {
                    name: "RINKU VERMA",
                    phone: "+91 98775-98202",
                    address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
                },
                paymentMethod: "Cash on Delivery",
                subtotal: "$207.92",
                shipping: "$5.00",
                tax: "$20.79",
                total: "$233.71",
                timeline: [
                    { status: "Order Placed", date: "March 08, 2023 08:00 AM", completed: true },
                    { status: "Processing", date: "March 08, 2023 09:00 AM", completed: true },
                    { status: "Shipped", date: "March 09, 2023", completed: true },
                    { status: "Delivered", date: "March 10, 2023", completed: true }
                ]
            }
        },
        {
            id: "#3901",
            date: "March 02, 2023",
            status: "Delivered",
            amount: "$456.00",
            items: 2,
            products: [
                { name: "Breakfast Product", image: "/BreaksfastProducts/breaksfastProduct3.png" },
                { name: "Gemini Oil", image: "/LastProducts/lastProduct3.png" }
            ],
            fullDetails: {
                items: [
                    {
                        id: 1,
                        name: "Breakfast Product",
                        brand: "Breakfast",
                        image: "/BreaksfastProducts/breaksfastProduct3.png",
                        price: "$15.99",
                        quantity: 2,
                        total: "$31.98"
                    }
                ],
                shippingAddress: {
                    name: "RINKU VERMA",
                    phone: "+91 98775-98202",
                    address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
                },
                paymentMethod: "Cash on Delivery",
                subtotal: "$31.98",
                shipping: "$5.00",
                tax: "$3.20",
                total: "$40.18",
                timeline: [
                    { status: "Order Placed", date: "March 02, 2023 07:30 AM", completed: true },
                    { status: "Processing", date: "March 02, 2023 08:15 AM", completed: true },
                    { status: "Shipped", date: "March 03, 2023", completed: true },
                    { status: "Delivered", date: "March 04, 2023", completed: true }
                ]
            }
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "Processing":
                return "bg-blue-100 text-blue-700";
            case "Delivered":
                return "bg-green-100 text-green-700";
            case "Cancelled":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedOrder(null), 300);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-12">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* User Info */}
                            <div className="p-6 text-center border-b border-gray-100">
                                <div className="relative w-24 h-24 mx-auto mb-4">
                                    {profileImage ? (
                                        <img
                                            src={profileImage}
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                                        />
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                                            <User size={40} className="text-white" />
                                        </div>
                                    )}
                                    <label
                                        htmlFor="orders-profile-image-upload"
                                        className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-all shadow-lg border-2 border-white"
                                    >
                                        <Camera size={16} className="text-white" />
                                    </label>
                                    <input
                                        id="orders-profile-image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">RINKU VERMA</h3>
                                <p className="text-sm text-gray-500 mt-1">advancedtechniques@gmail.com</p>
                            </div>

                            {/* Menu */}
                            <nav className="p-4">
                                <Link
                                    href="/profile"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 text-gray-700 hover:bg-gray-50"
                                >
                                    <User size={20} />
                                    <span className="text-sm">My Profile</span>
                                </Link>
                                <Link
                                    href="/profile"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 text-gray-700 hover:bg-gray-50"
                                >
                                    <MapPin size={20} />
                                    <span className="text-sm">Address</span>
                                </Link>
                                <Link
                                    href="/profile"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 text-gray-700 hover:bg-gray-50"
                                >
                                    <Heart size={20} />
                                    <span className="text-sm">My List</span>
                                </Link>
                                <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 bg-primary/10 text-primary font-medium">
                                    <Package size={20} />
                                    <span className="text-sm">My Orders</span>
                                </div>
                                <button
                                    onClick={() => {
                                        if (confirm("Are you sure you want to logout?")) {
                                            window.location.href = "/";
                                        }
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-red-600 hover:bg-red-50"
                                >
                                    <LogOut size={20} />
                                    <span className="text-sm">Logout</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                            {/* Header */}
                            <div className="mb-8 pb-6 border-b border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
                                <p className="text-sm text-gray-500 mt-1">Track and manage your orders</p>
                            </div>

                            {/* Orders List */}
                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-all"
                                    >
                                        {/* Order Header */}
                                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                            <div className="flex items-center gap-6">
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">Order ID</p>
                                                    <p className="font-bold text-gray-800">{order.id}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">Date</p>
                                                    <p className="text-sm text-gray-700">{order.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">Status</p>
                                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                                                <p className="text-lg font-bold text-gray-800">{order.amount}</p>
                                            </div>
                                        </div>

                                        {/* Order Items */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex -space-x-2">
                                                    {order.products.slice(0, 3).map((product, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-12 h-12 rounded-lg bg-gray-50 border-2 border-white overflow-hidden"
                                                        >
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                    {order.items > 3 && (
                                                        <div className="w-12 h-12 rounded-lg bg-gray-100 border-2 border-white flex items-center justify-center">
                                                            <span className="text-xs font-medium text-gray-600">
                                                                +{order.items - 3}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    {order.items} {order.items === 1 ? "item" : "items"}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => handleViewDetails(order)}
                                                className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm font-medium"
                                            >
                                                <Eye size={16} />
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Empty State */}
                            {orders.length === 0 && (
                                <div className="text-center py-12">
                                    <Package size={64} className="mx-auto text-gray-300 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Orders Yet</h3>
                                    <p className="text-gray-500 mb-6">Start shopping to create your first order</p>
                                    <Link
                                        href="/shop"
                                        className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                                    >
                                        Start Shopping
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Details Modal */}
            {showModal && selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Order {selectedOrder.id}</h2>
                                <p className="text-sm text-gray-500 mt-1">Placed on {selectedOrder.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                                    {selectedOrder.status}
                                </span>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X size={24} className="text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Order Timeline */}
                            <div className="mb-8">
                                <h3 className="font-bold text-gray-800 mb-4">Order Status</h3>
                                <div className="relative">
                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                                    <div className="space-y-6">
                                        {selectedOrder.fullDetails.timeline.map((step, index) => (
                                            <div key={index} className="relative flex items-start gap-4">
                                                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${step.completed
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-200 text-gray-400"
                                                    }`}>
                                                    {step.completed ? (
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    ) : (
                                                        <div className="w-3 h-3 rounded-full bg-current"></div>
                                                    )}
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <p className={`font-medium ${step.completed ? "text-gray-800" : "text-gray-500"}`}>
                                                        {step.status}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{step.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Order Items */}
                                <div className="lg:col-span-2">
                                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <Package size={20} className="text-primary" />
                                        Order Items
                                    </h3>
                                    <div className="space-y-4">
                                        {selectedOrder.fullDetails.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                                            >
                                                <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                                                    <h4 className="font-medium text-gray-800 mb-2">{item.name}</h4>
                                                    <div className="flex items-center gap-4 text-sm">
                                                        <span className="text-gray-600">Price: {item.price}</span>
                                                        <span className="text-gray-600">Qty: {item.quantity}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-gray-800">{item.total}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-1 space-y-6">
                                    {/* Shipping Address */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <MapPin size={18} className="text-primary" />
                                            Shipping Address
                                        </h4>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p className="font-medium text-gray-800">{selectedOrder.fullDetails.shippingAddress.name}</p>
                                            <p>{selectedOrder.fullDetails.shippingAddress.phone}</p>
                                            <p className="leading-relaxed">{selectedOrder.fullDetails.shippingAddress.address}</p>
                                        </div>
                                    </div>

                                    {/* Payment Method */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <CreditCard size={18} className="text-primary" />
                                            Payment Method
                                        </h4>
                                        <p className="text-sm text-gray-600">{selectedOrder.fullDetails.paymentMethod}</p>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-800 mb-3">Order Summary</h4>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Subtotal</span>
                                                <span className="text-gray-800">{selectedOrder.fullDetails.subtotal}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Shipping</span>
                                                <span className="text-gray-800">{selectedOrder.fullDetails.shipping}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Tax</span>
                                                <span className="text-gray-800">{selectedOrder.fullDetails.tax}</span>
                                            </div>
                                            <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                                                <span className="font-bold text-gray-800">Total</span>
                                                <span className="text-xl font-bold text-primary">{selectedOrder.fullDetails.total}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
