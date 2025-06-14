import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReserveForm.css';
import { motion } from 'framer-motion';

export default function ReserveForm() {
    const [formData, setFormData] = useState({
        vehicle: '',
        acPreference: '',
        pickupLocation: '',
        returnLocation: '',
        pickupDate: '',
        pickupTime: '',
        returnDate: '',
        driverNeeded: '',
        phoneNumber: '',
        additionalNotes: '',
        agreed: false,
    });
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendURL = import.meta.env.PROD
            ? 'https://ndahauto-production.up.railway.app/api/reservations'
            : 'http://localhost:5000/api/reservations';

        try {
            const response = await fetch(backendURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowSuccessDialog(true);
                setFormData({
                    vehicle: '',
                    acPreference: '',
                    pickupLocation: '',
                    returnLocation: '',
                    pickupDate: '',
                    pickupTime: '',
                    returnDate: '',
                    driverNeeded: '',
                    phoneNumber: '',
                    additionalNotes: '',
                    agreed: false,
                });
            } else {
                const errorData = await response.json();
                alert('Failed to submit reservation: ' + errorData.error);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="reserve-form-section">
            <motion.div
                className="reserve-form-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="reserve-title-1">Reserve a Vehicle</h2>
                <form className="reserve-form" onSubmit={handleSubmit}>
                    <h2 className="reserve-title">Reserve a Vehicle</h2>

                    <div className="form-group">
                        <label>Choose Vehicle</label>
                        <select name="vehicle" value={formData.vehicle} onChange={handleChange} required>
                            <option value=""></option>
                            <option value="auris">Toyota Auris</option>
                            <option value="vanguard">Toyota Vanguard</option>
                            <option value="ML350">Mercedes ML350</option>
                            <option value="grandeur">Hyundai Grandeur</option>
                            <option value="honda-crv">Honda CR-V</option>
                            <option value="santaFe">Hyundai SantaFe</option>
                            <option value="not-specified">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>AC Preference</label>
                        <select name="acPreference" value={formData.acPreference} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="AC">AC</option>
                            <option value="Non-AC">Non-AC</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Pickup Location</label>
                        <input
                            type="text"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            placeholder="Enter pickup location"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Return Location</label>
                        <input
                            type="text"
                            name="returnLocation"
                            value={formData.returnLocation}
                            onChange={handleChange}
                            placeholder="Enter drop-off location"
                        />
                    </div>

                    <div className="form-group">
                        <label>Pickup Date</label>
                        <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Pickup Time</label>
                        <input
                            type="time"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Return Date</label>
                        <input
                            type="date"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Need a Driver?</label>
                        <select name="driverNeeded" value={formData.driverNeeded} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Your Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="e.g. +237678708403"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Additional Notes</label>
                        <textarea
                            name="additionalNotes"
                            className="textarea-reserve"
                            rows="3"
                            placeholder="Anything else we should know?"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleChange}
                                required
                            />{" "}
                            I’ve read the{" "}
                            <Link to="/requirements" className="link-no-underline">
                                requirements
                            </Link>{" "}
                            and confirm I’m eligible.
                        </label>
                    </div>

                    <button type="submit" className="reserve-form-submit-btn">
                        Submit Reservation
                    </button>
                </form>
            </motion.div>
            {showSuccessDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <p>Reservation submitted successfully. We'll contact you shortly.</p>
                        <button onClick={() => setShowSuccessDialog(false)}>Ok</button>
                    </div>
                </div>
            )}

        </section>

    );
}