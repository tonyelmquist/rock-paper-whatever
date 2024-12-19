import React, { createContext, useState, useEffect } from "react";
import Purchases from "react-native-purchases";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [isSubscriber, setIsSubscriber] = useState(false);

  useEffect(() => {
    const setupPurchases = async () => {
      try {
        Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
        await Purchases.configure({
          apiKey: process.env.REVENUECAT_API_KEY,
        });

        // Initial check for subscription status
        const customerInfo = await Purchases.getCustomerInfo();
        updateSubscriptionStatus(customerInfo);

        // Add listener for subscription updates
        const customerInfoUpdateListener = Purchases.addCustomerInfoUpdateListener((customerInfo) => {
          updateSubscriptionStatus(customerInfo);
        });

        // Clean up the listener on unmount
        return () => {
          customerInfoUpdateListener.remove();
        };
      } catch (e) {
        console.error("Error initializing RevenueCat:", e);
      }
    };

    setupPurchases();
  }, []);

  const updateSubscriptionStatus = (customerInfo) => {
    if (customerInfo.activeSubscriptions.length > 0) {
      setIsSubscriber(true);
    } else {
      setIsSubscriber(false);
    }
  };

  return (
    <SubscriptionContext.Provider value={{ isSubscriber }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionContext;
