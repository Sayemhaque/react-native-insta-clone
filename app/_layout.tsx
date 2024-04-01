import { Stack, useRouter } from "expo-router";
import { Slot, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

type LoginContextValue = {
  signedIn: boolean;
  login: () => void;
};

export const LOGIN_CONTEXT = createContext<LoginContextValue>({
  signedIn: false,
  login: () => {},
});

export const InitLayout = () => {
  const segments = useSegments();
  const router = useRouter();
  const { signedIn } = useContext(LOGIN_CONTEXT);

  const inTabsGroup = segments[0] === "(authenticated)";

  useEffect(() => {
    if (signedIn && !inTabsGroup) {
      router.replace("/home");
    } else if (!signedIn) {
      router.replace("/login");
    }
  }, [segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default function RootLayoutNav() {
  const [signedIn, setSignIn] = useState(false);

  const login = () => {
    setSignIn(true);
  };

  return (
    <LOGIN_CONTEXT.Provider value={{ login, signedIn }}>
      <InitLayout />
    </LOGIN_CONTEXT.Provider>
  );
}
