"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, MapPin, Heart, Package, LogOut, Plus, MoreVertical, Edit, Trash2, Camera } from "lucide-react";

export default function ProfilePage() {
    const [fullName, setFullName] = useState("RINKU VERMA");
    const [email, setEmail] = useState("rinku37@gmail.com");
    const [phone, setPhone] = useState("+91 98775-98202");
    const [activeTab, setActiveTab] = useState("profile");
    const [profileImage, setProfileImage] = useState(null);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Address management states
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            type: "Home",
            name: "RINKU VERMA",
            phone: "+9845585867",
            address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
        },
        {
            id: 2,
            type: "Home",
            name: "RINKU VERMA",
            phone: "+9845585867",
            address: "H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110051"
        }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showMenu, setShowMenu] = useState(null);

    const [formData, setFormData] = useState({
        type: "Home",
        name: "",
        phone: "",
        address: ""
    });

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

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log("Profile updated:", { fullName, email, phone });
        alert("Profile updated successfully!");
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        console.log("Password changed");
        alert("Password changed successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    const handleAddAddress = (e) => {
        e.preventDefault();
        const newAddress = {
            id: addresses.length + 1,
            ...formData
        };
        setAddresses([...addresses, newAddress]);
        setShowAddModal(false);
        setFormData({ type: "Home", name: "", phone: "", address: "" });
    };

    const handleEditAddress = (e) => {
        e.preventDefault();
        setAddresses(addresses.map(addr =>
            addr.id === selectedAddress.id ? { ...selectedAddress, ...formData } : addr
        ));
        setShowEditModal(false);
        setSelectedAddress(null);
        setFormData({ type: "Home", name: "", phone: "", address: "" });
    };

    const handleDeleteAddress = (id) => {
        if (confirm("Are you sure you want to delete this address?")) {
            setAddresses(addresses.filter(addr => addr.id !== id));
            setShowMenu(null);
        }
    };

    const openEditModal = (address) => {
        setSelectedAddress(address);
        setFormData({
            type: address.type,
            name: address.name,
            phone: address.phone,
            address: address.address
        });
        setShowEditModal(true);
        setShowMenu(null);
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
                                        htmlFor="profile-image-upload"
                                        className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-all shadow-lg border-2 border-white"
                                    >
                                        <Camera size={16} className="text-white" />
                                    </label>
                                    <input
                                        id="profile-image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">{fullName}</h3>
                                <p className="text-sm text-gray-500 mt-1">{email}</p>
                            </div>

                            {/* Menu */}
                            <nav className="p-4">
                                <button
                                    onClick={() => setActiveTab("profile")}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 cursor-pointer ${activeTab === "profile"
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <User size={20} />
                                    <span className="text-sm">My Profile</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("address")}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 cursor-pointer ${activeTab === "address"
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <MapPin size={20} />
                                    <span className="text-sm">Address</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("wishlist")}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 cursor-pointer ${activeTab === "wishlist"
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <Heart size={20} />
                                    <span className="text-sm">My List</span>
                                </button>
                                <Link
                                    href="/orders"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-2 text-gray-700 hover:bg-gray-50"
                                >
                                    <Package size={20} />
                                    <span className="text-sm">My Orders</span>
                                </Link>
                                <button
                                    onClick={() => {
                                        if (confirm("Are you sure you want to logout?")) {
                                            window.location.href = "/";
                                        }
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-red-600 hover:bg-red-50 cursor-pointer"
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
                            {/* Profile Tab */}
                            {activeTab === "profile" && (
                                <>
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
                                            <p className="text-sm text-gray-500 mt-1">All your account information in one place</p>
                                        </div>
                                        <button
                                            onClick={() => setActiveTab("password")}
                                            className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm font-medium cursor-pointer"
                                        >
                                            Change Password
                                        </button>
                                    </div>

                                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="flex gap-3">
                                                <div className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50">
                                                    <span className="text-2xl">🇮🇳</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                        >
                                            Update Profile
                                        </button>
                                    </form>
                                </>
                            )}

                            {/* Password Tab */}
                            {activeTab === "password" && (
                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-800">Change Password</h3>
                                        <p className="text-sm text-gray-500 mt-1">Update Your Password</p>
                                    </div>

                                    <form onSubmit={handleChangePassword} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Old Password
                                            </label>
                                            <input
                                                type="password"
                                                value={oldPassword}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                                placeholder="Old Password"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    placeholder="New Password"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="Confirm Password"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <button
                                                type="submit"
                                                className="px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                            >
                                                Change Password
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setActiveTab("profile")}
                                                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Address Tab */}
                            {activeTab === "address" && (
                                <>
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">Address</h2>
                                            <p className="text-sm text-gray-500 mt-1">Manage Your Addresses</p>
                                        </div>
                                        <button
                                            onClick={() => setShowAddModal(true)}
                                            className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm font-medium cursor-pointer"
                                        >
                                            <Plus size={18} />
                                            Add Address
                                        </button>
                                    </div>

                                    {/* Address List */}
                                    <div className="space-y-4">
                                        {addresses.map((address) => (
                                            <div
                                                key={address.id}
                                                className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-all relative"
                                            >
                                                {/* Type Badge */}
                                                <div className="flex items-start justify-between mb-3">
                                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                                                        {address.type}
                                                    </span>

                                                    {/* Menu Button */}
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setShowMenu(showMenu === address.id ? null : address.id)}
                                                            className="p-1 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                                        >
                                                            <MoreVertical size={18} className="text-gray-600" />
                                                        </button>

                                                        {/* Dropdown Menu */}
                                                        {showMenu === address.id && (
                                                            <>
                                                                <div
                                                                    className="fixed inset-0 z-40"
                                                                    onClick={() => setShowMenu(null)}
                                                                />
                                                                <div className="absolute right-0 top-8 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                                                                    <button
                                                                        onClick={() => openEditModal(address)}
                                                                        className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm cursor-pointer"
                                                                    >
                                                                        <Edit size={16} />
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteAddress(address.id)}
                                                                        className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 text-sm cursor-pointer"
                                                                    >
                                                                        <Trash2 size={16} />
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Address Details */}
                                                <div>
                                                    <h3 className="font-bold text-gray-800 mb-1">{address.name}</h3>
                                                    <p className="text-sm text-gray-600 mb-1">{address.phone}</p>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{address.address}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {addresses.length === 0 && (
                                        <div className="text-center py-12">
                                            <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">No Addresses Yet</h3>
                                            <p className="text-gray-500 mb-6">Add your first address to get started</p>
                                            <button
                                                onClick={() => setShowAddModal(true)}
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all cursor-pointer"
                                            >
                                                <Plus size={18} />
                                                Add Address
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Wishlist Tab */}
                            {activeTab === "wishlist" && (
                                <>
                                    {/* Header */}
                                    <div className="mb-8 pb-6 border-b border-gray-100">
                                        <h2 className="text-2xl font-bold text-gray-800">My List</h2>
                                        <p className="text-sm text-gray-500 mt-1">There are 4 products in your My List</p>
                                    </div>

                                    {/* Wishlist Items */}
                                    <div className="space-y-4">
                                        {/* Item 1 */}
                                        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/50 transition-all relative">
                                            <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                                <img
                                                    src="/FuturedProducts/futuredProduct1.png"
                                                    alt="Fortune Sunlite Refined Sunflower Oil"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 mb-1">Fortune</p>
                                                <h3 className="font-medium text-gray-800 mb-2">Fortune Sunlite Refined Sunflower Oil 1 L</h3>
                                                <div className="flex items-center gap-1 mb-2">
                                                    <div className="flex text-yellow-400">
                                                        {"★★★★★".split("").map((star, i) => (
                                                            <span key={i}>{star}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-gray-800">$25.99</span>
                                                    <span className="text-sm text-gray-400 line-through">$38.10</span>
                                                    <span className="text-sm font-medium text-green-600">14% OFF</span>
                                                </div>
                                            </div>
                                            <button
                                                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                                title="Remove from wishlist"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 hover:text-red-500">
                                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Item 2 */}
                                        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/50 transition-all relative">
                                            <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                                <img
                                                    src="/BreaksfastProducts/breaksfastProduct2.png"
                                                    alt="Zandu Chyavanprashad"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 mb-1">Zandu</p>
                                                <h3 className="font-medium text-gray-800 mb-2">Zandu Chyavanprashad With No Added Sugar 900 gm</h3>
                                                <div className="flex items-center gap-1 mb-2">
                                                    <div className="flex text-yellow-400">
                                                        {"★★★★☆".split("").map((star, i) => (
                                                            <span key={i}>{star}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-gray-800">$25.99</span>
                                                    <span className="text-sm text-gray-400 line-through">$38.10</span>
                                                    <span className="text-sm font-medium text-green-600">14% OFF</span>
                                                </div>
                                            </div>
                                            <button
                                                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                                title="Remove from wishlist"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 hover:text-red-500">
                                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Item 3 */}
                                        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/50 transition-all relative">
                                            <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                                <img
                                                    src="/LastProducts/lastProduct3.png"
                                                    alt="Gemini Refined Sunflower Oil"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 mb-1">Gemini</p>
                                                <h3 className="font-medium text-gray-800 mb-2">Gemini Refined Sunflower Oil 1 L</h3>
                                                <div className="flex items-center gap-1 mb-2">
                                                    <div className="flex text-yellow-400">
                                                        {"★★★★★".split("").map((star, i) => (
                                                            <span key={i}>{star}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-gray-800">$25.99</span>
                                                    <span className="text-sm text-gray-400 line-through">$38.10</span>
                                                    <span className="text-sm font-medium text-green-600">14% OFF</span>
                                                </div>
                                            </div>
                                            <button
                                                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                                title="Remove from wishlist"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 hover:text-red-500">
                                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Item 4 */}
                                        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/50 transition-all relative">
                                            <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                                <img
                                                    src="/PopularProducts/lays.png"
                                                    alt="Lay's American Style Cream & Onion Potato Chips"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 mb-1">Lay's</p>
                                                <h3 className="font-medium text-gray-800 mb-2">Lay's American Style Cream & Onion Potato Chips 82 g</h3>
                                                <div className="flex items-center gap-1 mb-2">
                                                    <div className="flex text-yellow-400">
                                                        {"★★★★★".split("").map((star, i) => (
                                                            <span key={i}>{star}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-gray-800">$25.99</span>
                                                    <span className="text-sm text-gray-400 line-through">$38.10</span>
                                                    <span className="text-sm font-medium text-green-600">14% OFF</span>
                                                </div>
                                            </div>
                                            <button
                                                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                                title="Remove from wishlist"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 hover:text-red-500">
                                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Address Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Address</h2>

                        <form onSubmit={handleAddAddress} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                >
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                                >
                                    Add Address
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setFormData({ type: "Home", name: "", phone: "", address: "" });
                                    }}
                                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Address Modal */}
            {showEditModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Address</h2>

                        <form onSubmit={handleEditAddress} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                >
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowEditModal(false);
                                        setSelectedAddress(null);
                                        setFormData({ type: "Home", name: "", phone: "", address: "" });
                                    }}
                                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
