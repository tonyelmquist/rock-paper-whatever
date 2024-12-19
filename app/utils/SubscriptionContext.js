import React, { createContext, useState, useEffect } from "react";
import Purchases from "react-native-purchases";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [isSubscriber, setIsSubscriber] = useState(false);

  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  
  useEffect(() => {
    const setupPurchases = async () => {
      try {
        Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
        await Purchases.configure({
          apiKey: apiKey,
        });

        
        const products = await Purchases.getProducts([
      
        ]);

        console.log("products", products);

        const customerInfo = await Purchases.getCustomerInfo();

        console.log("customerInfo", customerInfo);
        if (customerInfo.activeSubscriptions.length > 0) {
          setIsSubscriber(true);
        }
      } catch (e) {
        console.error("Error initializing RevenueCat:", e);
      }
    };

    setupPurchases();
  }, []);

  return (
    <SubscriptionContext.Provider value={{ isSubscriber: isSubscriber }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionContext;
