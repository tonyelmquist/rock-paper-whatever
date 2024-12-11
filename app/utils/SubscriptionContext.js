import React, { createContext, useState, useEffect } from 'react';
import Purchases from 'react-native-purchases';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [isSubscriber, setIsSubscriber] = useState(false);

  useEffect(() => {
    const setupPurchases = async () => {
      try {
        Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
        await Purchases.configure({
          apiKey: "appl_dYUvwUUznvxJHamzbvwxKnOJMVU",
        });

        const customerInfo = await Purchases.getCustomerInfo();
        if (
          typeof customerInfo.activeSubscriptions.length > 0
        ) {
          setIsSubscriber(true);
        }

        console.log(customerInfo);
      } catch (e) {
        console.error('Error initializing RevenueCat:', e);
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
