import AnimatedTabBar from "@/components/bottomNav";
import { TabVisibilityProvider } from "@/contexts/bottomContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

function TabLayoutInner() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.surface }}
      edges={["top", "left", "right"]}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: wp("3.2%") },
        }}
        tabBar={(props) => <AnimatedTabBar {...props} />}
      >
        <Tabs.Screen
          name="a"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-today"
                color={color}
                size={wp("6.5%")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="b"
          options={{
            title: "Plan",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="dumbbell"
                color={color}
                size={wp("6.5%")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="c"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="compass-outline"
                color={color}
                size={wp("6.5%")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="d"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={wp("6.5%")}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

export default function TabLayout() {
  return (
    <TabVisibilityProvider>
      <TabLayoutInner />
    </TabVisibilityProvider>
  );
}
