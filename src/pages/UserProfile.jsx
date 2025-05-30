import React, { useEffect, useState } from "react";
import axios from "axios";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { toast, ToastContainer } from "react-toastify";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [editProfile, setEditProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [hasUpdatedProfile, setHasUpdatedProfile] = useState(false); // ✅

    const [changePassword, setChangePassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: ""
    });

    const [newAddress, setNewAddress] = useState({
        state: "",
        city: "",
        houseNo: "",
        pincode: "",
        location: ""
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editAddress, setEditAddress] = useState({
        state: "",
        city: "",
        houseNo: "",
        pincode: "",
        location: ""
    });

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get("https://spices-backend-uii6.onrender.com/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };

        fetchUserProfile();
    }, [token]);

    useEffect(() => {
        if (user && showEditProfile && !hasUpdatedProfile) {
            setEditProfile({
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [showEditProfile, user, hasUpdatedProfile]);

    const handleAddAddress = async () => {
        const { state, city, houseNo, pincode, location } = newAddress;
        if (!state || !city || !houseNo || !pincode || !location) return;

        try {
            const res = await axios.post("https://spices-backend-uii6.onrender.com/api/user/addresses", newAddress, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(prev => ({
                ...prev,
                addresses: [...(prev.addresses || []), res.data],
            }));

            setNewAddress({ state: "", city: "", houseNo: "", pincode: "", location: "" });
            setShowForm(false);
        } catch (err) {
            console.error("Error adding address:", err);
        }
    };

    const startEditing = (index) => {
        const addr = user.addresses[index];
        setEditAddress({ ...addr });
        setEditingIndex(index);
    };

    const cancelEditing = () => {
        setEditingIndex(null);
        setEditAddress({
            state: "",
            city: "",
            houseNo: "",
            pincode: "",
            location: ""
        });
    };

    const saveEditedAddress = async () => {
        const addrToUpdate = editAddress;
        if (!addrToUpdate.state || !addrToUpdate.city || !addrToUpdate.houseNo || !addrToUpdate.pincode || !addrToUpdate.location) return;

        try {
            const id = user.addresses[editingIndex]._id;
            const res = await axios.put(`https://spices-backend-uii6.onrender.com/api/user/addresses/${id}`, addrToUpdate, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const updatedAddresses = [...user.addresses];
            updatedAddresses[editingIndex] = res.data;

            setUser(prev => ({ ...prev, addresses: updatedAddresses }));
            cancelEditing();
        } catch (err) {
            console.error("Error updating address:", err);
        }
    };

    const handleProfileUpdate = async () => {
        try {
            const payload = {
                ...editProfile,
                ...(changePassword && passwordData)
            };

            const res = await axios.put("https://spices-backend-uii6.onrender.com/api/user/updateProfile", payload, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success("Profile updated successfully!");

            setUser(prev => ({ ...prev, ...res.data }));

            setEditProfile({
                fullName: res.data.fullName,
                email: res.data.email,
                phone: res.data.phone
            });

            setHasUpdatedProfile(true); // ✅ Prevent override
            setShowEditProfile(false);
            setChangePassword(false);
            setPasswordData({ currentPassword: "", newPassword: "" });

            setTimeout(() => setHasUpdatedProfile(false), 1000); // Reset after short delay
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error(err?.response?.data?.message || "Failed to update profile");
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <HeaderSection />
            <ToastContainer />
            <section className="container py-5 mt-100">
                <div className="row">
                    <div className="col-md-6">
                        <h3>User Profile</h3>
                        <ul className="list-group mb-4">
                            <li className="list-group-item"><strong>Name:</strong> {user.fullName}</li>
                            <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                            <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
                        </ul>

                        <div className="mt-4">
                            <button className="btn btn-outline-secondary" onClick={() => setShowEditProfile(!showEditProfile)}>
                                {showEditProfile ? "Cancel" : "Edit Profile"}
                            </button>

                            {showEditProfile && (
                                <div className="mt-3">
                                    {["fullName", "email", "phone"].map((field) => (
                                        <input
                                            key={field}
                                            type="text"
                                            className="form-control mb-2"
                                            placeholder={field === "fullName" ? "Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                                            value={editProfile[field]}
                                            onChange={(e) => setEditProfile({ ...editProfile, [field]: e.target.value })}
                                        />
                                    ))}

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" checked={changePassword}
                                            onChange={() => setChangePassword(!changePassword)} id="changePasswordCheck" />
                                        <label className="form-check-label" htmlFor="changePasswordCheck">
                                            Change Password
                                        </label>
                                    </div>

                                    {changePassword && (
                                        <>
                                            <input type="password" className="form-control mb-2" placeholder="Current Password"
                                                value={passwordData.currentPassword}
                                                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })} />
                                            <input type="password" className="form-control mb-2" placeholder="New Password"
                                                value={passwordData.newPassword}
                                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} />
                                        </>
                                    )}

                                    <button className="btn btn-primary" onClick={handleProfileUpdate}>Save Changes</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4>Saved Addresses</h4>
                        {user.addresses?.length > 0 ? (
                            <ul className="list-group mb-3">
                                {user.addresses.map((addr, index) => (
                                    <li className="list-group-item" key={addr._id || index}>
                                        {editingIndex === index ? (
                                            <div>
                                                {["houseNo", "city", "state", "pincode", "location"].map((field) => (
                                                    <input
                                                        key={field}
                                                        type="text"
                                                        className="form-control mb-2"
                                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                        value={editAddress[field]}
                                                        onChange={(e) => setEditAddress({ ...editAddress, [field]: e.target.value })}
                                                    />
                                                ))}

                                                <div className="d-flex justify-content-between">
                                                    <button className="btn btn-success" onClick={saveEditedAddress}>Save</button>
                                                    <button className="btn btn-secondary" onClick={cancelEditing}>Cancel</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    {addr.houseNo}, {addr.city}, {addr.state} - {addr.pincode}<br />
                                                    <small>{addr.location}</small>
                                                </div>
                                                <button className="btn btn-sm btn-outline-primary" onClick={() => startEditing(index)}>Edit</button>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No addresses added yet.</p>
                        )}

                        {!showForm ? (
                            <button className="btn btn-outline-primary" onClick={() => setShowForm(true)}>Add Address</button>
                        ) : (
                            <div className="mb-3">
                                <h5 className="mt-3">New Address</h5>
                                {["houseNo", "city", "state", "pincode", "location"].map((field) => (
                                    <input
                                        key={field}
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        value={newAddress[field]}
                                        onChange={(e) => setNewAddress({ ...newAddress, [field]: e.target.value })}
                                    />
                                ))}

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={handleAddAddress}>Save</button>
                                    <button className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <FooterSection />
        </div>
    );
};

export default UserProfile;
