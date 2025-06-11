import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addDays, format, isToday, startOfWeek } from "date-fns";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function UserCard() {
  const theme = useTheme();
  const [weekOffset, setWeekOffset] = useState(0);
  const baseDate = addDays(new Date(), weekOffset * 7);
  const weekStart = startOfWeek(baseDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.shadow,
        },
      ]}
    >
      <View style={styles.row}>
        <View>
          <Text style={[styles.greeting, { color: theme.colors.onSurface }]}>
            Welcome back,
          </Text>
          <Text style={[styles.name, { color: theme.colors.primary }]}>
            Alex Johnson
          </Text>
        </View>
        <View style={styles.rightIcons}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={wp("6.5%")}
            color={theme.colors.primary}
          />
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={wp("7.5%")}
            color={theme.colors.primary}
          />
        </View>
      </View>

      <View style={styles.weekNav}>
        <Pressable onPress={() => setWeekOffset(weekOffset - 1)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={wp("6%")}
            color={theme.colors.onSurface}
          />
        </Pressable>
        <View style={styles.weekStrip}>
          {weekDays.map((day, index) => {
            const selected = isToday(day);
            return (
              <View key={index} style={styles.dayContainer}>
                <Text
                  style={[
                    styles.dayLabel,
                    {
                      color: selected
                        ? theme.colors.primary
                        : theme.colors.onSurface,
                    },
                  ]}
                >
                  {format(day, "EEE")}
                </Text>
                <View
                  style={[
                    styles.dayBubble,
                    {
                      backgroundColor: selected
                        ? theme.colors.primary
                        : theme.colors.surfaceVariant,
                      shadowColor: theme.colors.shadow,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: selected
                        ? theme.colors.onPrimary
                        : theme.colors.onSurface,
                      fontWeight: "600",
                      fontSize: wp("3.8%"),
                    }}
                  >
                    {format(day, "d")}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <Pressable onPress={() => setWeekOffset(weekOffset + 1)}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={wp("6%")}
            color={theme.colors.onSurface}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: wp("4%"),
    marginBottom: wp("2%"),
    gap: wp("3%"),
    borderBottomLeftRadius: wp("4%"),
    borderBottomRightRadius: wp("4%"),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  greeting: {
    fontSize: wp("3.6%"),
    fontWeight: "400",
  },
  name: {
    fontSize: wp("5%"),
    fontWeight: "700",
    marginTop: wp("0.5%"),
  },
  rightIcons: {
    flexDirection: "row",
    gap: wp("3%"),
  },
  weekNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
  },
  weekStrip: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: wp("1%"),
  },
  dayLabel: {
    fontSize: wp("3.4%"),
    fontWeight: "600",
  },
  dayBubble: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("5%"),
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
});
