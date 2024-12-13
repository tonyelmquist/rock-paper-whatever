import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AIUsageContext = createContext();

export const AIUsageProvider = ({ children }) => {
    const [usageCounts, setUsageCounts] = useState({});

    // Load saved counts when the app starts
    useEffect(() => {
        loadUsageCounts();
    }, []);

    // Load counts from AsyncStorage
    const loadUsageCounts = async () => {
        try {
            const savedCounts = await AsyncStorage.getItem('aiUsageCounts');
            if (savedCounts) {
                setUsageCounts(JSON.parse(savedCounts));
            }
        } catch (error) {
            console.error('Failed to load usage counts:', error);
        }
    };

    // Save counts to AsyncStorage
    const saveUsageCounts = async (newCounts) => {
        try {
            await AsyncStorage.setItem('aiUsageCounts', JSON.stringify(newCounts));
        } catch (error) {
            console.error('Failed to save usage counts:', error);
        }
    };

    // Increment the usage count for a specific feature
    const incrementUsage = async (featureKey) => {
        const newCounts = {
            ...usageCounts,
            [featureKey]: (usageCounts[featureKey] || 0) + 1
        };
        setUsageCounts(newCounts);
        await saveUsageCounts(newCounts);
        return newCounts[featureKey];
    };

    // Get the current count for a specific feature
    const getUsageCount = (featureKey) => {
        return usageCounts[featureKey] || 0;
    };

    // Reset count for a specific feature
    const resetUsage = async (featureKey) => {
        const newCounts = {
            ...usageCounts,
            [featureKey]: 0
        };
        setUsageCounts(newCounts);
        await saveUsageCounts(newCounts);
    };

    return (
        <AIUsageContext.Provider value={{
            incrementUsage,
            getUsageCount,
            resetUsage,
            usageCounts
        }}>
            {children}
        </AIUsageContext.Provider>
    );
};

// Custom hook to use the AIUsage context
export const useAIUsage = () => {
    const context = useContext(AIUsageContext);
    if (!context) {
        throw new Error('useAIUsage must be used within an AIUsageProvider');
    }
    return context;
};

export default AIUsageContext; 