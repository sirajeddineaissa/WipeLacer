import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext';

const soundContext = createContext();

export function useSound() {
    return useContext(soundContext);
}

export function SoundProvider({ children }) {

    const { findUserCollection, currentUser } = useAuth();
    const [soundStatus, setSoundStatus] = useState(true);
    const resetSoundStatus = async () => {
        if (!currentUser) {
            setSoundStatus(false)
            return;
        };
        const userData = await findUserCollection();
        setSoundStatus(userData.settings.find(data => data.name === "music").on);
    }

    useEffect(async () => {
        await resetSoundStatus();
    }, [currentUser])


    const value = {
        soundStatus,
        resetSoundStatus
    }
    return (
        <soundContext.Provider value={value}>
            {children}
        </soundContext.Provider>
    )
}
